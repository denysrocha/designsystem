import Vue from "vue";
import App from "./ButtonPrimary";

Vue.config.productionTip = false;

new Vue({
  el: "#app",
  template: "<App/>",
  components: { App }
});