const state = {
  isLogin: sessionStorage.getItem('islogin'),
  displayName: sessionStorage.getItem('displayName'),
  token: sessionStorage.getItem('token')
};
const getters = {
  getUserInfo: (state) =>{
    return JSON.parse(state.userinfo);
  }
};
const mutations = {
  LOGIN_SUCCESS(state, payload) {
    const { code, msg } = payload;
    if (code === 0) {
      sessionStorage.setItem('token', msg);
      state.isLogin = true;
    }
  },
  LOG_OUT(state, payload) {
    state.isLogin = false;
    state.displayName = '';
  },
  SET_USERINFO(state, payload){
    state.userinfo = JSON.stringify(payload);
  }
};
const actions = {
  logout({ commit }) {
    sessionStorage.removeItem('token');
    sessionStorage.removeItem('displayName');
    sessionStorage.removeItem('preUrl');
    sessionStorage.removeItem('islogin');
    commit('LOG_OUT');
  }
};
export default {
  state,
  mutations,
  getters,
  actions
};
