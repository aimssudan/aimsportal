<template>
  <!-- <flash-error :hasError="apiErrors" :errors="errors" @dismissError="apiErrors = false"></flash-error> -->
  <br />
  <div class="card">
    <div class="card-body">
      <div class="row g-3">
        <div class="col-sm-1">Title:</div>
        <div class="col-sm-3">
          <input type="text" v-model="form_search.title" class="form-control" />
        </div>
        <div class="col-sm-1">From:</div>
        <div class="col-sm-3">
          <input
            type="date"
            v-model="form_search.start_date"
            class="form-control"
          />
        </div>
        <div class="col-sm-1">To:</div>
        <div class="col-sm-3">
          <input
            type="date"
            v-model="form_search.end_date"
            class="form-control"
          />
        </div>
      </div>
      <hr />
      <div class="row g-3">
        <div class="col-sm-4">
          <select
            v-model="form_search.organisation"
            class="form-select"
            aria-label="Default select example"
          >
            <option value="">Organisation</option>
            <option v-for="org in organisations" :key="org.id" :value="org.id">
              {{ org.name }}
            </option>
          </select>
        </div>
        <div class="col-sm-4">
          <select
            @change="updateSectorCodeList()"
            v-model="form_search.parent_sector"
            class="form-select"
            aria-label="Default select example"
          >
            <option value="">Parent Sector</option>
            <option
              v-for="sectorVocabulary in sector_vocabularies"
              :key="sectorVocabulary.code"
              :value="sectorVocabulary.code"
            >
              {{ sectorVocabulary.name }}
            </option>
          </select>
        </div>
        <div class="col-sm-4">
          <select
            v-model="form_search.sector"
            class="form-select"
            aria-label="Default select example"
          >
            <option value="">Sub Sector</option>
            <option
              v-for="sector in sector_codes"
              :key="sector.code"
              :value="sector.code"
            >
              {{ sector.name }}
            </option>
          </select>
        </div>
      </div>
      <hr />
      <div class="row g-3">
        <div class="col-sm-4">
          <select
            v-model="form_search.state"
            @change="updateCounties()"
            class="form-select"
            aria-label="Default select example"
          >
            <option value="">State</option>
            <option v-for="loc in locationStates" :key="loc.id" :value="loc.id">
              {{ loc.name }}
            </option>
          </select>
        </div>
        <div class="col-sm-4">
          <select
            v-model="form_search.county"
            @change="updatePayam()"
            class="form-select"
            aria-label="Default select example"
          >
            <option value="">County</option>
            <option
              v-for="county in location_counties"
              :key="county.id"
              :value="county.id"
            >
              {{ county.name }}
            </option>
          </select>
        </div>
        <div class="col-sm-4">
          <select
            v-model="form_search.payam"
            class="form-select"
            aria-label="Default select example"
          >
            <option value="">Payam</option>
            <option
              v-for="payam in location_payams"
              :key="payam.id"
              :value="payam.id"
            >
              {{ payam.name }}
            </option>
          </select>
        </div>
      </div>
      <br />
      <button
        :disabled="loading"
        @click="searchProjects()"
        class="btn btn-info"
      >
        Search
      </button>
      <button
        :disabled="loading"
        @click="resetProjects()"
        class="btn btn-danger"
      >
        Reset
      </button>
      <div v-if="loading" class="spinner-border text-warning" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
    </div>
  </div>
  <br />
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
            <td>{{ index }}</td>
            <td>{{ activity.default_title }}</td>
            <td>
              {{
                Intl.NumberFormat().format(
                  activity.budget
                    .map((obj) => obj.iati_value_amount)
                    .reduce((accumulator, current) => accumulator + current, 0)
                )
              }}
            </td>
            <td>{{ activity.reporting_org.name }}</td>
            <td>
              <button
                @click="
                  this.$router.push({
                    name: 'project',
                    params: { id: activity.id },
                  })
                "
                class="btn btn-warning btn-sm"
              >
                View
              </button>
              <button
                v-if="isEditor"
                @click="deleteAProject(activity.id)"
                class="btn btn-danger btn-sm"
              >
                Delete
              </button>
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
                <li v-for="page in last_page" :key="page" class="page-item">
                  <a
                    class="page-link"
                    :class="{ active: page == form_search.page }"
                    @click.prevent="changePage(page)"
                    href="#"
                    >{{ page }}</a
                  >
                </li>

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
import { mapActions, mapState, mapGetters } from "vuex";
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
        state: "",
        county: "",
        payam: "",
        parent_sector: "",
        sector: "",
        organisation: "",
        title: "",
        start_date: "",
        end_date: "",
        page: 1,
      },
    };
  },
  computed: {
    ...mapState("project", ["projects"]),
    ...mapState("global", ["organisations"]),
    ...mapState("locations", ["locationStates"]),
    ...mapGetters({
      admin: "auth/superadmin",
      contributor: "auth/contributor",
      manager: "auth/manager",
    }),
    isEditor() {
      return this.contributor || this.admin || this.manager;
    },
  },
  methods: {
    ...mapActions({
      fetchProjects: "project/getProjects",
      filterProjects: "project/filterProjects",
      deleteProject: "project/deleteProject",
      getLocationStates: "locations/getStates",
      getLocationCounties: "locations/getCounties",
      getLocationPayams: "locations/getPayams",
      getCodelistOptions: "codelists/fetchCodelistOptions",
      getCodelistValue: "codelists/fetchCodelistValue",
    }),
    deleteAProject(id) {
      if (confirm("Are you sure ?")) {
        this.deleteProject(id).then(
          (response) => {
            this.$store.commit("showSnackbar", response.data.data);
            this.fetchProjects();
          },
          (error) => {
            const errorMessage =
              (error.response &&
                error.response.data &&
                error.response.data.message) ||
              error.message ||
              error.toString();

            this.$store.commit("showSnackbar", errorMessage);
          }
        );
      }
    },
    updateSectorCodeList() {
      this.sector_codes = [];
      let codelist = this.sector_vocabularies.find(
        (element) => element.code === this.form_search.parent_sector
      )?.related_codelist;
      this.getCodelistOptions({
        codelist: codelist,
        language: this.user?.language,
      }).then(
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

          console.log(resMessage);
        }
      );
    },
    updateCounties() {
      let payload = {
        related_id: this.form_search.state,
      };

      this.location_counties = [];
      this.getLocationCounties(payload).then(
        (response) => {
          this.location_counties = response.data.locations;
        },
        (error) => {
          console.log(`${error}`);
        }
      );
    },

    updatePayam() {
      let payload = {
        related_id: this.form_search.county,
      };
      this.location_payams = [];
      this.getLocationPayams(payload).then(
        (response) => {
          this.location_payams = response.data.locations;
        },
        (error) => {
          console.log(`${error}`);
        }
      );
    },
    searchProjects() {
      this.loading = true;
      this.filterProjects({ ...this.form_search }).then(
        (result) => {
          this.$store.commit("project/SET_PROJECTS", result.data.data);
          this.form_search.page = result.data.meta.current_page;
          this.last_page = result.data.meta.last_page;
          this.first_page = result.data.meta.from;
          this.loading = false;
        },
        (error) => {
          console.log(error);
        }
      );
    },
    resetProjects() {
      this.form_search.organisation = "";
      this.form_search.county = "";
      this.form_search.parent_sector = "";
      this.form_search.state = "";
      this.form_search.payam = "";
      this.form_search.sector = "";
      this.form_search.title = "";
      this.form_search.start_date = "";
      this.form_search.end_date = "";
      this.searchProjects();
    },
    changePage(page) {
      this.form_search.page = page;
      this.searchProjects();
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
    this.searchProjects();
    this.getCodelistOptions({
      codelist: "SectorVocabulary",
      language: this.user?.language,
    }).then(
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

        console.log(resMessage);
      }
    );
  },
};
</script>

