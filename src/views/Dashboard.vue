<template>
  <main class="page">
    <div class="container">
      <h1 class="text-primary"> Dashboard</h1>
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item active" aria-current="page">Dashboard</li>
        </ol>
      </nav>
      <div class="row">
          <div class="col-md-12">
              <div class="card">
              <div class="card-body">
                  <h5 class="text-primary">Welcome, {{profile.name}}</h5>
                  </div>
              </div>
          </div>
        </div>
      </div>
    </main>
</template>

<script>
import {mapState} from 'vuex'

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