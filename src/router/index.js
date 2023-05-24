import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta: {
      title: 'Jrosecow'
    }
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue'),
    meta: {
      title: 'About J. Rose'
    }
  },
  {
    path: '/blog',
    name: 'blog',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/protected/BlogView.vue'),
    meta: {
      title: 'Blog'
    }
  },
  {
    path: '/movie-reviews',
    name: 'movie reviews',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/protected/MovieReviews.vue'),
    meta: {
      title: 'Movie Reviews'
    }
  },
  {
    path: '/vs',
    name: 'vs',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/VSView.vue'),
    meta: {
      title: 'VS'
    }
  },
  {
    path: '/explore',
    name: 'explore',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/ExploreView.vue'),
    meta: {
      title: 'Explore'
    }
  },
  {
    path: '/music',
    name: 'music',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/protected/MusicView.vue'),
    meta: {
      title: 'Music'
    }
  },
  {
    path: '/dance-blog',
    name: 'dance blog',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/protected/DanceBlog.vue'),
    meta: {
      title: 'Dance Blog'
    }
  },
  {
    path: '/film-blog',
    name: 'film blog',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/protected/FilmBlog.vue'),
    meta: {
      title: 'Film Blog'
    }
  },
  {
    path: '/tech-reviews',
    name: 'tech reviews',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/TechReviews.vue'),
    meta: {
      title: 'Tech Reviews'
    }
  },
  // {
  //   path: '/gen-z-dance-wiki',
  //   name: 'gen z dance wiki',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/GenZDanceWiki.vue')
  // }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

// Update page title based on the current route
router.beforeEach((to, from, next) => {
  document.title = to.meta.title || 'Default Page Title';
  next();
});

export default router
