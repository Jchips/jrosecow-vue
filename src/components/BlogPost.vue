<template>
  <div class="paper" :id="blogPost.id">
    <!-- <div class="hero-image" :style="{ 'background-image': 'linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(\'' + blogPost.img + '\')'}"> -->
    <!-- </div> -->
    <!-- <div class="hero-image" :style="{ 'background-image': 'url(\'' + blogPost.img + '\')'}"></div> -->
      <!-- <div :id="blogPost.id + '-img'" class="hero-image"></div> -->
    <div class="blog-post-image" :style="styleObject"></div>
    <div class="container">
      <h2>{{ blogPost.title }}</h2>
      <h5>{{ blogPost.date }}</h5>
      <div v-for="(paragraph, index) in blogPost.content" :key="index">
        <p v-if="blogPost.indent">&emsp;&emsp;&emsp;&emsp; {{ paragraph }}</p>
        <p v-else>{{ paragraph }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      styleObject: {
        backgroundImage: 'url("' + this.blogPost.img + '")',
        backgroundPosition: this.blogPost.img_position
      }
    }
  },
  props: {
    blogPost: Object
  },
}
</script>