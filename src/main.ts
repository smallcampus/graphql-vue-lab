import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import "roboto-fontface/css/roboto/roboto-fontface.css";
import "@mdi/font/css/materialdesignicons.css";
import { createProvider } from "./vue-apollo";
import 'vue-form-generator/dist/vfg.css'

Vue.config.productionTip = false;

// const VueFormGenerator = require("vue-form-generator")
// console.log("VueFormGenerator", VueFormGenerator)
// Vue.use(VueFormGenerator)

new Vue({
  router,
  store,
  vuetify,
  apolloProvider: createProvider(),
  render: h => h(App)
}).$mount("#app");
