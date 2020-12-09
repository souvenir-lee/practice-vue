export default { //비동기적으로 실행
  login(context) {
    context.commit('setAuth', { isAuth: true })
  },
  logout(context) {
    context.commit('setAuth', { isAuth: false })
  }
}