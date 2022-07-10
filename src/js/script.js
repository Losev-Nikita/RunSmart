// $(document).ready(function () {
//     $('.carousel__inner').slick({
//         speed: 1200,
//         // adaptiveHeight: true,
//         prevArrow: '<button type="button" class="slick-prev"><img src="icons/prev-button.svg"></button>',
//         nextArrow: '<button type="button" class="slick-next"><img src="icons/next-button.svg"></button>',
//         responsive: [{
//             breakpoint: 992,
//             settings: {
//                 infinite: true,
//                 dots: true,
//                 arrows: false
//             }
//         }]
//     });
//     $(".owl-carousel").owlCarousel();
// });

$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        nav: true,
        dots: false,
        items: 1,
        loop: true,
        // prevArrow: '<button type="button" class="owl-prev"><img src="icons/prev-button.svg"></button>',
        // nextArrow: '<button type="button" class="owl-next"><img src="icons/next-button.svg"></button>',
        responsiveClass:true,
        responsive:{
            992:{
                nav: false,
                dots: true
            },
            768:{
                nav: false,
                dots: true
            },
            576:{
                nav: false,
                dots: true
            },
            576:{
                nav: false,
                dots: true
            },
            320:{
                nav: false,
                dots: true
            }
        }
    });
  });