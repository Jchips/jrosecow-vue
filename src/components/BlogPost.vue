<template>
  <div class="paper" :id="blogPost.id">
    <div v-if="blogPost.img" class="blog-post-image" :style="styleObject"></div>
    <div class="container">
      <h2>{{ blogPost.title }}</h2>
      <h5>Written: {{ formatDate(blogPost.date) }}</h5>
      <h5 v-if="blogPost.rating">Rating: <img :src="blogPost.rating" /></h5>
      <h6 v-if="blogPost.img">Image credit: {{ blogPost.img_credit }}</h6>
      <div v-for="(paragraph, index) in blogPost.content" :key="index">
        <p v-if="(typeof paragraph === 'string') && blogPost.indent">&emsp;&emsp;&emsp;&emsp;{{ paragraph }}</p>
        <p v-else-if="(typeof paragraph === 'string') && !blogPost.indent">{{ paragraph }}</p>
        <div v-else-if="paragraph.type === 'paragraph'">
          <p v-if="paragraph.indent">&emsp;&emsp;&emsp;&emsp; {{ paragraph.text }}</p>
          <p v-else-if="paragraph.bold && !paragraph.center" :style="{ fontWeight: 600 }">{{ paragraph.text }}</p>
          <p v-else-if="paragraph.bold && paragraph.center" :style="center">{{ paragraph.text }}</p>
          <p v-else>{{ paragraph.text }}</p>
        </div>
        <li v-else-if="paragraph.type === 'li'" :style="liStyle">{{ paragraph.text }}</li>
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
      },
      liStyle: {
        paddingLeft: "50px"
      },
      center: {
        textAlign: "center",
        fontWeight: 600
      }
    }
  },
  props: {
    blogPost: Object
  },
  methods: {
    formatDate(date) {
      let timeElapsed = new Date(date);
      let formattedDate = timeElapsed.toLocaleDateString("en-us", { year: "numeric", month: "short", day: "numeric", timeZone: "UTC" });
      return formattedDate;
    }
  }
}
</script>