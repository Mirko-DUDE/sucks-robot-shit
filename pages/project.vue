<template>
  <div class="text-black bg-white site-container">
    <Header/>

    <main class="relative min-h-full home overflow-hidden"></main>

    <Footer/>
  </div>
</template>

<script>
import Header from "../components/Header"
import Footer from "../components/Footer"

const
  getSiteData = () => import('~/static/data.json').then(m => m.default || m)

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

    }
  }
}
