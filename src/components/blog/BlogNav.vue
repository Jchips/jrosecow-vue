<template>
  <nav>
    <h1>
      <slot></slot>
    </h1>
    <ul class="nav nav-options">
      <li class="nav-item">
        <router-link class="nav-link" to="/protected/blog">Main blog</router-link>
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
