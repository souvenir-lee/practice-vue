const app = Vue.createApp({
  data() {
    return {
      freinds: [
        {
          id: 'manuel',
          name: 'Manuel Lorenz',
          phone: '1234 5678 991',
          email: 'manuel@localhost.com',
        },
        {
          id: 'julie',
          name: 'Julie Jones',
          phone: '09876 543 221',
          email: 'julie@localhost.com',
        }
      ],
      toggle: false
    }
  },
  methods: {
    toggledDetails() {
      this.toggle = !this.toggle
    }
  }
})

app.mount('#app')