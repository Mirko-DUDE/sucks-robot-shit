<template>
  <div class="h-full bg-black text-white site-container">
    <Header/>

    <main class="relative min-h-full mt-8 project overflow-hidden">
      <section>
        <div class="grid grid-cols-12">
          <div class="col-span-10 col-start-2">
            <h1 class="font-bold text-24 lg:text-56 leading-35 lg:leading-64 uppercase outlined outlined--white"
                v-html="data.project.section1.title"></h1>
          </div>
        </div>

        <div class="grid grid-cols-12 lg:mt-64 font-secondary text-22 lg:text-30 leading-30 lg:leading-40">
          <div class="hidden lg:block col-span-12 lg:col-span-4 lg:col-start-2">
            <img class="object-cover object-center"
                 v-if="data.project.section1.image"
                 :src="data.project.section1.image"
                 alt=""/>
          </div>

          <div class="col-span-10 col-start-2 lg:col-span-5 lg:col-start-7 flex flex-col justify-between mt-40 lg:mt-0">
            <p v-html="data.project.section1.description1"/>

            <img class="lg:hidden object-cover object-center mt-40 lg:mt-0"
                 style="aspect-ratio: 4/3"
                 v-if="data.project.section1.image"
                 :src="data.project.section1.image"
                 alt=""/>

            <p class="mt-40 lg:mt-0" v-html="data.project.section1.description2"/>
          </div>
        </div>
      </section>

      <section class="mt-64 lg:mt-0">
        <div class="grid grid-cols-12">
          <div class="col-span-10 col-start-2 lg:col-span-8 lg:col-start-4 lg:mt-80">
            <h1 class="font-bold text-24 lg:text-56 leading-35 lg:leading-64 uppercase outlined text-right outlined--white"
                v-html="data.project.section2.title"></h1>
          </div>
        </div>

        <div class="grid grid-cols-12 lg:mt-55 font-secondary lg:text-30 lg:leading-40 mt-20 lg:mt-0">
          <div class="col-span-10 col-start-2 lg:col-span-5 lg:col-start-2 lg:pr-30">
            <p class="text-right lg:text-left" v-html="data.project.section2.description"></p>
          </div>

          <div class="col-span-10 col-start-2 lg:col-span-5 mt-30 lg:mt-0">
            <img :src="data.project.section2.image" alt=""/>
          </div>
        </div>
      </section>

      <section class="mt-30 lg:mt-80 pb-80">
        <div class="grid grid-cols-12">
          <div class="col-span-10 col-start-2 lg:col-span-8 lg:col-start-2">
            <h2 class="font-bold text-24 lg:text-56 leading-35 lg:leading-64 uppercase outlined outlined--white"
                v-html="data.project.section3.title"></h2>
          </div>

          <div class="col-span-10 col-start-2 lg:col-span-8 lg:col-start-3 mt-30">
            <p class="font-secondary lg:text-22 leading-30"
               v-html="data.project.section3.description"></p>
          </div>
        </div>
      </section>

      <section class="bg-white text-black py-80">
        <div class="grid grid-cols-12">
          <div class="col-span-12 text-center">
            <h3 class="font-bold text-36 lg:text-56 leading-35 lg:leading-64 uppercase outlined" v-html="data.project.whoWheAre.title"/>
          </div>
        </div>

        <div class="brand grid grid-cols-12 mt-64 lg:mt-80 font-secondary"
             v-for="(brand, index) in data.project.whoWheAre.brands"
             :class="( index & 1 ) ? 'lg:text-right' : 'lg:text-left'">
          <div class="col-span-10 col-start-2">
            <img class="inline-block" :src="brand.logo" :alt="brand.name"/>
          </div>

          <div class="mt-64 col-span-10 col-start-2 lg:col-span-7"
               :class="( index & 1 ) ? 'lg:col-start-5' : 'lg:col-start-2'">
            <p class="text-22 lg:text-30 leading-30 lg:leading-40" v-html="brand.description"></p>

            <a class="inline-block mt-8 uppercase underline" :href="brand.link">Discover more</a>
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

const getSiteData = () => import('~/static/data.json').then(m => m.default || m)

export default {
  components: {Header, Footer},
  async asyncData() {
    return await getSiteData().then(request => {
      const data = request
      return {data}
    })
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
  }
}
</script>

<style scoped>
main {
  padding-top: 200px
}

.brand img {
  max-width: 60vw;

  @screen lg {
    max-width: 337px;
  }
}
</style>
