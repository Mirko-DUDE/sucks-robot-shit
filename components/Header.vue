<template>
  <header
    class="absolute flex lg:block justify-between items-center top-0 left-0 w-full px-30 lg:pl-0 z-30 lg:text-center">
    <img class="relative inline-block w-full relative logo z-20" src="/images/logo.svg" alt="Robot Shit logo">

    <button class="lg:absolute flex flex-col ml-30 z-20 burger"
            :class="isOpen ? 'burger--active' : null"
            @click="toggleMenu">
      <span class="block w-full h-px bg-white rounded-full"></span>
      <span class="block w-full h-px bg-white rounded-full"></span>
      <span class="block w-full h-px bg-white rounded-full"></span>
    </button>

    <div
      class="absolute invisible opacity-0 flex justify-center items-center top-0 left-0 bg-black text-white text-24 leading-25 uppercase w-screen h-screen z-10"
      ref="menu">
      <ul class="text-center">
        <li>
          <NuxtLink to="/">Home</NuxtLink>
        </li>

        <li>
          <NuxtLink class="pointer-events-none" to="/discover-more">Discover more</NuxtLink>
        </li>
      </ul>
    </div>
  </header>
</template>

<script>
import {gsap} from 'gsap'

export default {
  data() {
    return {
      isOpen: false
    }
  },
  methods: {
    toggleMenu: function () {
      this.isOpen = !this.isOpen

      window.scrollTo({
        top: 0,
        behavior: "smooth"
      })

      gsap.to('html', {
        overflow: this.isOpen ? 'hidden' : 'auto'
      })

      gsap.to(this.$refs.menu, {
        autoAlpha: this.isOpen ? 1 : 0,
        duration: .4
      })
    }
  }
}
</script>

<style lang="postcss" scoped>
header {
  padding-top: 54px;

  @screen lg {
    padding-top: 62px;
  }
}

.logo {
  max-width: 272px;

  @screen lg {
    width: 456px;
    max-width: none;
  }
}

.burger {
  @screen lg {
    top: 65px;
    right: 122px;
  }

  &--active {
    span:nth-child(1) {
      transform: rotate(45deg);
      transform-origin: 0;
    }

    span:nth-child(2) {
      transform: scaleX(0);
      transform-origin: left;
    }

    span:nth-child(3) {
      transform: rotate(-45deg);
      transform-origin: -9px -3px;
    }
  }

  span {
    width: 38px;
    transition: transform .4s ease;

    &:not(:first-child) {
      margin-top: 16px;
    }
  }
}

ul {
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: white;
  color: transparent;

  li {
    margin-top: 20px;
  }

  a {
    -webkit-text-stroke-width: 1px;
    -webkit-text-stroke-color: white;
    color: transparent;
  }

  .nuxt-link-exact-active {
    @apply text-white font-bold;
  }
}
</style>
