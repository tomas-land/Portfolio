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


let phone_icon = document.querySelector('.phone-icon');
let email_icon = document.querySelector('.email-icon');
let hidden_phone = document.querySelector('.hidden-phone');
let hidden_email = document.querySelector('.hidden-email');

phone_icon.addEventListener('click', (e) => {
    hidden_phone.classList.toggle('hidden-phone-active')
    hidden_email.classList.remove('hidden-email-active')
    phone_icon.classList.remove('tada'); // reset animation
    void phone_icon.offsetWidth; // trigger reflow
    phone_icon.classList.add('tada'); // start animation
    hidden_phone.classList.add('fadeInLeft');
    // hidden_phone.classList.toggle('fadeOutRight');
    // if (hidden_phone.classList.contains('fadeInLeft')) {
        // hidden_phone.classList.remove('fadeInLeft');
        hidden_phone.classList.toggle('fadeOutRight');
       
    // } else{
    //     hidden_phone.classList.add('fadeInLeft');
    // }


})
email_icon.addEventListener('click', (e) => {
    hidden_email.classList.toggle('hidden-email-active')
    hidden_phone.classList.remove('hidden-phone-active')
    email_icon.classList.remove('tada'); // reset animation
    void email_icon.offsetWidth; // trigger reflow
    email_icon.classList.add('tada'); // start animation
    hidden_email.classList.add('fadeInLeft');
})