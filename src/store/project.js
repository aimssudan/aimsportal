import axios from 'axios'

export default {
  namespaced: true,

  state: {
    projects: [],
    organisationCategories: []
  },
  getters: {
    authenticated(state) {
      return state.token && state.user
    },    
    project: (state) => (id) => {
      return state.projects.find(item => item.id === id)
    }
  },
  mutations: {
    SET_PROJECTS (state, payload) {
      state.projects = payload
    },
    ADD_PROJECT (state, payload) {
      state.projects.push(payload);
    },
    UPDATE_PROJECT(state,payload){
      const index = state.projects.findIndex(item => item.id === payload.id);
      if (index !== -1) state.projects.splice(index, 1, payload);      
    },
    DELETE_PROJECT (state, payload) {
      const index = state.projects.findIndex(item => item.id === payload.id);
      if (index !== -1) state.projects.splice(index, 1); 
    },
  },
  actions: {
    getProjects({commit}) {
        axios.get(`/projects`).then((response) => {
            commit("SET_PROJECTS", response.data.data);
        });
    },
    filterProjects(_, payload) {
      return axios.post(`/projects/search`, payload);
  },
    addProject(_, payload) {
      return axios.post(`/projects`, payload);
    },
    updateProject(_, payload) {
       return axios.put(`/projects/${payload.id}`, payload);
    },
    fetchProject(_, id) {
       return axios.get(`/projects/${id}`);
    },
    fetchOrganisationUsers(_, id) {
      return axios.get(`/organisations/${id}/users`);
    },
    deleteProject(_, id) {
      return axios.delete(`/projects/${id}`);
    },
    deleteParticipatingOrg(_, id) {
      return axios.delete(`/projects/participating-org/${id}`);
    },
    deleteBudget(_, id) {
      return axios.delete(`/projects/budget/${id}`);
    },
    deleteSector(_, id) {
      return axios.delete(`/projects/sector/${id}`);
    },
    deleteRecipientRegion(_, id) {
      return axios.delete(`/projects/recipient-region/${id}`);
    },
    deleteTransaction(_, id) {
      return axios.delete(`/projects/transaction/${id}`);
    },
    deleteProjectLocation(_, id) {
      return axios.delete(`/projects/location/${id}`);
    },

  }
}