<template>
  <main class="page home">
    <div class="" style="min-height: 80vh; padding-top:7em; color: whitesmoke; background-color: rgba(9, 162, 255, 0.85); font-weight: 400;">
      <div class="container">
        <div class="col-md-12">
            <!-- <div class="card">
                <div class="card-body pt-3 pb-3 px-4">
                    
                </div>
            </div> -->
            <div class="row">
              <div class="col-md-1">&nbsp;</div>
              <div class="col-md-9">
                <h4>Welcome to Sout Sudan AIMS</h4>
                <p>Aid Information Management System (AIMS) web portal from Economics Relations Division, Ministry of Finance, Government of South Sudan</p>
                <p>The Aid Information Management System (AIMS) is your one-stop-shop for all information related to foreign assistance in South Sudan. AIMS records and processes information provided by donors on development activities and related aid flows in the country. The overall objective of this AIMS is to increase aid transparency, strengthen accountability, facilitate coordination and allow for more efficient aid management.</p>

                <h4>Access to aid information</h4>
                <p>AIMS is a publicly-accessible internet tool which is part of the Government of South Sudan's transparency initiative. Anybody can view the information of aid flow in South Sudan, simply by clicking "Enter As Public User" button. However, only authorized user of development partner can enter or update the aid information in the web portal.</p>
                
                <h4>Feedback</h4>
                <p>Your feedback on data fields and others related issues of this web portal are highly appreciated. Please send your valuable feedback to: <a href="mailto:aimssouthsudan@gmail.com">AIMS</a></p>
                
                <center><a href="/login" class="btn btn-primary">Log In</a></center> <center><a href="/register" class="btn btn-success mt-4 mb-4">Register</a></center>
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
    /* padding-top:3.5em; */
    background-image: url("../assets/img/4266.webp");
  }
</style>

