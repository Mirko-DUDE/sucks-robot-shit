<template>
  <div class="text-black bg-white site-container">
    <Header/>
    <main class="relative min-h-full home overflow-hidden">
      <section class="relative flex flex-col justify-end w-full h-screen overflow-hidden text-white hero">
        <img class="absolute top-0 left-0 w-full h-full object-cover object-center"
             v-if="data.hero.image"
             :src="data.hero.image"
             alt="Robot Shit"/>

        <div class="relative flex flex-col justify-center items-center z-20">
          <h1 class="mt-2 lg:mt-0 text-18 lg:text-30 lg:leading-35 font-bold leading-none text-center">
            <span class="block" v-text="data.hero.title"/>
            <span class="block" v-text="data.event.where"/>
            <span class="block" v-text="data.event.when"/>
          </h1>

          <p class="mt-4 font-secondary">({{ data.event.address }})</p>
        </div>
      </section>

      <section id="section-1" class="relative flex items-center section-line">
        <div class="grid grid-cols-12">
          <div class="col-span-5 col-start-2">
            <img :src="data.section1.image.url"/>
            <p class="mt-4 font-secondary" v-html="data.section1.image.description"/>
          </div>

          <div class="absolute top-0 mt-8 text-right overlay-text">
            <h2 class="text-50 leading-64 font-bold uppercase outlined" v-html="data.section1.title"/>
          </div>
        </div>
      </section>

      <section class="flex items-center section-line mt-28">
        <div class="grid grid-cols-12">
          <div class="col-span-5 col-start-7 lg:text-right">
            <h2 class="text-50 leading-64 font-bold uppercase outlined">
              <span v-html="data.section2.title.el1"/>
              <strong class="lg:text-80 lg:leading-85" v-html="data.section2.title.el2"/>
            </h2>
          </div>

          <div class="col-span-5 col-start-2 py-28">
            <p class="font-secondary" v-html="data.section2.description"/>
          </div>
        </div>
      </section>

      <section class="flex items-center bg-black text-white section-line section-h-fixed">
        <div class="grid grid-cols-12 w-full">
          <div class="flex flex-col justify-between col-span-5 col-start-2">
            <h2 class="flex flex-col text-50 leading-64 font-bold uppercase">
              <span v-html="data.section3.title.el1"/>
              <span v-html="data.section3.title.el2"/>
              <span v-html="data.section3.title.el3"/>
              <span v-html="data.section3.title.el4"/>
            </h2>

            <p class="font-secondary" v-html="data.section3.description"/>
          </div>

          <div class="col-span-4">
            <div class="relative">
              <img class="absolute left-auto top-0 right-0 rotate-text" src="/images/text-fill.svg" alt=""/>

              <div class="relative aspect-w-3 aspect-h-4 overflow-hidden">
                <img class="absolute left-auto top-0 right-0 rotate-text z-10" src="/images/text-stroke.svg" alt=""/>
                <img :src="data.section3.image.url" alt="">
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="section-line section-horizontal section-h-fixed">
        <div class="flex items-center w-screen h-full text-center section-horizontal__el">
          <div class="grid grid-cols-12 w-full">
            <div class="col-span-10 col-start-2 lg:col-span-4 lg:col-start-5">
              <h2 class="text-50 leading-64 font-bold uppercase"
                  v-html="data.sectionHorizontal['1'].title"/>
            </div>
          </div>
        </div>

        <div class="w-screen h-full bg-black text-white section-horizontal__el">
          <div class="grid grid-cols-12 w-full h-full">
            <div class="col-span-12 lg:col-span-5 lg:col-start-2">
              <p class="font-secondary" v-html="data.sectionHorizontal['2'].entry"/>
              <h2 class="text-50 leading-64 font-bold uppercase" v-html="data.sectionHorizontal['2'].title"/>
            </div>

            <div class="flex items-end lg:col-span-3 lg:col-start-9">
              <div class="flex flex-col partners text-right">
                <img src="/images/logos/sucks.svg" alt="logo sucks"/>

                <img src="/images/logos/designwanted.svg" alt="logo designwanted"/>

                <img src="/images/logos/caracol.png" alt="logo caracol"/>
              </div>
            </div>
          </div>
        </div>

        <div class="w-screen h-full section-horizontal__el">
          <div class="grid grid-cols-12 w-full h-full">
            <div class="col-span-12 lg:col-span-5 lg:col-start-2">
              <h2 class="text-50 leading-64 font-bold uppercase outlined" v-html="data.sectionHorizontal['3'].title"/>
            </div>

            <div class="flex items-end lg:col-span-3 lg:col-start-9">
              <div class="flex flex-col partners text-right">
                <p class="font-secondary" v-html="data.sectionHorizontal['3'].description"/>
              </div>
            </div>
          </div>
        </div>

        <div class="relative w-screen h-full bg-black text-white">
          <div class="grid grid-cols-12 w-full h-full">
            <div class="col-span-4 lg:col-start-2 section-horizontal__el">
              <p class="font-secondary text-30 leading-40" v-html="data.sectionHorizontal['4'].description"/>
              <h2 class="mt-12 text-40 leading-50 uppercase" v-html="data.sectionHorizontal['4'].title"/>
            </div>
          </div>

          <div class="relative lg:absolute top-0 right-0 w-1/2 h-full flex justify-center items-center">
            <img class="absolute top-0 left-0 w-full h-full"
                 ref="sliderBackground"
                 v-if="sliderBackground"
                 :src="sliderBackground"
                 alt=""/>

            <div class="w-full flex flex-col">
              <div class="relative swiper z-10" ref="slider">
                <div class="swiper-wrapper">
                  <div class="bg-white text-black swiper-slide"
                       v-for="(slide, index) in data.sectionHorizontal['4'].slides">
                    <div class="aspect-h-1 aspect-w-1 bg-black">
                      <img
                        v-if="slide.logo"
                        :src="slide.logo"
                        alt=""/>
                    </div>
                  </div>
                </div>

                <div class="z-30 swiper-pagination" ref="sliderPagination"></div>
              </div>

              <div class="relative z-10 text-center slide-caption">
                <h4 class="lg:text-38 lg:leading-64 font-bold uppercase" v-if="sliderTitle"
                    v-text="sliderTitle"/>

                <p class="font-secondary lg:text-20 uppercase" v-if="sliderSubtitle"
                   v-text="sliderSubtitle"/>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="bg-black text-white text-center find-more">
        <h3 class="text-50 leading-64 font-bold uppercase">
          <span v-text="data.event.more"/>
          <span class="block" v-text="data.event.where"/>
          <span class="block" v-text="data.event.when"/>
        </h3>

        <p class="mt-4 font-secondary">({{ data.event.address }})</p>
      </section>

      <section class="text-center">
        <div class="grid grid-cols-12">
          <div class="col-span-8 col-start-3">
            <form class="flex flex-col py-8"
                  @submit.prevent>
              <h3 class="text-50 leading-64 font-bold uppercase"
                  v-text="data.form.title"></h3>

              <input class="mt-8 mb-4 border border-black font-secondary text-black rounded-full py-3 px-4 text-center"
                     type="email"
                     required
                     :placeholder="data.form.emailPlaceholder"/>

              <button class="font-secondary uppercase" type="submit" v-text="data.form.submitText"/>
            </form>
          </div>
        </div>
      </section>
    </main>

    <Footer/>
  </div>
