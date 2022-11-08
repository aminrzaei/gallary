import api from "../../api/imgur";
import { router } from "../../main";

const state = {
  images: [],
};

const getters = {
  allImages: (state) => state.images,
};

const mutations = {
  setImages: (state, images) => {
    state.images = images;
  },
};

const actions = {
  async fetchImages({ rootState, commit }) {
    // var response = await api.fetchImages(window.localStorage.getItem("imgur_token"));
    var { token } = rootState.auth;
    var response = await api.fetchImages(token);

    commit("setImages", response.data.data);
  },
  async uploadImages({ rootState }, images) {
    var { token } = rootState.auth;
    await api.uploadImage(images, token);
    router.push("/gallery");
  },
};

export default {
  state,
  getters,
  mutations,
  actions,
};
