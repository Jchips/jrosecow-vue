<template>
  <navbar-view />
  <footer-view />
</template>

<script>
import NavbarView from '@/components/NavbarView.vue'
import FooterView from '@/components/FooterView.vue'
// import scrollBehaviorMixin from '@/events/scrollBehavior';
export default {
  components: {
    NavbarView,
    FooterView,
  },
  // mixins: [scrollBehaviorMixin],
}
</script>