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
                    <h5 class="text-primary">Project Overview </h5>
                    
                  </div>
                  <div id="collapse-chart-trends" class="collapse show" aria-labelledby="heading-collapsed">
                    <div class="card-body ">
                                        
                      <project-distribution-by-state class="text-primary"></project-distribution-by-state>

                    </div>
                  </div>
                </div>

                <div class="row mt-4">
                  <h4>In Detail</h4>
                  <div class="col-md-6">
                    <!-- Line Graph -->
                    <total-projects-trend-chart></total-projects-trend-chart>
                  </div>
                  <div class="col-md-6">
                    <!-- Bar Graph -->
                    <funding-trend-chart></funding-trend-chart>
                  </div>
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
                  <div class="col-md-6">
                    <center><button @click="loginAsGuest()" style="background-color: #f7f7f7; color: black; border: 1px solid #f7f7f7; margin-right: 5px;" class=" btn btn-success btn-rounded">PUBLIC USER</button><br>
                      <small>View Information</small></center>
                  </div>
                  <div class="col-md-6">
                    <center><button @click="navigate('login')" style="_color: black;" class="btn btn-primary btn-rounded ml-4">LOG IN</button><br>
                    <small>Administrator</small></center>

                  </div>
                </div><!-- row -->

                <div class="card text-black mt-4">
                  <div class="card-header">
                      <center><h5>Funding by Source</h5></center>
                  </div>
                  <div class="card-body">
                    <div v-if="isLoading" class="spinner-border text-warning" role="status">
                      <span class="visually-hidden">Loading...</span>
                    </div>
                    <flash-error :hasError="apiErrors" :errors="errors" @dismissError="apiErrors = false"></flash-error>

                    <!-- Other Graphs -->
                    <funding-by-source-chart></funding-by-source-chart>

                  </div>
                </div>

                <div class="row" style="margin-top: 3rem;">
                  <div class="col-md-6">
                    <h1>54</h1>
                    <small>Total Organizations</small>
                  </div>
                  <div class="col-md-6">
                    <div class="row">
                      <div class="col-md-4">
                        <h4>26</h4>
                        <span class="badge badge-dark" style="color: gray">Local</span>
                      </div>

                      <div class="col-md-4">
                        <h4>12</h4>
                        <span class="badge badge-dark" style="color: gray">GOV'T</span>
                      </div>

                      <div class="col-md-4">
                        <h4>14</h4>
                        <span class="badge badge-dark" style="color: gray">INT'L</span>
                      </div>

                    </div>
                  </div>
                  <hr style="margin-top: 1rem;">
                </div>

                <div class="row">
                  <div class="col-md-5">
                    <h1>${{convertToInternationalCurrencySystem(allTimeFundingTotal)}}</h1>
                    <small>Total Funds</small>
                  </div>
                  <div class="col-md-7">
                    <div class="row">
                      <div class="col-md-4">
                        <h5>${{convertToInternationalCurrencySystem(thisYearFundingTotal)}} </h5>
                        <span class="badge badge-dark" style="color: gray">2023</span>
                      </div>

                      <div class="col-md-4">
                        <h5>${{convertToInternationalCurrencySystem(lastYearFundingTotal)}} </h5>
                        <span class="badge badge-dark" style="color: gray">2022</span>
                      </div>

                      <div class="col-md-4">
                        <h5>${{convertToInternationalCurrencySystem(previousYearFundingTotal)}} </h5>
                        <span class="badge badge-dark" style="color: gray">2021</span>
                      </div>

                    </div>
                  </div>
                  <hr style="margin-top: 1rem;">
                </div>


                <h5 class="mt-4">Feedback</h5>
                <p><small>Your feedback on data fields and others related issues of this web portal are highly appreciated. Please send your valuable feedback to: <a href="mailto:aimssouthsudan@gmail.com" style="color:blue">AIMS</a></small></p>


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
import TotalProjectsTrendChart from '../components/charts/TotalProjectsTrendChart.vue'
import FundingBySourceChart from '../components/charts/FundingBySourceChart.vue'
import FundingTrendChart from '../components/charts/FundingTrendChart.vue'

export default {
  name: 'Home',
  components: {
    flashError, ProjectDistributionByState, FundingBySourceChart, TotalProjectsTrendChart, FundingTrendChart, 
    
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
      errors: [],
      allTimeFundingTotal: 0,
      thisYearFundingTotal: 0,
      lastYearFundingTotal: 0,
      previousYearFundingTotal: 0,
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
    this.calculateFundingTotals();
  },

  methods: {
    ...mapActions({
      login: 'auth/login',
      guestLogin: 'auth/guestLogin',
      getFundingTotal: 'reports/getFundingTotal',
    }),

    navigate(link) {
      this.$router.push({ name: link });
    },

    convertToInternationalCurrencySystem (labelValue) {

      // Nine Zeroes for Billions
      return Math.abs(Number(labelValue)) >= 1.0e+9

      ? (Math.abs(Number(labelValue)) / 1.0e+9).toFixed(2) + "B"
      // Six Zeroes for Millions 
      : Math.abs(Number(labelValue)) >= 1.0e+6

      ? (Math.abs(Number(labelValue)) / 1.0e+6).toFixed(2) + "M"
      // Three Zeroes for Thousands
      : Math.abs(Number(labelValue)) >= 1.0e+3

      ? (Math.abs(Number(labelValue)) / 1.0e+3).toFixed(2) + "K"

      : Math.abs(Number(labelValue));

    },

    calculateFundingTotals() {
      const currentYear = new Date().getFullYear();
      const lastYear = currentYear-1;
      const previousYear = currentYear-2;

      this.getFundingTotal().then(
        (result) => {
          console.log(result.data)
          this.allTimeFundingTotal = result.data;
        },
        (error) => {
            const resMessage =
                      (error.response &&
                        error.response.data &&
                        error.response.data.errors) ||
                      error.message ||
                      error.toString();
              
              console.log(resMessage);
             

          }
      );

      this.getFundingTotal(currentYear).then(
        (result) => {
          console.log(result.data)
          this.thisYearFundingTotal = result.data;
        },
        (error) => {
            const resMessage =
                      (error.response &&
                        error.response.data &&
                        error.response.data.errors) ||
                      error.message ||
                      error.toString();
              
              console.log(resMessage);
             

          }
      );

      this.getFundingTotal(lastYear).then(
        (result) => {
          console.log(result.data)
          this.lastYearFundingTotal = result.data;
        },
        (error) => {
            const resMessage =
                      (error.response &&
                        error.response.data &&
                        error.response.data.errors) ||
                      error.message ||
                      error.toString();
              
              console.log(resMessage);
             

          }
      );

      this.getFundingTotal(previousYear).then(
        (result) => {
          console.log(result.data)
          this.previousYearFundingTotal = result.data;
        },
        (error) => {
            const resMessage =
                      (error.response &&
                        error.response.data &&
                        error.response.data.errors) ||
                      error.message ||
                      error.toString();
              
              console.log(resMessage);
             

          }
      );
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

