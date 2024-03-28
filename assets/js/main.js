$(function($) {

  const doc = document;

  const mediaBp = {
    bp1: 1140,
    bp2: 980,
    bp3: 860,
    bp4: 760,
    bp5: 590,
  }
  
  const swiperHeroOptions = {
    loop: true,
    pagination: {
      el: '.swiper-hero-pagination',
      clickable: true,
      renderBullet: function (index, className) {
        console.log(className);
        return `<span class="${className} swiper-hero-pagination__item"></span>`;
      },
    }
  };
  const swiperHero = initSwiper('.swiper_hero', swiperHeroOptions, mediaBp);
  
  const swiperNewsOptions = {
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
  };
  const swiperNews = initSwiper('.swiper_news', swiperNewsOptions, mediaBp, true);
  
  megaMenuDesktopOpenInit();
  toggleHeaderMenuInit();
  
  initCustomSelect('.products-filters__item');
  
  // FUNCTIONS -------------------
  function initCustomSelect(selector) {
    if (!$(selector).length) {
      return;
    }

    $(selector).select2({
      minimumResultsForSearch: -1,
      width: '100%',
      // dropdownAutoWidth: true,
    });
  }
  
  function initSwiper(selector, options, mediaBp, mobileDestroy = false) {
    if (!document.querySelector(selector)) {
      return;
    }
  
    const slider = new Swiper(selector, options);
  
    if (mobileDestroy) {
      window.addEventListener('resize', () => {
        if (window.innerWidth < mediaBp.bp5) {
          slider.destroy();
        }
      });
    }
  
    return slider;
  }
  
  function megaMenuDesktopOpenInit() {
    const logoMenuTitleEL = $('.logo__menu-title');

    $('.menu-item').hover(
      function() {
        const menuTitle = $(this).find('.menu-item__link').text();
        const isSubMenu = $(this).find('.sub-menu');

        if (!isSubMenu.length) {
          return;
        }
        $(this).find('.menu-item__content').slideDown();
        $(this).find('.sub-menu').fadeIn();
        if (window.innerWidth >= mediaBp.bp1) {
          logoMenuTitleEL.text(menuTitle).slideDown();
        }
      },
      function() {
        const menuTitle = $(this).text();
        $(this).find('.menu-item__content').slideUp();
        $(this).find('.sub-menu').fadeOut();
        if (window.innerWidth >= mediaBp.bp1) {
          logoMenuTitleEL.slideUp().text('');
        }
      },
    );

    $('.menu-item__open-btn').click(function(e) {
      e.stopPropagation();

      const parent = $(this).closest('.menu-item');
      const subMenu = parent.find('.sub-menu');
      const contentEl = parent.find('.menu-item__content');

      if (!subMenu.length) {
        return;
      }

      if (contentEl.is(':hidden')) {
        contentEl.slideDown();
        subMenu.fadeIn();
      } else {
        contentEl.slideUp();
        subMenu.fadeOut();
      }
      
    });
    
  }
  function toggleHeaderMenuInit() {
    const menuToggleBtn = doc.querySelector('.header__toggle-menu');
    const header = doc.querySelector('.header');
    const menuBlock = doc.querySelector('.header__menu-block');
  
    menuToggleBtn.onclick = () => {
      header.classList.toggle('header_open');
      menuBlock.classList.toggle('header__menu-block_open');
    }
  }

})

