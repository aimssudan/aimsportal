<template>
  <main class="page">
    <div class="container" style="min-height: 50vh;">
      <h1 class="text-primary"> Error - Unauthorized</h1>
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item"><router-link :to="{name: 'dashboard'}">Dashboard</router-link></li>
          <li class="breadcrumb-item active" aria-current="page">Error</li>
        </ol>
      </nav>
     <div class="col-md-12">
        <div class="card ">
          <div class="card-header text-white bg-danger">
            <h5>Error</h5>
          </div>
            
          <div class="card-body">
              <p> Sorry you are not permitted to use system or access requested resource, kindly contact <strong> {{profile.organisation?.name ?? 'Administrator'}}  </strong> to grant you access </p>
            </div>
        </div>
     </div>
     </div>
       
    </main>
</template>

<script>
import {mapState } from 'vuex'

export default {

  created() {
    let isLoggedIn = !!localStorage.getItem("token");
    if(isLoggedIn){
      //put user and translations to vuex state 
      let token = localStorage.getItem("token")
      let loggedInUser = JSON.parse(localStorage.getItem('user'))
      this.$store.commit('auth/SET_TOKEN', token);
      this.$store.commit('auth/SET_USER', loggedInUser);
    }
  },
  computed: {
      ...mapState('auth', ['user']),
      profile() {
          return this.user;
      },
  }
}
</script>

<style scoped>
  .page {
    padding-top: 4em;
    padding-bottom: 4em;
  }
</style>