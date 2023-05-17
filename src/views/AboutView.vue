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
          Just a short, sad, black woman who likes music, coding and dance.
        </p>
        <p class="bio">
          I currently live in the Pacific Northwest area, US, although I was born in Texas.
          I am 22yrs old and am working towards getting a certificate in software development with Code Fellows.
          Before Code Fellows, I was at the University of Washington, then Washington State University, then the University of Texas.
          My goal is to become a software developer in mobile and web development, and so far I have coding experience in 
          Java, HTML/CSS, JavaScript, Kotlin, PHP, SQL, R and Python. My technical skills are React, Node.js and Vuejs.
          I also love dance and watching TV shows, and I'm a huge phone geek... and I have a stuffed cow named Tipsy.

        </p>
        <!-- <p class="disclaimer">
          This website is not for professional purposes or popularity or anything, I made it as a way to express myself and to keep my interests organized. I don't really have a best friend
          who I can talk about personal things with or bond about similar interests with, so I would write down things that I wanted to say to someone who I haven't met yet. It can
          be hard for me to always be myself because of my anxiety and lack of confidence, but one of the qualities I really value in people is genuity (idk if that's a word). I feel more
          comfortable around people when they are not afraid to be themselves so I try to be that way myself. This site is a place I feel I can be honest and can direct it to
          anyone if they want to (or if I want them to) know about me and not just the reserved me that I typically show that tries to make everything into a joke because I've have had
          bad experiences with trying to open up to people in the past. As much as I like making people laugh and smile, I'm pretty messed up on the inside and often I feel like my humor
          is the only way I can get people to notice me. So this site is more of a true expression and I love to code too that's also why I made it. :p
          I'm not expecting much eyes on this site other than my own, but if you're not me,
          welcome to my website. Pls don't hate me or abandon me ever cus I'm a lonely lass :/ and I'm a loyal, nonjudgmental and accepting friend and I feel like that's rare to come by 🤷🏾‍♂️.
        </p> -->
        <p>
          <a href="https://ask.fm/javacow" target="_blank">
            <img src="https://logodix.com/logo/15192.jpg" alt="AskFm icon" />
          </a>
          <a href="https://open.spotify.com/playlist/5TIT8wEOGDG8zRED4bTTyq?si=kIU27pjjRhGXdqiaNczofw" target="_blank">
            <img src="https://www.freeiconspng.com/uploads/spotify-icon-2.png" alt="Spotify icon" />
          </a>
        </p>
        <div class="btn-container"><button class="btn btn-primary" @click="showMore = !showMore">{{ showMore ? 'SHOW LESS -' : 'SHOW MORE +'}}</button></div>
        <section v-show="showMore">
          <h6>To get to know me, here are some of my favs and fun facts about me. See what you can relate too :)</h6>
          <div class="favs-facts-container row">
            <article class="favs col-lg-5 col-12">
              <h4>Favorites:</h4>
              <ul>
                <li v-for="(value, key, index) in favs.favs" :key="index"><span>{{ key }}: </span>{{ value }}</li>
              </ul>
            </article>
            <article class="fun-facts col-lg-5 col-12">
              <h4>Fun Facts</h4>
              <ol>
                <li v-for="(funFact, index) in favs.funFacts" :key="index"><span>{{ index + 1 }}. </span>{{ funFact }}</li>
              </ol>
            </article>
          </div>
        </section>
    </main>
  </div>
</template>

<style scoped lang="scss">
@import '@/sass/about.scss';
</style>

<script>
import favsJson from '@/json/myData.json';
export default {
  name: 'AboutView',
  data() {
    return {
      favs: favsJson,
      showMore: false
    }
  },
  methods: {

  }
}
</script>
