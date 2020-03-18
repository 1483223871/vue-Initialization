import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token: localStorage.getItem("Authorization") ? localStorage.getItem("Authorization") : ""
  },
  mutations: {
    changeLogin(state, user) {
      state.token = user.token;
      localStorage.setItem('Authorization', user.token);
    }
  },
  actions: {
  },
  modules: {
  }
})
