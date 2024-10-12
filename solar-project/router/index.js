import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import ArticleView from '../views/ArticleView.vue'
import PortfolioView from '../views/PortfolioView.vue'
import ContactView from '../views/ContactView.vue'
import w1 from '../components/work/w1.vue'
import w2 from '../components/work/w1.vue'
import w3 from '../components/work/w1.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView,
  },
  {
    path: '/article',
    name: 'article',
    component: ArticleView,
  },
  {
    path: '/portfolio',
    name: 'portfolio',
    component: PortfolioView,
    children: [
      {
        path: 'reference1',
        name: 'portfolio-child1',
        component: w1,
      },
      {
        path: 'child2',
        name: 'portfolio-child2',
        component: w2,
      },
      {
        path: 'child42',
        name: 'portfolio-child42',
        component: w3,
      },
    ],
  },
  {
    path: '/contact',
    name: 'contact',
    component: ContactView,
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router