window.addEventListener("load", () => {
  document.body.classList.remove("is-loading");
});

// close menu on mobile after clicking a link
document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", () => {
    const toggle = document.getElementById("nav-toggle");
    if (toggle) toggle.checked = false;
  });
});

// fade in sections on scroll
const revealObserver = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 }
);

document.querySelectorAll(".reveal").forEach((el) => revealObserver.observe(el));

// image popup
function openFullImage(title, tag, imageSrc) {
  const lightbox = document.getElementById("imageLightbox");
  const titleEl = document.getElementById("lightboxTitle");
  const tagEl = document.getElementById("lightboxTag");
  const imgEl = document.getElementById("lightboxImg");

  if (!lightbox || !titleEl || !tagEl || !imgEl) return;

  titleEl.textContent = title;
  tagEl.textContent = tag;
  imgEl.src = imageSrc;
  imgEl.alt = title;

  lightbox.classList.add("is-open");
}

function closeFullImage() {
  const lightbox = document.getElementById("imageLightbox");
  if (lightbox) {
    lightbox.classList.remove("is-open");
  }
}

document.getElementById("imageLightbox")?.addEventListener("click", (event) => {
  if (event.target.id === "imageLightbox") {
    closeFullImage();
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeFullImage();
  }
});