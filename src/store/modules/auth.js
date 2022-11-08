import qs from "qs";

import api from "../../api/imgur";
import { router } from "../../main";

const state = {
  token: window.localStorage.getItem("imgur_token"),
};

const getters = {
  isLoggedIn: (state) => !!state.token,
};

const mutations = {
  setToken: (state, token) => {
    state.token = token;
  },
};

const actions = {
  logIn: () => {
    api.login();
  },
  finalizeLogin({ commit }, hash) {
    var q = qs.parse(hash.replace("#", ""));
    commit("setToken", q.access_token);
    window.localStorage.setItem("imgur_token", q.access_token);
    router.push("/");
  },
  logOut: ({ commit }) => {
    commit("setToken", null);
    window.localStorage.removeItem("imgur_token");
  },
};

export default {
  state,
  getters,
  mutations,
  actions,
};
