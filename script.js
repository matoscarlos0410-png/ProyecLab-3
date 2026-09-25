/* =====================================================
   PROYEC LAB V3
   Guía digital de Sausal
===================================================== */


/* =====================================================
   WHATSAPP
===================================================== */

/*
  Cuando tengas el número oficial de ProyecLab,
  escríbelo aquí.

  Ejemplo para Perú:
  "51999999999"

  NO pongas +, espacios ni guiones.
*/

const WHATSAPP_NUMBER = "";


/* =====================================================
   BASE DE DATOS
===================================================== */

const places = [

  /* =========================
     NEGOCIOS
  ========================= */

  {
    name: "Mari Mar Restaurante",
    icon: "🍽️",
    category: "negocio",
    description: "Restaurante ubicado en Sausal.",
    location: "1NF, Sausal 13700",
    verified: true,
    map: "Mari Mar Restaurante Sausal La Libertad"
  },

  {
    name: 'Restaurante & Cevichería "Keylita"',
    icon: "🐟",
    category: "negocio",
    description: "Restaurante y cevichería ubicada en Sausal.",
    location: "Sausal 13700",
    verified: true,
    map: "Restaurante Cevicheria Keylita Sausal La Libertad"
  },

  {
    name: "Restaurant Liz",
    icon: "🍛",
    category: "negocio",
    description: "Restaurante ubicado en Sausal.",
    location: "C. La Libertad 37, Sausal",
    verified: true,
    map: "Restaurant Liz Sausal La Libertad"
  },

  {
    name: "Pollería Bendición de Dios",
    icon: "🍗",
    category: "negocio",
    description: "Pollería registrada en Sausal.",
    location: "C. Lima 35, Sausal",
    verified: true,
    map: "Polleria Bendicion de Dios Sausal"
  },

  {
    name: "Pollería Yayita",
    icon: "🍗",
    category: "negocio",
    description:
      "Pollería identificada en registros públicos. La ubicación exacta en Sausal requiere confirmación.",
    location:
      "Ubicación registrada: Chicama 13700",
    verified: false,
    map: "Polleria Yayita Chicama La Libertad"
  },

  {
    name: "El Viejo",
    icon: "🍽️",
    category: "negocio",
    description:
      "Establecimiento registrado en la zona.",
    location: "Sausal",
    verified: false,
    map: "El Viejo Sausal La Libertad"
  },

  {
    name: "Mi Kiarita",
    icon: "🐟",
    category: "negocio",
    description:
      "Cevichería y establecimiento gastronómico.",
    location: "Sausal 13700",
    verified: false,
    map: "Mi Kiarita Sausal La Libertad"
  },


  /* =========================
     SERVICIOS
  ========================= */

  {
    name: "Mercado de Sausal",
    icon: "🛒",
    category: "servicio",
    description:
      "Mercado de abastos de la comunidad.",
    location: "Sausal, Chicama",
    verified: true,
    map: "Mercado de Abastos Sausal La Libertad"
  },

  {
    name: "Piscina Pública de Sausal",
    icon: "🏊",
    category: "servicio",
    description:
      "Espacio recreativo de Sausal.",
    location: "Sausal",
    verified: true,
    map: "Piscina Pública Sausal La Libertad"
  },

  {
    name: "Centro de Salud Alto Perú Sausal",
    icon: "🏥",
    category: "servicio",
    description:
      "Establecimiento de atención sanitaria de la zona.",
    location: "Alto Perú, Sausal",
    verified: false,
    map: "Centro de Salud Alto Perú Sausal"
  },

  {
    name: "Municipalidad Sausal",
    icon: "🏛️",
    category: "servicio",
    description:
      "Referencia para servicios públicos de Sausal.",
    location: "Sausal, Chicama",
    verified: false,
    map: "Municipalidad Sausal Chicama"
  },


  /* =========================
     TRANSPORTE
  ========================= */

  {
    name: "Terminal Terrestre Sausal",
    icon: "🚌",
    category: "transporte",
    description:
      "Punto de transporte de la comunidad.",
    location: "Sausal",
    verified: false,
    map: "Terminal Terrestre Sausal La Libertad"
  },

  {
    name: "Estación de Colectivos Sausal - Casagrande",
    icon: "🚐",
    category: "transporte",
    description:
      "Referencia para transporte entre Sausal y Casagrande.",
    location: "Sausal",
    verified: false,
    map: "Estación Colectivos Sausal Casagrande"
  },


  /* =========================
     PARQUES
  ========================= */

  {
    name: "Parque Infantil Noli",
    icon: "🛝",
    category: "parque",
    description:
      "Espacio recreativo infantil de Sausal.",
    location: "Sausal",
    verified: false,
    map: "Parque Infantil Noli Sausal"
  },

  {
    name: "Plazuela El Maestro",
    icon: "🌳",
    category: "parque",
    description:
      "Espacio público local.",
    location: "Sausal",
    verified: false,
    map: "Plazuela El Maestro Sausal"
  },

  {
    name: "Parque de Sausal",
    icon: "🌳",
    category: "parque",
    description:
      "Espacio público de la comunidad.",
    location: "Sausal, Chicama",
    verified: false,
    map: "Parque Sausal La Libertad"
  },


  /* =========================
     EDUCACIÓN
  ========================= */

  {
    name: "I.E. José Carlos Mariátegui",
    icon: "🏫",
    category: "educacion",
    description:
      "Institución educativa pública de educación secundaria ubicada en Sausal.",
    location: "Calle Bolívar, Sausal",
    verified: true,
    map: "I.E. José Carlos Mariátegui Sausal La Libertad"
  },

  {
    name: "I.E. 81971 Alfonso Ugarte",
    icon: "🏫",
    category: "educacion",
    description:
      "Institución educativa identificada en Alto Perú, Sausal.",
    location: "Alto Perú, Sausal",
    verified: true,
    map: "I.E. 81971 Alfonso Ugarte Alto Perú Sausal"
  },


  /* =========================
     INICIAL / JARDINES
  ========================= */

  {
    name: "Inicial y jardines de Sausal",
    icon: "🧒",
    category: "inicial",
    description:
      "Acceso de búsqueda para instituciones de educación inicial y jardines de la zona.",
    location: "Sausal",
    verified: false,
    map: "Inicial Jardín Sausal La Libertad"
  },


  /* =========================
     LUGARES
  ========================= */

  {
    name: "Plaza de Sausal",
    icon: "📍",
    category: "lugar",
    description:
      "Espacio público central de la comunidad.",
    location: "Sausal, Chicama",
    verified: false,
    map: "Plaza de Sausal La Libertad"
  },

  {
    name: "Cerro 1 de Mayo",
    icon: "⛰️",
    category: "lugar",
    description:
      "Lugar relacionado con una tradición local.",
    location: "Sausal",
    verified: false,
    map: "Cerro 1 de Mayo Sausal"
  },


  /* =========================
     CULTURA
  ========================= */

  {
    name: "Virgen del Rosario",
    icon: "🙏",
    category: "cultura",
    description:
      "Festividad religiosa principal mencionada en la información institucional de Sausal.",
    location: "Sausal",
    verified: true,
    map: "Virgen del Rosario Sausal La Libertad"
  },

  {
    name: "Señor de los Milagros",
    icon: "🕊️",
    category: "cultura",
    description:
      "Una de las festividades religiosas mencionadas para Sausal.",
    location: "Sausal",
    verified: true,
    map: "Señor de los Milagros Sausal La Libertad"
  },

  {
    name: "Virgen de la Puerta",
    icon: "🙏",
    category: "cultura",
    description:
      "Festividad religiosa mencionada entre las tradiciones de Sausal.",
    location: "Sausal",
    verified: true,
    map: "Virgen de la Puerta Sausal La Libertad"
  }

];


