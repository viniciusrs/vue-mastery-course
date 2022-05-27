import Vue from "vue";
import VueRouter from "vue-router";
import EventList from "../views/EventList.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "event-list",
    component: EventList
  },
  {
    path: "/event/create",
    name: "event-create",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/EventCreate.vue"),
  },
  {
    path: "/event/:id",
    name: "event-show",
    props: true,
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/EventShow.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;
