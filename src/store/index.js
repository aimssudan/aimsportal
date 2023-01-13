import { createStore } from 'vuex'
import auth from './auth'
import global from './global';
import project from './project';

export default createStore({
  state: {
    // isLoggedIn: false,
    //  user: {},
     snackbar: {
      show: false,
      text: '',
      class: 'bg-success'
    },
  },
  getters: {

    // getUserName: state =>{
    //    return state.user.name ? state.user.name : ''
    // },
    // getUserLanguage: state =>{
    //     return state.user.current_language ? state.user.current_language : 'eng'
    // },
    // getUserEmail: state =>{
    //    return state.user.email ? state.user.email : ''
    // },
    // getUserStatus: state => {
    //    return state.user.status ? state.user.status : ''
    // },
  },
  mutations: {

    // updateUser(state,newUser){
    //   state.user = newUser;
    // },   
    // loginUser(state){
    //     state.isLoggedIn = true;
    // },
    // logoutUser(state){
    //     state.isLoggedIn = false;
    // },
    showSnackbar(state, text) {
      let timeout = 1000;
      if (state.snackbar.show === true) {
        state.snackbar.show = false;
        timeout = 1000;
        setTimeout(() => {
          state.snackbar.show = true;
          state.snackbar.text = text;
        }, timeout)
      }
      else if (state.snackbar.show === false) {
        state.snackbar.show = true;
        state.snackbar.text = text;
        timeout = 6000;
        setTimeout(() => {
          state.snackbar.show = false;
          state.snackbar.text = '';
        }, timeout)
      }
      
    },
    
    hideSnackbar(state) {
      state.snackbar.show = false;
    },
  },
  actions: {
  },
  modules: {
    auth,
    global,
    project,
  }
})
