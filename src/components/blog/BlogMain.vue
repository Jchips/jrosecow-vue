<template>
  <main class="blog-content-wrapper text-center">
    <div class="table-of-contents">
      <div class="toc-container">
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
import BlogPost from "@/components/blog/BlogPost.vue"

export default {
  props: {
    blog: Object
  },
  components: {
    BlogPost
  },
  methods: {
    /**
     * Scrolls to the blog clicked on in the table of contents.
     * @param {String} id - The id of the blog.
     */
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