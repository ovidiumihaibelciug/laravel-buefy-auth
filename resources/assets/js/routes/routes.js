import ExampleComponent from "../containers/ExampleComponent.vue";
import VueRouter from "vue-router";

const router = new VueRouter({
  linkExactActiveClass: "is-exact-active",
  linkActiveClass: "is-active",
  routes: [
    {
      path: "/home",
      component: ExampleComponent,
      name: "root"
      //   meta: { onlyAuth: true }
    }
  ]
});

export default router;
