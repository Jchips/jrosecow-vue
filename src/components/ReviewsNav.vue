<template>
  <nav>
    <h1><slot></slot></h1>
    <ul class="nav justify-content-end">
      <li class="nav-item">
        <router-link class="nav-link" to="/movie-reviews">Movie Reviews</router-link>
      </li>
      <li class="nav-item">
        <router-link class="nav-link" to="/tech-reviews">Tech Reviews</router-link>
      </li>
    </ul>
  </nav>
  <router-view />
</template>