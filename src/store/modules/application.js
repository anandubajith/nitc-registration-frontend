import applicationService from '../../services/application.service';
import { ToastProgrammatic as Toast } from 'buefy';

const state = {
    application: null,
    applications: null,
}
const getters = {
    application(state) {
        return state.application;
    },
    applications(state) {
        return state.applications
    }
}
const actions = {
    async fetchUserApplicationAction({ commit, getters }) {
        try {
            commit('setLoading', true);
            const application = await applicationService.getApplication(getters.token);
            commit('setApplication', application);
        } catch (e) {
            Toast.open({
                message: `Error: ${e.message}`,
                type: 'is-danger'
            })
        } finally {
            commit('setLoading', false);
        }
    },
    async fetchApplicationsAction({ commit, getters }) {
        try {
            commit('setLoading', true);
            const applications = await applicationService.listApplications(getters.token);
            commit('setApplications', applications);
        } catch (e) {
            Toast.open({
                message: `Error: ${e.message}`,
                type: 'is-danger'
            })
        } finally {
            commit('setLoading', false);
        }
    },
    async updateApplicationAction({ commit, getters }, payload) {
        try {
            commit('setLoading', true);
            const updated = await applicationService.updateApplication(getters.token, payload);
            commit('setApplication', updated);
        } catch (e) {
            Toast.open({
                message: `Error: ${e.message}`,
                type: 'is-danger'
            })
        } finally {
            commit('setLoading', false);
        }
    },
    // async updateApplicationStatus({ commit, getters }, payload) {

    // }
}
const mutations = {
    setApplication(state, payload) {
        state.application = payload;
    },
    setApplications(state, payload) {
        state.applications = payload;
    },
}

export default {
    state, getters, actions, mutations
}