import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import ViewProject from '../components/ViewProject'
import UploadIdea from '../components/Uploads/UploadIdea'
import UserRegistration from '../views/UserRegistration'

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },

  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
  path: "/viewproject",
  name: "viewproject",
  component: ViewProject,
},
{
  path:"/upload",
  name:'uploadIdea',
  component: UploadIdea
  
},
{
  path:"/user",
  name:'userregistration',
  component: UserRegistration
  
}

];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
