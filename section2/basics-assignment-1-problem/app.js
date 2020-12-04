const app = Vue.createApp({
  data() {
    return {
      name: 'hanSeul',
      age: 27,
      img: '',
    }
  },

  methods: {
    addAge() {
      return age + 5
    },
    randomNum() {
      return Math.random() //0과 1 사이에 랜덤한 수
    },

  }
})

app.mount('#assignment')