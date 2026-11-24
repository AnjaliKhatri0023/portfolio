
// =================================
// ANJALI KHATRI - PORTFOLIO
// JavaScript interactions
// =================================

// 1. Dark / Light theme toggle

const themeToggle = document.getElementById("theme-toggle");

const savedTheme = localStorage.getItem("portfolio-theme");

if (savedTheme === "light") {
    document.body.classList.add("light-theme");
    themeToggle.textContent = "☾";
}

themeToggle.addEventListener("click", function () {

    document.body.classList.toggle("light-theme");

    const isLight = document.body.classList.contains("light-theme");

    themeToggle.textContent = isLight ? "☾" : "☀";

    localStorage.setItem(
        "portfolio-theme",
        isLight ? "light" : "dark"
    );

});

// 2. Footer year

const footer = document.querySelector("footer p");

if (footer) {
    footer.innerHTML =
        `© ${new Date().getFullYear()} Anjali Khatri. Built with curiosity and code.`;
}

// 3. Reveal sections while scrolling

const sections = document.querySelectorAll(".section");

const observer = new IntersectionObserver(
    function (entries) {

        entries.forEach(function (entry) {

            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                observer.unobserve(entry.target);
            }

        });

    },
    {
        threshold: 0.12
    }
);

sections.forEach(function (section) {
    observer.observe(section);
});



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

