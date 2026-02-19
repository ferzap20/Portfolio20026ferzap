import { useState } from "react";
import { motion } from "motion/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faLocationDot, faCopy, faCheck } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router";
import { NAV_ITEMS } from "../constants";

export function ContactSection() {
  const [copied, setCopied] = useState(false);
  const email = "fernandozapata@protonmail.com";

  const handleCopyEmail = () => {
    const textArea = document.createElement("textarea");
    textArea.value = email;
    textArea.style.position = "fixed";
    textArea.style.left = "-9999px";
    document.body.appendChild(textArea);
    textArea.select();
    try {
      document.execCommand("copy");
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Copy failed", err);
    }
    document.body.removeChild(textArea);
  };

  return (
    <section
      id="contact"
      className="bg-[#323435] py-16 md:py-20 scroll-mt-24"
    >
      <div className="max-w-[1100px] mx-auto px-5 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="font-['Kdam_Thmor_Pro',sans-serif] text-[#0BBA3F] text-[32px] md:text-[40px] tracking-[2px] mb-8">
            Let's talk
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <a
                  href={`mailto:${email}`}
                  className="flex items-center gap-3 text-white/70 hover:text-[#0BBA3F] transition-colors group"
                >
                  <FontAwesomeIcon
                    icon={faEnvelope}
                    style={{ fontSize: 18 }}
                    className="text-[#0BBA3F] group-hover:scale-110 transition-transform"
                  />
                  <span className="font-['Roboto_Slab',serif] text-[14px]">
                    {email}
                  </span>
                </a>
                <button
                  onClick={handleCopyEmail}
                  className="text-white/40 hover:text-[#0BBA3F] transition-colors cursor-pointer"
                  title="Copy email"
                >
                  {copied ? <FontAwesomeIcon icon={faCheck} style={{ fontSize: 16 }} /> : <FontAwesomeIcon icon={faCopy} style={{ fontSize: 16 }} />}
                </button>
              </div>
              <div className="flex items-center gap-3 text-white/70">
                <FontAwesomeIcon icon={faLocationDot} style={{ fontSize: 18 }} className="text-[#0BBA3F]" />
                <span className="font-['Roboto_Slab',serif] text-[14px]">
                  Les Lilas - 93260
                </span>
              </div>
              <a
                href="https://linkedin.com/in/ferzapata"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-white/70 hover:text-[#0BBA3F] transition-colors group"
              >
                <FontAwesomeIcon
                  icon={faLinkedin}
                  style={{ fontSize: 18 }}
                  className="text-[#0BBA3F] group-hover:scale-110 transition-transform"
                />
                <span className="font-['Roboto_Slab',serif] text-[14px]">
                  /ferzapata
                </span>
              </a>
            </div>

            <div>
              <p className="font-['Roboto_Slab',serif] text-white/50 text-[14px] leading-relaxed text-right">
                I don’t design screens. I design understanding.
              </p>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="font-['Roboto_Slab',serif] text-white/30 text-[12px]">
              Fernando Zapata — Portfolio 2026
            </p>
            <div className="flex flex-wrap gap-4">
              {NAV_ITEMS.map((item) => (
                <Link
                  key={item.id}
                  to={item.path}
                  className="font-['Roboto_Slab',serif] text-white/30 hover:text-[#0BBA3F] text-[11px] transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}