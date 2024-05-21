<template>
  <div class="blog">
    <BlogNav>J. Rose Blog</BlogNav>
    <BlogMain :blog="blog" />
  </div>
</template>

<style lang="scss">
@import "@/sass/blogs.scss";
</style>

<script>
import BlogNav from "@/components/blog/BlogNav.vue"
import BlogMain from "@/components/blog/BlogMain.vue"
import blogData from "@/json/blog.json"

export default {
  data() {
    return {
      blog: blogData.main_blog
    }
  },
  components: {
    BlogNav,
    BlogMain
  }
}
</script>