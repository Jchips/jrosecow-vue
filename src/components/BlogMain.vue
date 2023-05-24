<template>
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
</template>

<script>
import BlogPost from "@/components/BlogPost.vue"
export default {
  data () {
    return {

    }
  },
  props: {
    blog: Object
  },
  components: {
    BlogPost
  }
}
</script>