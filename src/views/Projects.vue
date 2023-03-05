<template>
  <main class="page project-page" style="min-height: 80vh;">    
    <div class="container">
      <h1 class="text-primary"> Projects </h1>
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item"><router-link :to="{name: 'dashboard'}"> Dashboard</router-link></li>
          <li class="breadcrumb-item"><router-link :to="{name: 'projects'}"> Projects</router-link></li>
          <li class="breadcrumb-item active" aria-current="page">List</li>
        </ol>
      </nav>
        <div class="col-md-12">
            <project-list></project-list>
        </div>
     </div>
       
    </main>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import ProjectList from '../components/reports/ProjectList.vue'

export default {
  
  name: 'project-listing',
  components: {
    ProjectList
  },

  computed: {
    ...mapState('project', ['projects']),
    ...mapState('global', ['organisations'])

  },
  methods: {

    ...mapActions({
      fetchProjects : 'project/getProjects',
      deleteProject: 'project/deleteProject'
    }),

    navigate(link) {
      this.$router.push({ name: link });
    },

    deleteAProject(id) {
      if (confirm("Are you sure ?")) {
        this.deleteProject(id).then(
          (response) => {
            this.$store.commit("showSnackbar", response.data.data)
            this.fetchProjects()
          },
          (error) => {
            const errorMessage =
                    (error.response &&
                      error.response.data &&
                      error.response.data.message) ||
                    error.message ||
                    error.toString();
             
             this.$store.commit("showSnackbar", errorMessage)
          }
        )
      }
    }
  },

  created() {
    let isLoggedIn = !!localStorage.getItem("token");
    if(isLoggedIn){
      //put user and translations to vuex state 
      let token = localStorage.getItem("token")
      let loggedInUser = JSON.parse(localStorage.getItem('user'))
      this.$store.commit('auth/SET_TOKEN', token);
      this.$store.commit('auth/SET_USER', loggedInUser);
      this.fetchProjects()
    }
  },
    
}
</script>

<style scoped>
.project-page {
  padding-top: 4em;
  padding-bottom: 4em;
}
</style>