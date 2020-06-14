import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import "./assets/css/tailwind.css";
import VueTyperPlugin from 'vue-typer';
import VuePageTransition from 'vue-page-transition'

Vue.use(VueTyperPlugin);
Vue.use(VuePageTransition)
Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
