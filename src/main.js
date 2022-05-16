import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import "bootstrap/dist/css/bootstrap.css"
import { BootstrapVue } from 'bootstrap-vue'

createApp(App).use(store).use(router).mount('#app')


import "bootstrap/dist/js/bootstrap.js";