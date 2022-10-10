<template>
  <main class="page home">
    <div class="container pb-3" style="min-height: 80vh;">
        <div class="col-md-12">
            <div class="card">
                <div class="card-body pt-3 pb-3 px-4">
                    <div class="row">
                      <div class="col-md-10">
                        <h4>Welcome to Sout Sudan AIMS</h4>
                        <p>Aid Information Management System (AIMS) web portal from Economics Relations Division, Ministry of Finance, Government of South Sudan</p>
                        <p>The Aid Information Management System (AIMS) is your one-stop-shop for all information related to foreign assistance in South Sudan. AIMS records and processes information provided by donors on development activities and related aid flows in the country. The overall objective of this AIMS is to increase aid transparency, strengthen accountability, facilitate coordination and allow for more efficient aid management.</p>

                        <h4>Access to aid information</h4>
                        <p>AIMS is a publicly-accessible internet tool which is part of the Government of South Sudan's transparency initiative. Anybody can view the information of aid flow in South Sudan, simply by clicking "Enter As Public User" button. However, only authorized user of development partner can enter or update the aid information in the web portal.</p>
                        
                        <h4>Feedback</h4>
                        <p>Your feedback on data fields and others related issues of this web portal are highly appreciated. Please send your valuable feedback to: <a href="mailto:aimssouthsudan@gmail.com">AIMS</a></p>
                        
                        <center><a href="/login" class="btn btn-primary">Log In</a></center> <center><a href="/register" class="btn btn-success mt-4">Register</a></center>
                      </div>
                      
                    </div>
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

