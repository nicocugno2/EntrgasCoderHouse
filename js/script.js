let menuIcon = document.querySelector('#menu');
let navbar = document.querySelector('.navbar');


menuIcon.onclick = () => {
    menuIcon.classList.toggle('fa-xmark')
    navbar.classList.toggle('active');
};


window.onscroll = () => {
let header = document.querySelector('.header');

header.classList.toggle('sticky', window.scrollY > 100);}

//Swiper

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 50,
    loop: true,
    grabCursor: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});