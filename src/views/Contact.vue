<template>
  <main class="page contact-page">
    <div class="container" style="min-height: 80vh;">
        <div class="col-md-12">
            <div class="card">
                <div class="card-body">
                    <h2 class="text-primary">Contact us </h2>
                </div>
            </div>
        </div>
     </div>
       
    </main>
</template>

<script>
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
}
</script>

<style>
.contact-page {
  padding-top: 4em;
  padding-bottom: 4em;
}
</style>