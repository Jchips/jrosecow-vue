<template>
  <div class="blog">
    <!-- <header>
      <h1></h1> -->
      <nav>
        <h1>J. Rose Blog</h1>
        <ul class="nav justify-content-end">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">Main blog</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Dance blog</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Movies + Shows</a>
          </li>
        </ul>
      </nav>
    <!-- </header>-->
    <main class="row">
      <aside class="col-lg-2">
        <div class="aside-container">
          <h3>Table of contents</h3>
          <a class="nav-link" href="#">Scroll to top</a>
          <a class="nav-link" :href="'#' + blogPost.id" v-for="blogPost in blog" :key="blogPost.id">&bull; {{ blogPost.title }}</a>
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