const app = Vue.createApp({
  data() {
    return {
      textP: '',
      enteredText: '',
    }
  },
  methods: {
    //버튼 누를 때마다 alert 발생하기
    //input에 작성된 결과물을 출력되게 하기?
    //2번을 그대로 하되, 결과물이 엔터를 누를때만 나오도록 하기
    alertBt() {
      alert('show Alert!!')
    },
    showInput() {
      this.textP = event.target.value
    },
    enterInput() {
      this.enteredText = event.target.value
    }
  }
})

app.mount('#assignment')