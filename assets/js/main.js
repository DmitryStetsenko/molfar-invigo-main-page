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