<style>
/* Button */
.page div .btn {
  margin-right: 20px;
  font-weight: 600;
  text-transform: uppercase;
  transform: translatex(0px) translatey(0px);
}

/* Card */
#app div .card:nth-child(2) {
  box-shadow: 0px 0px 9px 0px rgba(86, 165, 245, 0.32);
  transform: translatex(0px) translatey(0px);
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 20px;
  padding-bottom: 20px;
  background-color: #ecf1f8;
}

/* Button */
#app div .btn:nth-child(7) {
  background-color: #0083ef;
  color: #ffffff;
}

/* Heading */
.page div h1 {
  font-weight: 700;
}

/* List */
.page div ol {
  font-weight: 600;
}

@media (max-width: 1399px) {
  /* Card */
  #app div .card:nth-child(2) {
    margin-left: 300px;
  }
}

@media (max-width: 1199px) {
  /* Card */
  #app div .card:nth-child(2) {
    margin-left: 150px;
  }
}

@media (max-width: 991px) {
  /* Card */
  #app div .card:nth-child(2) {
    margin-left: 0px;
    transform: translatex(0px) translatey(0px);
  }
}

@media (max-width: 767px) {
  /* Row */
  #app .page .row:nth-child(1) {
    display: inline-flex;
    flex-direction: row;
    justify-content: flex-start;
    flex-wrap: wrap;
    float: none;
  }
}

