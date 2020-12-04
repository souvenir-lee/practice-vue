<template>
  <section class="container">
    <h2>{{ user.userName }}</h2>
    <h2>{{ user.age }}</h2>
  </section>
</template>

<script>
// import { ref } from 'vue'
import { reactive } from 'vue'

export default{
  setup() {
    // const uName = ref('dksj')
    // const uAge = ref(31)
    const user = reactive({
      userName :'djlks',
      age : 31
    })

    setTimeout(function() {
      user.userName = '바뀌었습니다'
      user.age = 26
    }, 2000)
    return { user }
  }
}

</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}

.container {
  margin: 3rem auto;
  max-width: 30rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
  text-align: center;
}
</style>