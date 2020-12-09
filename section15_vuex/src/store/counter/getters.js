export default {
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