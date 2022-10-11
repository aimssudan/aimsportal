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
              <div class="col-md-7">
                <h4>Welcome to Sout Sudan AIMS</h4>
                <p>Aid Information Management System (AIMS) web portal from Economics Relations Division, Ministry of Finance, Government of South Sudan</p>

                <!-- <div id="carouselExampleIndicators" class="carousel slide mt-3" data-bs-ride="true">
                  <div class="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                  </div>
                  <div class="carousel-inner">
                    <div class="carousel-item active">
                      <img src="@/assets/img/0001.jpg" class="d-block w-100" alt="Baby being Fed">
                    </div>
                    <div class="carousel-item">
                      <img src="@/assets/img/0001.jpg" class="d-block w-100" alt="Community crossing River">
                    </div>
                    <div class="carousel-item">
                      <img src="@/assets/img/0001.jpg" class="d-block w-100" alt="Settlement Camp ">
                    </div>
                  </div>
                  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                  </button>
                  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                  </button>
                </div> -->

                <img src="@/assets/img/0001.jpg" class="img-fluid" alt="Imgae">

                <div class="row mt-4">
                  <div class="col-md-6">
                    <p><b>The Aid Information Management System (AIMS)</b> is your one-stop-shop for all information related to foreign assistance in South Sudan. AIMS records and processes information provided by donors on development activities and related aid flows in the country. The overall objective of this AIMS is to increase aid transparency, strengthen accountability, facilitate coordination and allow for more efficient aid management.</p>

                  </div>
                  <div class="col-md-6">
                    <p><b>Access to aid information</b><br>
                      AIMS is a publicly-accessible internet tool which is part of the Government of South Sudan's transparency initiative. Anybody can view the information of aid flow in South Sudan, simply by clicking "Enter As Public User" button. However, only authorized user of development partner can enter or update the aid information in the web portal.</p>
                  </div>
                </div>

                <!-- <center><a href="/login" class="btn btn-primary">Log In</a></center> <center><a href="/register" class="btn btn-success mt-4 mb-4">Register</a></center> -->
              </div>
              <div class="col-md-1">&nbsp;</div>

              <div class="col-md-4">
                <div class="row">
                  <div class="col-md-6">
                    <p>Proceed to access public information</p>
                  </div>
                  <div class="col-md-6">
                    <a href="" class="btn btn-success btn-rounded">PUBLIC USER</a>
                  </div>
                </div><!-- row -->

                <div class="card text-black mt-4">
                  <div class="card-header">
                      <h5>Authenticate</h5>
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
                      <button  class="btn btn-primary" @click.prevent="submit">Submit</button>
                    </form>
                  </div>
                </div>


                <h4 class="mt-4">Feedback</h4>
                <p>Your feedback on data fields and others related issues of this web portal are highly appreciated. Please send your valuable feedback to: <a href="mailto:aimssouthsudan@gmail.com">AIMS</a></p>


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

export default {
  name: 'Home',
  components: {
    flashError
    
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
      login: 'auth/login'
    }),

    submit() {

      //  this.apiErrors = false;
      //  this.generalError = false;
        this.isLoading = true;
      //  this.validationErrors = false;
       
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
  }
}
</script>
<style scoped>
  .home {
    /* padding-top:3.5em; */
    background-image: url("../assets/img/4266.webp");
  }
</style>

