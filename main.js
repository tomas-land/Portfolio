let links = document.querySelectorAll('.scroll-to');
let hamburger = document.querySelector(".hamburger");
let slide_menu = document.querySelector('.slide-menu');

links.forEach((link) => {
    link.addEventListener('click', () => {

        const el = document.getElementById(link.getAttribute("data-link"));

        link.classList.contains('mywork') ?
            window.scrollTo({
                top: 2300,
                behavior: 'smooth'
            }) :
            el.scrollIntoView({
                behavior: 'smooth',
                block: 'center'
            });
        let slide_menu = document.querySelector('.slide-menu');
        slide_menu.classList.toggle("slide-menu-active")
        hamburger.classList.toggle("is-active");
    })
});




hamburger.addEventListener("click", function () {
    hamburger.classList.toggle("is-active");
    slide_menu.classList.toggle("slide-menu-active")
});