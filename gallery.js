// Sari images ka data
const images = [
  { src: "https://picsum.photos/seed/nature1/600/400",   alt: "Nature 1"   },
  { src: "https://picsum.photos/seed/city1/600/400",     alt: "City 1"     },
  { src: "https://picsum.photos/seed/tech1/600/400",     alt: "Tech 1"     },
  { src: "https://picsum.photos/seed/nature2/600/400",   alt: "Nature 2"   },
  { src: "https://picsum.photos/seed/city2/600/400",     alt: "City 2"     },
  { src: "https://picsum.photos/seed/abstract1/600/400", alt: "Abstract 1" },
  { src: "https://picsum.photos/seed/food1/600/400",     alt: "Food 1"     },
  { src: "https://picsum.photos/seed/travel1/600/400",   alt: "Travel 1"   },
  { src: "https://picsum.photos/seed/animal1/600/400",   alt: "Animal 1"   },
];

let currentIndex = 0;

// Lightbox open
function openLightbox(index) {
  currentIndex = index;
  updateLightbox();
  document.getElementById("lightbox").classList.add("active");
}

// Lightbox close
function closeLightbox() {
  document.getElementById("lightbox").classList.remove("active");
}

// Image update
function updateLightbox() {
  const img = images[currentIndex];
  document.getElementById("lightbox-img").src = img.src;
  document.getElementById("lightbox-img").alt = img.alt;
  document.getElementById("lightbox-counter").textContent =
    (currentIndex + 1) + " / " + images.length;
}

// Next / Prev
function changeImage(direction) {
  currentIndex = (currentIndex + direction + images.length) % images.length;
  updateLightbox();
}

// Close from ESC key
document.addEventListener("keydown", function(e) {
  if (e.key === "Escape")    closeLightbox();
  if (e.key === "ArrowRight") changeImage(1);
  if (e.key === "ArrowLeft")  changeImage(-1);
});

// Close Lightbox from background click
document.getElementById("lightbox").addEventListener("click", function(e) {
  if (e.target === this) closeLightbox();
});
