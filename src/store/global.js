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
    category: (state) => (id) => {
      return state.organisationCategories.find(item => item.id === id)
    }
  },
  mutations: {
    SET_ORGANISATIONS (state, payload) {
      state.organisations = payload
    },
    SET_ORGANISATION_CATEGORIES (state, payload) {
      state.organisationCategories = payload
    },
    ADD_CATEGORY (state, newCategory) {
      state.organisationCategories.push(newCategory);
    },
    UPDATE_CATEGORY(state,payload){
      const index = state.organisationCategories.findIndex(item => item.id === payload.id);
      if (index !== -1) state.organisationCategories.splice(index, 1, payload);      
    },
    ADD_ORGANISATION (state, newOrganisation) {
      state.organisations.push(newOrganisation);
    },
    UPDATE_ORGANISATION (state,payload){
      const index = state.organisations.findIndex(item => item.id === payload.id);
      if (index !== -1) state.organisations.splice(index, 1, payload);      
    },
    DELETE_ORGANISATION_CATEGORY (state, payload) {
      const index = state.organisationCategories.findIndex(item => item.id === payload.id);
      if (index !== -1) state.organisationCategories.splice(index, 1); 
    },
    DELETE_ORGANISATION (state, payload) {
      const index = state.organisations.findIndex(item => item.id === payload.id);
      if (index !== -1) state.organisations.splice(index, 1); 
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
    addOrganisationCategory(_, payload) {
     return axios.post(`/organisation-categories`, payload);
    },
    updateOrganisationCategory(_, payload) {
      return axios.put(`/organisation-categories/${payload.id}`, payload);
    },
    fetchOrganisationCategory(_, id) {
      return axios.get(`/organisation-categories/${id}`);
    },
    deleteOrganisationCategory(_, id) {
      return axios.delete(`/organisation-categories/${id}`);
    },
    addOrganisation(_, payload) {
      return axios.post(`/organisations`, payload);
     },
     updateOrganisation(_, payload) {
       return axios.put(`/organisations/${payload.id}`, payload);
     },
     fetchOrganisation(_, id) {
       return axios.get(`/organisations/${id}`);
     },
     fetchOrganisationUsers(_, id) {
      return axios.get(`/organisations/${id}/users`);
    },
    deleteOrganisation(_, id) {
      return axios.delete(`/organisations/${id}`);
    },

  }
}