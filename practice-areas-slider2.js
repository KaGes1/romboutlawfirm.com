(function($) {
    "use strict";


    $(window).on('elementor/frontend/init', function() {

        elementorFrontend.hooks.addAction('frontend/element_ready/athens_elementor_practice_areas_slider2.default', function() {

            /* Add your code here */

            $(".practice-areas-slider2").each(function() {
                var owlsl = $(this);
                var owlsl_ops = owlsl.data('options') ? owlsl.data('options') : {};

                var responsive_value = {
                    0: {
                        items: 1,
                        stagePadding: 0,
                        nav: false,
                    },
                    576: {
                        items: 1,
                    },
                    860: {
                        items: 2,
                    },
                    1366: {
                        items: owlsl_ops.items,
                        stagePadding: owlsl_ops.stagePadding,
                    }
                };

                owlsl.owlCarousel({
                    stagePadding: owlsl_ops.stagePadding,
                    autoWidth: owlsl_ops.autoWidth,
                    margin: owlsl_ops.margin,
                    items: owlsl_ops.items,
                    loop: owlsl_ops.loop,
                    autoplay: owlsl_ops.autoplay,
                    autoplayTimeout: owlsl_ops.autoplayTimeout,
                    center: owlsl_ops.center,
                    dots: owlsl_ops.dots,
                    nav: owlsl_ops.nav,
                    thumbs: owlsl_ops.thumbs,
                    autoplayHoverPause: owlsl_ops.autoplayHoverPause,
                    slideBy: owlsl_ops.slideBy,
                    smartSpeed: owlsl_ops.smartSpeed,
                    rtl: owlsl_ops.rtl,
                    responsive: responsive_value,
                    navText: [
                        '<i class="iconly-Arrow-Left-2 icli" ></i>',
                        '<i class="iconly-Arrow-Right-2 icli" ></i>'
                    ],
                });

                /* Fixed WCAG */
                owlsl.find(".owl-nav button.owl-prev").attr("title", "Previous");
                owlsl.find(".owl-nav button.owl-next").attr("title", "Next");

            });

        });


    });

})(jQuery);