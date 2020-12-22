import authService from '../../services/auth.service';
import { ToastProgrammatic as Toast } from 'buefy';

const state = {
  user: null
};
const getters = {
  user(state) {
    return state.user
  },
  token(state) {
    if ( state.user && state.user.accessToken)
      return state.user.accessToken;
    return null;
  },
  role(state) {
    if ( state.user && state.user.user.role)
      return state.user.user.role;
    return null;
  }
};
const actions = {
  async signInAction({ commit }, payload) {
    try {
      commit('setLoading', true);
      const {data} = await authService.login(payload.username, payload.password);
      commit('setUser', data);
      Toast.open({
        message: `Welcome `,
        type: 'is-success'
      })
    } catch (e) {
      Toast.open({
        message: `Error: ${e.message}`,
        type: 'is-danger'
      })
    } finally {
      commit('setLoading', false);
    }
  },
  signOutAction({ commit }) {
    try {
      commit('setUser', null)
    } catch (e) {
      Toast.open({
        message: `Error: ${e.message}`,
        type: 'is-danger'
      })
    } finally {
      commit('setLoading', false);
    }
  },
};
const mutations = {
  setUser(state, payload) {
    state.user = payload;
  },
};

export default {
  state, getters, actions, mutations
}