/* =====================================================
   ELEMENTOS
===================================================== */

const searchInput =
  document.getElementById("searchInput");

const clearSearch =
  document.getElementById("clearSearch");

const results =
  document.getElementById("results");

const resultsInfo =
  document.getElementById("resultsInfo");

const noResults =
  document.getElementById("noResults");

const businessGrid =
  document.getElementById("businessGrid");

const placesGrid =
  document.getElementById("placesGrid");

const cultureGrid =
  document.getElementById("cultureGrid");

const totalPlaces =
  document.getElementById("totalPlaces");


let currentCategory = "all";


/* =====================================================
   GOOGLE MAPS
===================================================== */

function createMapsURL(query) {

  return (
    "https://www.google.com/maps/search/?api=1&query=" +
    encodeURIComponent(query)
  );

}


/* =====================================================
   CREAR TARJETA
===================================================== */

function createCard(item) {

  const card =
    document.createElement("a");


  /*
    TODA LA TARJETA ES CLICABLE.
    AL MACHUCARLA ABRE GOOGLE MAPS.
  */

  card.href =
    createMapsURL(item.map);

  card.target =
    "_blank";

  card.rel =
    "noopener noreferrer";

  card.className =
    "place-card";


  const verification =
    item.verified

      ? `
        <span class="verified">
          ✓ INFORMACIÓN VERIFICADA
        </span>
      `

      : `
        <span class="verified confirm">
          ℹ️ UBICACIÓN POR CONFIRMAR
        </span>
      `;


  card.innerHTML = `

    <div class="card-icon">
      ${item.icon}
    </div>

    <h3>
      ${item.name}
    </h3>

    <p>
      ${item.description}
    </p>

    <span class="card-category">
      ${getCategoryName(item.category)}
    </span>

    <span class="card-location">
      📍 ${item.location}
    </span>

    ${verification}

    <span class="card-map">
      Abrir Maps ↗
    </span>

  `;


  return card;

}


