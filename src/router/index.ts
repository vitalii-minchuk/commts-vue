import { createRouter, createWebHistory } from "vue-router";
import Comments from "../pages/Comments.vue";
import Home from "../pages/Home.vue";
import Posts from "../pages/Posts.vue";

const routes = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/posts",
    component: Posts,
  },
  {
    path: "/comments",
    component: Comments,
  },
];

const router = createRouter({
  routes,
  history: createWebHistory(),
});

export default router;
