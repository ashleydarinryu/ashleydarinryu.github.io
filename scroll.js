document.addEventListener("DOMContentLoaded", function () {
    const links = document.querySelectorAll('#navbar a');

    links.forEach(link => {
        link.addEventListener('click', scrollToSection);
    });

    function scrollToSection(e) {
        e.preventDefault();

        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        window.scrollTo({
            top: targetElement.offsetTop - 60, // Adjusted for fixed navbar
            behavior: 'smooth'
        });
    }
});