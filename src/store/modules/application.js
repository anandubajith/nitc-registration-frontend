
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
        // get the token
        // getters.token is the token
        // do the request

        // set the state
    },
    async fetchApplicationsAction({ commit, getters }) {
        // fetch application
    },
    async updateApplicatoin({ commit, getters }, payload) {

    },
    async updateApplicationStatus({ commit, getters }, payload) {

    }
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