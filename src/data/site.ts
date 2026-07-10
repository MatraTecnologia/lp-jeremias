export const site = {
  url: "https://jeremiasmatra.com",
  name: "Jeremias Matra",
  fullName: "Jeremias Batista de Oliveira",
  role: "Gestor e Estrategista de Marketing",
  tagline: "Gestão, estratégia de marketing e negócios digitais na região de Londrina",
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
