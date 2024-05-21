<template>
  <div class="about">

    <!-- Hero Image -->
    <div class="hero-image">
      <div class="hero-text">
        <h1>I am J. Rose</h1>
      </div>
    </div>

    <main>
      <h2>About J. Rose</h2>
      <p>
        Just a short autistic black girl who likes music, coding, tech, and dance.
      </p>
      <p class="bio">
        Hi! I currently live in the Pacific Northwest area, US, although I was born in Texas.
        I am 22yrs old and am working towards getting a certificate in software development with Code Fellows.
        Before Code Fellows, I went to college at the University of Washington, Washington State University, and the
        University of Texas. I am a software developer in mobile and full-stack web development, and so far I have
        coding experience in JavaScript, HTML/CSS, SCSS, Java, Kotlin, PHP, SQL, and R. My technical skills are React,
        Node.js, React Native, Vue.js, AWS, Postgres, and MongoDB. I aim to develop modern and well-functioning software
        solutions that prioritize a seamless user experience. I love to learn and I am always growing.
        I also love dance and watching TV shows, and I'm a huge phone geek... and I have a
        stuffed cow named Tipsy.
      </p>
      <p class="my-links">
        <a href="https://open.spotify.com/playlist/5TIT8wEOGDG8zRED4bTTyq?si=kIU27pjjRhGXdqiaNczofw" target="_blank">
          <img src="@/assets/icons/spotify-icon.png" alt="Spotify icon" />
        </a>
      </p>
      <div class="btn-container"><button class="btn btn-primary" @click="showMore = !showMore">{{ showMore ? "SHOW LESS -" : "SHOW MORE +" }}</button></div>
      <section v-show="showMore">
        <h6>To get to know me, here are some of my favs and fun facts about me. See what you can relate too :)</h6>
        <div class="favs-facts-container">
          <article class="favs">
            <div>
              <h4>My Favorites:</h4>
              <ul class="list-group">
                <li v-for="(value, key, index) in favs.favs" :key="index" class="list-group-item"><span>{{ key }}:
                  </span>{{ value }}</li>
              </ul>
            </div>
          </article>
          <article class="fun-facts">
            <div>
              <h4>20 Fun Facts</h4>
              <ol class="list-group">
                <li v-for="(funFact, index) in favs.funFacts" :key="index" class="list-group-item"><span>{{ index + 1 }}.
                  </span>{{ funFact }}</li>
              </ol>
            </div>
          </article>
        </div>
      </section>
    </main>
  </div>
</template>

<style scoped lang="scss">
@import "@/sass/about.scss";
</style>

<script>
import favsJson from "@/json/myData.json";
export default {
  name: "AboutView",
  data() {
    return {
      favs: favsJson,
      showMore: false
    }
  },
}
</script>
