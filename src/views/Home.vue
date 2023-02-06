<template>
  <main class="page home">
    <div class="" style="min-height: 80vh; padding-top:7em; _color: whitesmoke; _background-color: rgba(9, 162, 255, 0.85); font-weight: 400;">
      <div class="container">
        <div class="col-md-12">
            <!-- <div class="card">
                <div class="card-body pt-3 pb-3 px-4">
                    
                </div>
            </div> -->
            <div class="row">
              <div class="col-md-7">
                <h4><b>Welcome To AIMS South Sudan</b></h4>
                <p>The Aid Information Management System (AIMS) web portal from the Ministry of Finance and Planning - Government of South Sudan.</p>
                <div class="card border-light">
              <div class="card-header d-flex justify-content-between">
                <h5 class="text-primary">State Map Distibution </h5>
                <button class="btn btn-light btn-sm" type="button" data-bs-toggle="collapse" data-bs-target="#collapse-chart-trends" aria-expanded="false" aria-controls="collapse-chart-trends">
                    &nbsp;<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5">
                          <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd" />
                        </svg>
                </button>
              </div>
              <div id="collapse-chart-trends" class="collapse show" aria-labelledby="heading-collapsed">
                <div class="card-body ">
                  <h5><span class="badge bg-secondary">Projects Geographic Impact Summary {{new Date().getFullYear()}}</span></h5>
                  <project-distribution-by-state class="text-primary"></project-distribution-by-state>
                </div>
              </div>
              <div class="card-footer"> Map of South Sudan</div>
          </div>
                <div class="row mt-4 mb-4" id="additional_text">
                  <div class="col-md-6" style="text-align: justify;">
                    <p><b>The Aid Information Management System (AIMS)</b> is your one-stop-shop for all information related to foreign assistance in South Sudan. AIMS records and processes information provided by donors on development activities and related aid flows in the country. The overall objective of this AIMS is to increase aid transparency, strengthen accountability, facilitate coordination and allow for more efficient aid management.</p>

                  </div>
                  <div class="col-md-6" style="text-align: justify;">
                    <p><b>Access to Aid Information</b><br>
                      AIMS is a publicly-accessible internet tool which is part of the Government of South Sudan's transparency initiative. Anybody can view the information of aid flow in South Sudan, simply by clicking the "Public User" button. However, only authorized user of development partner can enter or update the aid information in the web portal.</p>
                  </div>
                </div>

                <!-- <center><a href="/login" class="btn btn-primary">Log In</a></center> <center><a href="/register" class="btn btn-success mt-4 mb-4">Register</a></center> -->
              </div>
              <div class="col-md-1">&nbsp;</div>

              <div class="col-md-4">
                <div class="row">
                  <div class="col-md-4">
                    <p>Log in as</p>
                  </div>
                  <div class="col-md-8">
                    <button @click="loginAsGuest()" style="background-color: #f7f7f7; color: black; border: 1px solid #f7f7f7; margin-right: 5px;" class=" btn btn-success btn-rounded">PUBLIC USER</button>

                    <button @click="navigate('login')" style="_color: black;" class="btn btn-primary btn-rounded ml-4">LOG IN</button>
                  </div>
                </div><!-- row -->

                <div class="card text-black mt-4">
                  <div class="card-header">
                      <center><h5>Sign in</h5></center>
                  </div>
                  <div class="card-body">
                    <div v-if="isLoading" class="spinner-border text-warning" role="status">
                      <span class="visually-hidden">Loading...</span>
                    </div>
                    <flash-error :hasError="apiErrors" :errors="errors" @dismissError="apiErrors = false"></flash-error>
                    <form class="needs-validation" novalidate>
                      <div class="form-floating mb-3">
                              <input type="email"  v-model="form.email" class="form-control" id="floatingInput" placeholder="email@example.com">
                              <label for="floatingInput">Email Address</label>
                      </div>
                      <div class="form-floating mb-3 mt-4">
                            <input type="password"  v-model="form.password" class="form-control" id="floatingInput" placeholder="*******">
                            <label for="floatingInput">Password</label>
                      </div>
                      <div class="mb-3 form-check">
                        <input type="checkbox" class="form-check-input" id="exampleCheck1">
                        <label class="form-check-label" for="exampleCheck1">Keep me logged in or <router-link :to="{name: 'register'}">Register</router-link></label>
                      </div>
                      <button  class="btn btn-primary" @click.prevent="submit">Sign in</button>
                    </form>
                  </div>
                </div>

                <div>

                </div>


                <h5 class="mt-4">Feedback</h5>
                <p><small>Your feedback on data fields and others related issues of this web portal are highly appreciated. Please send your valuable feedback to: <a href="mailto:aimssouthsudan@gmail.com" style="color:#a8ecff">AIMS</a></small></p>


              </div>
              
            </div>
        </div>
      </div>
     </div>
       
    </main>
</template>

<script>
import { mapActions} from 'vuex'
import flashError from '../components/flashError.vue'
import ProjectDistributionByState from '../components/maps/ProjectDistributionByState.vue'

export default {
  name: 'Home',
  components: {
    flashError, ProjectDistributionByState
    
  },
  data() {
    return {
      showAlert: false,
      alertMessage: "",
      valid: false,
      isLoading: false,
      apiErrors: false,
      generalError: false,
      validationErrors: false,
      apiLoading: true,
      form: {
        email: "",
        password: "",
        device_name: "browser"
      },
      errors: []
    };
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

  methods: {
    ...mapActions({
      login: 'auth/login',
      guestLogin: 'auth/guestLogin'
    }),

    navigate(link) {
      this.$router.push({ name: link });
    },

    submit() {
        this.isLoading = true;      
        this.login(this.form).then(
          (response) => {
            //
            this.isLoading = false;
            let apiMessage = response ?? 'success'
            this.$store.commit('showSnackbar',apiMessage);
            this.$router.push({ name: "dashboard" });
          },
          (error) => {
            const resMessage =
                      (error.response &&
                        error.response.data &&
                        error.response.data.errors) ||
                      error.message ||
                      error.toString();
              this.isLoading = false;
              this.apiErrors = true;
              this.errors = resMessage;
             

          }
        );
          
        
    },

    loginAsGuest() {
        this.isLoading = true;      
        this.guestLogin().then(
          (response) => {
            //
            this.isLoading = false;
            let apiMessage = response ?? 'success'
            this.$store.commit('showSnackbar',apiMessage);
            this.$router.push({ name: "dashboard" });
          },
          (error) => {
            const resMessage =
                      (error.response &&
                        error.response.message) ||
                      error.message ||
                      error.toString();
              this.isLoading = false;
              this.apiErrors = true;
              this.errors = resMessage;
              this.$store.commit('showSnackbar',"Unauthorized");
             

          }
        );
          
        
    },
  }
}
</script>
<style scoped>
  .home {
    /* padding-top:3.5em; */
    /* background-image: url("../assets/img/4266.webp"); */
  }

  @media only screen and (min-width:320px) and (max-width:480px)  { /* smartphones, iPhone, portrait 480x320 phones */ 
    #additional_text {
      display: none;
    }
  }
</style>

