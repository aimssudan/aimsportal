<template>
    <!-- <flash-error :hasError="apiErrors" :errors="errors" @dismissError="apiErrors = false"></flash-error> -->
    <br>
    <div class="card">
      <div class="card-body">
        
          <div class="row g-3">
            <div class="col-sm-1">
              Title:
            </div>
            <div class="col-sm-3">
              <input type="text" v-model="form_search.title" class="form-control">
            </div>
            <div class="col-sm-1">
              From:
            </div>
            <div class="col-sm-3">
              <input type="date" v-model="form_search.start_date" class="form-control">
            </div>
            <div class="col-sm-1">
              To:
            </div>
            <div class="col-sm-3">
              <input type="date" v-model="form_search.end_date" class="form-control">
              
            </div>
          </div>
          <hr>
          <div class="row g-3">
            <div class="col-sm-4">
              <select  v-model="form_search.organisation" class="form-select" aria-label="Default select example">
                <option value="">Organisation</option>
                <option v-for="org in organisations" :key="org.id" :value="org.id">{{ org.name }}</option>
                
              </select>
            </div>
            <div class="col-sm-4">
              <select @change="updateSectorCodeList()" v-model="form_search.parent_sector" class="form-select" aria-label="Default select example">
                <option value="">Parent Sector</option>
                <option v-for="sectorVocabulary in sector_vocabularies" :key="sectorVocabulary.code" :value="sectorVocabulary.code">{{ sectorVocabulary.name }}</option>                
              </select>
            </div>
            <div class="col-sm-4">
              <select v-model="form_search.sector" class="form-select" aria-label="Default select example">
                <option value="">Sub Sector</option>
                <option v-for="sector in sector_codes" :key="sector.code" :value="sector.code">{{ sector.name }}</option>                
              </select>
            </div>
          </div>
          <hr>
          <div class="row g-3">
            <div class="col-sm-4">
              <select v-model="form_search.state" @change="updateCounties()" class="form-select" aria-label="Default select example">
                <option value="">State</option>
                <option v-for="loc in locationStates" :key="loc.id" :value="loc.id">{{ loc.name }}</option>                
              </select>
            </div>
            <div class="col-sm-4">
              <select v-model="form_search.county" @change="updatePayam()" class="form-select" aria-label="Default select example">
                <option value="">County</option>
                <option v-for="county in location_counties" :key="county.id" :value="county.id">{{ county.name }}</option> 
                
              </select>
            </div>
            <div class="col-sm-4">
              <select v-model="form_search.payam" class="form-select" aria-label="Default select example">
                <option value="">Payam</option>
                <option v-for="payam in location_payams" :key="payam.id" :value="payam.id">{{ payam.name }}</option>
              </select>
            </div>
          </div><br>
        <button :disabled="loading" @click="searchProjects()" class="btn btn-info">Search</button>
        <button :disabled="loading" @click="resetProjects()" class="btn btn-danger">Reset</button>
        <div v-if="loading" class="spinner-border text-warning" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
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
                <li v-for="page in last_page" :key="page" class="page-item"><a class="page-link" :class="{active : page == form_search.page}" @click.prevent="changePage(page)" href="#">{{ page }}</a></li>
                
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
        loading: false,
        first_page: null,
        current_page: 1,
        last_page: 1,
        form_search: {
          state: '',
          county: '',
          payam: '',
          parent_sector: '',
          sector: '',
          organisation: '',
          title: '',
          start_date: '',
          end_date: '',
          page: 1
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
            filterProjects: "project/filterProjects",
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
    searchProjects() {
      this.loading = true
      this.filterProjects({...this.form_search}).then(
        (result) => {
          this.$store.commit('project/SET_PROJECTS', result.data.data);
          this.form_search.page = result.data.meta.current_page;
          this.last_page = result.data.meta.last_page
          this.first_page = result.data.meta.from
          this.loading = false
        },
        (error) => {
          console.log(error);
        }
      )
    },
    resetProjects() {
      this.form_search.organisation = '';
      this.form_search.county = ''
      this.form_search.parent_sector = ''
      this.form_search.state = ''
      this.form_search.payam = ''
      this.form_search.sector = ''
      this.form_search.title = ''
      this.form_search.start_date = ''
      this.form_search.end_date = ''
      this.searchProjects()
    },
    changePage(page) {
      this.form_search.page = page;
      this.searchProjects()
    }
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
        this.searchProjects()
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