<template>
  <section>
    <h2>name : {{ name }}</h2>
    <h3>age : {{ age }}</h3>
  </section>
</template>
<script>
export default {
  // ActiveUser should output a username (h2) and age (h3)
  props:{
    name: {
      type:String,
      required : true
    },
    age: {
      type:String,
      required : true
    }
  },
  // data(){
  //   return {
  //     username: '',
  //     userAge: ''
  //   }
  // }
}
</script>