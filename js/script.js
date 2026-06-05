function initScrollReveal() {
const elements = document.querySelectorAll(
    '.impact-image, .impact-box,.hero-text, .services h2, .service-boxes .box, .service-detail h2, .service-detail p, .battery-image, .battery-text li, .projects h2, .project-boxes .box, .impact-image, .impact-box, .about h2, .about p, .contact h2, .contact p'
);

    elements.forEach(el => {
        el.classList.add('reveal');
    });

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.15
    });

    elements.forEach(el => observer.observe(el));
}

window.addEventListener('DOMContentLoaded', initScrollReveal);

const aboutImages = [
    "IMAGES/People.png",
    "IMAGES/Battery.png",
    "IMAGES/panlesview.png"
];

let currentAboutImage = 0;

setInterval(() => {
    const image = document.querySelector(".about-main-img");

    if (!image) return;

    image.style.opacity = "0";

    setTimeout(() => {
        currentAboutImage++;

        if (currentAboutImage >= aboutImages.length) {
            currentAboutImage = 0;
        }

        image.src = aboutImages[currentAboutImage];
        image.style.opacity = "1";
    }, 1200);

}, 4000);
