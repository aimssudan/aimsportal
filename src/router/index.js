import { createRouter, createWebHistory } from 'vue-router'
import store from '../store'
import auth from '../middleware/auth'
import guest from '../middleware/guest'
import verified from '../middleware/verified'
import unverified from '../middleware/unverified'
import admin from '../middleware/admin'
import middlewarePipeline from '../middleware/middlewarePipeline'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Profile from '../views/Profile.vue'
import Register from '../views/Register.vue'
import Dashboard from '../views/Dashboard.vue'
import Contact from '../views/Contact.vue'
import About from '../views/About.vue'
import Faq from '../views/Faq.vue'
import Unauthorized from '../views/Unauthorized.vue'
import Organisations from '../views/Organisations.vue'
import Organisation from '../views/Organisation.vue'
import OrganisationCategories from '../views/OrganisationCategories.vue'
import OrganisationCategory from '../views/OrganisationCategory.vue'
import Projects from '../views/Projects.vue'

const routes = [
  {
    path: '/',
    name: 'landing',
    component: Home,
    meta: {
      title: "AIMS ⇾ Welcome",
    },
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: Dashboard,
    meta: {
      title: "AIMS ⇾ Dashboard",
      middleware: [auth, verified],
    },
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: {
      title: "AIMS ⇾ Login",
      middleware: [guest],
    },
  },
  {
    path: '/register',
    name: 'register',
    component: Register,
    meta: {
      title: "AIMS ⇾ Register",
      middleware: [guest],
    },
  },
  {
    path: '/about',
    name: 'about',
    component: About,
    meta: {
      title: "AIMS ⇾ About"
    },
  },
  {
    path: '/faq',
    name: 'faq',
    component: Faq,
    meta: {
      title: "AIMS ⇾ FAQ",
    },
  },
  {
    path: '/contact',
    name: 'contact',
    component: Contact,
    meta: {
      title: "AIMS ⇾ Contact",
    },
  },
  {
    path: '/verify',
    name: 'verify',
    component: Unauthorized,
    meta: {
      title: "AIMS ⇾ Error",
      middleware: [auth, unverified],
    },
  },
  {
    path: '/organisations',
    name: 'organisations',
    component: Organisations,
    meta: {
      title: "AIMS ⇾ Organisations",
      middleware: [auth, verified],
    },
  },
  {
    path: '/organisation/:id?',
    name: 'organisation',
    component: Organisation,
    meta: {
      title: "AIMS ⇾ Organisation",
     // middleware: [auth, verified],
    },
  },
  {
    path: '/organisation-categories',
    name: 'organisation-categories',
    component: OrganisationCategories,
    meta: {
      title: "AIMS ⇾ Organisation Categories",
      middleware: [auth, verified, admin],
    },
  },
  {
    path: '/organisation-category/:id?',
    name: 'organisation-category',
    component: OrganisationCategory,
    meta: {
      title: "AIMS ⇾ Organisation Category",
      middleware: [auth, verified],
    },
  },
  {
    path: '/projects',
    name: 'projects',
    component: Projects,
    meta: {
      title: "AIMS ⇾ Projects",
    },
  },
  {
    path: '/profile',
    name: 'profile',
    component: Profile,
    meta: {
      title: "AIMS ⇾ Profile",
      middleware: [auth]
    },
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  // For Title tag

  // This goes through the matched routes from last to first, finding the closest route with a title.
  const nearestWithTitle = to.matched
      .slice()
      .reverse()
      .find((r) => r.meta && r.meta.title);

  // If a route with a title was found, set the document (page) title to that value.
  if (nearestWithTitle) document.title = nearestWithTitle.meta.title;

  // For Middleware
  if (!to.meta.middleware) {
      return next();
  }
  const middleware = to.meta.middleware;

  const context = {
      to,
      from,
      next,
      store,
  };

  return middleware[0]({
      ...context,
      next: middlewarePipeline(context, middleware, 1),
  });
});

export default router
