<template>
  <div>
    <the-header title="RememberMe"></the-header>
    <the-resources></the-resources>
  </div>
</template>

<script>
// import StoredResou÷rce from './components/learning-resources/StoredResource.vue'
import TheHeader from './components/layouts/TheHeader.vue'
import TheResources from './components/learning-resources/TheResources.vue'

export default {
  components: {
    // StoredResource,
    TheHeader,
    TheResources
  },
  data() {
    return {
      
    }
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

* {
  box-sizing: border-box;
}

html {
  font-family: 'Roboto', sans-serif;
}

body {
  margin: 0;
}
</style>