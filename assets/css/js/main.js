// ── Card entrance animations (Intersection Observer) ──
const cards = document.querySelectorAll('.card');

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                entry.target.classList.add('visible');
            }, i * 100);
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.1 });

cards.forEach(card => observer.observe(card));

// ── Smooth navbar shadow on scroll ──
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 30) {
        navbar.style.boxShadow = '0 4px 20px rgba(107,63,42,0.08)';
    } else {
        navbar.style.boxShadow = 'none';
    }
});
