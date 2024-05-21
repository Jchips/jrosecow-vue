<!-- Sidebar inspiration from: https://bbbootstrap.com/snippets/bootstrap-5-sidebar-menu-toggle-button-34132202# -->
<!-- This page uses Lightbox2. https://lokeshdhakar.com/projects/lightbox2/ -->
<!-- Background image from Annie Spratt on Unsplash https://unsplash.com/photos/wuc-KEIBrdE -->
<template>
  <div id="body-pd" class="explore">
    <div class="header" id="header">
      <div class="header_toggle" @click="showNavbar = !showNavbar">
        <i :class="[this.showNavbar ? 'bx-x' : null, 'bx', 'bx-menu']" id="header-toggle"></i>
      </div>
      <header>
        <h1>My Explore Page</h1>
      </header>
      <div class="header_img">
        <img src="@/assets/pin.png" alt="Jrosecow pin" />
      </div>
    </div>
    <section class="explore-container">
      <div class="l-navbar" id="nav-bar">
        <nav class="nav">
          <div>
            <a href="#" class="nav_logo">
              <i class="bx bx-layer nav_logo-icon"></i>
              <span class="nav_logo-name">Projects</span>
            </a>
            <div class="nav_list">

              <!-- Main page -->
              <a href="#" class="nav_link active" title="dashboard">
                <i class="bx bx-grid-alt nav_icon"></i>
                <span class="nav_name">Dashboard</span>
              </a>

              <!-- My Calendar app -->
              <a href="https://jchips.github.io/my-calendar-app/" class="nav_link" title="calendar">
                <i class="bx bx-calendar-minus nav_icon"></i>
                <span class="nav_name">2023 Calendar</span>
              </a>

              <!-- Create a behavior chain -->
              <a href="https://behavior-chain.netlify.app/" class="nav_link" title="behavior-chain">
                <img width="24" height="24"
                  src="https://img.icons8.com/?size=50&id=w0vclwHRccbk&format=png&color=AFA5D9" alt="therapy" />
                <span class="nav_name">Behavior Chain</span>
              </a>

              <!-- Dance wiki -->
              <a href="https://genzdance.netlify.app/" class="nav_link" title="dance wiki">
                <img class="nav_icon" width="24" height="24"
                  src="https://img.icons8.com/?size=50&id=9772&format=png&color=AFA5D9" alt="dancing" />
                <span class="nav_name">Dance Wiki</span>
              </a>

              <!-- Jphones.com -->
              <a href="https://jphones.netlify.app/" class="nav_link" title="J. Phones">
                <i class="bx bx-mobile-alt nav_icon"></i>
                <span class="nav_name">jPhones</span>
              </a>

              <!-- Music -->
              <router-link to="/music" class="dropdown-item nav_link" title="music">
                <i class="bx bx-music nav_icon"></i>
                <span class="nav_name">Music</span>
              </router-link>

              <!-- TV -->
              <router-link to="/tv-shows" class="nav_link" title="TV">
                <i class="bx bx-tv nav_icon"></i>
                <span class="nav_name">TV</span>
              </router-link>
            </div>
          </div>
        </nav>
      </div>

      <main class="height-100 bg-light">
        <h4>My Projects</h4>
        <section class="projects">
          <ExploreCards v-for="card in exploreCards" :key="card" :card="card" />
        </section>
      </main>

    </section>
  </div>
</template>

<style lang="scss">
@import "@/sass/explore.scss";

.header_toggle .bx,
.bx-menu {
  padding: 30px;
}
</style>

<script>
import myData from "@/json/myData.json";
import ExploreCards from "@/components/ExploreCards.vue";

export default {
  data() {
    return {
      exploreCards: myData.explore_cards,
      showNavbar: false,
    }
  },
  components: {
    ExploreCards
  },
  mounted() {
    // Resource: https://bbbootstrap.com/snippets/bootstrap-5-sidebar-menu-toggle-button-34132202#
    const toggleSidebar = (toggleId, navId, bodyId, headerId) => {
      const toggle = document.getElementById(toggleId),
        nav = document.getElementById(navId),
        bodypd = document.getElementById(bodyId),
        headerpd = document.getElementById(headerId);

      // Validate that all variables exist
      if (toggle && nav && bodypd && headerpd) {
        toggle.addEventListener("click", () => {
          // show navbar
          nav.classList.toggle("show");
          // add padding to body
          bodypd.classList.toggle("body-pd");
          // add padding to header
          headerpd.classList.toggle("body-pd");
        });
      }
    };

    toggleSidebar("header-toggle", "nav-bar", "body-pd", "header");

    /*===== LINK ACTIVE =====*/
    const linkColor = document.querySelectorAll(".nav_link");

    function colorLink() {
      if (linkColor) {
        linkColor.forEach((l) => l.classList.remove("active"));
        this.classList.add("active");
      }
    }
    linkColor.forEach((l) => l.addEventListener("click", colorLink));
  },
};
</script>
