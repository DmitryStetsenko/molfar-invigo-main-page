const mediaBp = {
  bp1: 1140,
  bp2: 980,
  bp3: 860,
  bp4: 760,
  bp5: 590,
}

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
  slidesPerView: 2,
  spaceBetween: 24,
  navigation: {
    nextEl: '.news .swiper-button-next',
    prevEl: '.news .swiper-button-prev',
  },
  scrollbar: {
    el: '.news .swiper-scrollbar',
  },
  breakpoints: {
    [mediaBp.bp3]: {
      slidesPerView: 3,
    },
  },
});

window.addEventListener('resize', () => {
  if (window.innerWidth < mediaBp.bp5) {
    swiperNews.destroy();
  }
});