/* =====================================================
   NOMBRE DE CATEGORÍA
===================================================== */

function getCategoryName(category) {

  const names = {

    negocio: "Negocio",

    servicio: "Servicio",

    educacion: "Educación",

    inicial: "Inicial / Jardín",

    parque: "Parque",

    lugar: "Lugar",

    transporte: "Transporte",

    cultura: "Cultura"

  };


  return names[category] || category;

}


/* =====================================================
   RENDER
===================================================== */

function renderCards(container, data) {

  container.innerHTML = "";


  data.forEach(item => {

    container.appendChild(
      createCard(item)
    );

  });

}


/* =====================================================
   SECCIONES
===================================================== */

renderCards(

  businessGrid,

  places.filter(
    item =>
      item.category === "negocio"
  )

);


renderCards(

  placesGrid,

  places.filter(
    item =>
      [
        "parque",
        "educacion",
        "inicial",
        "lugar"
      ].includes(item.category)
  )

);


renderCards(

  cultureGrid,

  places.filter(
    item =>
      item.category === "cultura"
  )

);


totalPlaces.textContent =
  places.length;


/* =====================================================
   BUSCADOR
===================================================== */

function searchPlaces() {

  const query =
    searchInput.value
      .toLowerCase()
      .trim();


  const filtered =
    places.filter(item => {

      const categoryMatch =
        currentCategory === "all" ||
        item.category === currentCategory;


      const searchableText = `

        ${item.name}

        ${item.description}

        ${item.location}

        ${item.category}

      `.toLowerCase();


      const searchMatch =
        searchableText.includes(query);


      return (
        categoryMatch &&
        searchMatch
      );

    });


  renderCards(
    results,
    filtered
  );


  resultsInfo.textContent =
    `${filtered.length} ${
      filtered.length === 1
        ? "resultado"
        : "resultados"
    }`;


  noResults.style.display =
    filtered.length
      ? "none"
      : "block";


  clearSearch.style.display =
    query
      ? "block"
      : "none";

}


/* =====================================================
   INPUT
===================================================== */

searchInput.addEventListener(
  "input",
  searchPlaces
);


/* =====================================================
   LIMPIAR BUSQUEDA
===================================================== */

clearSearch.addEventListener(
  "click",
  () => {

    searchInput.value = "";

    currentCategory =
      "all";


    document
      .querySelectorAll(".filter")
      .forEach(button => {

        button.classList.toggle(
          "active",
          button.dataset.category === "all"
        );

      });


    searchPlaces();

    searchInput.focus();

  }
);


/* =====================================================
   FILTROS
===================================================== */

document
  .querySelectorAll(".filter")
  .forEach(button => {

    button.addEventListener(
      "click",
      () => {

        currentCategory =
          button.dataset.category;


        document
          .querySelectorAll(".filter")
          .forEach(btn => {

            btn.classList.toggle(
              "active",
              btn === button
            );

          });


        searchPlaces();

      }
    );

  });


