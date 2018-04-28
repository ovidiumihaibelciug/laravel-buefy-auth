require("./bootstrap");
import Vue from "vue";
import Buefy from "buefy";
import VueRouter from "vue-router";
import router from "./routes/routes";

Vue.use(Buefy);
Vue.use(VueRouter);

Vue.component("root", require("./Main.vue"));

window.vue = new Vue({
  mounted() {
    const _this = this;
    axios.interceptors.response.use(
      function(response) {
        return response;
      },
      function(error) {
        if (error.response.status === 404)
          _this.$router.replace({ name: "404" });
        return Promise.reject(error);
      }
    );
  },
  router,
  el: "#app"
});
