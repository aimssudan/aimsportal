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

    getFundingByStateReport(_, payload) {
      return axios.post(`/reports/funding-by-state`, payload);
    },

    getFundingBySourceReport(_, payload) {
    return axios.post(`/reports/funding-by-source`, payload);
    },

    getTotalProjectsTrendReport(_, payload) {
      return axios.post(`/reports/total-projects-trend`, payload);
     },
     
     getTotalProjectsInProgressTrendReport(_, payload) {
      return axios.post(`/reports/total-projects-inprogress-trend`, payload);
     },

     getTotalProjectsCompletedTrendReport(_, payload) {
      return axios.post(`/reports/total-projects-completed-trend`, payload);
     },

     getProjectCount() {
      return axios.post(`/reports/projects-count`)
     },

     getBudgetingTrendReport(_, payload) {
      return axios.post(`/reports/budgets-trend`, payload);
     },
    
     getFundingTotal(_, year = 1) {
        const payload = (year == 1) ? {} : {year: year}
      return axios.post(`/reports/funding-total`, payload);
     },

     getSummaryPerStateReport(_, payload) {
      return axios.post(`/reports/summary-per-state`, payload);
     },

     getSummaryPerCountyReport(_, payload) {
      return axios.post(`/reports/summary-per-county`, payload);
     },

     getOrganisationsCount(_, payload) {
      return axios.post(`/reports/organisations-count`, payload);
     },

  }
}