import {Swiper, Pagination} from 'swiper';
import 'swiper/swiper.min.css'
import 'swiper/modules/pagination/pagination.min.css'

export const swiper = (sliderEl, paginationOption, onActiveIndexChange) => new Swiper(sliderEl, {
  modules: [Pagination],
  pagination: paginationOption,
  on: {
    activeIndexChange: function (event) {
      onActiveIndexChange()
    }
  }
})
