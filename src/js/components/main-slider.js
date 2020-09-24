import Swiper from 'swiper';
import vars from '../_vars';

const bannerSlider = new Swiper(vars.$bannerSlider, {
  loop: true,
  pagination: {
    el: '.banner-pag',
    type: 'bullets',
    clickable: true,
  },
})
