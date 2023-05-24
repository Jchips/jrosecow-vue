<template>
  <div class="blog">
    <BlogNav>J. Rose Dance Blog</BlogNav>
    <BlogMain :blog="blog" />
  </div>
</template>

<style lang="scss">
@import "@/sass/blogs.scss";
</style>

<script>
// import BlogPost from "@/components/BlogPost.vue"
import BlogNav from "@/components/BlogNav.vue"
import BlogMain from "@/components/BlogMain.vue"
import blogData from "@/json/blog.json"
export default {
  data() {
    return {
      blog: blogData.dance_blog
    }
  },
  components: {
    // BlogPost,
    BlogNav,
    BlogMain
  }
}
</script>