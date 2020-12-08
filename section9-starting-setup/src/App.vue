<template>
  <div>
    <TheHeader />
    <button @click="setSelectedComponent('active-goals')">Avtive Goal</button>
    <button @click="setSelectedComponent('manage-goals')">Manage Goal</button>
    <keep-alive>
      <component :is="selectedComponent"></component>
    </keep-alive>
 
   </div>
</template>

<script>
import TheHeader from './components/TheHeader.vue'; //local component
//  import BadgeList from './components/BadgeList.vue';
//  import UserInfo from './components/UserInfo.vue';
//  import CourseGaols from './components/CourseGoals.vue'
import ActiveGoals from './components/ActiveGoals.vue'
import ManageGoals from './components/ManageGoals.vue'

export default {
  components: {
    TheHeader,
    ActiveGoals,
    ManageGoals,
  },
  data() {
    return {
      selectedComponent: 'active-goals',
      activeUser: {
        name: 'Maximilian Schwarzmüller',
        description: 'Site owner and admin',
        role: 'admin',
      },
    };
  },
  methods: {
    setSelectedComponent(cmp) {
      this.selectedComponent = cmp
    }
  }
};
</script>

<style >
html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>