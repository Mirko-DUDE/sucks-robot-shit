<template>
  <main class="flex justify-center items-center h-100 main-error">
    <div>
      <h1 class="lg:text-3xl font-bold">
        <span v-if="error.statusCode === 404">Page not found</span>
        <span v-else>An error occurred</span>
      </h1>

      <NuxtLink to="/">Back to home</NuxtLink>
    </div>
  </main>
</template>

<script>
export default {
  props: ['error'],
  layout: 'error' // you can set a custom layout for the error page
}
</script>
