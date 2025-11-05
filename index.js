


// CAMBIO DE IDIOMA
const translations = {
es: {
nav_inicio: "Inicio",
nav_sobre_mi: "Sobre Mí",
nav_proyectos: "Proyectos",
nav_habilidades: "Habilidades",
nav_contacto: "Contacto",
about_role: "DESARROLLADOR WEB FULL STACK",
about_desc:
"Soy desarrollador Full Stack apasionado por desarrollar aplicaciones web funcionales y atractivas. Disfruto fusionar el diseño con la tecnología para crear sitios y aplicaciones web interactivas.",
sobre_mi_title: "SOBRE MÍ",
sobre_mi_p1:
"Graduado en Escuela Da Vinci como Técnico Superior en Programación y Diseño Web, me especializo en el desarrollo frontend y backend, integrando diseño y funcionalidad para crear sitios web y aplicaciones modernas y eficientes.",
sobre_mi_p2:
"Me gusta crear proyectos que se vean bien y funcionen aún mejor. Trato de que mis trabajos sean visualmente atractivos, fáciles de usar y con un buen rendimiento. Creo que la clave está en encontrar el equilibrio entre lo técnico y lo creativo, para lograr experiencias que realmente tengan un fuerte impacto y sean de gran utilidad.",
contactame_btn: "Contactame",
proyectos_title: "PROYECTOS",
hecho_con: "Hecho con:",
ver_codigo: "Ver código",
visitar_pagina: "Visitar página",
proyecto1_desc:
"<strong>Gondoleando</strong> es un comparador de precios de supermercados que permite armar listas de compras, compartirlas y localizar sucursales cercanas dentro de CABA.",
proyecto2_desc:
"<strong>Lectorium</strong> es una red social de libros, allí podrás publicar libros, agregarlos a favoritos, comentar publicaciones de los otros usuarios y conocer los próximos eventos de la comunidad.",
proyecto3_desc:
"<strong>Luminex</strong> es un buscador de películas con información proveniente de IMDb. Permite conocer películas populares, agregar favoritas, filtrar por género y leer descripciones.",
proyecto4_desc:
"<strong>Tiki Tiki</strong> es un ecommerce de camisetas, shorts y buzos de fútbol argentino e internacional. Permite agregar productos al carrito de compras y separarlos por categoría.",
habilidades_title: "HABILIDADES",
tab_todas: "Todas",
tab_frontend: "Frontend",
tab_backend: "Backend",
tab_diseno: "Diseño",
tab_database: "Database",
tab_otros: "Otros",
contacto_title: "CONTACTO",
footer_text: "Desarrollado por Bruno Surijón",
},
en: {
nav_inicio: "Home",
nav_sobre_mi: "About Me",
nav_proyectos: "Projects",
nav_habilidades: "Skills",
nav_contacto: "Contact",
about_role: "FULL STACK WEB DEVELOPER",
about_desc:
"I am a Full Stack developer passionate about building functional and attractive web applications. I enjoy merging design with technology to create interactive sites and web applications.",
sobre_mi_title: "ABOUT ME",
sobre_mi_p1:
"Graduated from Escuela Da Vinci as a Higher Technician in Web Design and Programming, I specialize in both frontend and backend development, integrating design and functionality to create modern and efficient websites and applications.",
sobre_mi_p2:
"I enjoy creating projects that look great and work even better. I try to make my work visually appealing, easy to use, and high-performing. I believe the key lies in balancing technical and creative aspects to build experiences that truly have an impact and are genuinely useful.",
contactame_btn: "Contact Me",
proyectos_title: "PROJECTS",
hecho_con: "Built with:",
ver_codigo: "View code",
visitar_pagina: "Visit site",
proyecto1_desc:
"<strong>Gondoleando</strong> is a supermarket price comparison app that allows you to create market lists, share them, and locate nearby stores in the city of Buenos Aires.",
proyecto2_desc:
"<strong>Lectorium</strong> is a social network for books, where you can publish books, add them to your favorites, comment on other users’ posts, and discover upcoming community events.",
proyecto3_desc:
"<strong>Luminex</strong> is a movie search app that provides information sourced from IMDb. It allows users to explore popular movies, add favorites, filter by genre, and read descriptions.",
proyecto4_desc:
"<strong>Tiki Tiki</strong> is an ecommerce for shirts, shorts, and hoodies from Argentine and international football teams. It allows adding products to the cart and sorting by category.",
habilidades_title: "SKILLS",
tab_todas: "All",
tab_frontend: "Frontend",
tab_backend: "Backend",
tab_diseno: "Design",
tab_database: "Database",
tab_otros: "Others",
contacto_title: "CONTACT",
footer_text: "Developed by Bruno Surijón",
},
};

