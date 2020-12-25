import dueService from '../../services/due.service';
import { ToastProgrammatic as Toast } from 'buefy';

const state = {
    dues: null,
}
const getters = {
    dues(state) {
        return state.dues;
    }
}
const actions = {
    async fetchDueAction({ commit, getters }) {
        try {
            commit('setLoading', true);
            const dues = await dueService.getDues(getters.token);
            commit('setDues', dues);
        } catch (e) {
            Toast.open({
                message: `Error: ${e.message}`,
                type: 'is-danger'
            })
        } finally {
            commit('setLoading', false);
        }
    },
    async updateDueAction({commit, getters}, payload) {
        try {
            commit('setLoading', true);
            await dueService.updateDue(getters.token, payload);
            // todo: splice and update
        } catch (e) {
            Toast.open({
                message: `Error: ${e.message}`,
                type: 'is-danger'
            })
        } finally {
            commit('setLoading', false);
        }
    }
}
const mutations = {
    setDues(state, payload) {
        state.dues = payload;
    }
}

export default {
    state, getters, actions, mutations
}