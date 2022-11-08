<template>
  <div class="ui secondary pointing menu">
    <router-link
      to="/"
      class="item"
      :class="whichRoute() == '/' ? 'active' : ''"
      >Home</router-link
    >

    <router-link
      to="/upload"
      v-if="isLoggedIn"
      class="item"
      :class="whichRoute() == '/upload' ? 'active' : ''"
      >Upload</router-link
    >
    <router-link
      to="/gallery"
      v-if="isLoggedIn"
      class="item"
      :class="whichRoute() == '/gallery' ? 'active' : ''"
      >Gallery</router-link
    >

    <div class="right menu">
      <a
        v-if="isLoggedIn"
        @click="
          logOut();
          if (whichRoute() !== '/') $router.push('/');
        "
        class="ui item"
        >Logout</a
      >
      <a v-else @click="logIn()" class="ui item">Login</a>
    </div>
  </div>
</template>

<script>
import router from "../main";
import { mapActions, mapGetters } from "vuex";

export default {
  name: "Header",
  methods: {
    ...mapActions(["logIn"]),
    ...mapActions(["logOut"]),
    whichRoute() {
      return this.$route.path;
    },
    redirectHome() {
      router.push("/");
    },
  },
  computed: {
    ...mapGetters(["isLoggedIn"]),
  },
};
</script>

<style scoped></style>
