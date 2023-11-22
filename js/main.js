/*-----------------------------------------------------------------------------------

  Template Name: Security Guard
  Template URI: #
  Description: Security Guard is a unique one-page website template designed in HTML with a simple & beautiful look.
  Author: Medialesta
  Author URI: https://themeforest.net/user/aeknasd147/portfolio
  Version: 1.0

-----------------------------------------------------------------------------------*/

/*-------------------------------
[  Table of contents  ]
---------------------------------
  01. Typing Animation
  02. wow js active
  03. Full Page Js
  04. Smooth Scrolling
  05. Swiper Js
  06. Contact Form
  07. Owl Carousel

  /*--------------------------------
[ End table content ]
-----------------------------------*/

$(document).ready(function() {
    /*-------------------------------------------
      01. Typing Animation
    --------------------------------------------- */
    (function($) {
        $.fn.writeText = function(content) {
            let contentArray = content.split("");
            let current = 0;
            let elem = this;
            function writeChar() {
                if (current < contentArray.length) {
                    elem.text(elem.text() + contentArray[current++]);
                    setTimeout(writeChar, 80);
                }
            };
            writeChar();
        };
    })(jQuery);
    // input text for typing animation
    $("#holder").writeText("Hire Security + CCTV + Security Equipment");
    

    /*-------------------------------------------
      02. wow js active
    --------------------------------------------- */
    new WOW().init();


    /*-------------------------------------------
      03. Full Page Js
    --------------------------------------------- */
    // initiate full page scroll
    $("#fullpage").fullpage({
        scrollBar: true,
        responsiveWidth: 400,
        navigation: true,
        navigationTooltips: ["home", "services", "why-us", "testimonials", "contact", "connect"],
        anchors: ["home", "services", "why-us", "testimonials", "contact", "connect"],
        fitToSection: false,
        afterLoad: function(anchorLink, index) {
            var loadedSection = $(this);
            //using index
            if (index == 1) {
                $(".fa-chevron-down").css("opacity", "1");
                $(".header-links a").css("color", "white");
                $(".nav-item > a.contact-button").css("color", "black");
                $(".navbar-brand > img").attr('src', 'img/security-guard-logo-white.webp');
            } else if (index != 1) {
                $(".header-links a").css("color", "black");
                $(".navbar-brand > img").attr('src', 'img/security-guard-logo.webp');
            }

            var navLinks = document.querySelectorAll('.nav-item');
            // add click event listener for every navLinks
            navLinks.forEach(function(link) {
                link.addEventListener('click', function() {
                    // remove active class from all
                    navLinks.forEach(function(navLink) {
                        navLink.classList.remove('active');
                    });

                    // add active class to clicked
                    link.classList.add('active');
                });
            });
        }
    });
    // move section down one
    $(document).on("click", "#moveDown", function() {
        $.fn.fullpage.moveSectionDown();
    });
    // fullpage.js link navigation
    $(document).on("click", "#hero", function() {
        $.fn.fullpage.moveTo(1);
    });
    $(document).on("click", "#services", function() {
        $.fn.fullpage.moveTo(2);
    });
    $(document).on("click", "#why-us", function() {
        $.fn.fullpage.moveTo(3);
    });
    $(document).on("click", "#testimonials", function() {
        $.fn.fullpage.moveTo(4);
    });
    $(document).on("click", "#contact", function() {
        $.fn.fullpage.moveTo(5);
    });


    /*-------------------------------------------
      04. Smooth Scrolling
    --------------------------------------------- */
    $("a[href*=#]:not([href=#])").click(function() {
        if (location.pathname.replace(/^\//, "") == this.pathname.replace(/^\//, "") && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $("[name=" + this.hash.slice(1) + "]");
            if (target.length) {
                $("html,body").animate({
                    scrollTop: target.offset().top
                }, 700);
                return false;
            }
        }
    });
});


/*-------------------------------------------
  05. Swiper Js
--------------------------------------------- */
var swiper = new Swiper(".swiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 100,
        modifier: 3,
        slideShadows: true
    },
    keyboard: {
        enabled: true
    },
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true
    },
    breakpoints: {
        640: {
            slidesPerView: 2
        },
        768: {
            slidesPerView: 1
        },
        1024: {
            slidesPerView: 2
        },
        1560: {
            slidesPerView: 3
        }
    }
});


/*-------------------------------------------
  06. Contact Form
--------------------------------------------- */
$(function() {
    var form = $("#ajax-contact");
    var formMessages = $("#form-messages");

    $(form).submit(function(e) {
        e.preventDefault();
        var formData = $(form).serialize();

        $.ajax({
            type: "POST",
            url: $(form).attr("action"),
            data: formData
        }).done(function(response) {
            console.log(response);
            if(response === 'Successful') {
                $(formMessages).removeClass("error").addClass("success").text(response);
                $("#name, #email, #message").val("");
            } else {
                $(formMessages).removeClass("success").addClass("error").text(response);
            }
        }).fail(function(data) {
            $(formMessages).removeClass("success").addClass("error").text(data.responseText || "Oops! An error occured and your message could not be sent.");
        });
    });
});



/*-------------------------------------------
  07. Owl Carousel
--------------------------------------------- */
$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    navText: ["<i class='fa fa-caret-left'></i>", "<i class='fa fa-caret-right'></i>"],
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 3
        }
    }
})