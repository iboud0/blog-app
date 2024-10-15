<template>
  <div id="app">
    <NavBar />
    <router-view />
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue';

export default {
  components: {
    NavBar
  }
};
</script>

<style>
/* You can add global styles here */
</style>
