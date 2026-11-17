
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
