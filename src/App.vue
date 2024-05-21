<template>
  <!-- <navbar-view />
  <footer-view /> -->
  <WrapperView />
</template>

<style lang="scss">
// @import '@/sass/reset.scss';
// @import "bootstrap";
// @import "bootstrap/dist/css/bootstrap.min.css";
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
import WrapperView from '@/views/WrapperView.vue';
// import NavbarView from '@/components/NavbarView.vue'
// import FooterView from '@/components/FooterView.vue'
// import scrollBehaviorMixin from '@/events/scrollBehavior';
export default {
  components: {
    WrapperView
    // NavbarView,
    // FooterView,
  },
  // mixins: [scrollBehaviorMixin],
}
</script>
