<template>
  <div class="tv">
    <!-- <header>
      <h1>My TV Shows</h1>
    </header> -->
    <div class="container">
      <!-- <aside class="col-sm-2"> -->
      <aside>
        <div><a href="#A" class="text-secondary">A</a></div>
        <div><a href="#C" class="text-secondary">C</a></div>
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
          <div v-if="show.sort" :id="show.sort"></div>
          <div :id="show.id" class="hero-image">
            <div class="jumbotron jumbotron-fluid">
              <div class="container">
                <h2>{{show.title}}</h2>
                <h6>{{ show.seasons }}</h6>
                <p>{{ show.genres }}</p>
                <img v-for="logo in show.availability" :key="logo" :src="require(`@/assets/tv-logos/${logo}.png`)" :alt="`${logo} logo`"/><br/>
                <p v-if="show.lgbtq">🏳️‍🌈</p>
                <span class="img-cred">Image cred: <a :href="show.img_link" target="_blank">{{ show.img_creds }}</a></span>
              </div>
            </div>
          </div>
          <section class="container">
            <!-- Description -->
            <p><span>{{ show.title }}</span> {{ show.description }}</p>

            <!-- My Thoughts -->
            <div class="text-center"><button class="btn button" @click="show.toggle_my_thoughts = !show.toggle_my_thoughts">{{ show.toggle_my_thoughts ? 'My Thoughts -' : 'My Thoughts +'}}</button></div>
            <div v-show="show.toggle_my_thoughts" class="toggled-text">
              <div class="text-center"><img class="rating" :src="show.rating_img"></div>
              <p v-for="paragraph in show.my_thoughts" :key="paragraph">{{ paragraph }}</p>
            </div>

            <!-- My Thoughts (with spoilers) -->
            <div v-if="show.thoughts_with_spoilers" class="text-center"><button class="btn button" @click="show.toggle_my_thoughts_with_spoilers = !show.toggle_my_thoughts_with_spoilers">{{ show.toggle_my_thoughts_with_spoilers ? `My Thoughts (with spoilers) -` : 'My Thoughts (with spoilers) +'}}</button></div>
            <div v-if="show.thoughts_with_spoilers" v-show="show.toggle_my_thoughts_with_spoilers" class="toggled-text">
              <p v-for="paragraph in show.thoughts_with_spoilers" :key="paragraph">{{ paragraph }}</p>
            </div>

            <!-- TV sins -->
            <div v-if="show.fav_episodes" class="text-center"><button class="btn button" @click="show.toggle_fav_episodes = !show.toggle_fav_episodes">{{ show.toggle_fav_episodes ? 'Fav Episodes -' : 'Fav Episodes +'}}</button></div>
            <div v-if="show.fav_episodes">
              <ul v-show="show.toggle_fav_episodes" class="toggled-text">
                <li v-for="episode in show.fav_episodes" :key="episode">{{ episode }}</li>
              </ul>
            </div>

            <!-- TV sins -->
            <div v-if="show.tv_sins" class="text-center"><button class="btn button" @click="show.toggle_tv_sins = !show.toggle_tv_sins">{{ show.toggle_tv_sins ? 'TV Sins (SPOILERS...duh) -' : 'TV Sins (SPOILERS...duh) +'}}</button></div>
            <div v-if="show.tv_sins">
              <ol v-show="show.toggle_tv_sins" class="toggled-text">
                <li v-for="sin in show.tv_sins" :key="sin">{{ sin }}</li>
              </ol>
            </div>
          </section>
          <hr class="hr"/>
        </article>
      </main>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '@/sass/tv.scss';
</style>

<script>
import shows from "@/json/tv.json";
export default {
  data() {
    return {
      shows: shows
    }
  }
}
</script>