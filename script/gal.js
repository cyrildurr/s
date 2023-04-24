const allImages = [
  {
    id: 1,
    link: "script/gal01.jpg",
    legend: `Illustration de <b>Sébastien Ecosse</b> pour la nouvelle <b><i>Retour au Wewelsburg.</b></i>
            `,
  },

  {
    id: 2,
    link: "script/gal02.jpg",
    legend: `Illustration de <b>Johann Bodin</b> pour le roman <b><i>Le Sang des Héros.</b></i>
            `,
  },

  {
    id: 3,
    link: "script/gal03.jpg",
    legend: `Illustration d'<b>Alain Mathiot</b> pour la nouvelle <b><i>Blessures de Lame.</b></i>
            `,
  },

  {
    id: 4,
    link: "script/gal04.jpg",
    legend: `Illustration d'<b>Alain Mathiot</b> pour la nouvelle <b><i>Blessures de Lame.</b></i>
            `,
  },

  {
    id: 5,
    link: "script/gal05.png",
    legend: `Illustration de <b>Corentin Martinage</b> pour la nouvelle <b><i>Jeu d'Auteur.</b></i>
            `,
  },

  {
    id: 6,
    link: "script/gal06.png",
    legend: `Illustration de <b>Corentin Martinage</b> pour la nouvelle <b><i>Jeu d'Auteur.</b></i>
            `,
  },

  {
    id: 7,
    link: "script/gal07.png",
    legend: ` Illustration de quatrième de couverture par <b>Sergio Yolfa</b>, pour l'album  <b><i>The Gutter.</b></i>  Aplats par Cyril Durr.
       
            `,
  },

  {
    id: 8,
    link: "script/gal08.jpg",
    legend: `Illustration inspirée du personnage de Sweetlord, par <b>Daniel Gattone</b> et <b>Emmanuel Bonnet</b>.
       
            `,
  },

  {
    id: 9,
    link: "script/gal09.png",
    legend: ` Projet de cover pour <b><i>Slenderman</b></i>. Dessin de <b>Daniel Gattone</b>, couleurs et retouches graphiques d'<b>Emmanuel Bonnet</b>.
       
            `,
  },

  {
    id: 10,
    link: "script/gal10.png",
    legend: `Illustration de la nouvelle <b><i>La Meute</b></i> (issue du recueil <b><i>Jour de Neige</b></i>), par <b>Daniel Gattone.</b>`,
  },
];
const gallery = document.querySelector("#gallery");
const viewer = document.querySelector("#viewer");
const viewerImage = viewer.querySelector("img");
const viewerCaption = viewer.querySelector("figcaption");
const prevButton = document.querySelector(".fa-chevron-circle-left");
const nextButton = document.querySelector(".fa-chevron-circle-right");

let currentImageIndex = null;

allImages.forEach((image, index) => {
  const thumbnail = document.createElement("img");
  thumbnail.src = image.link;
  thumbnail.alt = image.legend;
  thumbnail.addEventListener("click", () => {
    currentImageIndex = index;
    updateViewer();
    viewer.classList.add("open");
  });
  gallery.appendChild(thumbnail);
});

prevButton.addEventListener("click", () => {
  currentImageIndex = (currentImageIndex - 1 + allImages.length) % allImages.length;
  updateViewer();
});

nextButton.addEventListener("click", () => {
  currentImageIndex = (currentImageIndex + 1) % allImages.length;
  updateViewer();
});

viewer.addEventListener("click", (e) => {
  if (e.target !== viewerImage && e.target !== prevButton && e.target !== nextButton) {
    viewer.classList.remove("open");
  }
});

document.addEventListener("keyup", (e) => {
  if (e.key === "Escape") {
    viewer.classList.remove("open");
  }
});

function updateViewer() {
  const image = allImages[currentImageIndex];
  viewerImage.src = image.link;
  viewerCaption.innerHTML = image.legend;
}
