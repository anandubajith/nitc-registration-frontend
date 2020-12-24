import applicationService from '../../services/application.service';

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
        applicationService.getApplication(getters.token).then(application => {
            commit('setApplication', application);
        });
    },
    // async fetchApplicationsAction({ commit, getters }) {
    //     // fetch application
    // },
    // async updateApplicatoin({ commit, getters }, payload) {

    // },
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