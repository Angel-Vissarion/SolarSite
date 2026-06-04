function initScrollReveal() {
    const elements = document.querySelectorAll(
        '.hero-text, .services h2, .service-boxes .box, .service-detail h2, .service-detail p, .projects h2, .project-boxes .box, .about h2, .about p, .contact h2, .contact p'
    );

    elements.forEach(el => {
        el.classList.add('reveal');
    });

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.15
    });

    elements.forEach(el => observer.observe(el));
}

window.addEventListener('DOMContentLoaded', initScrollReveal);
