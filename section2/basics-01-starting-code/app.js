const app = Vue.createApp({
  //config, property
  data() { //global property //importan option
    return {
      //여기는 항상 object로 들어감.
      //'key : 기본값'으로 설정됨
      courseGaolA: 'Finish the course and learn Vue!',
      courseGaolB: 'Maser Vue!',
      vueLink: 'https://vuejs.org/'
    }
  },
  //object, function으로만 이루어진 객체 //importan option
  methods: {
    outputGaol() {
      const randomNumber = Math.random()
      if (randomNumber < 0.5) {
        return this.courseGaolA
        //class 형식이므로 this가 반드시 필요함. 
      } else {
        return this.courseGaolB
      }
    }
  }
})

app.mount('#user-goal')