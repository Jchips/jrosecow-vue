<template>
  <navbar-view />
  <footer-view />
</template>

<style lang="scss">
// @import '@/sass/reset.scss';
@import "@/sass/style.scss";

#app {
  // font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  // text-align: center;
  color: #2c3e50;
}
</style>

<script>
import NavbarView from '@/components/NavbarView.vue'
import FooterView from '@/components/FooterView.vue'
export default {
  components: {
    NavbarView,
    FooterView,
  }
}
</script>
