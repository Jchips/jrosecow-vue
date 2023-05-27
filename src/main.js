import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "jquery";
import "lightbox2/dist/css/lightbox.min.css";
import "lightbox2/dist/js/lightbox.min";

/* import the fontawesome core */
import { library } from "@fortawesome/fontawesome-svg-core"

/* import font awesome icon component */
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome"

/* import specific icons */
// import { faUserSecret } from "@fortawesome/free-solid-svg-icons"
import { faInstagram, faYoutube, faSpotify, faSnapchat } from "@fortawesome/free-brands-svg-icons";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";

/* add icons to the library */
library.add(faInstagram)
library.add(faYoutube)
library.add(faSpotify)
library.add(faSnapchat)
library.add(faChevronLeft)
library.add(faChevronRight)

// import "bootstrap/dist/js/bootstrap.min.js";

createApp(App).component('font-awesome-icon', FontAwesomeIcon).use(router).mount('#app')
