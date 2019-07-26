import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import './registerServiceWorker';

Vue.config.productionTip = false;

const vue = new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');

// GET transactions before starting Vue.
vue.$store.dispatch('getTransactions').then(() => {
  vue.$mount('#app')
})
