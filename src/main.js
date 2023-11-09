import Vue from "vue";
import App from "./App.vue";
import axios from 'axios';
import $ from 'jquery'
import Vuex from 'vuex';


import MenuIcon from 'vue-material-design-icons/Menu.vue';
import 'vuetify/dist/vuetify.min.css'


import vuetify from '@/plugins/vuetify' // path to vuetify export


Vue.component('menu-icon', MenuIcon);

new Vue({
  vuetify,
  render: h => h(App)
}).$mount("#app");