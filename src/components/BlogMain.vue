<template>
  <main>
    <aside>
      <div class="aside-container">
        <h3>Table of contents</h3>
        <a class="nav-link" :href="'#' + blogPost.id" v-for="blogPost in blog" :key="blogPost.id">&bull; {{ blogPost.title
        }}</a>
      </div>
    </aside>
    <section class="blogs text-center">
      <a class="nav-link scroll-to-top" href="#">Scroll to top</a>
      <BlogPost v-for="blogPost in blog" :key="blogPost.id" :blogPost="blogPost" />
    </section>
  </main>
</template>

<script>
import BlogPost from "@/components/BlogPost.vue"
export default {
  props: {
    blog: Object
  },
  components: {
    BlogPost
  },
  // mounted() {
  //   this.$refs.blogPost.map(post => {
  //     console.log(post.$el.style.maxWidth);
  //   });
  // }
}
</script>