import { createRouter, createWebHistory } from 'vue-router'
import ProductPage from '../components/ProductPage.vue';
import Blog from "../views/Blog.vue";
import BlogPost from "../views/BlogPost.vue";
import HomePage from '@/components/HomePage.vue';


const routes = [
  {
    path: '/',
    name: 'home',
    component: HomePage
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/ProductPage',
    name: 'ProductPage',
    component: ProductPage,
  },


{ path: "/blog", component: Blog },
{ path: "/blog/:id", component: BlogPost },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
