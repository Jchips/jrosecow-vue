<template>
  <nav>
    <h1><slot></slot></h1>
    <ul class="nav justify-content-end">
      <li class="nav-item">
        <!-- <a class="nav-link active" aria-current="page" href="#">Main blog</a> -->
        <router-link class="nav-link" to="/blog">Main blog</router-link>
      </li>
      <li class="nav-item">
        <router-link class="nav-link" to="/dance-blog">Dance blog</router-link>
      </li>
      <li class="nav-item">
        <router-link class="nav-link" to="/film-blog">Film Blog</router-link>
      </li>
    </ul>
  </nav>
  <router-view />
</template>

