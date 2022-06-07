import {gsap} from 'gsap'
import {ScrollTrigger} from 'gsap/ScrollTrigger'
import {DrawSVGPlugin} from 'gsap/DrawSVGPlugin'

gsap.registerPlugin(DrawSVGPlugin);
gsap.registerPlugin(ScrollTrigger);

export const lineOnScroll = () => {
  const sections = document.querySelectorAll('.section-line');

  for(const section of sections) {
    const path = section.querySelector('svg path')

    gsap.set(path, {
      drawSVG: 0
    })

    gsap.to(path,{
      scrollTrigger: {
        trigger: section,
        start: 'top center',
        end: 'bottom top',
        scrub: true,
        once: true,
        onEnter: () => {
          console.log('enter')
        }
      },
      ease: 'none',
      drawSVG: '100%'
    })
  }
}
