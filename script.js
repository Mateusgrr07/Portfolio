// Inicialização do SwiperJS
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,        // Padrão: 1 slide (celular)
    spaceBetween: 30,        // Espaço entre os cards
    loop: true,              // Carrossel infinito

    // Configuração dos Pontos de Paginação
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },

    // Configuração das Setas
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },

    // Breakpoints (Responsividade)
    breakpoints: {
        // Quando a tela for maior que 640px
        640: {
            slidesPerView: 1,
        },
        // Quando a tela for maior que 768px (Tablets)
        768: {
            slidesPerView: 2,
        },
        // Quando a tela for maior que 1024px (Computadores)
        1024: {
            slidesPerView: 3,
        },
    },
});