import Vue from "vue";
import VueRouter from "vue-router";

import store from "./store";

import App from "./App";

import AuthHandler from "./components/AuthHandler.vue";
import Upload from "./components/Upload.vue";
import Gallery from "./components/Gallery.vue";

Vue.use(VueRouter);

export const router = new VueRouter({
  mode: "history",
  routes: [
    { path: "/upload", component: Upload },
    { path: "/gallery", component: Gallery },
    { path: "/oauth2/callback", component: AuthHandler },
  ],
});

new Vue({
  store,
  router,
  render: (h) => h(App),
}).$mount("#app");
