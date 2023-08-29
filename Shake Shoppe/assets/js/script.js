  //  customise cursor script
   const cursor = document.querySelector('.cursor');
   const cursor2 = document.querySelector('.cursor2');
   const cursor3 = document.querySelector('.cursor3');

   document.addEventListener('mousemove', e => {
     cursor.setAttribute("style", "top: "+(e.pageY - 28)+"px; left: "+(e.pageX - 28)+"px;"),
     cursor2.setAttribute("style", "top: "+(e.pageY - -45)+"px; left: "+(e.pageX - -75)+"px;"),
     cursor3.setAttribute("style", "top: "+(e.pageY - 7)+"px; left: "+(e.pageX - 7)+"px;")
   });
    
    var toggleBtn = document.querySelector(".toggleBtn");
    var downloadMenuBtn = document.querySelector(".downloadMenuBtn");
    var menu = document.querySelector('.menu');

    // intro - landing animation
    gsap.from(".text-inner > *", 2, {
        opacity: 0,
        delay: 2,
        stagger: 0.2
      })
      gsap.from(".toggleBtn", 1, {
        x: -150,
        y: - 150,
        delay: 2.4
      })
      gsap.from(".stripe1 img", 2, {
        y: 400,
        opacity: 0,
        stagger: 0.4,
        delay: 4
      })
      gsap.from(".stripe2 img", 2, {
        opacity: 0,
        stagger: 0.4,
        delay: 4
      })

      // menu animation
      var tl = new TimelineMax({paused: true});

      tl.to(".menu-icon", 1, {
        opacity: 0,
        rotation: 180
      })

      tl.to(".close-icon", 1, {
        opacity: 1,
        rotation: 180
      }, "-=0.9")

      tl.to(".menu", 1, {
        scale: 1
      }, "-=1")

      tl.from(".menu li", 1, {
        opacity: 0,
        x: -70,
        stagger: .3
      })

      tl.reverse();

      toggleBtn.onclick = function(){
        tl.reversed(!tl.reversed());
      }
      

      window.onscroll = () => {
    
          if(window.scrollY > 60){
              document.querySelector('#scroll-top').classList.add('active');
              document.querySelector('.downloadMenuBtn').classList.add('active');
          } else {
              document.querySelector('#scroll-top').classList.remove('active');
              document.querySelector('.downloadMenuBtn').classList.remove('active');
          }
          
      }
      

    
      // Initialize Swiper
        // var swiper = new Swiper(".swiper", {
        //   loop: true,
        //   grabCursor: true,
        //   autoplay: true,
        //   spaceBetween: 10,
        //   slidesPerView: 3,
        //   freeMode: true,
        //   watchSlidesProgress: true,
        //   navigation: {
        //     nextEl: ".swiper-button-next",
        //     prevEl: ".swiper-button-prev",
        //   },
        //   breakpoints: {
        //     350: {
        //       slidesPerView: 1,
        //     },
        //     450: {
        //       slidesPerView: 1,
        //     },
        //     768: {
        //       slidesPerView: 2,
        //     },
        //     991: {
        //       slidesPerView: 3,
        //     },
        //   },
        // });
        // Initialize Swiper
        var swiper = new Swiper(".milkshake-swiper", {
          loop: true,
          grabCursor: false,
          autoplay: true,
          spaceBetween: 10,
          slidesPerView: 3,
          freeMode: true,
          watchSlidesProgress: true,
          navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          },
          breakpoints: {
            350: {
              slidesPerView: 1,
            },
            450: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            991: {
              slidesPerView: 3,
            },
          },
        });
        // Initialize Swiper
        var swiper = new Swiper(".speciality-swiper", {
          loop: true,
          grabCursor: false,
          autoplay: true,
          spaceBetween: 10,
          slidesPerView: 3,
          freeMode: true,
          watchSlidesProgress: true,
          navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          },
          breakpoints: {
            350: {
              slidesPerView: 1,
            },
            450: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            991: {
              slidesPerView: 3,
            },
          },
        });
        // Initialize smoothies Swiper
        var swiper = new Swiper(".smoothies-swiper", {
          autoplay: true,
          spaceBetween: 10,
          slidesPerView: 2,
          navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          },
          breakpoints: {
            300: {
              slidesPerView: 1,
            },
            450: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            991: {
              slidesPerView: 2,
            },
          },
        });
        // Initialize iced-coffee Swiper
        var swiper = new Swiper(".iced-coffees-swiper", {
          loop: true,
          grabCursor: false,
          autoplay: true,
          spaceBetween: 10,
          slidesPerView: 3,
          freeMode: true,
          watchSlidesProgress: true,
          navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          },
          breakpoints: {
            350: {
              slidesPerView: 1,
            },
            450: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            991: {
              slidesPerView: 3,
            },
          },
        });
        // Initialize mocktails Swiper
        var swiper = new Swiper(".mocktails-swiper", {
          spaceBetween: 10,
          slidesPerView: 2,
          grabCursor : false,
          breakpoints: {
            300: {
              slidesPerView: 1,
            },
            450: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            991: {
              slidesPerView: 2,
            },
          },
        });
        // Initialize snacks Swiper
        var swiper = new Swiper(".snacks-swiper", {
          spaceBetween: 5,
          slidesPerView: 2,
          grabCursor : false,
          breakpoints: {
            300: {
              slidesPerView: 1,
            },
            450: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            991: {
              slidesPerView: 2,
            },
          },
        });