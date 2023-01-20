import axios from 'axios'

export default {
  namespaced: true,

  state: {
    codelists: [],
    codelistOptions: [],
    codelistTranslations: [],
  },
  getters: {
       
    category: (state) => (id) => {
      return state.organisationCategories.find(item => item.id === id)
    }
  },
  mutations: {
    SET_CODELISTS (state, payload) {
      state.codelists = payload
    },
    SET_CODELISTS_OPTIONS (state, payload) {
      state.codelistOptions = payload
    },
    ADD_CODELIST_OPTION (state, payload) {
      state.codelistOptions.push(payload);
    },
    UPDATE_CODELIST_OPTION (state,payload){
      const index = state.codelistOptions.findIndex(item => item.id === payload.id);
      if (index !== -1) state.codelistOptions.splice(index, 1, payload);      
    },
  },
  actions: {    
    fetchCodelistOptions(_, payload) {
     return axios.post(`/general/codelists/get-options`, payload);
    },
    fetchCodelistValue(_, payload) {
      return axios.post(`/general/codelists/get-value`, payload);
    }

  }
}