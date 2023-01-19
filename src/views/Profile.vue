<template>
  <main class="page login-page" style="min-height: 80vh;">
        <div class="col-md-6 offset-md-3">
          <h1 class="text-primary"> {{this.getTranslation("profile")}}</h1>
          <nav aria-label="breadcrumb">
            <ol class="breadcrumb">
            <li class="breadcrumb-item"><a href="/dashboard">{{this.getTranslation("dashboard")}}</a></li>
            <li class="breadcrumb-item active" aria-current="page">{{this.getTranslation("profile")}}</li>
            </ol>
          </nav>
          <div class="card">
            <div class="card-header">
                <h5>{{profile.name}} 's {{this.getTranslation("profile")}}</h5>
            </div>
            <div class="card-body">
              <div v-if="isLoading" class="spinner-border text-warning" role="status">
                <span class="visually-hidden">{{this.getTranslation("loading")}}...</span>
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
                        <input type="text"  class="form-control" id="floatingInput" v-model="form.name" placeholder="Joe Doe">
                        <label for="floatingInput">{{this.getTranslation("name")}}</label>
                    </div>
                </div>
                <div v-if="isEditor" class="col-md-6 mb-3">
                    <div class="form-floating">
                        <input type="email"  class="form-control" id="floatingPassword" :value="profile.email" placeholder="Password">
                        <label for="floatingPassword">{{this.getTranslation("email-address")}}</label>
                    </div>
                </div>
                <div class="col-md-6 mb-3">
                    <div class="form-floating">
                        <input disabled type="text"  class="form-control" id="floatingPassword" :value="profile?.organisation?.name" placeholder="Password">
                        <label for="floatingPassword">{{this.getTranslation("organisation")}}</label>
                    </div>
                </div>
                <div class="col-md-6 mb-3">
                    <div class="form-floating">
                        <input disabled type="text" class="form-control" id="floatingPassword" :value="profile.status" placeholder="Password">
                        <label for="floatingPassword">{{this.getTranslation("status")}}</label>
                    </div>
                </div>
                <div class="col-md-6 mb-3">
                    <div class="form-floating">
                        <input disabled type="text" class="form-control" id="floatingPassword" :value="profile?.roles[0]?.name" placeholder="Password">
                        <label for="floatingPassword">{{this.getTranslation("role")}}</label>
                    </div>
                </div>
                <div class="col-md-6 mb-3">
                    <div class="form-floating">
                        <select class="form-control" v-model="form.language">
                            <option v-for="lang in languages" :key="lang.id" :value="lang.code">{{lang.name}}</option>
                        </select>
                        
                        <label for="floatingPassword">{{this.getTranslation("language")}}</label>
                    </div>
                </div>
               </div> 
               <button v-if="isEditor" @click="submit" class="btn btn-primary">{{this.getTranslation("update")}}</button>
            </div>
          </div>
        </div>
       
    </main>
</template>

<script>
import { mapActions, mapState, mapGetters} from 'vuex'

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
        id: null,
        name: "",
        organisation: null,
        role: null,
        language: 'en'
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
    this.getLanguages();
    this.getTranslations();
    this.updateForm();
    
  },
  computed: {
    ...mapState('auth', ['user']),
    ...mapState('global', ['languages', 'translations']),
      profile() {
          return this.user;
      },
      ...mapGetters({
        admin: "auth/superadmin",
        contributor: "auth/contributor",
        manager: "auth/manager",
        authenticated: "auth/authenticated",
        getTranslation: "global/getTranslation",
      }),
      isadmin() {
        return this.admin
      },
      isEditor() {
        return this.contributor || this.admin || this.manager
      }
  },

  methods: {
    ...mapActions({
      updateUser: 'auth/updateUser',
      getLanguages: 'global/getLanguages',
      getTranslations: 'global/getTranslations'
    }),

    updateForm() {
      this.form.id = this.user.id
      this.form.name = this.user.name
      this.form.organisation = this.user?.organisation?.id
      this.form.role = this.user?.roles[0]?.name
      this.form.language = this.user.language
    },
    submit() {

       this.apiErrors = false;
       this.generalError = false;
       this.isLoading = true;
       this.validationErrors = false;
       
        this.updateUser(this.form).then(
          (response) => {
            //
            this.isLoading = false;
            this.$store.commit('showSnackbar',"success");
            this.$store.commit('auth/SET_USER', response.data.data)
            this.getLanguages();
            this.getTranslations();
            this.updateForm()
            
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
             this.$store.commit('showSnackbar', resMessage);
             

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
