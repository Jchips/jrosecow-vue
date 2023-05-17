<template>
  <div class="blog">
    <main class="row">
      <aside class="col-lg-2">
        <div class="aside-container">
          <h3>Table of contents</h3>
          <!-- <li v-for="blogPost in blog" :key="blogPost.id"><a :href="'#' + blogPost.id">{{ blogPost.title }}</a></li> -->
          <a href="#">Scroll to top</a>
          <a :href="'#' + blogPost.id" v-for="blogPost in blog" :key="blogPost.id">&bull; {{ blogPost.title }}</a>
        </div>
      </aside>
      <section class="blogs col-lg-9">
        <BlogPost v-for="blogPost in blog" :key="blogPost.id" :blogPost="blogPost"/>
      </section>
    </main>
  </div>
</template>

<style lang="scss">
@import "@/sass/blogs.scss";
@import "@/sass/blog-imgs.scss";
</style>

<script>
import BlogPost from "@/components/BlogPost.vue"
import blogData from "@/json/blog.json"
export default {
  data() {
    return {
      blog: blogData.main_blog
    }
  },
  components: {
    BlogPost
  }
}
</script>