import axios from 'axios'

export default {
  namespaced: true,

  state: {
    reportFundingTrend: [],
  },
  getters: {
       
    category: (state) => (id) => {
      return state.organisationCategories.find(item => item.id === id)
    }
  },
  mutations: {
    SET_FUNDING_TREND (state, payload) {
      state.reportFundingTrend = payload
    }
  },
  actions: {    
    getFundingTrendReport(_, payload) {
     return axios.post(`/reports/funding-trend`, payload);
    },

    getFundingBySectorReport(_, payload) {
      return axios.post(`/reports/funding-by-sector`, payload);
     },

  }
}