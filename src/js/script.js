$(document).ready(function () {
    $('.carousel__inner').slick({
        speed: 1200,
        // adaptiveHeight: true,
        prevArrow: '<button type="button" class="slick-prev"><img src="icons/prev-button.svg"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="icons/next-button.svg"></button>',
        responsive: [{
            breakpoint: 992,
            settings: {
                infinite: true,
                dots: true,
                arrows: false
            }
        }]
    });
});
