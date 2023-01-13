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

  }
}