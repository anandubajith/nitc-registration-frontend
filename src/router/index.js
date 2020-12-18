import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Dashboard from '../views/Dashboard.vue'
import Application from '../views/Application.vue'
import Profile from '../views/Profile.vue'
// import authService from '../services/auth.service'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Login,
  },
  {
    path: '/profile',
    component: Profile,
    meta: { authorize: ['USER'] } 
  },
  {
    path: '/dashboard',
    component: Dashboard,
  },
  {
    path: '/application' ,
    component: Application
  },
  { path: '*', redirect: '/' }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});


// router.beforeEach((to, from, next) => {
//   // redirect to login page if not logged in and trying to access a restricted page
//   const { authorize } = to.meta;
//   const currentUser = authService.getUser();
//   if (authorize) {
//       if (!currentUser) {
//           // not logged in so redirect to login page with the return url
//           return next({ path: '/login', query: { returnUrl: to.path } });
//       }

//       // check if route is restricted by role
//       if (authorize.length && !authorize.includes(currentUser.role)) {
//           // role not authorised so redirect to home page
//           return next({ path: '/' });
//       }
//   }

//   next();
// })



export default router
