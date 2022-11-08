<template>
  <div>Please Wait ...</div>
</template>


<script>
import { mapActions } from "vuex";

export default {
  name: "AuthHandler",
  methods: {
    ...mapActions(["finalizeLogin"]),
  },
  created() {
    this.finalizeLogin(window.location.hash);
  },
};
</script>


<style scoped>
</style>