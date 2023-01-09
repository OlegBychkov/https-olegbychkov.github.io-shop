const swiperReview = new Swiper('.swiper__review', {
  loop: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
    pauseOnMouseEnter: true,
  },
  
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  breakpoints:{
    320:{
      slidesPerView: 1,
      spaceBetween: 20,
    },
    800:{
      slidesPerView: 2,
      spaceBetween: 30,
    },
    1190:{
      slidesPerView: 3,
      spaceBetween: 30,
    }
  }
  });

const swiperClients = new Swiper('.swiper__clients', {
    loop: true,
    autoplay: {
      delay: 1700,
      disableOnInteraction: false,
      pauseOnMouseEnter: true,
    },
    
    navigation: {
      nextEl: '.swiper__clients-button-next',
      prevEl: '.swiper__clients-button-prev',
    },  

    breakpoints:{
      200:{
        slidesPerView: 1,
        spaceBetween: 50,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
      },
      400:{
        slidesPerView: 2,
        spaceBetween: 50,
      },
      600:{
        slidesPerView: 3,
        spaceBetween: 50,
      },
      800:{
        slidesPerView: 4,
        spaceBetween: 50,
      },
      900:{
        slidesPerView: 5,
        spaceBetween: 50,
      }
    }
  
  });

const timeSwiper = new Swiper('.time__swiper', {
    effect: "cards",
    grabCursor: true,
  });

const uSwiper = new Swiper('.u-swiper', {
  slidesPerView: 1,
  spaceBetween: 30,
  navigation: {
    nextEl: ".u-swiper-button-next",
    prevEl: ".u-swiper-button-prev",
  },
  pagination: {
    el: ".u-swiper-pagination",
  },
});