let links = document.querySelectorAll('.scroll-to');
let hamburger = document.querySelector(".hamburger");
let slide_menu = document.querySelector('.slide-menu');

links.forEach((link) => {
    link.addEventListener('click', () => {

        const el = document.getElementById(link.getAttribute("data-link"));
        el.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
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


let phone_icon= document.querySelector('.phone-icon');
let email_icon= document.querySelector('.email-icon');
let hidden_phone= document.querySelector('.hidden-phone');
let hidden_email= document.querySelector('.hidden-email');

phone_icon.addEventListener('click',(e)=>{
hidden_phone.classList.toggle('hidden-phone-active')
hidden_email.classList.remove('hidden-email-active')
})
email_icon.addEventListener('click',(e)=>{
hidden_email.classList.toggle('hidden-email-active')
hidden_phone.classList.remove('hidden-phone-active')

})
