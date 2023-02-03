import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    v: null,
  },
  getters: {
    v: (state) => state.v,
  },
  mutations: {
    setValidateObj(state, obj) {
      state.v = obj;
    },
    saveUser(state, data) {
      state.user = data;
    },
  },
  actions: {
    saveUserInfo({ commit }, payload) {
      commit("saveUser", payload);
    },
  },
  modules: {},
});