/* Card */
.project-page .card:nth-child(2) {
  margin-right: 400px;
}

/* Col 1 */
.project-page .card .col-sm-1 {
  font-weight: 600;
  color: #8c8c8c;
  font-size: 14px;
  display: flex;
  justify-content: center;
  align-items: center;
}

@media (max-width: 1399px) {
  /* Card */
  .project-page .card:nth-child(2) {
    margin-left: 0px !important;
  }
}

@media (max-width: 1199px) {
  /* Card */
  .project-page .card:nth-child(2) {
    margin-right: 120px;
  }
}

@media (max-width: 991px) {
  /* Card */
  .project-page .card:nth-child(2) {
    margin-right: 0px;
  }
}

@media (max-width: 767px) {
  /* Col 1 */
  .project-page .card .col-sm-1 {
    font-size: 13px;
  }
}

@media (max-width: 575px) {
  /* Col 1 */
  .project-page .card .col-sm-1 {
    justify-content: flex-start;
    margin-top: 10px;
    padding-left: 13px;
  }

  /* Col 3 */
  .project-page .card .col-sm-3 {
    margin-top: 0px;
  }
}

@media (max-width: 450px) {
  /* Col 3 */
  .project-page .card .col-sm-3 {
    margin-top: 0px;
  }

  /* Col 1 */
  .project-page .card .col-sm-1 {
    padding-left: 15px;
  }
}

@media (max-width: 991px) {
  /* Th */
  .table-stripped tr th {
    font-size: 14px;
  }

  /* Table Data */
  .table-stripped tr td {
    font-size: 13px;
  }
}

@media (max-width: 575px) {
  /* Table Data */
  .project-page tr:nth-child(1) td:nth-child(2) {
    font-size: 13px;
  }
}

/* Button */
.table-stripped tr .btn-warning {
  margin-bottom: 5px;
}
/* Column 3/12 */
#collapse-chart-trends .card-body .container > .row > .col-3 {
  transform: translatex(0px) translatey(0px);
  display: none;
}

/* Column 7/12 */
#app
  #app-content
  .page
  .container
  .row
  .col-md-6
  .card
  #collapse-chart-trends
  .card-body
  .container
  .row
  .col-7 {
  width: 100% !important;
}

/* Row */
.right div .row {
  min-width: 76%;
  width: 603px;
  height: 91px;
  justify-content: center;
  align-items: center;
}

/* Column 3/12 */
.right div .col-3 {
  min-width: 150px;
  width: 539px;
  max-width: 150px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
}

/* Column 7/12 */
#collapse-chart-trends .card-body .col-7 {
  margin-bottom: 40px;
}

/* Heading */
#collapse-chart-trends div h1 {
  margin-bottom: 0px;
  color: #025eb9;
}

/* Row */
#collapse-chart-trends .card-body .container > .row {
  height: 551px;
  transform: translatex(0px) translatey(0px);
  display: inline-block;
  margin-bottom: 15px;
}

/* Paragraph */
#collapse-chart-trends div p {
  color: #969696;
  font-weight: 600;
}

@media (max-width: 1399px) {
  /* Row */
  .right div .row {
    min-width: 65%;
    width: 520px;
  }

  /* Column 3/12 */
  .right div .col-3 {
    min-width: 107px;
    width: 107px;
  }

  /* Column 3/12 */
  .page
    .container
    .row
    .col-md-6
    .card
    #collapse-chart-trends
    .card-body
    .container
    .row
    .right
    div
    .row
    .col-3:nth-child(4) {
    width: 167px !important;
  }

  /* Row */
  #collapse-chart-trends .card-body .container > .row {
    height: 489px;
    padding-bottom: 0px;
    margin-bottom: 0px;
  }
}

