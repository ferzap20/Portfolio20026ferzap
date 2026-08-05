# Deploy Umami Analytics — Step by Step

Self-hosted, cookieless analytics for **ferzapata.fr**, running on KiwiServer via Coolify.
Tailored to this server's actual routing (Cloudflare → Tunnel → NPM → Coolify Traefik `:8880`).
Cross-reference: `../../home_server_summary.md` §13 (Coolify deploy) and §8 (RAM).

---

## Decisions (settled before you start)

| Choice | Value | Why |
|---|---|---|
| Subdomain | `analytics.ferzapata.fr` | Public-reachable (visitors' browsers must fetch the tracking script), no Authelia — Umami has its own login. |
| Install method | Coolify one-click **Umami** service | Ships Umami + Postgres wired together. No compose editing. |
| RAM cap | 512 MB (app) + 256 MB (Postgres) | Server has ~12 GB usable, Ollama owns 6 GB. Keep Umami small. |
| Consent banner | None needed | Umami is cookieless/anonymous — no CNIL cookie-banner obligation. |

> **Why a subdomain and not Authelia-gated:** the tracking script (`/script.js`) is loaded by
> every visitor's browser, so the host must be publicly reachable. The dashboard on the same
> host is protected by Umami's own username/password login — that's enough.

---

## Part A — Server side (you do this, ~15 min)

### 1. Cloudflare DNS
Dashboard → `ferzapata.fr` zone → DNS → **Add record**:
- Type: **CNAME**
- Name: `analytics`
- Target: `<your-tunnel-UUID>.cfargotunnel.com` (same tunnel UUID your other sites use)
- Proxy status: **Proxied** (orange cloud)

> Free plan can't do wildcard tunnel hostnames — this per-subdomain record is required (§13 rule 8).

### 2. Cloudflare Tunnel — public hostname
Zero Trust → Networks → Tunnels → your tunnel → **Public Hostnames** → Add:
- Subdomain: `analytics`
- Domain: `ferzapata.fr`
- Service type: **HTTP**
- URL: `npm:80`

### 3. Cloudflare SSL/TLS
Confirm the zone is set to **Full** (not Flexible) — Flexible causes redirect loops with Traefik.

### 4. NPM — new proxy host
Nginx Proxy Manager → Proxy Hosts → **Add Proxy Host**:
- Domain Names: `analytics.ferzapata.fr`
- Scheme: **http**
- Forward Hostname: `192.168.1.179`
- Forward Port: **8880** (Coolify Traefik)
- SSL tab: wildcard cert via DNS-01 Cloudflare challenge; **Force SSL: OFF**
- Advanced tab: **empty** (no Authelia)

### 5. Coolify — deploy Umami
Coolify → your project → **+ New** → **Service** → search **Umami** → select it.
- Set the **domain** to `http://analytics.ferzapata.fr` (HTTP, not HTTPS — NPM handles TLS).
- Under the service's resource limits, cap memory: Umami app **512M**, Postgres **256M**.
- Leave the auto-generated Postgres credentials as-is.
- **Deploy.** First build pulls the image + runs DB migrations (~2–3 min).

### 6. First login
Open `https://analytics.ferzapata.fr` → log in with Umami defaults:
- Username: `admin`  Password: `umami`
- **Immediately change the password** (Settings → Profile).

### 7. Add the website + grab two values
Settings → **Websites** → **Add website**:
- Name: `ferzapata.fr`
- Domain: `ferzapata.fr`

Then open that website → **Edit** → the **Tracking code** tab. Copy these two things and send them to me:
1. **Script URL** — e.g. `https://analytics.ferzapata.fr/script.js`
2. **Website ID** — the `data-website-id` UUID

---

## Part B — Site side (I do this once you send the two values)

I'll add to the portfolio:
1. The Umami `<script>` (deferred, `data-website-id`) in `index.html`.
2. `data-umami-event` attributes on the conversion points:
   - `cv-download` — both nav Download CV buttons (desktop + mobile)
   - `contact-email-click` — the mailto link in the footer
   - `email-copy` — the copy-email button
   - `linkedin-click` — the footer LinkedIn link

SPA route changes are tracked automatically — Umami hooks `history.pushState`, so each
case-study view registers without extra code.

Then: commit, and it goes live on the next Coolify redeploy.

---

## Part C — Verify (after deploy)

1. Open `ferzapata.fr` in a normal browser tab (not localhost).
2. In Umami → **Realtime** — your visit should appear within a few seconds.
3. Click **Download CV** → confirm a `cv-download` event shows under the website's **Events**.
4. If nothing appears: check the browser console for the script 404'ing (DNS/tunnel/NPM step),
   and confirm the `data-website-id` matches.

---

## The report that matters for the job hunt

Once data flows, the view to watch: **Referrers** filtered to `linkedin.com` → which **case
studies** those visitors opened → whether they fired `cv-download` or `contact-email-click`.
That tells you which case study to lead with and whether recruiters actually convert.

---

## RAM note

After deploy, SSH in and run `free -h`. Umami + Postgres should add ~300–400 MB. If the server
gets tight at night (Immich ML runs 2–7 AM, §8), the 512M/256M caps keep Umami from being the
thing that tips it over. No cron scheduling needed — Umami is idle-cheap.