</template>

<script>
import Header from "../components/Header"
import Footer from "../components/Footer"

import {gsap} from 'gsap'

const
  horizontalScrolling = () => import('assets/scripts/horizontal-scroll'),
  slider = () => import('assets/scripts/slider.js')

const getSiteData = () => import('~/static/data.json').then(m => m.default || m)

export default {
  components: {Header, Footer},
  async asyncData() {
    return await getSiteData().then(request => {
      const data = request
      return {data}
    });
  },
  data() {
    return {
      slider: null,
      sliderBackground: null,
      sliderTitle: null,
      sliderSubtitle: null,
      name: null,
      email: null,
      acceptedPolicy1: false,
      acceptedPolicy2: false,
      disabled: false,
      mailSent: false
    }
  },
  methods: {},
  mounted() {
    horizontalScrolling().then(module => module.horizontalScrollSections())
    slider().then(module => {
      this.sliderBackground = this.data.sectionHorizontal[4].slides[0].background
      this.sliderTitle = this.data.sectionHorizontal[4].slides[0].title
      this.sliderSubtitle = this.data.sectionHorizontal[4].slides[0].description


      this.slider = module.swiper(this.$refs.slider, {
        el: this.$refs.sliderPagination,
        clickable: true,
        type: 'bullets',
      }, () => {

        gsap.to(this.$refs.sliderBackground, {
          opacity: 0,
          onComplete: () => {
            this.sliderBackground = this.data.sectionHorizontal[4].slides[this.slider.activeIndex].background

            this.sliderTitle = this.data.sectionHorizontal[4].slides[this.slider.activeIndex].title
            this.sliderSubtitle = this.data.sectionHorizontal[4].slides[this.slider.activeIndex].description


            gsap.to(this.$refs.sliderBackground, {
              opacity: 1
            })
          }
        })
      })
    })
  }
}
</script>

<style>
body,
#__nuxt,
#__layout {
  @apply relative h-full;
}
</style>

<style lang="postcss" scoped>

br {
  @media (max-width: 1200px) {
    display: none;
  }
}

.hero {
  padding-bottom: 66px;

  &:before {
    @apply block absolute top-0 left-0 w-full h-full bg-black opacity-20 z-10;
    content: '';
  }
}

.section-h-fixed {
  height: 706px;
}

.overlay-text {
  width: 50%;
  left: 40%;
}

#section-1 {
  padding-top: 50px;

  img {
    margin-top: 80px
  }
}

@keyframes rotateText {
  from {
    transform: translateX(50%) rotate(0);
  }

  to {
    transform: translateX(50%) rotate(360deg);
  }
}

.rotate-text {
  width: 247px;
  height: 247px;
  transform: translateX(50%);
  animation: rotateText 10s linear infinite;
}

.section-horizontal {
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  height: 100vh;

  &__el {
    padding: 60px 0;
  }
}

.partners {
  img {
    &:not(:first-child) {
      margin-top: 30px;
    }

    &:last-child {
      object-fit: contain;
      object-position: right;
      max-height: 25px;
    }
  }
}

.find-more {
  padding: 75px 0;
}

.swiper {
  width: 273px;
}

.slide-caption {
  @screen lg {
    margin-top: 110px;
  }
}
</style>
