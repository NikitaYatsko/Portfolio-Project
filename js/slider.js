$(document).ready(function() {
    function initializeSlick() {
        if ($(window).width() < 940) {
            if (!$('.pricing-wrapper').hasClass('slick-initialized')) {
                $('.pricing-wrapper').slick({
                    infinite: true,
                    speed: 300,
                    autoplay: false,
                    autoplaySpeed: 3000,
                    arrows: false,
                    responsive: [
                        {
                            breakpoint: 991,
                            settings: {
                                arrows: false,
                                dots: false,
                            }
                        },
                    ]
                });
            }
        } else {
            if ($('.pricing-wrapper').hasClass('slick-initialized')) {
                $('.pricing-wrapper').slick('unslick');
            }
        }
    }

    initializeSlick();
    $(window).on('resize', function() {
        initializeSlick();
    });
});
