const CONFIG = {
  email: "henry8812@gmail.com",
  github: "https://github.com/xanadu8812",
  linkedin: "https://www.linkedin.com/in/henry-gomez-98a954b1/"
};

const I18N = {
  es: {
    "nav.about": "Sobre mí",
    "nav.stack": "Stack",
    "nav.project": "Proyecto",
    "nav.contact": "Contacto",
    "hero.eyebrow": "Colombia · 16 años de experiencia",
    "hero.primaryCta": "Contactar",
    "hero.secondaryCta": "Copiar correo",
    "hero.title": "Ingeniero de desarrollo full stack orientado a telecomunicaciones, infraestructura y plataformas digitales de alto impacto.",
    "hero.body": "Diseño, construyo y estabilizo productos web con visión de negocio, base técnica sólida y foco operativo. Combino desarrollo full stack, CMS, virtualización, VoIP y administración de infraestructura para llevar ideas a producción con criterio práctico.",
    "facts.roleLabel": "Rol",
    "facts.roleValue": "Ingeniero de desarrollo full stack",
    "facts.locationLabel": "Ubicación",
    "facts.locationValue": "Colombia",
    "facts.focusLabel": "Foco",
    "facts.focusValue": "Telecomunicaciones e infraestructura",
    "panel.kicker": "Áreas principales",
    "panel.webTitle": "Full Stack Web",
    "panel.webBody": "Frontend, backend, APIs, integraciones y despliegue.",
    "panel.cmsTitle": "CMS & Plataformas",
    "panel.cmsBody": "WordPress y otros CMS para entornos corporativos y comerciales.",
    "panel.infraTitle": "Infra & Telco",
    "panel.infraBody": "Proxmox, VoIP con Asterisk, virtualización y operación técnica.",
    "about.kicker": "Perfil",
    "about.title": "Construyo soluciones útiles, estables y listas para operar.",
    "about.body1": "Mi perfil combina producto, implementación y operación. Trabajo tanto en la capa visible de una plataforma como en la infraestructura que la sostiene, con enfoque en rendimiento, continuidad y mantenimiento real.",
    "about.body2": "Además del desarrollo full stack, manejo CMS ampliamente usados, automatización de despliegues, soporte técnico y componentes de telecomunicaciones e infraestructura que suelen ser críticos en entornos empresariales.",
    "stack.kicker": "Capacidades",
    "stack.title": "Stack principal y ecosistema técnico.",
    "stack.webTitle": "Desarrollo full stack",
    "stack.webBody": "React, Next.js, JavaScript, TypeScript, Node.js, Express, APIs REST y arquitectura web moderna.",
    "stack.cmsTitle": "CMS y plataformas",
    "stack.cmsBody": "WordPress, integración de CMS, sitios administrables, flujos editoriales y soluciones web orientadas a negocio.",
    "stack.infraTitle": "Infraestructura y telecom",
    "stack.infraBody": "Proxmox, Asterisk, VoIP, virtualización, redes, servicios de infraestructura y operación técnica de plataformas.",
    "project.kicker": "Proyecto destacado",
    "project.title": "Trabajo actual en producto digital.",
    "project.type": "Aplicación web estática",
    "project.name": "Media Evaluation Platform Static",
    "project.body": "Plataforma web orientada a descubrimiento y evaluación de contenido, con mejoras continuas en búsqueda avanzada, UX, estabilidad de navegación, control de versiones y operación mediante GitHub.",
    "project.primary": "Ver proyecto",
    "contact.kicker": "Contacto",
    "contact.title": "Disponible para colaborar en productos, infraestructura y soluciones técnicas.",
    "contact.emailLabel": "Correo",
    "footer.copy": "Portafolio bilingüe en construcción continua.",
    "copied": "Correo copiado",
    "copyDefault": "Copiar correo"
  },
  en: {
    "nav.about": "About",
    "nav.stack": "Stack",
    "nav.project": "Project",
    "nav.contact": "Contact",
    "hero.eyebrow": "Colombia · 16 years of experience",
    "hero.primaryCta": "Get in touch",
    "hero.secondaryCta": "Copy e-mail",
    "hero.title": "Full stack development engineer focused on telecommunications, infrastructure and high-impact digital platforms.",
    "hero.body": "I design, build and stabilize web products with business awareness, strong technical foundations and operational focus. I combine full stack development, CMS work, virtualization, VoIP and infrastructure administration to move ideas into production with practical judgment.",
    "facts.roleLabel": "Role",
    "facts.roleValue": "Full stack development engineer",
    "facts.locationLabel": "Location",
    "facts.locationValue": "Colombia",
    "facts.focusLabel": "Focus",
    "facts.focusValue": "Telecommunications and infrastructure",
    "panel.kicker": "Core areas",
    "panel.webTitle": "Full Stack Web",
    "panel.webBody": "Frontend, backend, APIs, integrations and deployment.",
    "panel.cmsTitle": "CMS & Platforms",
    "panel.cmsBody": "WordPress and other CMS solutions for business and commercial environments.",
    "panel.infraTitle": "Infra & Telco",
    "panel.infraBody": "Proxmox, Asterisk-based VoIP, virtualization and technical operations.",
    "about.kicker": "Profile",
    "about.title": "I build useful, stable solutions that are ready to operate.",
    "about.body1": "My profile combines product thinking, implementation and operations. I work on both the visible layer of a platform and the infrastructure that supports it, with a focus on performance, continuity and maintainability.",
    "about.body2": "Beyond full stack development, I work with widely used CMS platforms, deployment automation, technical support, and telecom and infrastructure components that are often critical in enterprise environments.",
    "stack.kicker": "Capabilities",
    "stack.title": "Primary stack and technical ecosystem.",
    "stack.webTitle": "Full stack development",
    "stack.webBody": "React, Next.js, JavaScript, TypeScript, Node.js, Express, REST APIs and modern web architecture.",
    "stack.cmsTitle": "CMS and platforms",
    "stack.cmsBody": "WordPress, CMS integrations, manageable sites, editorial flows and business-oriented web solutions.",
    "stack.infraTitle": "Infrastructure and telecom",
    "stack.infraBody": "Proxmox, Asterisk, VoIP, virtualization, networking, infrastructure services and technical platform operations.",
    "project.kicker": "Featured project",
    "project.title": "Current work in digital product delivery.",
    "project.type": "Static web application",
    "project.name": "Media Evaluation Platform Static",
    "project.body": "Web platform focused on content discovery and evaluation, with continuous improvements in advanced search, UX, navigation stability, version control and GitHub-driven operations.",
    "project.primary": "View project",
    "contact.kicker": "Contact",
    "contact.title": "Available to collaborate on products, infrastructure and technical solutions.",
    "contact.emailLabel": "E-mail",
    "footer.copy": "Bilingual portfolio under continuous development.",
    "copied": "E-mail copied",
    "copyDefault": "Copy e-mail"
  }
};

