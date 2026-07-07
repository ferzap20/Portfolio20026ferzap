import { useEffect } from "react";

interface PersonSchema {
  "@context": string;
  "@type": string;
  name: string;
  url: string;
  image?: string;
  jobTitle: string;
  description: string;
  address: {
    "@type": string;
    addressLocality: string;
    addressCountry: string;
  };
  email: string;
  sameAs: string[];
  knowsLanguage: string[];
  knowsAbout: string[];
  worksFor: {
    "@type": string;
    name: string;
  };
}

interface CreativeWorkSchema {
  "@context": string;
  "@type": string;
  name: string;
  url: string;
  description: string;
  creator: {
    "@type": string;
    name: string;
    url: string;
  };
  datePublished?: string;
  keywords: string[];
  image?: string;
}

export function useJsonLd(schema: PersonSchema | CreativeWorkSchema) {
  useEffect(() => {
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.textContent = JSON.stringify(schema);
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, [schema]);
}

export function PersonJsonLd() {
  const personSchema: PersonSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Fernando Zapata",
    url: "https://ferzapata.fr",
    image: "https://ferzapata.fr/portrait-color.png",
    jobTitle: "Product Lead & Product Designer",
    description:
      "Product Lead with 10 years in SaaS. I turn strategy into shipped product — owning roadmaps, release cycles, and design from concept to launch. Open to full-time Product roles in Paris or remote.",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Paris",
      addressCountry: "FR",
    },
    email: "mailto:fernandozapata@protonmail.com",
    sameAs: ["https://www.linkedin.com/in/ferzapata/"],
    knowsLanguage: ["fr", "en", "es"],
    knowsAbout: [
      "Product Design",
      "Design Systems",
      "UX Research",
      "VR/Spatial Design",
      "Cross-functional Leadership",
      "Information Architecture",
      "Figma",
      "Design Ops",
    ],
    worksFor: {
      "@type": "Organization",
      name: "Independent",
    },
  };

  useJsonLd(personSchema);
  return null;
}

export function CreativeWorkJsonLd({
  name,
  description,
  datePublished,
  keywords,
  slug,
}: {
  name: string;
  description: string;
  datePublished?: string;
  keywords: string[];
  slug: string;
}) {
  const workSchema: CreativeWorkSchema = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name,
    url: `https://ferzapata.fr/${slug}`,
    description,
    creator: {
      "@type": "Person",
      name: "Fernando Zapata",
      url: "https://ferzapata.fr",
    },
    datePublished,
    keywords,
  };

  useJsonLd(workSchema);
  return null;
}
