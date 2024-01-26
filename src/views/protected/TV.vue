<template>
  <div class="tv">
    <!-- <header>
      <h1>My TV Shows</h1>
    </header> -->
    <div class="container">
      <!-- <aside class="col-sm-2"> -->
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
      <!-- <main class="col-sm-10"> -->
      <main>
        <article v-for="show in shows" :key="show">
          <!-- <hr class="hr"/> -->
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
import TVShow from "@/components/TVShow.vue";
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