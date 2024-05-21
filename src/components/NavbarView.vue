<template>
  <nav ref="navbar" id="navbar" class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">
        <img class="rounded-circle" src="@/assets/pin.png" alt="J. Rose pin">
      </a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link class="nav-link" to="/">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/about">About</router-link>
          </li>
          <li class="nav-item dropdown">
            <a id="blog-nav" class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
              aria-expanded="false">
              Blog
            </a>
            <ul class="dropdown-menu">
              <li><router-link to="/protected/blog" class="dropdown-item">Blog</router-link></li>
              <li><router-link to="/tech-reviews" class="dropdown-item">Reviews</router-link></li>
              <li><router-link to="/vs" class="dropdown-item">VS</router-link></li>
            </ul>
          </li>
          <li class="nav-item">
            <router-link to="/explore" class="nav-link">Explore</router-link>
          </li>
        </ul>
        <form class="d-flex" role="search">
          <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
          <button class="btn btn-outline-success" type="submit">Search</button>
        </form>
      </div>
    </div>
  </nav>
  <router-view />
</template>

<style lang="scss">
@import "@/sass/navbar.scss";
</style>

<script>
export default {
  data() {
    return {
      isMounted: false,
    }
  },
  mounted() {
    window.addEventListener("scroll", this.minimizeNav);
    this.isMounted = true;
  },
  methods: {
    minimizeNav() {
      if (this.isMounted && window.scrollY > 85) {
        document.getElementById("navbar").style.padding = "10px";
      } else {
        document.getElementById("navbar").style.padding = "20px";
      }
    }
  },
  beforeUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }
}
</script>