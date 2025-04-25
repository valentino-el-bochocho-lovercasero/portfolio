const mobileMenu = document.getElementById('mobile-menu');
const navLinks = document.getElementById('nav-links');

mobileMenu.addEventListener('click', function() {
    navLinks.classList.toggle('active');
    
    const spans = this.getElementsByTagName('span');
    for (const span of spans) {
        span.classList.toggle('active');
    }
});

const links = document.querySelectorAll('.nav-links a');
links.forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        
        const spans = mobileMenu.getElementsByTagName('span');
        for (const span of spans) {
            span.classList.remove('active');
        }
    });
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

if (document.querySelector('#habilidades')) {
    observer.observe(document.querySelector('#habilidades'));
}