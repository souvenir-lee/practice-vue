<template>
  <div>
    <base-card>
      <base-button 
        @click="setSelecetedTab('stored-resource')" 
        :mode="storedResButtonMode"
      >Stored Resources</base-button>
      <base-button 
        @click="setSelecetedTab('add-resource')" 
        :mode="addResButtonMode"
      >Add Resource</base-button>
    </base-card>
    <keep-alive>
      <component :is="selectedTab"></component>
    </keep-alive>
  </div>
</template>

<script>
import StoredResource from './StoredResource.vue'
import AddResource from "./AddResource.vue"
export default {
  components: {
    StoredResource,
    AddResource
  },
  data() {
    return {
      selectedTab: 'stored-resource',
      storeResources: [
        { id: 'official-guide',
          title: 'Official Guide',
          description : 'The official Vue.js documentation',
          link: 'http"://vue.org'
        },
        { id: 'Google',
          title: 'Google',
          description : 'Learn to google...',
          link: 'http"://google.com'
        }
      ]
    }
  },
  provide() {
    return {
      resources: this.storeResources,
      addResource : this.addResource,
      removeResource : this.removeResource
    }
  },
  computed: {
    storedResButtonMode() {
      return this.selectedTab === 'stored-resource' ? null : 'flat'
    },
    addResButtonMode() {
      return this.selectedTab === 'add-resource' ? null : 'flat'
    }
  },
  methods: {
    setSelecetedTab(tab) {
      this.selectedTab = tab
    },
    addResource(title, description, url) {
      const newReource = {
        id: new Date().toISOString(),
        title: title,
        description : description,
        link : url
      }
      this.storeResources.unshift(newReource)
      this.selectedTab = 'stored-resource'
    },
    removeResource(resId){
      const resIndex = this.storeResources.findIndex(res => res.id === resId)
      this.storeResources.splice(resIndex, 1)
      // this.storeResources.filter(
      //   (res) => res.id !==resId)
      // console.log(this.StoredResource.length)
    }
  },
}
</script>