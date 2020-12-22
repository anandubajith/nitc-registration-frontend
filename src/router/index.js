import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Dashboard from '../views/Dashboard.vue'
import Application from '../views/Application.vue'
import Profile from '../views/Profile.vue'
import store from '@/store';
// import authService from '../services/auth.service'
import { ToastProgrammatic as Toast } from 'buefy'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Login,
  },
  {
    path: '/profile',
    component: Profile,
    meta: { authorize: ['user'] }
  },
  {
    path: '/dashboard',
    component: Dashboard,
    meta: { authorize: ['user'] }
  },
  {
    path: '/application',
    component: Application,
    meta: { authorize: ['user', 'sac', 'faculty', 'academic'] }
  },
  { path: '*', redirect: '/' }
]

const router = new VueRouter({
  // mode: 'hash-mode',
  base: process.env.BASE_URL,
  routes
});

router.beforeEach((to, from, next) => {
  //   // redirect to login page if not logged in and trying to access a restricted page
  //   const currentUser = authService.getUser();
  //   if (authorize) {
  //       if (!currentUser) {
  //           // not logged in so redirect to login page with the return url
  //           return next({ path: '/login', query: { returnUrl: to.path } });
  //       }

  //       // check if route is restricted by role
  //       if (authorize.length && !authorize.includes(currentUser.role)) {
  //           // role not authorised so redirect to home page
  //           return next(p{ path: '/' });
  //       }

  //   }


  // console.log("STORE", store.getters)
  // console.log("role", store.getters.role);

  const { authorize } = to.meta;
  if (authorize && authorize.length) {
    if (store.getters.token === null) {
      // redirect to login
      Toast.open('Not logged in block');
      return next({ path: '/login', query: { returnUrl: to.path } });
    } else if (!authorize.includes(store.getters.role)) {
      // redirect to login
      Toast.open(' no role block');
      return next({ path: '/' });
    }

  }

  next();
})



export default router
