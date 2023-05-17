import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
// import vueMeta from 'vue-meta'

import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "jquery";
import "lightbox2/dist/css/lightbox.min.css";
import "lightbox2/dist/js/lightbox.min";

// const metaManager = createMetaManager();

// import "bootstrap/dist/js/bootstrap.min.js";

createApp(App).use(router).mount('#app')
