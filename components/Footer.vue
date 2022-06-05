<template>
  <footer class="w-full flex justify-center items-center bg-black text-white">
    <img src="/images/logos/sucks-white.svg" alt="logo sucks white"/>

    <img src="/images/logos/designwanted-white.svg" alt="logo designwanted white"/>

    <img src="/images/logos/caracol-white.png" alt="logo caracol white"/>
  </footer>
</template>

<style lang="postcss" scoped>
footer {
  padding: 70px 0;

  img:not(:first-child) {
    margin-left: 70px;
  }
}

img {
  max-height: 48px;
  object-fit: contain;
  object-position: center;
}
</style>
