import { galleryItems } from "./gallery-items.js";
// Change code below this line
const list = document.querySelector(".gallery");
const markup = galleryItems
  .map(
    (image) =>
      `<li class="gallery__item">
        <a class="gallery__link" href="${image.original}">
          <img
            src="${image.preview}" 
            data-source="${image.original}"
            alt="${image.description}" 
            class="gallery__image"
          />
        </a>
      </li>`
  )
  .join("");
list.insertAdjacentHTML("afterbegin", markup);

const photoClick = (event) => {
  event.preventDefault();
  if (event.target.nodeName !== "IMG") {
    return;
  }
  const instance = basicLightbox.create(`
    <img src="${event.target.dataset.source}"width="800" height="600">`);
  instance.show();
};

list.addEventListener("click", photoClick);
