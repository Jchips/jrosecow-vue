<template>
  <div class="tv-show">
    <div v-if="show.sort" :id="show.sort"></div>
    <div :id="show.id" class="hero-image">
      <div class="jumbotron jumbotron-fluid">
        <div class="container">
          <h2>{{ show.title }}</h2>
          <h6>{{ show.seasons }}</h6>
          <p>{{ show.genres }}</p>
          <img v-for="logo in show.availability" :key="logo" :src="require(`@/assets/tv-logos/${logo}.png`)"
            :alt="`${logo} logo`" /><br />
          <p v-if="show.lgbtq">🏳️‍🌈</p>
          <span class="img-cred">Image cred: <a :href="show.img_link" target="_blank">{{ show.img_creds }}</a></span>
        </div>
      </div>
    </div>
    <section class="container">
      <!-- Description -->
      <p><span>{{ show.title }}</span> {{ show.description }}</p>

      <!-- My Thoughts -->
      <div class="text-center">
        <button class="btn button" @click="toggleMyThoughts = !toggleMyThoughts">
          {{ toggleMyThoughts ? 'My Thoughts -' : 'My Thoughts +' }}
        </button>
      </div>
      <div v-show="toggleMyThoughts" class="toggled-text">
        <div class="text-center"><img class="rating" :src="show.rating_img"></div>
        <p v-for="paragraph in show.my_thoughts" :key="paragraph">{{ paragraph }}</p>
      </div>

      <!-- My Thoughts (with spoilers) -->
      <div v-if="show.thoughts_with_spoilers" class="text-center">
        <button class="btn button" @click="toggleMyThoughtsWithSpoilers = !toggleMyThoughtsWithSpoilers">
          {{ toggleMyThoughtsWithSpoilers ? `My Thoughts (with spoilers) -` : 'My Thoughts (with spoilers) + ' }}
        </button>
      </div>
      <div v-if="show.thoughts_with_spoilers" v-show="toggleMyThoughtsWithSpoilers" class="toggled-text">
        <p v-for="paragraph in show.thoughts_with_spoilers" :key="paragraph">{{ paragraph }}</p>
      </div>

      <!-- TV sins -->
      <div v-if="show.fav_episodes" class="text-center">
        <button class="btn button" @click="toggleFavEpisodes = !toggleFavEpisodes">
          {{ toggleFavEpisodes ? 'Fav Episodes -' : 'Fav Episodes +' }}
        </button>
      </div>
      <div v-if="show.fav_episodes">
        <ul v-show="toggleFavEpisodes" class="toggled-text">
          <li v-for="episode in show.fav_episodes" :key="episode">{{ episode }}</li>
        </ul>
      </div>

      <!-- TV sins -->
      <div v-if="show.tv_sins" class="text-center">
        <button class="btn button" @click="toggleTVSins = !toggleTVSins">
          {{ toggleTVSins ? 'TV Sins (SPOILERS...duh) -' : 'TVSins(SPOILERS...duh) + ' }}
        </button>
      </div>
      <div v-if="show.tv_sins">
        <ol v-show="toggleTVSins" class="toggled-text">
          <li v-for="sin in show.tv_sins" :key="sin">{{ sin }}</li>
        </ol>
      </div>
    </section>
  </div>
</template>

<style lang="scss" scoped>
@import '@/sass/tv.scss';
</style>

<script>
export default {
  name: "TV Show",
  props: {
    show: Object
  },
  data() {
    return {
      toggleMyThoughts: false,
      toggleMyThoughtsWithSpoilers: false,
      toggleFavEpisodes: false,
      toggleTVSins: false
    }
  }
}
</script>