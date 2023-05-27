import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import axios from 'axios'

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
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue'),
    meta: {
      title: 'About J. Rose'
    }
  },
  {
    path: '/protected/blog',
    name: 'blog',
    component: () => import(/* webpackChunkName: "about" */ '../views/protected/BlogView.vue'),
    meta: {
      title: 'Blog',
      requiresAuth: true,
    }
  },
  {
    path: '/movie-reviews',
    name: 'movie reviews',
    component: () => import(/* webpackChunkName: "about" */ '../views/protected/MovieReviews.vue'),
    meta: {
      title: 'Movie Reviews'
    }
  },
  {
    path: '/vs',
    name: 'vs',
    component: () => import(/* webpackChunkName: "about" */ '../views/VSView.vue'),
    meta: {
      title: 'VS'
    }
  },
  {
    path: '/explore',
    name: 'explore',
    component: () => import(/* webpackChunkName: "about" */ '../views/ExploreView.vue'),
    meta: {
      title: 'Explore'
    }
  },
  {
    path: '/music',
    name: 'music',
    component: () => import(/* webpackChunkName: "about" */ '../views/protected/MusicView.vue'),
    meta: {
      title: 'Music',
      requiresAuth: true
    }
  },
  {
    path: '/dance-blog',
    name: 'dance blog',
    component: () => import(/* webpackChunkName: "about" */ '../views/protected/DanceBlog.vue'),
    meta: {
      title: 'Dance Blog',
      requiresAuth: true
    }
  },
  {
    path: '/film-blog',
    name: 'film blog',
    component: () => import(/* webpackChunkName: "about" */ '../views/protected/FilmBlog.vue'),
    meta: {
      title: 'Film Blog',
      requiresAuth: true
    }
  },
  {
    path: '/tech-reviews',
    name: 'tech reviews',
    component: () => import(/* webpackChunkName: "about" */ '../views/TechReviews.vue'),
    meta: {
      title: 'Tech Reviews'
    }
  },
  {
    path: '/protected',
    name: 'login',
    component: () => import(/* webpackChunkName: "about" */ '../views/PasswordProtection.vue'),
    meta: {
      title: 'Login'
    }
  },
  // {
  //   path: '/gen-z-dance-wiki',
  //   name: 'gen z dance wiki',
  //   component: () => import(/* webpackChunkName: "about" */ '../views/GenZDanceWiki.vue')
  // }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

// Update page title based on the current route
// Code from: https://bytelanguage.com/2020/08/31/private-routes-using-vuejs/
router.beforeEach(async (to, from, next) => {
  document.title = to.meta.title || 'Default Page Title';

  // Navigation Guard
  const isAuthenticated = pass();
  if (to.matched.some((route) => route.meta.requiresAuth)) {
    // Route requires authentication
   if ( await isAuthenticated) {
      // User is authenticated, allow navigation
      next();
    } else {
      // User is not authenticated, redirect to login or show an unauthorized message
      next('protected');
    }
  } else {
    // Route does not require authentication, allow navigation
    next();
  }
});

function pass() {
  return checkAuthentication();
}

function checkAuthentication() {
  let token = localStorage.getItem('token'); // Retrieve the token from local storage

  if (token) {
    // Includes the token in the Authorization header for authentication
    axios.defaults.headers.common['authorization'] = `Bearer ${token}`;

    // Make a request to a protected route to check if the token is valid
    return axios.get(`${process.env.VUE_APP_SERVER}/protected/blog`)
      .then((response) => {
        console.log('router response', response.data.message);
        return true; // Authentication is successful
      })
      .catch((err) => {
        // Token is invalid or expired, the user is not authenticated
        console.error(err);
        localStorage.setItem('token', null);
        return false;
      });
  } else {
    // No token found, the user is not authenticated
    console.log('authentication:', 'no token found');
    return false;
  }
}


export default router
