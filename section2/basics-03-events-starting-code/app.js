const app = Vue.createApp({
  data() {
    return {
      counter: 10,
      name: '',
      confirmedName: ''
    };
  },
  methods: {
    add(num) {
      this.counter = this.counter + num
    },
    reducer(num) {
      this.counter = this.counter - num
    },
    setName(event, greet) {
      this.name = event.target.value + ' ' + greet
    },
    alretInput() {
      alert('Submit!!')
    },
    confirmInput() {
      this.confirmedName = this.name
    }
  }
});

app.mount('#events');
