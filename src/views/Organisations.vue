<template>
  <main class="page about-page">
    <div class="container">
      <h1 class="text-primary">Organisations</h1>
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
           <li class="breadcrumb-item"><router-link :to="{name: 'dashboard'}">Dashboard</router-link></li>
          <li class="breadcrumb-item active" aria-current="page">Organisations</li>
        </ol>
      </nav>
     <div class="col-md-12">
        <div class="card">
            <div class="card-header">
                <h5 class="float-start"> Organisations</h5>
                <router-link :to="{name: 'organisation-category'}"><button class="float-end btn btn-warning">New</button></router-link>
            </div>
          <div class="card-body">
              <table class="table table-hover table-striped">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Acronym</th>
                        <th>Address</th>
                        <th>Contact Person</th>
                        <th>Email</th>
                        <th>Users</th>
                        <th>Approved</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                  <tr v-for="(org, index) in organisations" :key="org.id">
                    <td>{{index+1}}</td>
                    <td>{{org.name}}</td>
                    <td>{{org.acronym}}</td>
                    <td>{{org.address}}</td>
                    <td>{{org.contact_person_name}}</td>
                    <td>{{org.contact_person_email}}</td>
                    <td>{{org.number_of_users}}</td>
                    <td>{{(org.approved) ? 'Yes' : 'No'}}</td>
                    <td>
                      <div class="btn-group" role="group" aria-label="Actions">
                        <button type="button" class="btn btn-primary">View</button>
                        <button v-if="admin" type="button" class="btn btn-warning">Edit</button>
                        <button v-if="admin" type="button" class="btn btn-danger">Delete</button>
                      </div>
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
import {mapState, mapGetters} from 'vuex'

export default {
  data() {
    return {

    }
  },
  computed: {
    ...mapState('global', ['organisations']),
    ...mapGetters({
        admin: "auth/superadmin",
        contributor: "auth/contributor"
      }),
      
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
}
</script>

<style  scoped>
 .page {
  padding-top: 4em;
  padding-bottom: 4em;
 }
</style>