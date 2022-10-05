<template>
  <main class="page home">
    <div class="container pb-3" style="min-height: 80vh;">
        <div class="col-md-12">
            <div class="card">
                <div class="card-body">
                    <h2 class="text-primary">Greetings </h2>
                </div>
            </div>
        </div>
     </div>
       
    </main>
</template>

<script>

export default {
  name: 'Home',
  components: {
    
  },
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
}
</script>
<style scoped>
  .home {
    padding-top: 5em;
  }
</style>

