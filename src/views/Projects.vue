<template>
  <main class="page project-page" style="min-height: 80vh;">    
    <div class="container">
      <h1 class="text-primary"> Projects </h1>
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item"><a href="#">Dashboard</a></li>
          <li class="breadcrumb-item"><a href="#">Projects</a></li>
          <li class="breadcrumb-item active" aria-current="page">List</li>
        </ol>
      </nav>
        <div class="col-md-12">
            <div class="card">
              <div class="card-header">
                <h5>Project list</h5>
              </div>
                <div class="card-body table-responsive">
                    <table class="table table-hover table-striped">
                      <thead>
                          <tr>
                              <th>ID</th>
                              <th>Name</th>
                              <th>Funder</th>
                              <th>Implemetor</th>
                              <th>Value</th>
                              <th>Progress</th>
                          </tr>
                      </thead>

              </table>
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

<style scoped>
.project-page {
  padding-top: 4em;
  padding-bottom: 4em;
}
</style>