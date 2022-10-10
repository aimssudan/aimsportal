<template class="d-flex flex-column h-100">  

  <nav class="navbar navbar-light navbar-expand-lg fixed-top bg-white clean-navbar">
        <div class="container"><a class="navbar-brand logo" href="#">AIMS - South Sudan</a><button data-bs-toggle="collapse" class="navbar-toggler" data-bs-target="#navcol-1"><span class="visually-hidden">Toggle navigation</span><span class="navbar-toggler-icon"></span></button>
            <div class="collapse navbar-collapse" id="navcol-1">
                <ul class="navbar-nav ms-auto">
                    <li class="nav-item"><a class="nav-link active" href="/">Home</a></li>
                    <li class="nav-item dropdown"><a class="dropdown-toggle nav-link" aria-expanded="false" data-bs-toggle="dropdown" >Projects</a>
                        <div class="dropdown-menu">
                          <a class="dropdown-item" @click="navigate('projects')">Project List</a>
                          <a class="dropdown-item" @click="navigate('reports')">Reports</a>
                        </div>
                    </li>
                    
                    
                    <li v-if="profile" class="nav-item dropdown"><a class="dropdown-toggle nav-link" aria-expanded="false" data-bs-toggle="dropdown" href="">Organisations</a>
                        <div class="dropdown-menu">
                          <a v-if="isadmin" class="dropdown-item" role="button" @click="navigate('organisation-categories')">Categories</a>
                          <a class="dropdown-item" role="button" @click="navigate('organisations')">Organisations</a>
                        </div>
                    </li>
                    <!-- <li class="nav-item" @click="navigate('contact')"><a class="nav-link" role="button" >Contact Us</a></li> -->
                    <li class="nav-item dropdown"><a class="dropdown-toggle nav-link" aria-expanded="false" data-bs-toggle="dropdown" href="">Account</a>
                        <div class="dropdown-menu">
                          <a v-if="!profile" class="dropdown-item" role="button" @click="navigate('login')">Login</a>
                          <a v-if="!profile" class="dropdown-item" role="button" @click="navigate('register')">Register</a>
                          <a v-if="profile" class="dropdown-item" role="button" @click="navigate('profile')">Profile</a>
                          <a v-if="profile" class="dropdown-item" role="button" @click="signout">Logout</a>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
  <snackbar />
  <router-view/>

  <footer class="page-footer dark footer mt-auto" style="background: rgb(22,42,81);">        
        <div class="container">
            <div class="row">
                <div class="col-sm-3">
                  <!-- <logo /> -->
                    <!-- <center><img src="@/assets/court.png" class="img-fluid" alt=""></center> -->
                    <h5>AIMS Platform</h5>
                    <p style="color: rgba(255,255,255,0.43);font-size: 16px;">This platform is managed by the Ministry of Finance and Planning - Government of South Sudan.<br></p>
                </div>
                <div class="col-sm-3">
                    <h5>About us</h5>
                    <ul class="list-unstyled">
                        <li><a href="#">MoFP (GOSS)</a></li>
                        <li><a href="#">Organizations</a></li>
                        <li><a href="#">Donors</a></li>
                    </ul>
                </div>
                <div class="col-sm-3">
                    <h5>Support</h5>
                    <ul class="list-unstyled">
                        <li><a href="contact-us.html">Inquiries</a></li>
                        <li><a href="#">Help desk</a></li>
                        <li><a href="faq.html">FAQs</a></li>
                    </ul>
                </div>
                <div class="col-sm-3">
                    <h5>Legal</h5>
                    <ul class="list-unstyled">
                        <li><a href="#">Terms of Use</a></li>
                        <li><a href="#">Privacy Policy</a></li>
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
        contributor: "auth/contributor"
      }),
      isadmin() {
        return this.admin
      }
  },
  methods: {
    ...mapGetters({
      authenticated: 'auth/authenticated'
    }),
    ...mapActions({
      logout: 'auth/logOut',
      getOrganisations : 'global/getOrganisations',
      getCategories: 'global/getOrganisationCategories',
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

</style>
