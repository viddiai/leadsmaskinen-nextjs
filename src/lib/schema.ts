import { SITE, FAQ_ITEMS } from "./constants";

export function getOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE.name,
    url: SITE.url,
    description: SITE.description,
    founder: {
      "@type": "Person",
      name: SITE.founder,
    },
    contactPoint: {
      "@type": "ContactPoint",
      email: SITE.email,
      contactType: "sales",
      availableLanguage: "Swedish",
    },
  };
}

export function getServiceSchema() {
  return [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: "Portal (Premium)",
      description:
        "Komplett nischportal med 5+ konverteringspunkter, ICP Persona Workshop, cold email & LinkedIn-outreach, och marketing automation.",
      provider: { "@type": "Organization", name: SITE.name },
      offers: {
        "@type": "Offer",
        price: "25000",
        priceCurrency: "SEK",
        description: "Engångsavgift + pay-per-lead",
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: "Landningssida (Standard)",
      description:
        "Fokuserad landningssida med ICP Persona Workshop, cold email & LinkedIn-outreach, och marketing automation.",
      provider: { "@type": "Organization", name: SITE.name },
      offers: {
        "@type": "Offer",
        price: "9900",
        priceCurrency: "SEK",
        description: "Engångsavgift + pay-per-lead eller abonnemang",
      },
    },
  ];
}

export function getFaqSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQ_ITEMS.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}
