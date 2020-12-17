<template>
  <div id="app">
    <Header />
    <router-view />
  </div>
</template>

<style>
</style>
<script>
import Header from "./components/Header.vue";
export default {
  name: "App",
  components: {
    Header,
  },
};
</script>
