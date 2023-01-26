
<template class="d-flex flex-column h-100">  

  <nav class="navbar navbar-light navbar-expand-lg fixed-top bg-white clean-navbar" id="app-header">
        <div class="container"><a class="navbar-brand logo" href="#"> <img src="@/assets/court.png" alt="Logo" width="30" height="24" class="d-inline-block align-text-top"> AIMS - South Sudan</a><button data-bs-toggle="collapse" class="navbar-toggler" data-bs-target="#navcol-1"><span class="visually-hidden">Toggle navigation</span><span class="navbar-toggler-icon"></span></button>
            <div class="collapse navbar-collapse" id="navcol-1">
                <ul class="navbar-nav ms-auto">
                    <li class="nav-item"><a class="nav-link active"  @click="navigate('landing')">{{this.getTranslation("home")}}</a></li>
                    <li v-if="profile" class="nav-item dropdown"><a class="dropdown-toggle nav-link" aria-expanded="false" data-bs-toggle="dropdown" >{{this.getTranslation("projects")}}</a>
                        <div class="dropdown-menu">
                          <a class="dropdown-item" @click="navigate('projects')">{{this.getTranslation("project")}} {{this.getTranslation("list")}}</a>
                          <a class="dropdown-item" @click="navigate('reports')">{{this.getTranslation("reports")}}</a>
                          <a v-if="isEditor" class="dropdown-item" role="button" @click="navigate('new-project')">{{this.getTranslation("add")}} {{this.getTranslation("project")}}</a>
                        </div>
                    </li>
                    
                    
                    <li v-if="profile" class="nav-item dropdown"><a class="dropdown-toggle nav-link" aria-expanded="false" data-bs-toggle="dropdown" href="">{{this.getTranslation("organisations")}}</a>
                        <div class="dropdown-menu">
                          <a v-if="isadmin" class="dropdown-item" role="button" @click="navigate('organisation-categories')">{{this.getTranslation("categories")}}</a>
                          <a class="dropdown-item" role="button" @click="navigate('organisations')">{{this.getTranslation("organisations")}}</a>
                        </div>
                    </li>
                    <li v-if="isadmin" class="nav-item dropdown"><a class="dropdown-toggle nav-link" aria-expanded="false" data-bs-toggle="dropdown" href="">{{this.getTranslation("administation")}}</a>
                        <div class="dropdown-menu">
                          <a class="dropdown-item" role="button" @click="navigate('system-settings')">{{this.getTranslation("system-settings")}}</a>
                          
                        </div>
                    </li>
                    <!-- <li class="nav-item" @click="navigate('contact')"><a class="nav-link" role="button" >Contact Us</a></li> -->
                    <li class="nav-item dropdown"><a class="dropdown-toggle nav-link" aria-expanded="false" data-bs-toggle="dropdown" href="">{{this.getTranslation("account")}}</a>
                        <div class="dropdown-menu">
                          <a v-if="!profile" class="dropdown-item" role="button" @click="navigate('login')">{{this.getTranslation("login")}}</a>
                          <a v-if="!profile" class="dropdown-item" role="button" @click="navigate('register')">{{this.getTranslation("register")}}</a>
                          <a v-if="profile" class="dropdown-item" role="button" @click="navigate('profile')">{{this.getTranslation("profile")}}</a>
                          <a v-if="profile" class="dropdown-item" role="button" @click="signout">{{this.getTranslation("logout")}}</a>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    <div id="app-content">
  <snackbar />
  <router-view/>
    </div>

  <footer class="page-footer dark footer mt-auto" style="background: rgb(22,42,81);" id="main-footer">        
        <div class="container">
            <div class="row footer-links">
                <div class="col-md-3 col-sm-6">
                  <!-- <logo /> -->
                    <!-- <center><img src="@/assets/court.png" class="img-fluid" alt=""></center> -->
                    <h5>AIMS Platform</h5>
                    <p style="color: rgba(255,255,255,0.43);font-size: 16px;">This platform is managed by the Ministry of Finance and Planning - Government of South Sudan.<br></p>
                </div>
                <div class="col-md-3 col-sm-6">
                    <h5>{{this.getTranslation("about-us")}}</h5>
                    <ul class="list-unstyled">
                        <li><a href="#">MoFP (GOSS)</a></li>
                        <li><a href="#">{{this.getTranslation("organisations")}}</a></li>
                        <li><a href="#">{{this.getTranslation("donors")}}</a></li>
                    </ul>
                </div>
                <div class="col-md-3 col-sm-6">
                    <h5>{{this.getTranslation("support")}}</h5>
                    <ul class="list-unstyled">
                        <li><a href="contact-us.html">{{this.getTranslation("inquiries")}}</a></li>
                        <li><a href="#">{{this.getTranslation("help-desk")}}</a></li>
                        <li><a href="faq.html">{{this.getTranslation("faqs")}}</a></li>
                    </ul>
                </div>
                <div class="col-md-3 col-sm-6">
                    <h5>{{this.getTranslation("legal")}}</h5>
                    <ul class="list-unstyled">
                        <li><a href="#">{{this.getTranslation("terms-of-use")}}</a></li>
                        <li><a href="#">{{this.getTranslation("privacy-policy")}}</a></li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="footer-copyright " style="background: rgb(8,16,37);">
            <p style="color: rgba(126,149,208,0.68);font-size: 12px;">© 2022 AIMS - South Sudan</p>
        </div>
    </footer>

