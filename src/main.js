import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import { library } from '@fortawesome/fontawesome-svg-core';
import { faHatWizard } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import axios from 'axios'

axios.defaults.baseURL = process.env.VUE_APP_API_URL
require('@/store/subscriber')
// Add VueJS library
// library.add(faHatWizard)
// Vue.component('font-awesome-icon', FontAwesomeIcon)

createApp(App).use(store).use(router).mount('#app')
