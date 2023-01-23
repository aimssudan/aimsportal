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
            <div class="card">
              <div class="card-header">
                <h5>Project list</h5>
              </div>
                <div class="card-body table-responsive">
                  <div v-if="isLoading" class="spinner-border text-warning" role="status">
                    <span class="visually-hidden">Loading...</span>
                  </div>
                  <flash-error :hasError="apiErrors" :errors="errors" @dismissError="apiErrors = false"></flash-error>
                    <table class="table table-hover table-striped">
                      <thead>
                          <tr>
                              <th>ID</th>
                              <th>Name</th>
                              <th>Funder</th>
                              <th>Implemetor</th>
                              <th>Budget(USD)</th>
                              <th>Progress</th>
                              <th>Actions</th>
                          </tr>
                      </thead>
                      <tbody>
                        <tr v-for="activity in projects" :key="activity.id">
                          <td>{{activity.id}}</td>
                          <td>{{activity.default_title}}</td>
                          <td></td>
                          <td></td>
                          <td>{{Intl.NumberFormat().format(activity.budget
                                        .map(obj => obj.iati_value_amount)
                                        .reduce((accumulator, current) => accumulator + current, 0))}}</td>
                          <td>{{activity.status}}</td>
                          <td>
                            <button @click="this.$router.push({ name: 'project', params: { id: activity.id} })" class="btn btn-warning btn-sm">View</button>
                            <button @click="deleteAProject(activity.id)" class="btn btn-danger btn-sm">Delete</button>
                          </td>
                        </tr>
                      </tbody>

              </table>
                </div>
            </div>
        </div>
     </div>
       
    </main>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import flashError from '../components/flashError.vue'

export default {
  
  name: 'project-listing',
  components: {
    flashError
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