import Vue from 'vue'
import Vuex from 'vuex'

import auth from './modules/auth';
import application from './modules/application';
import due from './modules/due';

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    auth,
    application,
    due,
  },
  getters: {
    isLoading(state) {
      return state.loading
    }
  },
  state: {
    loading: false,
  },
  mutations: {
    setLoading(state, payload) {
      state.loading = payload
    }
  },
})