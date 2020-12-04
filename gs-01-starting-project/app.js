Vue.createApp({
  data() {
    return {
      goals: [],
      enteredValue: '',
    };
  },
  methods: {
    addGoal() {
      this.goals.push(this.enteredValue);
    },
  },
}).mount('#app');

// const buttonEl = document.querySelector('button');
// const inputEl = document.querySelector('input');
// const listEl = document.querySelector('ul');

// function addGoal() {
//  const enteredValue = inputEl.value;
//  const listItmeEl = document.createElement('li');
//  listItmeEl.textContent = enteredValue;
//  listItmeEl.appendChild(listItmeEl);
//  inputEl.value = '';
// }

// buttonEl.addEventListener('click', addGoal);
