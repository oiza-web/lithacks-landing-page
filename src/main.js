import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
// import BaseButton from './components/BaseButton.vue';

Vue.config.productionTip = false
Vue.component('BaseButton', () => import('./components/BaseButton.vue')
)
new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