function setLanguage(lang) {
  document.querySelectorAll("[data-lang]").forEach((el) => {
  const key = el.getAttribute("data-lang");
  if (translations[lang] && translations[lang][key]) {
  el.innerHTML = translations[lang][key];
  }
  });
  localStorage.setItem("lang", lang);
  document.querySelectorAll(".lang-flag").forEach(flag => {
  flag.classList.toggle("active", flag.dataset.langBtn === lang);
  });
  }

  window.addEventListener("DOMContentLoaded", () => {
  const savedLang = localStorage.getItem("lang") || "es";
  setLanguage(savedLang);
  document.querySelectorAll("[data-lang-btn]").forEach(btn => {
  btn.addEventListener("click", () => setLanguage(btn.dataset.langBtn));
  });
});



// MENU DESPLEGABLE 
const menuToggle = document.querySelector('.menu-toggle');
const navMenuLangs = document.querySelector('.navbar-menu-langs');
menuToggle.addEventListener('click', () => {
menuToggle.classList.toggle('active');
navMenuLangs.classList.toggle('active');
});
document.querySelectorAll('.navbar-menu a').forEach(link => {
link.addEventListener('click', () => {
menuToggle.classList.remove('active');
navMenuLangs.classList.remove('active');
});
});



// CARRUSEL PROYECTOS
const prevBtn = document.querySelector('.arrow-back');
const nextBtn = document.querySelector('.arrow-next');
const swiper = new Swiper('.projects-swiper', {
slidesPerView: 2,
spaceBetween: 40,
loop: false,
pagination: { el: '.swiper-pagination', clickable: true },
navigation: { nextEl: '.arrow-next', prevEl: '.arrow-back' },
autoplay: { delay: 10000, disableOnInteraction: false },
breakpoints: {
0: { slidesPerView: 1, spaceBetween: 25 },
769: { slidesPerView: 2, spaceBetween: 40 },
},
on: {
init() { updateArrows(this); observeCards(); },
slideChange() { updateArrows(this); },
},
});
function updateArrows(swiper) {
prevBtn.classList.toggle('disabled', swiper.isBeginning);
nextBtn.classList.toggle('disabled', swiper.isEnd);
}
prevBtn.addEventListener('click', e => { if (prevBtn.classList.contains('disabled')) e.stopImmediatePropagation(); });
nextBtn.addEventListener('click', e => { if (nextBtn.classList.contains('disabled')) e.stopImmediatePropagation(); });



// CARRUSEL HABILIDADES
const skillsSwiper = new Swiper('.skills-swiper', {
slidesPerView: 5,
spaceBetween: 20,
loop: false,
centerInsufficientSlides: true,
navigation: { nextEl: '.skills-arrow-next', prevEl: '.skills-arrow-back' },
pagination: { el: '.skills-pagination', clickable: true },
autoplay: { delay: 3000, disableOnInteraction: false },
breakpoints: {
320: { slidesPerView: 1, spaceBetween: 10 },
640: { slidesPerView: 2, spaceBetween: 15 },
1024: { slidesPerView: 3, spaceBetween: 20 },
1280: { slidesPerView: 5, spaceBetween: 20 },
1500: { slidesPerView: 5, spaceBetween: 20 },
},
});


 
// AUTOESCRITO TECNOLOGIAS DE PROYECTOS
function typeEffect(element, text, speed = 35) {
const strong = element.querySelector('strong');
if (!strong) return;
strong.textContent = "";
strong.style.visibility = "visible";
strong.style.opacity = "1";
let i = 0;
const interval = setInterval(() => {
strong.textContent += text.charAt(i);
i++;
if (i >= text.length) {
clearInterval(interval);
strong.classList.add('done');
strong.style.setProperty("--cursor", "none");
}
}, speed);
}

function observeCards() {
const cards = document.querySelectorAll('.project-card');
const observer = new IntersectionObserver((entries, obs) => {
entries.forEach(entry => {
if (entry.isIntersecting && !entry.target.dataset.typed) {
entry.target.dataset.typed = "true";
const techUsed = entry.target.querySelector('.tech-used');
const strong = techUsed.querySelector('strong');
const text = strong.textContent.trim();
strong.setAttribute('data-text', text);
typeEffect(techUsed, text);
obs.unobserve(entry.target);
}
});
}, { threshold: 0.4 });
cards.forEach(card => observer.observe(card));
}



