<template>
  <div id="app">
    <Header />
    <router-view />
    <b-loading
      :is-full-page="true"
      :active.sync="isLoading"
      :can-cancel="false"
    ></b-loading>
  </div>
</template>

<style>
</style>
<script>
import Header from "./components/Header.vue";
import { mapGetters } from "vuex";
export default {
  name: "App",
  components: {
    Header,
  },
  computed: {
    ...mapGetters(["isLoading"]),
  },
};
</script>
