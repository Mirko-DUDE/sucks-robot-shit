<template>
  <div class="text-black bg-white site-container">
    <Header/>
    <main class="relative min-h-full home">
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

      <section class="section-line section-horizontal">
        <div>
          <h2 v-html="data.sectionHorizontal['1'].title"/>
        </div>

        <div class="bg-black text-white">
          <p v-html="data.sectionHorizontal['2'].entry"/>
          <h2 v-html="data.sectionHorizontal['2'].title"/>
        </div>

        <div>
          <h2 v-html="data.sectionHorizontal['3'].title"/>
          <p v-html="data.sectionHorizontal['3'].description"/>
        </div>

        <div>
          <h2 v-html="data.sectionHorizontal['4'].title"/>
          <p v-html="data.sectionHorizontal['4'].description"/>
        </div>
      </section>
    </main>
  </div>
</template>

<script>
import Header from "../components/Header"

const getSiteData = () => import('~/static/data.json').then(m => m.default || m)

export default {
  components: {Header},
  async asyncData() {
    return await getSiteData().then(request => {
      const data = request
      return {data}
    });
  },
  data() {
    return {
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
</style>
