<template>
  <header class="absolute top-0 left-0 w-full z-30 text-center">
    <img class="inline-block relative logo" src="/images/logo.svg" alt="Robot Shit logo">
  </header>
</template>

<style lang="postcss" scoped>
header {
  padding-top: 62px;
}

.logo {
  max-width: 272px;

  @screen lg {
    width: 456px;
    max-width: none;
  }
}
</style>
