<template>
  <div class="blog">
    <BlogNav>J. Rose Film Blog</BlogNav>
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
      blog: blogData.film_blog
    }
  },
  components: {
    BlogNav,
    BlogMain
  }
}
</script>