<template>
  <div class="tv">
    <div class="container">
      <aside>
        <div><a href="#A" class="text-secondary">A</a></div>
        <div><a href="#B" class="text-secondary">B</a></div>
        <div><a href="#C" class="text-secondary">C</a></div>
        <div><a href="#G" class="text-secondary">G</a></div>
        <div><a href="#H" class="text-secondary">H</a></div>
        <div><a href="#M" class="text-secondary">M</a></div>
        <div><a href="#O" class="text-secondary">O</a></div>
        <div><a href="#P" class="text-secondary">P</a></div>
        <div><a href="#R" class="text-secondary">R</a></div>
        <div><a href="#S" class="text-secondary">S</a></div>
        <div><a href="#T" class="text-secondary">T</a></div>
        <div><a href="#U" class="text-secondary">U</a></div>
        <div><a href="#W" class="text-secondary">W</a></div>
      </aside>
      <main>
        <article v-for="show in shows" :key="show">
          <TVShow :show="show" />
          <hr class="hr" />
        </article>
      </main>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '@/sass/tv.scss';
</style>

<script>
import TVShow from "@/components/blog/TVShow.vue";
import shows from "@/json/tv.json";

export default {
  components: {
    TVShow
  },
  data() {
    return {
      shows: shows
    }
  }
}
</script>