import dueService from '../../services/due.service';
const state = {
    dues: null,
}
const getters = {
    dues(state) {
        return state.dues;
    }
}
const actions = {
    fetchDueAction({ commit, getters }) {
        dueService.getDues(getters.token).then(dues => {
            commit('setDues', dues);
        });
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