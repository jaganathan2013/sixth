$(document).ready(function () {
    "use strict";
    // toggle
    jQuery(".menu-toggle").click(function () {
        jQuery(".main-navigation").toggleClass("toggled");
    });

    jQuery(".header-menu ul li a").click(function () {
        jQuery(".main-navigation").removeClass("toggled");
    });

    // fixed nav

    gsap.registerPlugin(ScrollTrigger);

    var elementFirst = document.querySelector('.site-header');
    ScrollTrigger.create({
        trigger: "body",
        start: "30px top",
        end: "bottom bottom",

        onEnter: () => myFunction(),
        onLeaveBack: () => myFunction(),
    });

    function myFunction() {
        elementFirst.classList.toggle('sticky_head');
    }

    
// parallax
    var scene = $(".js-parallax").get(0);
    var parallaxInstance = new Parallax(scene);



// short button all items
    jQuery(window).on('load', function () {
        $('body').removeClass('body-fixed');

        //activating tab of filter           All 4 names
        let targets = document.querySelectorAll(".filter");//4 class name <li class="filter "
        let activeTab = 0;
        let old = 0;
        let dur = 0.4;
        let animation;

        //event lisener 0 1 2 3  4 time run and applayed
        for (let i = 0; i < targets.length; i++) {
            targets[i].index = i;
            targets[i].addEventListener("click", moveBar);
        }

        // initial position targets[0] 0 first 
        gsap.set(".filter-active", {
            x: targets[0].offsetLeft,
            width: targets[0].offsetWidth
        });

        function moveBar() {
            //(0 1 2 3 != 0  inital)  this  start
            if (this.index != activeTab) {
               //undefind on animation
                if (animation && animation.isActive()) {
                    animation.progress(1);
                }
                //declar anomatin and time
                animation = gsap.timeline({
                    defaults: {
                        duration: 0.4
                    }
                });
                //0=0   /activetable old value copy  (old) variable
                //get old value
                // old = activeTab;
                //activeTab 2 <= 2  this.index;     index  to  activetable
                //get new value
                old = activeTab;
                activeTab = this.index;
                //current class
                animation.to(".filter-active", {
                    x: targets[activeTab].offsetLeft,
                    width: targets[activeTab].offsetWidth
                });
//old text black
                animation.to(targets[old], {
                    color: "#0d0d25",
                    ease: "none"
                }, 0);
                //new text white
                animation.to(targets[activeTab], {
                    color: "white",
                    ease: "none"
                }, 0);

            }

        }
    });
    
// slider
 var book_table = new Swiper(".book-table-img-slider", {
        slidesPerView: 1,
        spaceBetween: 20,
        loop: true,
        autoplay: {
            delay: 900,
            disableOnInteraction: false,
        },
        speed: 2000,
        effect: "coverflow",
        coverflowEffect: {
            rotate: 3,
            stretch: 2,
            depth: 400,
            modifier: 5,
            slideShadows: false,
        },
        loopAdditionSlides: true,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
    });

    var team_slider = new Swiper(".team-slider", {
        slidesPerView: 3,
        spaceBetween: 30,
        loop: true,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },speed: 2000,
        effect: "coverflow",

        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        breakpoints: {
            0: {
                slidesPerView: 1,
            },
            768: {
                slidesPerView: 2,
            },
            992: {
                slidesPerView: 3,
            },
            1200: {
                slidesPerView: 3,
            },
        },
    });
  
//filter box
    jQuery(".filters").on("click", function () {
        //remove default row colums
        jQuery("#menu-dish").removeClass("bydefault_show");
    });
    $(function () {
        var filterList = {
            init: function () {
                $("#menu-dish").mixItUp({
                    selectors: {
                        target: ".dish-box-wp",
                        filter: ".filter",
                    },
                    animation: {
                        effects: "fade",
                        easing: "ease-in-out",
                    },
                    load: {
                        filter: ".all, .breakfast, .lunch, .dinner",
                    },
                });
            },
        };
        filterList.init();
    });



});






//dout
//gsap