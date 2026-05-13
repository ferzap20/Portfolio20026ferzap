import { useEffect } from "react";
import { Link } from "react-router";
import { motion } from "motion/react";

export interface BreadcrumbItem {
  label: string;
  to?: string; // if omitted, item is the current page (not a link)
}

function useBreadcrumbJsonLd(items: BreadcrumbItem[]) {
  useEffect(() => {
    const origin = typeof window !== "undefined" ? window.location.origin : "https://ferzapata.fr";
    const schema = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: items.map((item, i) => ({
        "@type": "ListItem",
        position: i + 1,
        name: item.label,
        ...(item.to ? { item: `${origin}${item.to}` } : {}),
      })),
    };
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.textContent = JSON.stringify(schema);
    document.head.appendChild(script);
    return () => {
      document.head.removeChild(script);
    };
  }, [items]);
}

export function Breadcrumb({ items }: { items: BreadcrumbItem[] }) {
  useBreadcrumbJsonLd(items);

  return (
    <motion.nav
      aria-label="Breadcrumb"
      initial={{ opacity: 0, x: -10 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.3 }}
      className="mb-6"
    >
      <ol className="flex flex-wrap items-center gap-2 font-['Roboto_Slab',serif] text-[13px]">
        {items.map((item, i) => {
          const isLast = i === items.length - 1;
          return (
            <li key={item.label} className="flex items-center gap-2">
              {item.to && !isLast ? (
                <Link
                  to={item.to}
                  className="text-[#0BBA3F] hover:text-[#0a9931] transition-colors"
                >
                  {item.label}
                </Link>
              ) : (
                <span className="text-[#0BBA3F]" aria-current={isLast ? "page" : undefined}>
                  {item.label}
                </span>
              )}
              {!isLast && <span className="text-[#0BBA3F]" aria-hidden="true">/</span>}
            </li>
          );
        })}
      </ol>
    </motion.nav>
  );
}
