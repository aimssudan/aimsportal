import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import { library } from '@fortawesome/fontawesome-svg-core';
import { faHatWizard } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import VueApexCharts from 'vue3-apexcharts';

import axios from 'axios'

axios.defaults.baseURL = import.meta.env.VITE_APP_API_URL
const app = createApp(App);

app.component('font-awesome-icon', FontAwesomeIcon);
app.use(router);
app.use(store);
app.mount('#app');
//require('@/store/subscriber')
// Add VueJS library
// library.add(faHatWizard)
// Vue.component('font-awesome-icon', FontAwesomeIcon)

//createApp(App).use(store).use(router).use(VueApexCharts).mount('#app')
