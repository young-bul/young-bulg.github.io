/*
Copyright (c) 2017 
------------------------------------------------------------------
[Master Javascript]

Project:	Responsive Horse Club HTML Template

-------------------------------------------------------------------*/
(function($) {
    "use strict";
    var landingpage = {
        initialised: false,
        version: 1.0,
        mobile: false,
        init: function() {

            if (!this.initialised) {
                this.initialised = true;
            } else {
                return;
            }

            /*-------------- Horse Club Functions Calling ---------------------------------------------------
            ------------------------------------------------------------------------------------------------*/
            this.Search();
            this.Banner();
            this.Gallery();
            this.Counter();
            this.Video_popup();
            this.Test_slider();
            this.Team_slider();
            this.MailFunction();



        },

        /*-------------- Horse Club definition ---------------------------------------------------
        ---------------------------------------------------------------------------------------------------*/
        //Search 
        Search: function() {
            $(".hc_search i").on("click", function() {
                $(".hc_search_wrapper").addClass("hc_search_open");

            });
			$(".hc_search_close i").on("click", function() {
                $(".hc_search_wrapper").removeClass("hc_search_open");

            });

        },
        //Banner 
        Banner: function() {
            var swiper = new Swiper('.hc_banner_slider .swiper-container', {
                pagination: '.swiper-pagination',
                paginationClickable: true,
                nextButton: '.swiper-button-next',
                prevButton: '.swiper-button-prev',
                loop: true,
                speed: 2000,
                spaceBetween: 0
            });

        },


        //Gallery
        Gallery: function() {
            $('.hc_popup_gallery').magnificPopup({
                delegate: 'a.icon-picture',
                type: 'image',
                gallery: {
                    enabled: true,
                },

            });

        },

        // Counter
        Counter: function() {
            if ($('.hc_counter_box').length > 0) {
                $('.hc_counter_box').appear(function() {
                    $('.hc_counter_num').countTo();
                });
            }
        },


        //Video popup
        Video_popup: function() {
            $('.hc_popup_youtube').magnificPopup({
                disableOn: 700,
                type: 'iframe',
                mainClass: 'mfp-fade',
                removalDelay: 160,
                preloader: false,
                fixedContentPos: false
            });

        },
        // Testimonial Slider
        Test_slider: function() {
            var swiper = new Swiper('.hc_test_slider .swiper-container', {
                pagination: '.swiper-pagination',
                nextButton: '.swiper-button-next',
                prevButton: '.swiper-button-prev',
                paginationClickable: true,
                spaceBetween: 30,
                centeredSlides: true,
                autoplay: 3000,
                speed: 1000,
                loop: true,
                autoplayDisableOnInteraction: false
            });

        },
        // Team Slider
        Team_slider: function() {
            var swiper = new Swiper('.hc_team_slider .swiper-container', {
                nextButton: '.swiper-button-next',
                prevButton: '.swiper-button-prev',
                slidesPerView: 3,
                centeredSlides: true,
                paginationClickable: true,
                loop: true,
                autoplay: false,
                spaceBetween: 30,
                breakpoints: {
                    // when window width is <= 320px
                    320: {
                        slidesPerView: 1,
                        spaceBetween: 10
                    },
                    // when window width is <= 480px
                    480: {
                        slidesPerView: 1,
                        spaceBetween: 20
                    },
                    // when window width is <= 640px
                    767: {
                        slidesPerView: 2,
                        spaceBetween: 30
                    }
                }

            });

        },

        //Help mail function	
        MailFunction: function() {
            $('.submit_frm').on('click', function() {
                var u_name = $('#name').val();
                var u_num = $('#number').val();
                var u_email = $('#email').val();
                var u_msg = $('#message').val();

                $.ajax({
                    type: "POST",
                    url: "contactmail.php",
                    data: {
                        'username': u_name,
                        'usernumber': u_num,
                        'useremail': u_email,
                        'user_msg': u_msg,
                    },
                    success: function(msg) {
                        var full_msg = msg.split("#");
                        if (full_msg[0] == '1') {
                            $('#name').val("");
                            $('#number').val("");
                            $('#email').val("");
                            $('#message').val("");
                            $('#err_msg').html(full_msg[1]);
                        } else {
                            $('#name').val(u_name);
                            $('#number').val(u_num);
                            $('#email').val(u_email);
                            $('#message').val(u_msg);
                            $('#err_msg').html(full_msg[1]);
                        }
                    }
                });
            });
        },




    };

    $(document).ready(function() {
        landingpage.init();
    });

    // Load Event

    $(window).on('load', function() {
        jQuery(".loader").fadeOut();
        jQuery(".loader").delay(600).fadeOut("slow");

    });


    //On scroll fixed menu
    $(window).scroll(function() {
        var wh = window.innerWidth;
        if (wh > 767) {
            var h = window.innerHeight;
            var window_top = $(window).scrollTop() + 1;
            if (window_top > 100) {
                $('.int_menu_wrapper').addClass('int_fixed');
            } else {
                $('.int_menu_wrapper').removeClass('int_fixed');
            }
        }

    });



})(jQuery);