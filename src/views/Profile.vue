<template>
  <main class="page login-page">
        <div class="col-md-6 offset-md-3">
          <h1 class="text-primary"> Profile</h1>
          <nav aria-label="breadcrumb">
            <ol class="breadcrumb">
            <li class="breadcrumb-item"><a href="/dashboard">Dashboard</a></li>
            <li class="breadcrumb-item active" aria-current="page">Profile</li>
            </ol>
          </nav>
          <div class="card">
            <div class="card-header">
                <h5>{{profile.name}} 's profile</h5>
            </div>
            <div class="card-body">
              <div v-if="isLoading" class="spinner-border text-warning" role="status">
                <span class="visually-hidden">Loading...</span>
              </div>
              <div v-if="apiErrors" class="alert alert-danger" @click="apiErrors=false">
                  <ul>
                      <li v-for="(verrors, field) in errors" :key="field">
                          {{ field }} 
                          
                          <ul>
                              <li v-for="error in verrors" :key="error.message">
                                  {{ error }}
                              </li>
                          </ul>
                      </li>
                  </ul>
              </div>
              <div class="row">
                <div class="col-md-6 mb-3">
                    <div class="form-floating">
                        <input type="text"  class="form-control" id="floatingInput" :value="profile.name" placeholder="Joe Doe">
                        <label for="floatingInput">Name</label>
                    </div>
                </div>
                <div class="col-md-6 mb-3">
                    <div class="form-floating">
                        <input type="email"  class="form-control" id="floatingPassword" :value="profile.email" placeholder="Password">
                        <label for="floatingPassword">Email Address</label>
                    </div>
                </div>
                <div class="col-md-6 mb-3">
                    <div class="form-floating">
                        <input disabled type="text"  class="form-control" id="floatingPassword" :value="profile.organisation.name" placeholder="Password">
                        <label for="floatingPassword">Organisation</label>
                    </div>
                </div>
                <div class="col-md-6 mb-3">
                    <div class="form-floating">
                        <input disabled type="text" class="form-control" id="floatingPassword" :value="profile.status" placeholder="Password">
                        <label for="floatingPassword">Status</label>
                    </div>
                </div>
                <div class="col-md-6 mb-3">
                    <div class="form-floating">
                        <input disabled type="text" class="form-control" id="floatingPassword" :value="profile.roles[0].name" placeholder="Password">
                        <label for="floatingPassword">Role</label>
                    </div>
                </div>
               </div> 
               <button class="btn btn-primary">Update</button>
            </div>
          </div>
        </div>
       
    </main>
</template>

<script>
import { mapActions, mapState} from 'vuex'

export default {
  name: 'login',
  components: {
    
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
  computed: {
    ...mapState('auth', ['user']),
      profile() {
          return this.user;
      },
  },

  methods: {
    ...mapActions({
      login: 'auth/login'
    }),

    submit() {

       this.apiErrors = false;
       this.generalError = false;
       this.isLoading = true;
       this.validationErrors = false;
       
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
             this.generalError = true;
             this.errors = resMessage;
             

          }
        );
          
        
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
