import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Dashboard from '../views/Dashboard.vue'
import ViewApplication from '../views/ViewApplication.vue'
import Profile from '../views/Profile.vue'
import DueUpload from '../views/DueUpload.vue'
import ListApplications from '../views/ListApplications.vue'
import EditApplication from '../views/EditApplication.vue'
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
    meta: { authorize: ['user', 'fa'] }
  },
  {
    path: '/dashboard',
    component: Dashboard,
    meta: { authorize: ['user'] }
  },
  {
    path: '/application/edit', 
    component: EditApplication,
    meta: { authorize: ['user']}
  },
  {
    path: '/due',
    component: DueUpload,
    meta: { authorize: ['library_admin','hostel_admin'] }
  },
  {
    path: '/applications/list',
    component: ListApplications,
    meta: { authorize: ['fa','sac_admin', 'academic_admin'] }
  },
  {
    path: '/application',
    component: ViewApplication,
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
 
  // console.log("STORE", store.getters)
  // console.log("role", store.getters.role);

  const { authorize } = to.meta;
  if (authorize && authorize.length) {
    if (store.getters.token === null) {
      // redirect to login
      Toast.open({
        message: 'User not logged in',
        type: 'is-danger'
      });
      return next({ path: '/login', query: { returnUrl: to.path } });
    } else if (!authorize.includes(store.getters.role)) {
      // redirect to login
      Toast.open({
        message: 'Insufficuent permissions',
        type: 'is-danger'
      });
      return next({ path: '/' });
    }

  }

  next();
})



export default router
