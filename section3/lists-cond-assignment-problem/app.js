const app = Vue.createApp({
  data() {
    return {
      inputTask: '',
      tasks: [],
      hidden: true
    }
  },
  methods: {
    addTask() {
      this.tasks.push(this.inputTask)
    },
    shiftHidden() {
      this.hidden = !this.hidden
    },
    deleteList(index) {
      this.tasks.splice(index, 1)
    }
  }
})

app.mount('#assignment')