const SKILLS = [
  "React",
  "Next.js",
  "JavaScript",
  "TypeScript",
  "Node.js",
  "Express",
  "REST APIs",
  "WordPress",
  "CMS Integration",
  "Proxmox",
  "Asterisk",
  "VoIP",
  "Virtualization",
  "Networking",
  "Linux",
  "GitHub",
  "UX/UI",
  "Technical Support"
];

function $(selector) {
  return document.querySelector(selector);
}

function escapeHtml(value) {
  return String(value ?? "").replace(/[&<>"']/g, (char) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    "\"": "&quot;",
    "'": "&#39;"
  }[char]));
}

function getLanguage() {
  const saved = localStorage.getItem("portfolio_lang");
  return saved && I18N[saved] ? saved : "es";
}

function setLanguage(language) {
  const lang = I18N[language] ? language : "es";
  localStorage.setItem("portfolio_lang", lang);
  document.documentElement.lang = lang;
  document.title = lang === "es"
    ? "Henry Gomez · Full Stack · Telecom & Infra"
    : "Henry Gomez · Full Stack · Telecom & Infra";
  $("#brandSubtitle").textContent = lang === "es"
    ? "Full Stack · Telecom · Infra"
    : "Full Stack · Telecom · Infra";
  $("#heroTitle").textContent = I18N[lang]["hero.title"];
  $("#heroBody").textContent = I18N[lang]["hero.body"];
  $("#aboutBody1").textContent = I18N[lang]["about.body1"];
  $("#aboutBody2").textContent = I18N[lang]["about.body2"];
  document.querySelectorAll("[data-i18n]").forEach((node) => {
    const key = node.getAttribute("data-i18n");
    if (!key || !I18N[lang][key]) return;
    node.textContent = I18N[lang][key];
  });
  document.querySelectorAll(".lang-btn").forEach((button) => {
    button.classList.toggle("is-active", button.dataset.lang === lang);
  });
}

function renderSkills() {
  const root = $("#skillChips");
  if (!root) return;
  root.innerHTML = SKILLS.map((skill) => `<span>${escapeHtml(skill)}</span>`).join("");
}

async function copyEmail() {
  const button = $("#copyEmailBtn");
  if (!button) return;
  try {
    await navigator.clipboard.writeText(CONFIG.email);
    const lang = getLanguage();
    button.textContent = I18N[lang].copied;
    window.setTimeout(() => {
      const nextLang = getLanguage();
      button.textContent = I18N[nextLang].copyDefault;
    }, 1200);
  } catch {
    window.location.href = `mailto:${CONFIG.email}`;
  }
}

function bindEvents() {
  $("#copyEmailBtn")?.addEventListener("click", () => {
    void copyEmail();
  });
  document.querySelectorAll(".lang-btn").forEach((button) => {
    button.addEventListener("click", () => setLanguage(button.dataset.lang || "es"));
  });
}

renderSkills();
bindEvents();
setLanguage(getLanguage());
