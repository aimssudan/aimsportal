import axios from 'axios'
import {AXIOS_HEADERS} from '../globals/constants'
export default {
  namespaced: true,

  state: {
    
  },
  getters: {
     
  },
  mutations: {
    
  },
  actions: {    
    fetchSystemSettings() {        
     return axios.get(`/admin/system-settings`, AXIOS_HEADERS);
    },
    saveSystemSettings(_, payload) {
      return axios.post(`/admin/system-settings`, payload, AXIOS_HEADERS);
    }

  },

}