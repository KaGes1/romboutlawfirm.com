(function($) {
    "use strict";


    $(window).on('elementor/frontend/init', function() {

        elementorFrontend.hooks.addAction('frontend/element_ready/athens_elementor_testimonial2.default', function() {

            /* Add your code here */

            $(".slide-testimonial2").each(function() {
                var owlsl = $(this);
                var owlsl_ops = owlsl.data('options') ? owlsl.data('options') : {};

                var responsive_value = {
                    0: {
                        items: 1,
                        nav: false
                    },
                    767: {
                        items: 1,
                    },
                    1170: {
                        items: 1.5,
                    },
                    1300: {
                        items: owlsl_ops.items,
                    },
                };

                owlsl.owlCarousel({
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

                /*****First Load ( add class for change background color )********/
                owlsl.find('.owl-item.active').each(function(i) {
                    if (i === 0) {
                        $(this).addClass('active-bgColor');
                    }
                });
                /*****On Changed********/
                owlsl.on('changed.owl.carousel', function(event) {
                    var that = $(this);
                    that.find('.owl-item').removeClass('active-bgColor');
                    var index = event.item.index;
                    that.find('.owl-item').each(function(i) {
                        if (i === index) {
                            $(this).addClass('active-bgColor');
                        }
                    });
                });
                /*****On Dragged********/
                owlsl.on('dragged.owl.carousel', function(event) {
                    var that = $(this);
                    that.find('.owl-item').removeClass('active-bgColor');
                    that.find('.owl-item.active:first').addClass('active-bgColor');
                });

            });

        });


    });

})(jQuery);