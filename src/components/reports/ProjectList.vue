<template>
    <!-- <flash-error :hasError="apiErrors" :errors="errors" @dismissError="apiErrors = false"></flash-error> -->
  <table class="table table-stripped mt-4">
    <thead>
      <tr>
        <th>#</th>
        <th>Project Title</th>
        <th>Project Value (USD)</th>
        <th>Reporting Org</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="activity in projects" :key="activity.id">
        <td>-</td>
        <td>{{activity.default_title}}</td>
        <td>{{Intl.NumberFormat().format(activity.budget
                                        .map(obj => obj.iati_value_amount)
                                        .reduce((accumulator, current) => accumulator + current, 0))}}</td>
        <td>{{ activity.reporting_org.name }}</td>

      </tr>
    </tbody>
  </table>
</template>



<script>
  // import {ref} from 'vue'
import { mapActions, mapState } from 'vuex';
// import flashError from './components/flashError.vue'

export default {
  name: 'project-list',
  // components: {
  //   flashError
  // },

  computed: {
    ...mapState('project', ['projects']),
    ...mapState('global', ['organisations'])
  }, 
  methods: {
    ...mapActions({
      fetchProjects : 'project/getProjects'
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
      this.fetchProjects()
    }
  },
}


</script>