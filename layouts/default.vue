<template>
  <div class="flex flex-col min-h-full app-container">
    <Header/>

    <Nuxt/>

    <Footer/>
  </div>
</template>

<script>
import Header from "../components/Header"
import Footer from "../components/Footer"

export default {
  components: {Header, Footer},
}
</script>
