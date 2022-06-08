<template>
  <footer class="w-full flex flex-col lg:flex-row justify-center items-center bg-black text-white">
    <a href="https://suckshop.it" target="_blank">
      <img src="/images/logos/sucks-white.svg" alt="logo sucks white"/>
    </a>

    <a href="https://caracol-am.com" target="_blank">
      <img src="/images/logos/designwanted-white.svg" alt="logo designwanted white"/>
    </a>

    <a href="https://designwanted.com" target="_blank">
      <img src="/images/logos/caracol-white.png" alt="logo caracol white"/>
    </a>
  </footer>
</template>

<style lang="postcss" scoped>
footer {
  padding: 70px 0 50px 0;

  @screen lg {
    padding: 70px 0;
  }

  @screen lg {
    a:not(:first-child) {
      margin-left: 70px;
    }
  }
}

img {
  max-height: 48px;
  max-width: 174px;
  object-fit: contain;
  object-position: center;
  margin-bottom: 20px;

  @screen lg {
    margin-bottom: 0;
  }

  @screen lg {
    max-width: none;
  }
}
</style>
