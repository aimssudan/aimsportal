<template>
  <main class="page">
    <div class="container" style="min-height: 80vh">
      <h1 class="text-primary">Reports</h1>
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item active" aria-current="page">Reports</li>
        </ol>
      </nav>
      <div class="row">
        <div class="col-md-12">
        <div class="card border-light">
            <div class="card-header d-flex justify-content-between">
              <h5>Map Distribution</h5>
              <button
                class="btn btn-light btn-sm"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapse-map-report"
                aria-expanded="false"
                aria-controls="collapse-chart-trends"
              >
                &nbsp;<svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  class="w-5 h-5"
                >
                  <path
                    fill-rule="evenodd"
                    d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                    clip-rule="evenodd"
                  />
                </svg>
              </button>
            </div>
            <div
              id="collapse-map-report"
              class="collapse show"
              aria-labelledby="heading-collapsed"
            >
              <div class="card-body">
                <!-- <funding-trend-chart/> -->
                <report-map
                 class="text-primary"
                ></report-map>
              </div>
            </div>
          </div>
          </div>


      </div>
      <div class="row">
        <div class="col-md-6">
          <div class="card border-light">
            <div class="card-header d-flex justify-content-between">
              <h5>State Project Distribution</h5>
              <button
                class="btn btn-light btn-sm"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapse-chart-trends"
                aria-expanded="false"
                aria-controls="collapse-chart-trends"
              >
                &nbsp;<svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  class="w-5 h-5"
                >
                  <path
                    fill-rule="evenodd"
                    d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                    clip-rule="evenodd"
                  />
                </svg>
              </button>
            </div>
            <div
              id="collapse-chart-trends"
              class="collapse show"
              aria-labelledby="heading-collapsed"
            >
              <div class="card-body">
                <!-- <funding-trend-chart/> -->
                <funding-by-sector-chart></funding-by-sector-chart>
              </div>
            </div>
          </div>
        </div>

        <div class="col-md-6">
          <div class="card border-light">
            <div class="card-header d-flex justify-content-between">
              <h5>Projects Bar Chart</h5>
              <button
                class="btn btn-light btn-sm"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapse-chart-trends"
                aria-expanded="false"
                aria-controls="collapse-chart-trends"
              >
                &nbsp;<svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  class="w-5 h-5"
                >
                  <path
                    fill-rule="evenodd"
                    d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                    clip-rule="evenodd"
                  />
                </svg>
              </button>
            </div>
            <div
              id="collapse-chart-trends"
              class="collapse show"
              aria-labelledby="heading-collapsed"
            >
              <div class="card-body">
                <h5>
                  <span class="badge bg-secondary"
                    >Projects Geographic Impact Summary</span
                  >
                </h5>
                <projects-bar-chart chart-title="" ></projects-bar-chart>
              </div>
            </div>
            <div class="card-footer">Map of South Sudan</div>
          </div>
        </div>
      </div>
      <!-- row -->

      <project-list></project-list>
    </div>
  </main>
</template>

<script>
import { mapActions, mapState } from "vuex";
import ProjectsBarChart from "../components/charts/ProjectsBarChart.vue";
import FundingBySectorChart from "../components/charts/FundingBySectorChart.vue";
import ProjectList from "../components/reports/ProjectList.vue";
import ReportMap from "../components/maps/ReportMap.vue";

export default {
  name: "dashboard",
  components: {
    ProjectsBarChart,
    FundingBySectorChart,
    ProjectList,
    ReportMap,
  },
  data() {
    return {
      mapData: [],
      isMapDataLoaded: false,
    };
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
    this.getSummaryPerStateReport().then(
      (response) => {
        this.mapData = response.data;
        this.isMapDataLoaded = true;
      },
      (error) => {
        console.log(error);
      }
    );
  },
  computed: {
    ...mapState("auth", ["user"]),
    profile() {
      return this.user;
    },
  },
  methods: {
    ...mapActions({
      getSummaryPerStateReport: "reports/getSummaryPerStateReport",
    }),
  },
};
</script>

