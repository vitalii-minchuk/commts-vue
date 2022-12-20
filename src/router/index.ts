import { createRouter, createWebHistory } from "vue-router";
import Comments from "../pages/Comments.vue";
import Home from "../pages/Home.vue";
import NotFound from "../pages/NotFound.vue";
import Posts from "../pages/Posts.vue";
import SinglePost from "../pages/SinglePost.vue";

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
    path: "/posts/:id",
    component: SinglePost,
  },
  {
    path: "/comments",
    component: Comments,
  },
  { path: "/:pathMatch(.*)", name: "NotFound", component: NotFound },
];

const router = createRouter({
  routes,
  history: createWebHistory(),
});

export default router;
