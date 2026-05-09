const screenshotButtons = document.querySelectorAll(".screenshot-button");
const lightbox = document.querySelector("#screenshot-lightbox");
const lightboxImage = document.querySelector("#lightbox-image");
const lightboxTitle = document.querySelector("#lightbox-title");
const lightboxCloseButtons = document.querySelectorAll("[data-lightbox-close]");

let lastFocusedElement = null;

function openLightbox(button) {
  if (!lightbox || !lightboxImage || !lightboxTitle) {
    return;
  }

  const image = button.querySelector("img");
  lastFocusedElement = document.activeElement;
  lightboxImage.src = button.dataset.full || image?.src || "";
  lightboxImage.alt = image?.alt || button.dataset.caption || "Увеличенный скриншот";
  lightboxTitle.textContent = button.dataset.caption || "";
  lightbox.hidden = false;
  document.body.classList.add("is-lightbox-open");

  const closeButton = lightbox.querySelector(".lightbox-close");
  closeButton?.focus();
}

function closeLightbox() {
  if (!lightbox || !lightboxImage) {
    return;
  }

  lightbox.hidden = true;
  lightboxImage.src = "";
  document.body.classList.remove("is-lightbox-open");

  if (lastFocusedElement instanceof HTMLElement) {
    lastFocusedElement.focus();
  }
}

screenshotButtons.forEach((button) => {
  button.addEventListener("click", () => openLightbox(button));
});

lightboxCloseButtons.forEach((button) => {
  button.addEventListener("click", closeLightbox);
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && lightbox && !lightbox.hidden) {
    closeLightbox();
  }
});
