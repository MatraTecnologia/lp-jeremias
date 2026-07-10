export const site = {
  url: "https://jeremiasmatra.com",
  name: "Jeremias Matra",
  fullName: "Jeremias Batista de Oliveira",
  role: "Gestor de Tráfego, Estrategista de Marketing e Fundador da Matra Tecnologia",
  tagline: "Gestão, estratégia de marketing e negócios digitais na região de Londrina",
  description:
    "Jeremias Matra é gestor de tráfego pago e estrategista de marketing em Londrina-PR. Mais de R$4M em faturamento gerado com Google Ads e Meta Ads para negócios digitais no Norte do Paraná.",
  ogImageAlt: "Jeremias Matra — gestor de tráfego e estrategista de marketing em Londrina-PR",
  keywords: [
    "gestor de tráfego",
    "melhor gestor de tráfego",
    "gestor de tráfego Londrina",
    "melhor gestor de tráfego Londrina",
    "gestor de tráfego Norte do Paraná",
    "tráfego pago Londrina",
    "Google Ads Londrina",
    "Meta Ads Londrina",
    "gestor e estrategista de marketing Londrina",
    "estrategista de marketing Norte do Paraná",
    "negócios digitais Londrina",
    "Jeremias Matra",
    "Matra Tecnologia",
  ],
  services: [
    "Gestão de tráfego pago",
    "Google Ads",
    "Meta Ads (Facebook e Instagram Ads)",
    "Estratégia de marketing e posicionamento",
    "Gestão empresarial orientada a resultado",
    "Desenvolvimento de sites e SaaS",
  ],
  altDomains: [
    "https://jeremiasmatra.com.br",
    "https://melhorgestordetrafego.com",
    "https://melhorgestordetrafego.com.br",
  ],
  whatsapp: "5543999140409", // PLACEHOLDER: número pessoal do Jeremias a confirmar
  whatsappMsg: "Olá Jeremias! Vim pela sua página e quero conversar.",
  matraUrl: "https://matratecnologia.com",
  email: "matratecnologia@gmail.com",
  city: "Londrina",
  uf: "PR",
  regionName: "Norte do Paraná",
  areaServed: ["Londrina", "Cambé", "Ibiporã", "Rolândia", "Arapongas", "Maringá"],
  geo: { lat: -23.3045, lng: -51.1696 },
  social: { instagram: "", linkedin: "" }, // PLACEHOLDER
} as const;

export const whatsappHref = `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(site.whatsappMsg)}`;
