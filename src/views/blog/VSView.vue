<template>
  <div class="blog">
    <VSNav>J. Rose VS</VSNav>
    <BlogMain :blog="blog" />
  </div>
</template>

<style lang="scss">
@import "@/sass/blogs.scss";
</style>

<script>
import VSNav from "@/components/blog/VSNav.vue"
import BlogMain from "@/components/blog/BlogMain.vue"
import blogData from "@/json/blog.json"
export default {
  data() {
    return {
      blog: blogData.vs
    }
  },
  components: {
    VSNav,
    BlogMain
  }
}
</script>