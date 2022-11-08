<template>
  <div class="gallery-layout">
    <img
      v-for="image in allImages"
      :src="image.link"
      :key="image.id"
      height="200"
    />
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "Gallery",
  created() {
    this.fetchImages();
  },
  methods: {
    ...mapActions(["fetchImages"]),
    change() {
      this.css("background-color: red");
    },
  },
  computed: {
    ...mapGetters(["allImages"]),
  },
};
</script>

<style scoped>
.gallery-layout {
  column-count: 3;
  column-gap: 0;
}
.gallery-layout img {
  padding: 5px;
  max-width: 100%;
}
</style>