/* =====================================================
   CATEGORÍAS DE LUGARES
===================================================== */

document
  .querySelectorAll(".category-card")
  .forEach(button => {

    button.addEventListener(
      "click",
      () => {

        const category =
          button.dataset.jump;


        currentCategory =
          category;


        searchInput.value =
          "";


        document
          .querySelectorAll(".filter")
          .forEach(filter => {

            filter.classList.toggle(
              "active",
              filter.dataset.category === category
            );

          });


        searchPlaces();


        document
          .getElementById("explora")
          .scrollIntoView({
            behavior: "smooth"
          });

      }
    );

  });


/* =====================================================
   MENÚ MÓVIL
===================================================== */

const menuButton =
  document.getElementById("menuButton");

const mainNav =
  document.getElementById("mainNav");


menuButton.addEventListener(
  "click",
  () => {

    mainNav.classList.toggle(
      "open"
    );

  }
);


mainNav
  .querySelectorAll("a")
  .forEach(link => {

    link.addEventListener(
      "click",
      () => {

        mainNav.classList.remove(
          "open"
        );

      }
    );

  });


/* =====================================================
   WHATSAPP
===================================================== */

const whatsappButton =
  document.getElementById(
    "whatsappButton"
  );

const whatsappWindow =
  document.getElementById(
    "whatsappWindow"
  );

const closeWhatsapp =
  document.getElementById(
    "closeWhatsapp"
  );

const sendWhatsapp =
  document.getElementById(
    "sendWhatsapp"
  );

const whatsappMessage =
  document.getElementById(
    "whatsappMessage"
  );


whatsappButton.addEventListener(
  "click",
  () => {

    whatsappWindow.classList.toggle(
      "show"
    );

  }
);


closeWhatsapp.addEventListener(
  "click",
  () => {

    whatsappWindow.classList.remove(
      "show"
    );

  }
);


sendWhatsapp.addEventListener(
  "click",
  () => {

    const message =
      whatsappMessage.value.trim();


    if (!message) {

      alert(
        "Escribe un mensaje antes de enviarlo."
      );

      return;

    }


    if (!WHATSAPP_NUMBER) {

      alert(
        "Falta configurar el número oficial de WhatsApp de ProyecLab en script.js."
      );

      return;

    }


    const url =
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;


    window.open(
      url,
      "_blank",
      "noopener,noreferrer"
    );

  }
);


/* =====================================================
   CERRAR WHATSAPP AL HACER CLICK FUERA
===================================================== */

document.addEventListener(
  "click",
  event => {

    const clickedInside =
      whatsappWindow.contains(
        event.target
      );

    const clickedButton =
      whatsappButton.contains(
        event.target
      );


    if (
      !clickedInside &&
      !clickedButton
    ) {

      whatsappWindow.classList.remove(
        "show"
      );

    }

  }
);


/* =====================================================
   AÑO
===================================================== */

document
  .getElementById("year")
  .textContent =
  new Date().getFullYear();


/* =====================================================
   ANIMACIONES DE ENTRADA
===================================================== */

const observer =
  new IntersectionObserver(
    entries => {

      entries.forEach(entry => {

        if (
          entry.isIntersecting
        ) {

          entry.target.classList.add(
            "visible"
          );

        }

      });

    },

    {
      threshold: .08
    }

  );


document
  .querySelectorAll(
    ".section, .place-card, .hero-card, .info-card"
  )
  .forEach(element => {

    element.style.opacity = "0";

    element.style.transform =
      "translateY(20px)";

    element.style.transition =
      "opacity .65s ease, transform .65s ease";


    observer.observe(
      element
    );

  });


/* =====================================================
   ESTILO DE ELEMENTOS VISIBLES
===================================================== */

const animationStyle =
  document.createElement("style");


animationStyle.textContent = `

  .visible {
    opacity: 1 !important;
    transform: translateY(0) !important;
  }

`;


document.head.appendChild(
  animationStyle
);


/* =====================================================
   INICIALIZACIÓN
===================================================== */

searchPlaces();


console.log(
  "ProyecLab V3 cargado correctamente."
);
