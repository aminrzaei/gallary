<template>
  <div class="droper">
    <input
      type="file"
      @change="
        uploadImages($event.target.files);
        showLoadning();
      "
      multiple
      accept="image/*"
    />
    <span v-if="!loading" class="droper-text">Drag Files Here!</span>
    <div v-if="loading" class="lds-ripple">
      <div></div>
      <div></div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "Upload",
  data() {
    return {
      loading: false,
    };
  },
  methods: {
    ...mapActions(["uploadImages"]),
    showLoadning() {
      this.loading = true;
    },
  },
  computed: {},
};
</script>

<style scoped>
.droper {
  color: rgb(44, 44, 44);
  display: flex;
  justify-content: center;
  align-items: center;
  height: 30vh;
  position: relative;
  margin: 60px auto;
  width: 70%;
  border: 2px dashed #ddd;
  border-radius: 5px;
  transition: 0.3s;
}
.droper:hover {
  background-color: #eee;
}
input {
  opacity: 0;
  cursor: pointer;
  height: 100%;
  width: 100%;
}
.droper-text {
  position: absolute;
}
.lds-ripple {
  display: inline-block;
  position: absolute;
  width: 80px;
  height: 80px;
}
.lds-ripple div {
  background-color: red;
  position: absolute;
  border: 4px solid #fff;
  opacity: 1;
  border-radius: 50%;
  animation: lds-ripple 1s cubic-bezier(0, 0.2, 0.8, 1) infinite;
}
.lds-ripple div:nth-child(2) {
  animation-delay: -0.5s;
}
@keyframes lds-ripple {
  0% {
    top: 36px;
    left: 36px;
    width: 0;
    height: 0;
    opacity: 1;
  }
  100% {
    top: 0px;
    left: 0px;
    width: 72px;
    height: 72px;
    opacity: 0;
  }
}
</style>
