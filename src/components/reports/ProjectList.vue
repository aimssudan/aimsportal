<template>
    <!-- <flash-error :hasError="apiErrors" :errors="errors" @dismissError="apiErrors = false"></flash-error> -->
    <br>
    <div class="card">
      <div class="card-body">
        
          <div class="row g-3">
            <div class="col-sm-1">
              From:
            </div>
            <div class="col-sm-3">
              <input type="date" class="form-control">              
            </div>
            <div class="col-sm-1">
              To:
            </div>
            <div class="col-sm-3">
              <input type="date" class="form-control">
              
            </div>
          </div>
          <hr>
          <div class="row g-3">
            <div class="col-sm-4">
              <select class="form-select" aria-label="Default select example">
                <option selected>Organisation</option>
                <option v-for="org in organisations" :key="org.id">{{ org.name }}</option>
                
              </select>
            </div>
            <div class="col-sm-4">
              <select @change="updateSectorCodeList()" v-model="form_search.parent_sector" class="form-select" aria-label="Default select example">
                <option value="0">Parent Sector</option>
                <option v-for="sectorVocabulary in sector_vocabularies" :key="sectorVocabulary.code" :value="sectorVocabulary.code">{{ sectorVocabulary.name }}</option>                
              </select>
            </div>
            <div class="col-sm-4">
              <select v-model="form_search.sector" class="form-select" aria-label="Default select example">
                <option value="0">Sub Sector</option>
                <option v-for="sector in sector_codes" :key="sector.code" :value="sector.code">{{ sector.name }}</option>                
              </select>
            </div>
          </div>
          <hr>
          <div class="row g-3">
            <div class="col-sm-4">
              <select v-model="form_search.state" @change="updateCounties()" class="form-select" aria-label="Default select example">
                <option value="0">State</option>
                <option v-for="loc in locationStates" :key="loc.id" :value="loc.id">{{ loc.name }}</option>                
              </select>
            </div>
            <div class="col-sm-4">
              <select v-model="form_search.county" @change="updatePayam()" class="form-select" aria-label="Default select example">
                <option value="0">County</option>
                <option v-for="county in location_counties" :key="county.id" :value="county.id">{{ county.name }}</option> 
                
              </select>
            </div>
            <div class="col-sm-4">
              <select v-model="form_search.payam" class="form-select" aria-label="Default select example">
                <option value="0">Payam</option>
                <option v-for="payam in location_payams" :key="payam.id" :value="payam.id">{{ payam.name }}</option>
              </select>
            </div>
          </div><br>
        <button class="btn btn-info">Search</button>
      </div>
    </div><br>
  <div class="card"> 
    <div class="card-body">
      <table class="table table-stripped mt-4">
        <thead>
          <tr>
            <th>#</th>
            <th>Project Title</th>
            <th>Total Funding (USD)</th>
            <th>Reporting Org</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(activity, index) in projects" :key="activity.id">
            <td>{{index}}</td>
            <td>{{activity.default_title}}</td>
            <td>{{Intl.NumberFormat().format(activity.budget
                                            .map(obj => obj.iati_value_amount)
                                            .reduce((accumulator, current) => accumulator + current, 0))}}</td>
            <td>{{ activity.reporting_org.name }}</td>
            <td>
              <button @click="this.$router.push({ name: 'project', params: { id: activity.id} })" class="btn btn-warning btn-sm">View</button>
              <button v-if="isEditor" @click="deleteAProject(activity.id)" class="btn btn-danger btn-sm">Delete</button>
            </td>

          </tr>
          <tr>
            <nav aria-label="Page navigation example">
              <ul class="pagination">
                <li class="page-item">
                  <a class="page-link" href="#" aria-label="Previous">
                    <span aria-hidden="true">&laquo;</span>
                  </a>
                </li>
                <li class="page-item"><a class="page-link" href="#">1</a></li>
                <li class="page-item"><a class="page-link" href="#">2</a></li>
                <li class="page-item"><a class="page-link" href="#">3</a></li>
                <li class="page-item">
                  <a class="page-link" href="#" aria-label="Next">
                    <span aria-hidden="true">&raquo;</span>
                  </a>
                </li>
              </ul>
            </nav>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>



<script>
  // import {ref} from 'vue'
import { mapActions, mapState, mapGetters } from 'vuex';
// import flashError from './components/flashError.vue'

export default {
    name: "project-list",
    // components: {
    //   flashError
    // },
    data() {
      return {
        sector_vocabularies: [],
        sector_codes: [],
        project_locations: [],
        location_counties: [],
        location_payams: [],
        form_search: {
          state: 0,
          county: 0,
          payam: 0,
          parent_sector: 0,
          sector: 0,
        },
      }
    },
    computed: {
        ...mapState("project", ["projects"]),
        ...mapState("global", ["organisations"]),
        ...mapState('locations', ['locationStates']),
        ...mapGetters({
          admin: "auth/superadmin",
          contributor: "auth/contributor",
          manager: "auth/manager",
        }),
        isEditor() {
        return this.contributor || this.admin || this.manager
      },
    },
    methods: {
        ...mapActions({
            fetchProjects: "project/getProjects",
            deleteProject: 'project/deleteProject',
            getLocationStates: 'locations/getStates',
            getLocationCounties: 'locations/getCounties',
            getLocationPayams: 'locations/getPayams',
            getCodelistOptions: 'codelists/fetchCodelistOptions',
            getCodelistValue: 'codelists/fetchCodelistValue',
        }),
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
      },
      updateSectorCodeList() {
        this.sector_codes = [];
        let codelist = this.sector_vocabularies.find(element => element.code === this.form_search.parent_sector)?.related_codelist
        this.getCodelistOptions({codelist: codelist, language: this.user?.language}).then(
            (response) => {
              //
              this.sector_codes = response.data;
            },
            (error) => {
              const resMessage =
                      (error.response &&
                        error.response.data &&
                        error.response.data.message) ||
                      error.message ||
                      error.toString();
              
              console.log(resMessage)
              

            }
      );
    },
      updateCounties() {
      let payload = {
        related_id: this.form_search.state
      }
      
      this.location_counties = [];
      this.getLocationCounties(payload).then(
        (response) => {
          this.location_counties = response.data.locations;
        },
        (error) => {
          console.log(`${error}`)
        }
      )
    },

    updatePayam() {
      let payload ={
        related_id: this.form_search.county
      }
      this.location_payams = [];      
      this.getLocationPayams(payload).then(
        (response) => {
          this.location_payams = response.data.locations
        },
        (error) => {
          console.log(`${error}`)
        }
      )
    },
    },
    created() {
        let isLoggedIn = !!localStorage.getItem("token");
        if (isLoggedIn) {
            //put user and translations to vuex state 
            let token = localStorage.getItem("token");
            let loggedInUser = JSON.parse(localStorage.getItem("user"));
            this.$store.commit("auth/SET_TOKEN", token);
            this.$store.commit("auth/SET_USER", loggedInUser);
        }
        this.getLocationStates();
        this.fetchProjects();
        this.getCodelistOptions({codelist: 'SectorVocabulary', language: this.user?.language}).then(
          (response) => {
            //
            this.sector_vocabularies = response.data;
          },
          (error) => {
            const resMessage =
                    (error.response &&
                      error.response.data &&
                      error.response.data.message) ||
                    error.message ||
                    error.toString();
             
             console.log(resMessage)
             

          }
     );
    },
  
}


</script>