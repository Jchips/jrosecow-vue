<!-- Images -->
<!-- Wolf - https://pixabay.com/illustrations/werewolves-graveyard-cemetery-wolf-7504082/ -->
<template>
  <div class="blog">
    <ReviewsNav>J. Rose Movie Reviews</ReviewsNav>
    <BlogMain :blog="blog" />
  </div>
</template>

<style lang="scss">
@import "@/sass/blogs.scss";
</style>

<script>
import ReviewsNav from "@/components/blog/ReviewsNav.vue"
import BlogMain from "@/components/blog/BlogMain.vue"
import blogData from "@/json/blog.json"
export default {
  data() {
    return {
      blog: blogData.movie_reviews
    }
  },
  components: {
    ReviewsNav,
    BlogMain
  }
}
</script>