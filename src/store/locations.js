import axios from 'axios'

export default {
  namespaced: true,

  state: {
    locationStates: [],
  },
  getters: {
     
  },
  mutations: {
    SET_STATES (state, payload) {
        state.locationStates = payload
      },
    
  },
  actions: {    
    getStates({commit}) {
        axios.get(`/locations/get-states`).then((response) => {
            commit("SET_STATES", response.data.locations);
        });
    },

    getCounties(_, payload) {
      return axios.post(`/locations/get-counties`, payload);
    },

    getPayams(_, payload) {
    return axios.post(`/locations/get-payams`, payload);
    },


  }
}