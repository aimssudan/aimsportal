<template>
  <main class="page">
    <div class="container" style="min-height: 80vh;">
      <h1 class="text-primary"> Reports</h1>
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item active" aria-current="page">Reports</li>
        </ol>
      </nav>
      <div class="row">
        <div class="col-md-6">
          <div class="card border-light">
              <div class="card-header d-flex justify-content-between">
                <h5>State Project Distribution </h5>
                <button class="btn btn-light btn-sm" type="button" data-bs-toggle="collapse" data-bs-target="#collapse-chart-trends" aria-expanded="false" aria-controls="collapse-chart-trends">
                    &nbsp;<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5">
                          <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd" />
                        </svg>
                </button>
              </div>
              <div id="collapse-chart-trends" class="collapse show" aria-labelledby="heading-collapsed">
                <div class="card-body ">
                  <!-- <funding-trend-chart/> -->
                  <funding-by-sector-chart></funding-by-sector-chart>

                </div>
              </div>
              
          </div>
        </div>

        <div class="col-md-6">
          <div class="card border-light">
              <div class="card-header d-flex justify-content-between">
                <h5>State Map Distibution </h5>
                <button class="btn btn-light btn-sm" type="button" data-bs-toggle="collapse" data-bs-target="#collapse-chart-trends" aria-expanded="false" aria-controls="collapse-chart-trends">
                    &nbsp;<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5">
                          <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd" />
                        </svg>
                </button>
              </div>
              <div id="collapse-chart-trends" class="collapse show" aria-labelledby="heading-collapsed">
                <div class="card-body ">
                  <h5><span class="badge bg-secondary">Projects Geographic Impact Summary</span></h5>
                  <project-distribution-by-state v-if="isMapDataLoaded" :mapData="mapData" ></project-distribution-by-state>
                </div>
              </div>
              <div class="card-footer"> Map of South Sudan</div>
          </div>
        </div>

        
          
        </div> <!-- row -->

        <project-list></project-list>

      </div>
    </main>
</template>

<script>
import {mapActions, mapState} from 'vuex'
import ProjectDistributionByState from '../components/maps/ProjectDistributionByState.vue'
import FundingBySectorChart from '../components/charts/FundingBySectorChart.vue'
import ProjectList from '../components/reports/ProjectList.vue'

export default {
  name : 'dashboard',
  components: {
    ProjectDistributionByState,
    FundingBySectorChart,  
    ProjectList,
  },
  data() {
    return {
      mapData: [],
      isMapDataLoaded: false,
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
    }
    this.getSummaryPerStateReport().then(
      (response) => {
        this.mapData = response.data
        this.isMapDataLoaded = true;
      },
      (error) => {
        console.log(error)
      }
    );
  },
  computed: {
    ...mapState('auth', ['user']),
      profile() {
          return this.user;
      },
  },
  methods: {
    ...mapActions({
      getSummaryPerStateReport: 'reports/getSummaryPerStateReport',
    })
  }
}
</script>

<style scoped>
  .page {
    padding-top: 4em;
    padding-bottom: 4em;
  }
</style>