@media (max-width: 1199px) {
  /* Row */
  .right div .row {
    width: 430px;
    transform: translatex(0px) translatey(0px);
    padding-bottom: 0px !important;
    height: 79px;
  }

  /* Column 3/12 */
  .right div .col-3 {
    min-width: 9px;
  }

  /* Column 3/12 */
  .page
    .container
    .row
    .col-md-6
    .card
    #collapse-chart-trends
    .card-body
    .container
    .row
    .right
    div
    .row
    .col-3 {
    width: 90px !important;
  }

  /* Column 3/12 */
  .page div .col-3:nth-child(4) {
    min-width: 1px;
  }

  /* Column 3/12 */
  .page
    .container
    .row
    .col-md-6
    .card
    #collapse-chart-trends
    .card-body
    .container
    .row
    .right
    div
    .row
    .col-3:nth-child(4) {
    width: 160px !important;
  }

  /* Row */
  #collapse-chart-trends .card-body .container > .row {
    height: 415px;
    transform: translatex(0px) translatey(0px);
  }

  /* Column 7/12 */
  #collapse-chart-trends .card-body .col-7 {
    margin-bottom: 20px;
  }

  /* Card body */
  #collapse-chart-trends .card-body {
    transform: translatex(0px) translatey(0px);
    height: 456px;
  }

  /* Column 2/12 */
  #app
    #app-content
    .page
    .container
    .row
    .col-md-6
    .card
    #collapse-chart-trends
    .card-body
    .container
    .row
    .right {
    transform: translatex(0px) translatey(0px) !important;
  }
}

@media (max-width: 991px) {
  /* Column 3/12 */
  .right div .col-3 {
    min-width: 2%;
  }

  /* Row */
  .right div .row {
    min-width: 1%;
    width: 312px;
  }

  /* Paragraph */
  #collapse-chart-trends div p {
    font-size: 13px;
  }

  /* Heading */
  #collapse-chart-trends div h1 {
    font-size: 30px;
  }

  /* Column 3/12 */
  .page
    .container
    .row
    .col-md-6
    .card
    #collapse-chart-trends
    .card-body
    .container
    .row
    .right
    div
    .row
    .col-3 {
    width: 22% !important;
  }

  /* Column 3/12 */
  .page
    .container
    .row
    .col-md-6
    .card
    #collapse-chart-trends
    .card-body
    .container
    .row
    .right
    div
    .row
    .col-3:nth-child(4) {
    width: 34% !important;
  }

  /* Row */
  #collapse-chart-trends .card-body .container > .row {
    height: 306px;
  }

  /* Card body */
  #collapse-chart-trends .card-body {
    height: 360px;
  }
}

@media (max-width: 767px) {
  /* Row */
  .right div .row {
    width: 474px;
    display: flex !important;
    justify-content: center !important;
  }

  /* Card body */
  .page .col-md-6:nth-child(2) .card-body {
    height: 497px !important;
  }

  /* Column 3/12 */
  .right div .col-3 {
    transform: translatex(0px) translatey(0px);
  }

  /* Heading */
  #collapse-chart-trends div h1 {
    font-size: 40px;
  }

  /* Column 3/12 */
  .page
    .container
    .row
    .col-md-6
    .card
    #collapse-chart-trends
    .card-body
    .container
    .row
    .right
    div
    .row
    .col-3:nth-child(4) {
    width: 124px !important;
  }

  /* Card body */
  #collapse-chart-trends .card-body {
    min-height: 506px;
  }
}

@media (max-width: 575px) {
  /* Row */
  .right div .row {
    width: 431px;
  }

  /* Card body */
  #collapse-chart-trends .card-body {
    min-height: 46px;
    height: 465px !important;
  }
}

@media (max-width: 450px) {
  /* Row */
  .right div .row {
    height: 79px;
    width: 320px;
  }

  /* Column 3/12 */
  .page
    .container
    .row
    .col-md-6
    .card
    #collapse-chart-trends
    .card-body
    .container
    .row
    .right
    div
    .row
    .col-3 {
    width: 70px !important;
  }

  /* Column 3/12 */
  .page
    .container
    .row
    .col-md-6
    .card
    #collapse-chart-trends
    .card-body
    .container
    .row
    .right
    div
    .row
    .col-3:nth-child(4) {
    width: 110px !important;
  }

  /* Card body */
  #collapse-chart-trends .card-body {
    height: 378px !important;
  }
}
</style>