</template>
<script>
// import $ from 'jquery'
import {mapState, mapGetters, mapActions } from 'vuex'
// import Logo from './views/Logo.vue';
export default {
  name: 'App',
  components: {
    'snackbar': require('@/components/Snackbar.vue').default,
  },
  created() {
    
    let isLoggedIn = !!localStorage.getItem("token");
    if(isLoggedIn){
      //put user and translations to vuex state 
      let loggedInUser = JSON.parse(localStorage.getItem('user'))
      this.$store.commit('auth/SET_TOKEN', isLoggedIn);      
      this.$store.commit('auth/SET_USER', loggedInUser);
    }
    this.getOrganisations()
    this.getCategories();
  },
  computed: {
      ...mapState('auth', ['user']),
      profile() {
          return this.user;
      },
      ...mapGetters({
        admin: "auth/superadmin",
        contributor: "auth/contributor",
        manager: "auth/manager",
        authenticated: "auth/authenticated",
        getTranslation: "global/getTranslation"
      }),
      isadmin() {
        return this.admin
      },
      isAuthenticated() {
        return this.authenticated
      },
      isEditor() {
        return this.contributor || this.admin || this.manager
      }
  },
  methods: {
    ...mapActions({
      logout: 'auth/logOut',
      getOrganisations : 'global/getOrganisations',
      getCategories: 'global/getOrganisationCategories',
      getTranslations: 'global/getTranslations',
    }),
    navigate(link) {
      this.$router.push({ name: link });
    },
    signout() {
      this.logout().then(
          (response) => {
            let apiMessage = response ?? 'success'
            this.$store.commit('showSnackbar',apiMessage);
            this.$router.push({ name: "landing" });
          },
          (error) => {
            const resMessage =
                    (error.response &&
                      error.response.data &&
                      error.response.data.errors) ||
                    error.message ||
                    error.toString();
             this.$store.commit('showSnackbar',resMessage)
             

          }
        );
    }
  }
}
</script>

<style>

#app {
  font-family: Montserrat, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  height: 100%;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

.page {
  background-color: #DBEAF7;
}

.toast:not(.show) {
    display: block !important;
}

.page-footer {
  padding-top: 2em;
  margin-bottom: 5px;
  color: white;
}

.page-footer.dark a{
  color: #d2d1d1;
}

.page-footer.dark a:hover{
  color: white;
}

.dark {
  background-color: rgb(22,42,81);
}
.page-footer .footer-copyright {
    background-color: #fff;
    padding-top: 1em;
    padding-bottom: 3px;
    text-align: center;
    margin-top: 50px;
    
}
li a {
  text-decoration: none;
}
#app-content {
  margin-bottom: 250px;
}
#main-footer {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
}
@media screen and (max-width: 450px) {
  .footer-links {
    display: none !important;
  }
}


</style>
