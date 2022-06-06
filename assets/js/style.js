var winHeight = $(window).height();
var window_wt = $(window).width();
$(document).ready(function(){
  // $(".navbar-toggler-c").click(function(){
  //   $(".show-manu").toggleClass("show");
  // });

  if (window_wt <=991) {
      $(".navbar-toggler-c").on("click", function() {
         $(".show-manu").slideToggle();
     });
      $(".show-manu").slideUp('slow');
  } 

});










// ______________________________________________________________________


$(document).ready(function(){
(function ($) {
    "use strict";
    $(document).ready(function () {
        $(".carousel_se_01_carousel").owlCarousel({
            items: 3,
            nav: true,
            margin: 20,
            dots: false,
            loop: true,
            // autoplay: true,
            // autoplayTimeout: 4000,
            // autoplayHoverPause: true,
            mouseDrag: true,
            responsiveClass: true,
            navText: ["<i class='fa-solid fa-angle-left'></i>", "<i class='fa-solid fa-angle-right'></i>"],
            responsive: {
                0: {
                    items: 1,
                },
                480: {
                    items: 2,
                },
                767: {
                    items: 2,
                },
                992: {
                    items: 3,
                },
                1200: {
                    items: 3,
                },
            },
        });
    });
})(jQuery);
});
$(document).ready(function(){
(function ($) {
    "use strict";
    $(document).ready(function () {
        $(".carousel_se_02_carousel").owlCarousel({
            items: 3,
            nav: true,
            margin: 20,
            dots: false,
            loop: true,
            autoplay: true,
            autoplayTimeout: 4000,
            autoplayHoverPause: true,
            mouseDrag: true,
            responsiveClass: true,
            navText: ["<i class='fa-solid fa-angle-left'></i>", "<i class='fa-solid fa-angle-right'></i>"],
            responsive: {
                0: {
                    items: 3,
                },
                480: {
                    items: 3,
                },
                767: {
                    items: 3,
                },
                992: {
                    items: 3,
                },
                1200: {
                    items: 4,
                },
            },
        });
    });
})(jQuery);
});

$(document).ready(function(){

$(function() {
    var owl = $('.featured-blogs-con'),
        owlOptions = {
            items: 3,
            nav: true,
            dots: true,
            margin: 20,
            loop: true,
            itemsDesktop : false,
            // autoplay:true,
            // autoplayTimeout:4000,
            // autoplayHoverPause:true,
            mouseDrag: true,
            responsiveClass: true,
            navText: ["<i class='fa-solid fa-angle-left'></i>", "<i class='fa-solid fa-angle-right'></i>"],
            responsive: {
                0: {
                    items: 1,
                },
                480: {
                    items: 1,
                },
                767: {
                    items: 1,
                },
                992: {
                    items: 1,
                },
            },
        };

    if ( $(window).width() < 767 ) {
        var owlActive = owl.owlCarousel(owlOptions);
    } else {
        owl.addClass('off');
    }

    $(window).resize(function() {
        if ( $(window).width() < 767 ) {
            if ( $('.featured-blogs-con').hasClass('off') ) {
                var owlActive = owl.owlCarousel(owlOptions);
                owl.removeClass('off');
            }
        } else {
            if ( !$('.featured-blogs-con').hasClass('off') ) {
                owl.addClass('off').trigger('destroy.owl.carousel');
                owl.find('.owl-stage-outer').children(':eq(0)').unwrap();
            }
        }
    });
});
});


// ______________________

