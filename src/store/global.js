import axios from 'axios'

export default {
  namespaced: true,

  state: {
    organisations: [],
    organisationCategories: []
  },
  getters: {
    authenticated(state) {
      return state.token && state.user
    },    
    user(state) {
      return state.user
    }
  },
  mutations: {
    SET_ORGANISATIONS (state, payload) {
      state.organisations = payload
    },
    SET_ORGANISATION_CATEGORIES (state, payload) {
      state.organisationCategories = payload
    }
  },
  actions: {
    getOrganisations({commit}) {
        axios.get(`/organisations`).then((response) => {
            commit("SET_ORGANISATIONS", response.data.data);
        });
    },
    getOrganisationCategories({commit}) {
        axios.get(`/organisation-categories`).then((response) => {
            commit("SET_ORGANISATION_CATEGORIES", response.data.data);
        });
    },
    

  }
}