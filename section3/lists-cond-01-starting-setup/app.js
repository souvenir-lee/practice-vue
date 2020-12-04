const app = Vue.createApp({
  data() {
    return {
      goals: [],
      addEnterGoal: ''
    };
  },
  methods: {
    addGoal() {
      this.goals.push(this.addEnterGoal)
    },
    deleteGoal(index) {
      this.goals.splice(index, 1)
    }
  }
});

app.mount('#user-goals');
