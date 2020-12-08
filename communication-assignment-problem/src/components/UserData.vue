<template>
  <form @submit.prevent="submitData">
    <div>
      <label>User Name</label>
      <input type="text" placeholder="Your name" v-model="enteredName"/>
    </div>
    <div>
      <label>Age</label>
      <input type="text" placeholder="Your age" v-model="enteredAge"/>
    </div>
    <button>Add User</button>
  </form>
</template>
<script>
export default {
  // UserData should output two input fields => for name and age
  data() {
    return {
      enteredName: '',
      enteredAge: ''
    }
  },
  emits: ['entered-data'],
  methods: {
    submitData(){
      console.log('zzzz')
      this.$emit('entered-data', this.enteredName, this.enteredAge)
    }
  }
}
</script>

