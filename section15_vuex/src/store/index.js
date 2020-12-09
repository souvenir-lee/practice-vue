import { createStore } from 'vuex';

import rootMutation from './mutation'
import rootAction from './actions'
import rootGetter from './getters'
import counterModule from './counter/index'

const store = createStore({
  modules: {
    number: counterModule
  },
  state() {
    return {
      isLoggedIn: false
    }
  },
  mutations: rootMutation,
  actions: rootAction,
  getters: rootGetter
})

export default store