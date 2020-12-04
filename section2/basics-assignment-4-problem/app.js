const app = Vue.createApp({
  data() {
    return {
      inputStyle: '',
      toggle: true,
      inputClass: '',
    }
  },
  computed: {
    //1) user1, user2 클래스 이름에 따라 다른 스타일 적용
    //input에 작성된 내용을 P 태그에 나오도록 하기
    //2) 단락의 내용이 버튼이 클릭될 때마다 .visible .hidden 스타일이 적용되어야
    paraClass() {
      return {
        user1: this.inputClass === 'user1',
        user2: this.inputClass === 'user2',
        visible: this.toggle,
        hidden: !this.toggle
      }
    }
  },
  methods: {
    //1) user1, user2 클래스 이름에 따라 다른 스타일 적용
    //input에 작성된 내용을 P 태그에 나오도록 하기
    //2) 단락의 내용이 버튼이 클릭될 때마다 .visible .hidden 스타일이 적용되어야
    toggleClick() {
      this.toggle = !this.toggle
      console.log(this.toggle)
    },
    //3) 아래 단락에 동적 인라인 스타일링을 추가하고 사용자가 배경색을 입력할 수 있도록 한다.
    styleChange() {
      this.inputStyle = event.target.value
    }
  }
})

app.mount('#assignment')