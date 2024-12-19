const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

window.addEventListener("scroll", function() {
    let sections = document.querySelectorAll('.market-section');
    let windowHeight = window.innerHeight;

    sections.forEach(function(section) {
        let rect = section.getBoundingClientRect();
        if (rect.top <= windowHeight * 0.8 && rect.bottom >= 0) {
            section.classList.add('active');
        } else {
            section.classList.remove('active');
        }
    });
});