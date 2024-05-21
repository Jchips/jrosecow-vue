<template>
  <div class="blog">
    <ReviewsNav>J. Rose Tech Reviews</ReviewsNav>
    <BlogMain :blog="blog" />
  </div>
</template>

<style lang="scss">
@import "@/sass/blogs.scss";
</style>

<script>
// import BlogPost from "@/components/BlogPost.vue"
import ReviewsNav from "@/components/blog/ReviewsNav.vue"
import BlogMain from "@/components/blog/BlogMain.vue"
import blogData from "@/json/blog.json"
export default {
  data() {
    return {
      blog: blogData.tech_reviews
    }
  },
  components: {
    ReviewsNav,
    BlogMain
  }
}
</script>