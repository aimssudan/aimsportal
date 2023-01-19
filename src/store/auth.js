import axios from 'axios'

export default {
  namespaced: true,

  state: {
    token: null,
    user: null
  },
  getters: {
    authenticated(state) {
      return state.token && state.user
    },
    verified(state) {
      return state.user !== null && state.user.status === "approved";
    },
    organisation(state) {
      return state.user && state.user.organisation && state.user.organisation.name ? state.user.organisation.name: null;
    },
    superadmin(state) {
      return state.user && state.user.roles && state.user.roles[0]?.name == 'Super Administrator';
    },
    contributor(state) {
      return state.user && state.user.roles && state.user.roles[0]?.name === 'Contributor';
    },
    manager(state) {
      return state.user && state.user.roles && state.user.roles[0]?.name === 'Manager';
    },
    user(state) {
      return state.user
    }
  },
  mutations: {
    SET_TOKEN (state, token) {
      state.token = token
    },
    SET_USER (state, data) {
      state.user = data
    }
  },
  actions: {
    register(_, credentials) {
        return axios.post('/users/register', credentials)
    },
    sendOtp(_, email) {
      return axios.post('/users/validate-email', email)
    },
    async login({ dispatch }, credentials) {

      let response = await axios.post('/users/login', credentials)
      return dispatch('attempt', response.data.data.token)

    },
    async attempt({ commit, state }, token) {

      if(token) {
        commit('SET_TOKEN', token)
        localStorage.setItem('token', token)
      }

      if(!state.token) {
        return
      }

      try{
        let response = await axios.get('/users/profile')
        commit('SET_USER', response.data.data)
        localStorage.setItem('user', JSON.stringify(response.data.data))

      } catch (e) {
        commit('SET_TOKEN', null)
        commit('SET_USER', null)
        localStorage.removeItem('token')
        localStorage.removeItem('user')
        //this.$router.push({ name: "login" });
      }

    },
    async logOut({ commit }) {
      return axios.delete('/users/logout').then(() => {
        commit('SET_TOKEN', null)
        commit('SET_USER', null)
        localStorage.removeItem('token')
        localStorage.removeItem('user')
      })
    },

    updateUserStatus(_, payload) {
      return axios.post(`/users/update-status/${payload.id}`, payload);
     },

     updateUser(_, payload) {
      return axios.post(`/users/update-user/${payload.id}`, payload);
     },

     async guestLogin({dispatch}) {
      let credentials = {
        app_token : process.env.VUE_APP_APP_KEY
      }
      let response = await axios.post('/users/guest-login', credentials)
      return dispatch('attempt', response.data.data.token)
     }

  }
}