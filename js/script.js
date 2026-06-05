function initScrollReveal() {
const elements = document.querySelectorAll(
    '.hero-text, .services h2, .service-boxes .box, .service-detail h2, .service-detail p, .battery-image, .battery-text li, .projects h2, .project-boxes .box, .about h2, .about p, .contact h2, .contact p'
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
