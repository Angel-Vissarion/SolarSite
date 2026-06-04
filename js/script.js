function initScrollReveal() {
    const heroText = document.querySelector('.hero-text');

    const revealElements = [
        heroText,
        ...document.querySelectorAll(
            '.services h2, .service-boxes .box, .service-detail h2, .service-detail p, .projects h2, .project-boxes .box, .about h2, .about p, .contact h2, .contact p'
        )
    ].filter(Boolean);

    revealElements.forEach(el => {
        el.classList.add('reveal');
    });

    if (heroText) {
        heroText.classList.add('slide-in-left');
    }

    const observer = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                obs.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.15
    });

    revealElements.forEach(el => observer.observe(el));
}

window.addEventListener('DOMContentLoaded', initScrollReveal);
