<template>
  <main class="page login-page" style="min-height: 80vh;">
        <div class="col-md-6 offset-md-3">
          <h1 class="text-primary"> Register</h1>
          <nav aria-label="breadcrumb">
            <ol class="breadcrumb">
            <li class="breadcrumb-item"><a href="/">Home</a></li>
            <li class="breadcrumb-item active" aria-current="page">Register</li>
            </ol>
          </nav>

          <div class="row">
            <div class="col-md-1">&nbsp;</div>
            <div class="col-md-10">
              <div class="card">
                <div class="card-header">
                    <h5>Create your account</h5>
                </div>
                <div class="card-body">
                  <div v-if="isLoading" class="spinner-border text-warning" role="status">
                    <span class="visually-hidden">Loading...</span>
                  </div>
                  <flash-error :hasError="apiErrors" :errors="errors" @dismissError="apiErrors = false"></flash-error>
                  <div class="row">
                      <div class="col-md-6 mb-3">
                          <div class="form-floating">
                              <input type="text" v-model="form.name" class="form-control" id="floatingInput" placeholder="Joe Doe">
                              <label for="floatingInput">Name</label>
                          </div>
                      </div>
                      <div class="col-md-6 mb-3">
                          <div class="form-floating">
                              <input type="email" v-model="form.email" class="form-control" id="floatingEmail" placeholder="Email Address" required>
                              <label for="floatingEmail">Email Address</label>
                          </div>
                      </div>
                      <div class="col-md-6 mb-3">
                          <div class="form-floating">
                              <input type="password" v-model="form.password" class="form-control" id="floatingPassword" placeholder="Password" required>
                              <label for="floatingPassword">Password</label>
                          </div>
                      </div>
                      <div class="col-md-6 mb-3">
                          <div class="form-floating">
                              <input type="password" v-model="form.password_confirmation" class="form-control" id="floatingPasswordConfirmation" placeholder="Password Confirmation" required>
                              <label for="floatingPasswordConfirmation">Password Confirmation</label>
                          </div>
                      </div>
                      <div class="col-md-6 mb-3">
                          <div class="form-floating">
                            <multiselect @input="updateSelectedOrganisation" class="form-select" v-model="form._o"  track-by="id" label="name" placeholder="Select one" :options="organisations" :searchable="false" :allow-empty="false"></multiselect>
                              <label for="floatingPassword">Organisation</label>
                          </div>
                          <span><router-link :to="{name: 'organisation'}">Add New</router-link></span>
                      </div>
                      <div class="col-md-6 mb-3">
                          <div class="form-floating">
                              <input type="text"  v-model="form.code" class="form-control" id="floatingOtp" placeholder="OTP CODE" required>
                              <label for="floatingOtp">OTP CODE</label>
                          </div>
                          <span> <button class="btn btn-sm btn-warning mt-2" @click="sendOtp">Resend OTP CODE</button></span>
                      </div>
                      <div class="col-md-6 mb-3">
                          <div class="form-floating">
                            <select class="form-select" v-model="form.role" placeholder="Role">
                                <option value="Subscriber" selected>Subscriber</option>
                                <option value="Contributor">Contributor</option>
                                <option value="Manager">Manager</option>
                            </select>
                              <label for="floatingPassword">Role</label>
                          </div>
                      </div>
                   </div> 
                   <button class="btn btn-primary" @click="register">Submit</button>
                </div>
              </div>

            </div>
          </div>

        </div>
       
    </main>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import flashError from '../components/flashError.vue'
import Multiselect from 'vue-multiselect'


export default {
  name: 'login',
  components: {
    Multiselect,
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
        password_confirmation: "",
        code: "",
        name: "",
        _o: '',
        role: 'Subscriber',
        organisation: '',
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
  computed: {
    ...mapState('global', ['organisations','organisationCategories'])

  },

  methods: {
    ...mapActions({
      signup : 'auth/register',
      otp: 'auth/sendOtp'
    }),
    sendOtp() {
      this.apiErrors = false;
       this.generalError = false;
       this.isLoading = true;
       this.validationErrors = false;
       this.otp({email: this.form.email}).then(
          (response) => {
            //
            this.isLoading = false;
            let apiMessage = response.data.message ?? 'Successfully sent otp code'
            this.$store.commit('showSnackbar',apiMessage);
            //this.$router.push({ name: "login" });
          },
          (error) => {
            const resMessage =
                    (error.response &&
                      error.response.data &&
                      error.response.data.message) ||
                    error.message ||
                    error.toString();
             this.isLoading = false;
             this.apiErrors = true;
             this.generalError = true;
             this.errors = resMessage;
             

          }
        );
    },
    register() {
       this.apiErrors = false;
       this.generalError = false;
       this.isLoading = true;
       this.validationErrors = false;
       this.form.organisation = this.form._o.id
       this.signup(this.form).then(
          (response) => {
            //
            this.isLoading = false;
            let apiMessage = response.data.data ?? 'success'
            this.$store.commit('showSnackbar',apiMessage);
            this.$router.push({ name: "login" });
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
             this.generalError = true;
             this.errors = resMessage;
             

          }
        );
       
        
          
        
    },
    updateSelectedOrganisation(_o) {
      console.log(_o)
      this.form.organisation = _o.id;
      this.form._o = _o.name
  },
  }
}
</script>
<style scoped>
.login-page {
  padding-top: 4em;
  padding-bottom: 4em;
}
</style>
