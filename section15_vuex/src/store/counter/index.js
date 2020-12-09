import counterMutation from './mutation'
import counterAction from './actions'
import counterGetter from './getters'

const counterModule = {
  namespaced: true, //다른 store에 동일한 변수가 있더라도 사용할 수 있음
  state() {
    return {
      counter: 0
    }
  },
  mutations: counterMutation,
  actions: counterAction,
  getters: counterGetter
}

export default counterModule