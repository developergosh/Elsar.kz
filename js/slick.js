$(document).ready(function()
{"use strict";
    $('.slider').slick({
        arrows:false,
        dots:false,
        slidesToShow:5,
        autoplay:true,
        speed:1500,
        autoplaySpeed:800,
        responsive:[
            {
                breakpoint: 768,
                settings: {
                    slidesToShow:2
                }
            },
            {
                breakpoint: 550,
                settings: {
                    slidesToShow:1
                }
            },
            {
                breakpoint: 370,
                settings: {
                    slidesToShow:1
                }
            }
        ]
    });
});