<style scoped>
.page {
  padding-top: 4em;
  padding-bottom: 4em;
}

/* ----------- edits --------- */
/* Funding sector chart */
#funding-by-sector-chart {
  text-align: left;
}

/* Card header */
.page .card .card-header {
  background-color: rgba(36, 99, 162, 0.1);
  height: 50px;
}

/* Heading */
.page .card-header h5 {
  font-weight: 600;
  color: #7b7b7e;
  font-size: 17px;
  margin-top: 5px;
  margin-bottom: 5px;
}

/* Card */
.page .row .card {
  box-shadow: 0px 0px 17px 0px rgba(44, 62, 80, 0.14);
}

/* Column 3/12 */
#collapse-chart-trends .card-body .container > .row > .col-3 {
  transform: translatex(0px) translatey(0px);
  display: none;
}

/* -------------- edits ------------- */
/* Card header */
.page .card .card-header {
  background-color: rgba(0, 41, 117, 0.87) !important;
}

/* Heading */
.page .card-header h5 {
  color: #ffffff !important;
}

/* Button */
.page .card-header .btn-sm {
  width: 25px;
  height: 26px;
  margin-top: 5px;
  margin-bottom: 0px;
  margin-right: 0px;
}

/* Svg */
.page .card .w-5 {
  width: 25px;
  height: 25px;
  position: relative;
  top: -25px;
  left: -8px;
  margin-top: 0px;
}

/* Card */
.page .row .card {
  border-style: none;
  margin-bottom: 20px;
}

/* Card footer */
.page .card .card-footer {
  display: none;
}

/* Card */
.page .card {
  background-color: #ffffff;
}

/* Card */
.page .card:nth-child(5) {
  background-color: rgba(186, 218, 246, 0.82);
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 20px;
  padding-bottom: 20px;
  border-style: solid;
  border-width: 1px;
  border-color: #93c1e0;
  box-shadow: 0px 0px 18px 0px rgba(44, 62, 80, 0.24);
}

/* Card */
#app #app-content .page .container .card:nth-child(5) {
  width: 75% !important;
}

/* Col 1 */
.page .card .col-sm-1 {
  font-weight: 600;
  color: #606060;
}

@media (max-width: 1399px) {
  /* Card footer */
  .page .card .card-footer {
    display: none;
  }

  /* Card header */
  #app #app-content .page .container .row .col-md-6 .card .card-header {
    transform: translatex(0px) translatey(0px) !important;
  }

  /* Card */
  #app #app-content .page .container .card:nth-child(5) {
    width: 923px !important;
  }

  /* Heading */
  #app #app-content .page .container .row .col-md-6 .card .card-header h5 {
    width: 90% !important;
  }

  /* Card header */
  .page .card .card-header {
    display: flex;
  }
}

@media (max-width: 1199px) {
  /* Card */
  #app #app-content .page .container .card:nth-child(5) {
    width: 100% !important;
  }

  /* Col 1 */
  .page .card .col-sm-1 {
    display: flex;
    float: left;
    justify-content: flex-end;
  }
}

@media (max-width: 991px) {
  /* Col 1 */
  .page .card .col-sm-1 {
    font-size: 14px;
  }
}

@media (max-width: 575px) {
  /* Heading */
  .page .card-header h5 {
    font-size: 16px !important;
  }

  /* Col 3 */
  .page .card .col-sm-3 {
    margin-top: 0px;
  }

  /* Col 1 */
  .page .card .col-sm-1 {
    justify-content: flex-start;
  }
}
/* -------------- edits ------------- */

/* -------------- edits ------------- */

/* -------------- edits ------------- */

/* Card */
.page .card:nth-child(5) {
  margin-right: 400px;
  box-shadow: 0px 0px 9px 0px rgba(86, 165, 245, 0.32);
  transform: translatex(0px) translatey(0px);
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 20px;
  padding-bottom: 20px;
  background-color: #ecf1f8;
}
</style>
