const swiperHero = new Swiper('.swiper_hero', {
  loop: true,
  pagination: {
    el: '.swiper-hero-pagination',
    clickable: true,
    renderBullet: function (index, className) {
      console.log(className);
      return `<span class="${className} swiper-hero-pagination__item"></span>`;
    },
  },
});

const swiperNews = new Swiper('.swiper_news', {
  loop: true,
  slidesPerView: 3,
  spaceBetween: 24,
  navigation: {
    nextEl: '.news .swiper-button-next',
    prevEl: '.news .swiper-button-prev',
  },
  scrollbar: {
    el: '.news .swiper-scrollbar',
  },
});