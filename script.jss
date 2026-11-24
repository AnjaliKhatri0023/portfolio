
// Activity Image Lightbox
const lightbox = document.getElementById("imageLightbox");
const lightboxImage = document.getElementById("lightboxImage");
const closeButton = document.querySelector(".lightbox-close");

document.querySelectorAll(".beyond-item").forEach((card) => {
    card.addEventListener("click", (event) => {

        // Ignore clicks on Instagram links
        if (event.target.closest("a")) return;

        const image = card.querySelector("img");

        if (image) {
            lightboxImage.src = image.src;
            lightboxImage.alt = image.alt;
            lightbox.classList.add("active");
            document.body.style.overflow = "hidden";
        }
    });
});

// Close using the X button
closeButton.addEventListener("click", closeLightbox);

// Close by clicking the blurred background
lightbox.addEventListener("click", (event) => {
    if (event.target === lightbox) {
        closeLightbox();
    }
});

// Close using Escape key
document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
        closeLightbox();
    }
});

function closeLightbox() {
    lightbox.classList.remove("active");
    lightboxImage.src = "";
    document.body.style.overflow = "";
}

