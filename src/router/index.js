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
    component: () => import(/* webpackChunkName: "blog" */'../views/blog/BlogView.vue'),
    meta: {
      title: 'Blog',
      requiresAuth: true,
    }
  },
  {
    path: '/vs',
    name: 'vs',
    component: () => import('../views/blog/VSView.vue'),
    meta: {
      title: 'VS'
    }
  },
  {
    path: '/explore',
    name: 'explore',
    component: () => import('../views/ExploreView.vue'),
    meta: {
      title: 'Explore'
    }
  },
  {
    path: '/music',
    name: 'music',
    component: () => import(/* webpackChunkName: "blog" */ '../views/MusicView.vue'),
    meta: {
      title: 'Music',
      requiresAuth: true
    }
  },
  {
    path: '/dance-blog',
    name: 'dance blog',
    component: () => import(/* webpackChunkName: "blog" */ '../views/blog/DanceBlog.vue'),
    meta: {
      title: 'Dance Blog',
      requiresAuth: true
    }
  },
  {
    path: '/film-blog',
    name: 'film blog',
    component: () => import(/* webpackChunkName: "blog" */'../views/blog/FilmBlog.vue'),
    meta: {
      title: 'Film Blog',
      requiresAuth: true
    }
  },
  {
    path: '/tech-reviews',
    name: 'tech reviews',
    component: () => import('../views/blog/TechReviews.vue'),
    meta: {
      title: 'Tech Reviews'
    }
  },
  {
    path: '/protected',
    name: 'sign in',
    component: () => import('../views/PasswordProtection.vue'),
    meta: {
      title: 'Sign in'
    }
  },
  {
    path: '/tv-shows',
    name: 'tv shows',
    component: () => import('../views/blog/TV.vue'),
    meta: {
      title: 'TV Shows',
      requiresAuth: true
    }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

// Update page title based on the current route
// Code from: https://bytelanguage.com/2020/08/31/private-routes-using-vuejs/
router.beforeEach(async (to, from, next) => {
  document.title = to.meta.title || 'Default Page Title';
  let originalRoute = null;

  // Navigation Guard
  const isAuthenticated = checkAuthentication();
  if (to.matched.some((route) => route.meta.requiresAuth)) {
    // Route requires authentication
    if (await isAuthenticated) {

      /**
       * Check if the originally clicked route is stored
       * If so, replace the current route with the originally clicked route
       * Then reset the originally clicked route variable
       * Else, if not stored, store the originally clicked route
       */
      if (originalRoute) {
        router.replace(originalRoute);
        originalRoute = null;
      } else {
        originalRoute = from;
      }
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

function checkAuthentication() {
  let token = localStorage.getItem('token');
  if (token) {
    axios.defaults.headers.common['authorization'] = `Bearer ${token}`;
    return axios.get(`${process.env.VUE_APP_SERVER}/protected`)
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
    console.log('authentication:', 'no token found');
    return false;
  }
}

export default router
