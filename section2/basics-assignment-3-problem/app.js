// 버튼을 연결하고 값(숫자)을 계산한다.
// 정확히 37의 결과가 나올 때까지 "아직 없음"을 표시하십시오.
// 결과가 37보다 클 경우 "너무 많이!" 표시

//"결과"의 변경 사항을 확인하고 5초 후 값을 0으로 재설정하십시오.

const app = Vue.createApp({
  data() {
    return {
      count: 0,
      result: ''
    }
  },
  watch: {
    checkNum() {
      const that = this
      setTimeout(function () {
        that.count = 0
      }, 5000)
    }
  },
  computed: {
    checkNum() {
      if (this.count < 37) {
        return 'Not there yet'
      } else if (this.count === 37) {
        return this.count
      } else {
        return 'Too much!'
      }
    },
    reset() {
      setTimeout(() => { this.result }, 5000)
    }
  },
  methods: {
    addFive() {
      this.count = this.count + 5
      console.log(this.count)
    },
    addOne() {
      this.count = this.count + 1
      console.log(this.count)
    },
  }
})

app.mount('#assignment')