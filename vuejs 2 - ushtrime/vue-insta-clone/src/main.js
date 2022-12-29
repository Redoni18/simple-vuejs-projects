import Vue from 'vue'
import App from './App.vue'
import VueDragscroll from "vue-dragscroll";
Vue.config.productionTip = false
Vue.use(VueDragscroll);
new Vue({
  render: h => h(App),
}).$mount('#app')
