<template>
  <main class="blog-content-wrapper text-center">
    <div class="side">
      <div class="aside-container">
        <h3>Table of contents</h3>
        <a class="nav-link" @click="scrollToElement(blogPost.id)" v-for="blogPost in blog" :key="blogPost.id">&bull;
          {{ blogPost.title }}
        </a>
      </div>
    </div>
    <div class="blog-posts">
      <a class="nav-link scroll-to-top" href="#">Scroll to top</a>
      <BlogPost v-for="blogPost in blog" :key="blogPost.id" :blogPost="blogPost" />
    </div>
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
  methods: {
    scrollToElement(id) {
      const element = document.getElementById(id);
      if (element) {
        const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
        const offsetPosition = elementPosition - 85;
        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth"
        });
      }
    }
  }
}
</script>