// AUTOESCRITO TABS DE HABILIDADES
function typeTabsSequentially(speed = 40, delayBetween = 250) {
const tabs = document.querySelectorAll('.skills-tab');
let index = 0;
function typeNext() {
if (index >= tabs.length) return;
const tab = tabs[index];
const text = tab.getAttribute('data-original-text') || tab.textContent.trim();
tab.textContent = "";
tab.style.visibility = "visible";
tab.style.opacity = "1";
tab.style.setProperty("--cursor", "'|'");
let i = 0;
const interval = setInterval(() => {
tab.textContent += text.charAt(i);
i++;
if (i >= text.length) {
clearInterval(interval);
tab.style.setProperty("--cursor", "");
index++;
setTimeout(typeNext, delayBetween);
}
}, speed);
}
typeNext();
}

function observeSkillsSection() {
const skillsSection = document.querySelector('.skills-section');
if (!skillsSection) return;
const observer = new IntersectionObserver((entries, obs) => {
entries.forEach(entry => {
if (entry.isIntersecting) {
typeTabsSequentially(40, 180);
obs.unobserve(skillsSection);
}
});
}, { threshold: 0.4 });
observer.observe(skillsSection);
}

window.addEventListener("load", () => {
const loader = document.getElementById("loader");
setTimeout(() => {
loader.classList.add("hidden");
setTimeout(() => {
observeCards();
observeSkillsSection();
}, 800);
}, 600);
});



// FILTRADO DE HABILIDADES + DROPDOWN RESPONSIVE
const tabs = document.querySelectorAll('.skills-tab');
const swiperWrapper = document.querySelector('.skills-swiper .swiper-wrapper');
const allSlides = Array.from(swiperWrapper.children);

const skillsTabsContainer = document.querySelector('.skills-tabs');
const dropdown = document.createElement('select');
dropdown.classList.add('skills-dropdown');
skillsTabsContainer.parentNode.insertBefore(dropdown, skillsTabsContainer.nextSibling);

tabs.forEach(tab => {
  tab.setAttribute('data-original-text', tab.textContent.trim());

  const option = document.createElement('option');
  option.value = tab.dataset.filter;
  option.textContent = tab.textContent.trim();
  if (tab.classList.contains('active')) option.selected = true;
  dropdown.appendChild(option);
});

function filterSkills(filter) {
  swiperWrapper.innerHTML = '';

  const filteredSlides = allSlides.filter(slide => {
    const card = slide.querySelector('.skill-card');
    return filter === 'all' || card.classList.contains(filter);
  });

  filteredSlides.forEach(slide => swiperWrapper.appendChild(slide));

  skillsSwiper.update();          
  if (skillsSwiper.pagination) {
    skillsSwiper.pagination.render();
    skillsSwiper.pagination.update();
  }

  skillsSwiper.slideTo(0);
  toggleSkillsArrows();
}

function toggleSkillsArrows() {
  const totalSlides = swiperWrapper.children.length;
  const prevArrow = document.querySelector('.skills-arrow-back');
  const nextArrow = document.querySelector('.skills-arrow-next');

  // Ancho actual de la ventana
  const screenWidth = window.innerWidth;

  // Si está en escritorio (>=1280px)
  if (screenWidth >= 1280) {
    // Ocultar flechas solo si hay 5 o menos slides
    if (totalSlides <= 5) {
      prevArrow.style.display = 'none';
      nextArrow.style.display = 'none';
    } else {
      prevArrow.style.display = '';
      nextArrow.style.display = '';
    }
  } else {
    // En mobile/tablet, siempre mostrar flechas
    prevArrow.style.display = '';
    nextArrow.style.display = '';
  }
}

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    tabs.forEach(t => t.classList.remove('active'));
    tab.classList.add('active');

    dropdown.value = tab.dataset.filter; 
    filterSkills(tab.dataset.filter);
  });
});

dropdown.addEventListener('change', () => {
  const filter = dropdown.value;

  tabs.forEach(t => t.classList.remove('active'));
  const activeTab = Array.from(tabs).find(t => t.dataset.filter === filter);
  if (activeTab) activeTab.classList.add('active');

  filterSkills(filter);
});



// PANTALLA DE CARGA
window.addEventListener('load', () => {
const loader = document.getElementById('loader');
setTimeout(() => {
loader.classList.add('hidden');
}, 1850);
});
