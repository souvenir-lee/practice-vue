export default {  //동기적으로 실행
  setAuth(state, payload) {
    state.isLoggedIn = payload.isAuth
  }
}