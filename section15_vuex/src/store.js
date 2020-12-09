import { createStore } from 'vuex';

const counterModule = {
  namespaced: true, //다른 store에 동일한 변수가 있더라도 사용할 수 있음
  state() {
    return {
      counter: 0
    }
  },
  mutations: {
    increment(state) {
      state.counter = state.counter + 2
    },
    increase(state, payload) {
      state.counter = state.counter + payload.value
    },
  },
  actions: {
    increment(context) {
      setTimeout(() => {
        context.commit('increment')
      }, 2000)
    },
    increase(context, payload) {
      console.log(context)
      context.commit('increase', payload)
    },
  },
  getters: {
    //상위 store에 있는 getters를 사용하게 될 경우
    //testAuth(state, getters, rootState, rootGetters) 등으로 root의 내용을 사용할 수 있다
    finalCounter(state) {
      return state.counter * 3
    },
    normalizedCounter(state, getters) {
      const finalCounter = getters.finalCounter
      if (finalCounter < 0) {
        return 0
      }
      if (finalCounter > 100) {
        return 100
      }
      return finalCounter
    },
  }
}

const store = createStore({
  modules: {
    number: counterModule
  },
  state() {
    return {
      isLoggedIn: false
    }
  },
  mutations: {  //동기적으로 실행
    setAuth(state, payload) {
      state.isLoggedIn = payload.isAuth
    }
  },
  actions: { //비동기적으로 실행
    login(context) {
      context.commit('setAuth', { isAuth: true })
    },
    logout(context) {
      context.commit('setAuth', { isAuth: false })
    }
  },
  getters: {
    userIsAuthenticated(state) {
      return state.isLoggedIn
    }
  }
})

export default store