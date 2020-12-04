const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '',
      lastName: ''
      //fullname: ''
    };
  },
  watch: {
    //특정 순간이 되었을 때 업데이트 되는 용도
    //사실 정확하게 어떤 차이가 있는지는 모르겠다
    counter(value) {
      if (value > 50) {
        this.counter = 0
      }
    }
  },
  computed: {
    //methods와 유사하지만 html에서 불러올 때 굳히 호출하지 않아도 됨. 
    //선언만 하면 됨. 여기는 method와 달리 동립적인 공간. 
    //vue가 전역적으로 읽어질 때, 여기는 특정 시점에서만 실행되고 읽어지게 됨.
    //methods 상시적으로 바뀌는 부분을, 여기는 특정 시점에서 실행되어야 하는 함수들을 넣어두면 좋을 것 같음.
    //eventbinding은 되지 않음
    fullname() {
      console.log('다시 실행되는 중')
      if (this.name === '' || this.lastName === '') {
        return ''
      }
      return this.name + ' ' + this.lastName
    }
  },
  methods: {
    add(num) {
      this.counter = this.counter + num;
    },
    reduce(num) {
      this.counter = this.counter - num;
    },
    resetName() {
      this.name = ''
      this.lastName = ''
    }
  }
});

app.mount('#events');
