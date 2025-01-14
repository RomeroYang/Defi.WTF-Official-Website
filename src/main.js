import Vue from 'vue';
import BootstrapVue from 'bootstrap-vue';
import App from './App.vue';
import router from "./router";
Vue.use(BootstrapVue);

const vm = new Vue({
  router,
  render: h => h(App)
});

vm.$mount('#app');
