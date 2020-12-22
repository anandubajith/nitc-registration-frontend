import Vue from 'vue'
import Vuex from 'vuex'

import auth from './modules/auth';

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    auth,
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