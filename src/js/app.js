import * as flsFunctions from "./modules/functions.js";
import "./modules/jquery-3.7.1.min.js";
import "./modules/bootstrap.bundle.min.js";
import "./modules/fslightbox.js";
import "./modules/acordion.js";
import './components.js';

flsFunctions.isWebp();

// Import swiper
import Swiper, { Navigation, Pagination, Autoplay, Mousewheel, EffectFade, Thumbs, Scrollbar } from 'swiper';
Swiper.use([Navigation, Pagination, Autoplay, Mousewheel, EffectFade, Thumbs, Scrollbar]);

// Инициализация слайдера partnersSlider
const partnersSlider = document.querySelector('.partnersSlider');
var mySwiperPartners = new Swiper(partnersSlider, {
  slidesPerView: 4,
  speed: 800,
  spaceBetween: 40,
  navigation: {
    nextEl: document.querySelector('.partners .sliderNavNext'),
    prevEl: document.querySelector('.partners .sliderNavPrev'),
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    576: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    992: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    1200: {
      slidesPerView: 4,
      spaceBetween: 40,
    },
  },
});


const mediaQuery768 = window.matchMedia('(min-width: 768px)');
if (mediaQuery768.matches) {
  // Инициализация слайдера threeSlider
  document.querySelectorAll('.threeSlider').forEach(n => {
    const mySwiperThreesTemp = new Swiper(n, {
      slidesPerView: 3,
      speed: 800,
      navigation: {
        nextEl: n.closest('.threeSliderW').querySelector('.sliderNavNext'),
        prevEl: n.closest('.threeSliderW').querySelector('.sliderNavPrev'),
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
      },
    });
  });
}


// Инициализация слайдера fourSlider
document.querySelectorAll('.fourSlider').forEach(n => {
  const mySwiperThreesTemp = new Swiper(n, {
    slidesPerView: 3,
    speed: 800,
    spaceBetween: 40,
    navigation: {
      nextEl: n.closest('.fourSliderW').querySelector('.sliderNavNext'),
      prevEl: n.closest('.fourSliderW').querySelector('.sliderNavPrev'),
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      992: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
      1200: {
        slidesPerView: 4,
        spaceBetween: 40,
      },
    },
  });
});

// Инициализация слайдера articleSlider
const articleSlider = document.querySelector('.articleSlider');
var mySwiperArticle = new Swiper(articleSlider, {
  slidesPerView: 1,
  speed: 800,
  spaceBetween: 10,
  effect: 'fade',
  autoplay: {
    delay: 7000,
  },
  fadeEffect: {
    crossFade: true
  },
  navigation: {
    nextEl: document.querySelector('.sliderNavNext'),
    prevEl: document.querySelector('.sliderNavPrev'),
  },
});

// Инициализация слайдера introSlider
const introSlider = document.querySelector('.introSlider');
var mySwiperIntro = new Swiper(introSlider, {
  slidesPerView: 1,
  speed: 800,
  spaceBetween: 10,
  effect: 'fade',
  autoplay: {
    delay: 7000,
  },
  fadeEffect: {
    crossFade: true
  },
  pagination: {
    el: document.querySelector('.intro .swiper-pagination'),
    clickable: true,
    type: 'bullets',
  },
});

// Инициализация слайдера introSlider
const aboutSlider = document.querySelector('.aboutSlider');
var mySwiperAbout = new Swiper(aboutSlider, {
  slidesPerView: 1,
  speed: 800,
  spaceBetween: 10,
  effect: 'fade',
  autoplay: {
    delay: 7000,
  },
  fadeEffect: {
    crossFade: true
  },
  pagination: {
    el: document.querySelector('.about .swiper-pagination'),
    clickable: true,
    type: 'bullets',
  },
});

// Burger
const btnMenu = document.querySelector('#toggle');
const menu = document.querySelector('.headerNav');
const bodyEl = document.querySelector('body');
const btnClose = document.querySelector('.btnClose');

const toggleMenu = function () {
  menu.classList.toggle('active');
}
const toggleBurger = function () {
  btnMenu.classList.toggle('active');
}
const bodyOverflow = function () {
  bodyEl.classList.toggle('hidden');
}
const menuClose = function () {
  toggleBurger();
  bodyOverflow();
  toggleMenu();
}

btnMenu?.addEventListener('click', function (e) {
  e.stopPropagation();
  toggleMenu();
  toggleBurger();
  bodyOverflow();
});

btnClose?.addEventListener('click', function (e) {
  menuClose();
});




