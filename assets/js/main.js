(function($) {
    "use strict";



$(".selectBox").on("click", function(e) {
  $(this).toggleClass("show");
  var dropdownItem = e.target;
  var container = $(this).find(".selectBox__value");
  container.text(dropdownItem.text);
  $(dropdownItem)
    .addClass("active")
    .siblings()
    .removeClass("active");
});

    /*****************************
     * Commons Variables
     *****************************/
    var $window = $(window),
        $body = $('body');

    /****************************
     * Sticky Menu
     *****************************/
    $(window).on('scroll', function() {
        var scroll = $(window).scrollTop();
        if (scroll < 100) {
            $(".sticky-header").removeClass("sticky");
        } else {
            $(".sticky-header").addClass("sticky");
        }
    });

    /**************************
     * Offcanvas: Menu Content
     **************************/
    function mobileOffCanvasMenu() {
        var $offCanvasNav = $('.offcanvas-menu'),
            $offCanvasNavSubMenu = $offCanvasNav.find('.mobile-sub-menu');

        /*Add Toggle Button With Off Canvas Sub Menu*/
        $offCanvasNavSubMenu.parent().prepend('<div class="offcanvas-menu-expand"></div>');

        /*Category Sub Menu Toggle*/
        $offCanvasNav.on('click', 'li a, .offcanvas-menu-expand', function(e) {
            var $this = $(this);
            if ($this.attr('href') === '#' || $this.hasClass('offcanvas-menu-expand')) {
                e.preventDefault();
                if ($this.siblings('ul:visible').length) {
                    $this.parent('li').removeClass('active');
                    $this.siblings('ul').slideUp();
                    $this.parent('li').find('li').removeClass('active');
                    $this.parent('li').find('ul:visible').slideUp();
                } else {
                    $this.parent('li').addClass('active');
                    $this.closest('li').siblings('li').removeClass('active').find('li').removeClass('active');
                    $this.closest('li').siblings('li').find('ul:visible').slideUp();
                    $this.siblings('ul').slideDown();
                }
            }
        });
    }
    mobileOffCanvasMenu();





$('#nav-trigger').click(function(){
    $(this).toggleClass('active');
    $('#all').toggleClass('open');
    $('#off-canvas').toggleClass('show');
});


// ==============================================
//                Swiper Slider Js
// ===========================================

    
    var swiper = new Swiper(".speakerSlider", {
        slidesPerView: 1,
        loop: true,
      effect: 'fade',
        pagination: {
            el: ".testimonialSlider-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        // autoplay: {
        //     delay: 1500,
        //     disableOnInteraction: false
        // },
    });





    /************************************************
     * Scroll Top
     ***********************************************/
    $('body').materialScrollTop();
    






})(jQuery);



$(document).ready(function() {
	$('.popup-youtube').magnificPopup({
    type: 'iframe'
  });
});




$('.image-popup').magnificPopup({
	type: 'image',
  mainClass: 'imgpoupup', 
  gallery:{
			enabled:true
		},

  zoom: {
    enabled: true, 

    duration: 300, // duration of the effect, in milliseconds
    easing: 'ease-in-out', // CSS transition easing function

    opener: function(openerElement) {

      return openerElement.is('img') ? openerElement : openerElement.find('img');
  }
}

});

$(".search").click(function() {
    $(".search-section").addClass("open");
  });

$('.remove_search').click(function() {
    $('.search-section').removeClass('open');
});




// Itpoint Event list
$(".contentVewButtons .xpenddetails1").click(function() {
    $(".eventItpiontDetails1").toggleClass("open");
});
$(".contentVewButtons .xpenddetails2").click(function() {
    $(".eventItpiontDetails2").toggleClass("open");
});
$(".contentVewButtons .xpenddetails3").click(function() {
    $(".eventItpiontDetails3").toggleClass("open");
});
$(".contentVewButtons .xpenddetails4").click(function() {
    $(".eventItpiontDetails4").toggleClass("open");
});







