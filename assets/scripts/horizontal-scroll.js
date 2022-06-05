import {gsap} from 'gsap'
import {ScrollTrigger} from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const
  horizontalContainer = document.querySelector('.section-horizontal')

export const horizontalScrollSections = () => {
    /*
      let images = horizontalContainer.querySelectorAll('img')
    */


    gsap.to(horizontalContainer, {
      x: () => -(horizontalContainer.scrollWidth - document.documentElement.clientWidth) + "px",
      ease: "none",
      scrollTrigger: {
/*        scroller: smoothScroller,*/
        trigger: horizontalContainer,
        pin: true,
        scrub: true,
        invalidateOnRefresh: true,
        fastScrollEnd: true,
        end: () => "+=" + horizontalContainer.offsetWidth * 6
      }
    })


    /*  ScrollTrigger.refresh()
      helpers.updateSmoothScroll().then(module => module.smoothScrollUpdate())*/
  }
