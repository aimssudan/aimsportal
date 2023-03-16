<template>
  <main class="page home">
    <div
      class=""
      style="
        min-height: 80vh;
        padding-top: 7em;
        _color: whitesmoke;
        _background-color: rgba(9, 162, 255, 0.85);
        font-weight: 400;
      "
    >
      <div class="container">
        <div class="col-md-12">
          <!-- <div class="card">
                <div class="card-body pt-3 pb-3 px-4">
                    
                </div>
            </div> -->
          <div class="row">
            <div class="col-md-8">
              <h4><b>Welcome to The South Sudan AIMS</b></h4>
              <p>
                The Aid Information Management System (AIMS) web portal from the
                Ministry of Finance and Planning - Government of South Sudan.
              </p>
              <div class="card border-light">
                <!-- <div class="card-header d-flex justify-content-between">
                    
                  </div> -->
                <div
                  id="collapse-chart-trends"
                  class="collapse show"
                  aria-labelledby="heading-collapsed"
                >
                  <div class="card-body">
                    <h5 style="font-weight: bolder">PROJECT OVERVIEW</h5>

                    <project-distribution-by-state
                      v-if="isMapDataLoaded"
                      :mapData="mapData"
                      class="text-primary"
                    ></project-distribution-by-state>
                  </div>
                </div>
              </div>

              <div class="row mt-4">
                <h4>In Detail</h4>
                <div class="col-md-6">
                  <div class="card" style="min-height: 50%">
                    <div class="card-body">
                      <stacked-line-chart
                        chartTitle="IMPLEMENTED VS TOTAL PROJECTS"
                      ></stacked-line-chart>
                    </div>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="card" style="min-height: 50%">
                    <div class="card-body">
                      <!-- Bar Graph -->
                      <stacked-trend-chart
                        chartTitle="COMMITTED VS BUDGETED"
                      ></stacked-trend-chart>
                    </div>
                  </div>
                </div>
              </div>

              <!-- <center><a href="/login" class="btn btn-primary">Log In</a></center> <center><a href="/register" class="btn btn-success mt-4 mb-4">Register</a></center> -->
            </div>

            <div class="col-md-4">
              <div class="row">
                <div class="col-md-6">
                  <center>
                    <button
                      @click="navigate('login')"
                      style="_color: black"
                      class="btn btn-primary btn-rounded ml-4"
                    >
                      LOG IN</button
                    ><br />
                    <small>Administrator</small>
                  </center>
                </div>
              </div>
              <!-- row -->

              <div class="card text-black mt-4">
                <div class="card-body">
                  <div class="btn-group" style="width: 100%">
                    <a
                      href="#"
                      class="btn btn-outline-primary"
                      :class="{ active: activeTab == 'SECTOR' }"
                      @click.prevent="switchGraph('sector')"
                      >SECTOR</a
                    >
                    <a
                      href="#"
                      class="btn btn-outline-primary"
                      :class="{ active: activeTab == 'SOURCE' }"
                      @click.prevent="switchGraph('source')"
                      >SOURCE</a
                    >
                    <a
                      href="#"
                      class="btn btn-outline-primary"
                      :class="{ active: activeTab == 'STATE' }"
                      @click.prevent="switchGraph('state')"
                      >STATE</a
                    >
                    <a
                      href="#"
                      class="btn btn-outline-primary"
                      :class="{ active: activeTab == 'PERIOD' }"
                      @click.prevent="switchGraph('period')"
                      >PERIOD</a
                    >
                  </div>

                  <div
                    v-if="isLoading"
                    class="spinner-border text-warning"
                    role="status"
                  >
                    <span class="visually-hidden">Loading...</span>
                  </div>
                  <flash-error
                    :hasError="apiErrors"
                    :errors="errors"
                    @dismissError="apiErrors = false"
                  ></flash-error>

                  <!-- Other Graphs -->

                  <bar-chart-report
                    v-if="dataReady"
                    :chartData="chartData"
                    :chartLabels="chartLabel"
                  ></bar-chart-report>
                </div>
              </div>

              <div class="row" style="margin-top: 3rem">
                <div class="col-md-6">
                  <h1>54</h1>
                  <small>Total Organizations</small>
                </div>
                <div class="col-md-6">
                  <div class="row">
                    <div class="col-md-4">
                      <h4>26</h4>
                      <span class="badge bg-dark" style="color: #ebecf0"
                        >Local</span
                      >
                    </div>

                    <div class="col-md-4">
                      <h4>12</h4>
                      <span class="badge bg-dark" style="color: #ebecf0"
                        >GOV'T</span
                      >
                    </div>

                    <div class="col-md-4">
                      <h4>14</h4>
                      <span class="badge bg-dark" style="color: #ebecf0"
                        >INT'L</span
                      >
                    </div>
                  </div>
                </div>
                <hr style="margin-top: 1rem" />
              </div>

              <div class="row">
                <div class="col-md-5">
                  <h1>
                    ${{
                      convertToInternationalCurrencySystem(allTimeFundingTotal)
                    }}
                  </h1>
                  <small>Total Funds</small>
                </div>
                <div class="col-md-7">
                  <div class="row">
                    <div class="col-md-4">
                      <h5>
                        ${{
                          convertToInternationalCurrencySystem(
                            thisYearFundingTotal
                          )
                        }}
                      </h5>
                      <span class="badge bg-dark" style="color: #ebecf0"
                        >2023</span
                      >
                    </div>

                    <div class="col-md-4">
                      <h5>
                        ${{
                          convertToInternationalCurrencySystem(
                            lastYearFundingTotal
                          )
                        }}
                      </h5>
                      <span class="badge bg-dark" style="color: #ebecf0"
                        >2022</span
                      >
                    </div>

                    <div class="col-md-4">
                      <h5>
                        ${{
                          convertToInternationalCurrencySystem(
                            previousYearFundingTotal
                          )
                        }}
                      </h5>
                      <span class="badge bg-dark" style="color: #ebecf0"
                        >2021</span
                      >
                    </div>
                  </div>
                </div>
                <hr style="margin-top: 1rem" />
              </div>

              <!-- <div class="row mt-4" id="additional_text">
                  <div class="col-md-12" style="text-align: justify;">
                    <p><b>The Aid Information Management System (AIMS)</b> is your one-stop-shop for all information related to foreign assistance in South Sudan. AIMS records and processes information provided by donors on development activities and related aid flows in the country. The overall objective of this AIMS is to increase aid transparency, strengthen accountability, facilitate coordination and allow for more efficient aid management.</p>

                  </div>
                  <div class="col-md-12" style="text-align: justify;">
                    <p><b>Access to Aid Information</b><br>
                      AIMS is a publicly-accessible internet tool which is part of the Government of South Sudan's transparency initiative. Anybody can view the information of aid flow in South Sudan, simply by clicking the "Public User" button. However, only authorized user of development partner can enter or update the aid information in the web portal.</p>
                  </div>
                </div> -->

              <h5 class="mt-3">Feedback</h5>
              <p>
                <small
                  >Your feedback on data fields and others related issues of
                  this web portal are highly appreciated. Please send your
                  valuable feedback to:
                  <a href="mailto:aimssouthsudan@gmail.com" style="color: blue"
                    >AIMS</a
                  ></small
                >
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import { mapActions } from "vuex";
import flashError from "../components/flashError.vue";
import ProjectDistributionByState from "../components/maps/ProjectDistributionByState.vue";
import StackedTrendChart from "../components/charts/StackedTrendChart.vue";
import StackedLineChart from "../components/charts/StackedLineChart.vue";
import BarChartReport from "../components/charts/BarChart.vue";

export default {
  name: "Home",
  components: {
    flashError,
    ProjectDistributionByState,
    StackedTrendChart,
    BarChartReport,
    StackedLineChart,
  },
  data() {
    return {
      showAlert: false,
      alertMessage: "",
      valid: false,
      isLoading: false,
      apiErrors: false,
      generalError: false,
      validationErrors: false,
      apiLoading: true,
      form: {
        email: "",
        password: "",
        device_name: "browser",
      },
      errors: [],
      allTimeFundingTotal: 0,
      thisYearFundingTotal: 0,
      lastYearFundingTotal: 0,
      previousYearFundingTotal: 0,
      dataReady: false,
      chartData: [],
      chartLabel: [],
      activeTab: "SECTOR",
      activeHeading: "Funding By Sector",
      mapData: [],
      isMapDataLoaded: false,
    };
  },
  computed: {
    computedChartData() {
      return this.chartData;
    },
    computedChartLabels() {
      return this.chartLabel.map((value) => value.organisation);
    },
  },
  created() {
    let isLoggedIn = !!localStorage.getItem("token");
    if (isLoggedIn) {
      //put user and translations to vuex stat
      let token = localStorage.getItem("token");
      let loggedInUser = JSON.parse(localStorage.getItem("user"));
      this.$store.commit("auth/SET_TOKEN", token);
      this.$store.commit("auth/SET_USER", loggedInUser);
    }
    this.calculateFundingTotals();
    this.updateFundingSectorGraph();
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

  methods: {
    ...mapActions({
      login: "auth/login",
      guestLogin: "auth/guestLogin",
      getFundingTotal: "reports/getFundingTotal",
      getFundingBySector: "reports/getFundingBySectorReport",
      getFundingBySource: "reports/getFundingBySourceReport",
      getFundingByState: "reports/getFundingByStateReport",
      getFundingTrendReport: "reports/getFundingTrendReport",
      getSummaryPerStateReport: "reports/getSummaryPerStateReport",
    }),

    switchGraph(graphType) {
      switch (graphType) {
        case "sector":
          this.updateFundingSectorGraph();
          this.activeHeading = "Funding By Sector";
          this.activeTab = "SECTOR";
          break;
        case "source":
          this.updateFundingSourceGraph();
          this.activeHeading = "Funding By Source";
          this.activeTab = "SOURCE";
          break;
        case "state":
          this.updateFundingStateGraph();
          this.activeHeading = "Funding By State";
          this.activeTab = "STATE";
          break;
        case "period":
          this.updateFundingPeriodGraph();
          this.activeHeading = "Funding By Period";
          this.activeTab = "PERIOD";
          break;
        default:
          this.updateFundingSectorGraph();
          this.activeHeading = "Funding By Sector";
          this.activeTab = "SECTOR";
      }
    },

    navigate(link) {
      this.$router.push({ name: link });
    },

    convertToInternationalCurrencySystem(labelValue) {
      // Nine Zeroes for Billions
      return Math.abs(Number(labelValue)) >= 1.0e9
        ? (Math.abs(Number(labelValue)) / 1.0e9).toFixed(1) + "B"
        : // Six Zeroes for Millions
        Math.abs(Number(labelValue)) >= 1.0e6
        ? (Math.abs(Number(labelValue)) / 1.0e6).toFixed(1) + "M"
        : // Three Zeroes for Thousands
        Math.abs(Number(labelValue)) >= 1.0e3
        ? (Math.abs(Number(labelValue)) / 1.0e3).toFixed(1) + "K"
        : Math.abs(Number(labelValue));
    },

    calculateFundingTotals() {
      const currentYear = new Date().getFullYear();
      const lastYear = currentYear - 1;
      const previousYear = currentYear - 2;

      this.getFundingTotal().then(
        (result) => {
          console.log(result.data);
          this.allTimeFundingTotal = result.data;
        },
        (error) => {
          const resMessage =
            (error.response &&
              error.response.data &&
              error.response.data.errors) ||
            error.message ||
            error.toString();

          console.log(resMessage);
        }
      );

      this.getFundingTotal(currentYear).then(
        (result) => {
          console.log(result.data);
          this.thisYearFundingTotal = result.data;
        },
        (error) => {
          const resMessage =
            (error.response &&
              error.response.data &&
              error.response.data.errors) ||
            error.message ||
            error.toString();

          console.log(resMessage);
        }
      );

      this.getFundingTotal(lastYear).then(
        (result) => {
          console.log(result.data);
          this.lastYearFundingTotal = result.data;
        },
        (error) => {
          const resMessage =
            (error.response &&
              error.response.data &&
              error.response.data.errors) ||
            error.message ||
            error.toString();

          console.log(resMessage);
        }
      );

      this.getFundingTotal(previousYear).then(
        (result) => {
          console.log(result.data);
          this.previousYearFundingTotal = result.data;
        },
        (error) => {
          const resMessage =
            (error.response &&
              error.response.data &&
              error.response.data.errors) ||
            error.message ||
            error.toString();

          console.log(resMessage);
        }
      );
    },

    updateFundingSourceGraph() {
      this.chartData = [];
      this.chartLabel = [];
      this.dataReady = false;
      this.getFundingBySource().then(
        (response) => {
          let chartData = {
            name: "Funding by Source",
            data: response.data.map((value) => value.data),
          };
          this.chartData.push(chartData);
          const label = response.data.map((value) => value.organisation);
          this.chartLabel = JSON.parse(JSON.stringify(label));
          this.dataReady = true;
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
    },

    updateFundingSectorGraph() {
      this.dataReady = false;
      this.chartData = [];
      this.chartLabel = [];
      this.getFundingBySector().then(
        (response) => {
          let chartData = {
            name: "Funding by Sector",
            data: response.data.map((value) => value.data),
          };
          this.chartData.push(chartData);
          const label = response.data.map((value) => value.sector);
          this.chartLabel = JSON.parse(JSON.stringify(label));
          this.dataReady = true;
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
    },

    updateFundingStateGraph() {
      this.dataReady = false;
      this.chartData = [];
      this.chartLabel = [];
      this.getFundingByState().then(
        (response) => {
          let chartData = {
            name: "Funding By State",
            data: response.data.map((value) => value.data),
          };
          this.chartData.push(chartData);
          this.chartLabel = response.data.map((value) => value.state);
          this.dataReady = true;
        },
        (error) => {
          console.log(error);
        }
      );
    },

    updateFundingPeriodGraph() {
      this.dataReady = false;
      this.chartData = [];
      this.chartLabel = [];
      this.getFundingTrendReport().then(
        (response) => {
          let chartData = {
            name: "Funding By Period",
            data: response.data.map((value) => value.data),
          };
          this.chartData.push(chartData);
          this.chartLabel = response.data.map((value) => value.year);
          this.dataReady = true;
        },
        (error) => {
          console.log(error);
        }
      );
    },

    submit() {
      this.isLoading = true;
      this.login(this.form).then(
        (response) => {
          //
          this.isLoading = false;
          let apiMessage = response ?? "success";
          this.$store.commit("showSnackbar", apiMessage);
          this.$router.push({ name: "dashboard" });
        },
        (error) => {
          const resMessage =
            (error.response &&
              error.response.data &&
              error.response.data.errors) ||
            error.message ||
            error.toString();
          this.isLoading = false;
          this.apiErrors = true;
          this.errors = resMessage;
        }
      );
    },

    loginAsGuest() {
      this.isLoading = true;
      this.guestLogin().then(
        (response) => {
          //
          this.isLoading = false;
          let apiMessage = response ?? "success";
          this.$store.commit("showSnackbar", apiMessage);
          this.$router.push({ name: "dashboard" });
        },
        (error) => {
          const resMessage =
            (error.response && error.response.message) ||
            error.message ||
            error.toString();
          this.isLoading = false;
          this.apiErrors = true;
          this.errors = resMessage;
          this.$store.commit("showSnackbar", "Unauthorized");
        }
      );
    },
  },
};
</script>
<style scoped>
.home {
  /* padding-top:3.5em; */
  /* background-image: url("../assets/img/4266.webp"); */
}

@media only screen and (min-width: 320px) and (max-width: 480px) {
  /* smartphones, iPhone, portrait 480x320 phones */
  #additional_text {
    display: none;
  }
}

/* Division */
#app-content .page > div {
  transform: translatex(0px) translatey(0px);
}

/* Column 8/12 */
.page div .col-md-8 {
  padding-right: 35px;
  padding-left: 0px;
  transform: translatex(0px) translatey(0px);
}

/* Heading */
#collapse-chart-trends .card-body h5 {
  font-size: 30px;
  color: #1d4770;
}

/* Badge */
#collapse-chart-trends .card-body .badge {
  padding-left: 12px;
  padding-right: 12px;
  padding-top: 7px;
  padding-bottom: 7px;
  text-transform: uppercase;
  line-height: 12px;
  margin-left: 10px !important;
  background-color: rgba(24, 66, 103, 0.72) !important;
}

/* Circle fill */
.text-primary .badge .bi-circle-fill {
  width: 12px;
  height: 12px;
  margin-right: 4px;
}

/* ---------------- SIDE BAR STATS ----------------- */
/* Heading */
.page div h1 {
  font-weight: 700;
  margin-bottom: -5px;
  color: #2b75bf;
}

/* Heading */
.row div .row div h5 {
  color: #2b75bf;
  font-weight: 700;
  font-size: 18px;
  text-align: right;
  float: right;
  margin-bottom: 4px;
}

/* Heading */
.row div .row div h4 {
  color: #2b75bf;
  font-weight: 700;
  float: right;
  margin-bottom: 4px;
}

/* Column 4/12 */
.row div .row div .row div {
  text-align: right;
  float: right;
  transform: translatex(0px) translatey(0px);
}

/* Badge */
.row div .row div .badge {
  float: right;
  display: block;
  background-color: #3a5c7c !important;
}

/* Column 7/12 */
div:nth-child(3) .row:nth-child(4) > div:nth-child(2) {
  display: flex;
  justify-content: center;
  align-items: center;
  transform: translatex(0px) translatey(0px);
}

/* Column 5/12 */
.page > div > div > div > .row > div > .row > div {
  display: block;
  transform: translatex(0px) translatey(0px);
}

/* Small Tag */
.row div .row div small {
  color: #70879d;
  font-weight: 600;
}

@media (min-width: 1200px) {
  /* Heading */
  .row div .row div h4 {
    font-size: 27px;
  }

  /* Heading */
  #app .row:nth-child(4) h1 {
    font-size: 33px;
  }
}

/* --------------------- MAP ---------------------- */
/* Map wrapper */
#app
  #app-content
  .page
  div
  .container
  .col-md-12
  .row
  .col-md-8
  .card
  #collapse-chart-trends
  .card-body
  .text-primary
  .map-wrapper {
  width: 70% !important;
}

/* Card */
.container .col-md-12 .row .col-md-8 .card {
  border-top-left-radius: 7px;
  border-top-right-radius: 7px;
  border-bottom-left-radius: 7px;
  border-bottom-right-radius: 7px;
  box-shadow: 0px 0px 18px -4px rgba(91, 118, 143, 0.19);
  border-color: #bbcedc !important;
  border-width: 1px;
}

/* -------------------- SIDE BAR  -------------------- */
/* Centred block */
.page div center {
  float: right;
}

/* Row */
.col-md-4 > .row {
  justify-content: flex-end;
}

/* Button */
.page div .active {
  border-bottom-left-radius: 0px;
  transform: translatex(0px) translatey(0px);
}

/* Button */
.page .card a {
  border-top-right-radius: 0px;
  border-bottom-right-radius: 0px;
  left: 0px;
  border-top-left-radius: 0px;
  transform: translatex(0px) translatey(0px);
}

/* Card */
.container .col-md-12 .row .col-md-4 .card {
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  box-shadow: 0px 0px 12px 5px rgba(52, 98, 131, 0.17);
  border-color: #a3c2df;
  border-width: 1px;
  border-style: solid;
  transform: translatex(0px) translatey(0px);
}

/* Card body */
.col-md-12 .row .col-md-4 .card .card-body {
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
  padding-bottom: 0px;
  display: inline-block;
  transform: translatex(0px) translatey(0px) !important;
}

/* Bar chart */
#bar-chart {
  padding-left: 15px;
  padding-right: 15px;
  padding-top: 10px;
  padding-bottom: 20px;
}

/* ----------------  SIDE BAR Login button ----------------- */
/* Button */
.page div .btn-outline-primary:nth-child(4) {
  border-top-right-radius: 6px !important;
}

/* Button */
.page div .btn-outline-primary:nth-child(3) {
  transform: translatex(0px) translatey(0px);
}

/* Button */
.page div .btn-outline-primary:nth-child(1) {
  border-top-left-radius: 6px;
}

/* Button */
.page div .btn-outline-primary:nth-child(1) {
  border-bottom-left-radius: 0px;
}
/* Button */
.page div .btn-outline-primary:nth-child(1) .active {
  border-top-left-radius: 6px !important;
}

/* Button */
.page div .btn-primary {
  font-weight: 700;
  background-color: #2c5085;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  font-size: 23px;
  padding-left: 20px;
  padding-right: 20px;
  box-shadow: 0px 0px 13px 0px #6d92b0;
  border-style: solid;
  border-width: 2px;
  border-color: #ffffff;
}

/* Group */
.page div .btn-group {
  font-weight: 700;
}

/* Button */
.page div .active {
  font-weight: 600;
}

/* Button */
.page .card a {
  font-weight: 600;
  padding-top: 10px;
  padding-bottom: 10px;
}

/* ----------------  SIDE BAR MOBILE ----------------- */

@media (max-width: 1199px) {
  /* Button */
  .page .card a {
    font-size: 11px;
  }

  /* Heading */
  .row .col-md-4 .row .col-md-5 h1 {
    font-size: 27px;
  }

  /* Heading */
  .col-md-7 h5 {
    font-size: 16px !important;
  }

  /* Small Tag */
  .row .col-md-4 .row .col-md-6 small {
    font-size: 12px;
  }

  /* Small Tag */
  .row .col-md-4 .row .col-md-5 small {
    font-size: 12px;
  }

  /* Column 4/12 */
  .col-md-4 .row .col-md-6 .row .col-md-4 {
    margin-left: 0px;
  }

  /* Badge */
  .row .col-md-6 .row .col-md-4 .badge {
    padding-left: 7px;
    margin-left: 0px;
    margin-right: 0px;
  }

  /* Badge */
  .row .col-md-6 .row .col-md-4:nth-child(1) .badge {
    margin-right: 4px;
  }

  /* Heading */
  .page .col-md-4:nth-child(1) h4 {
    margin-right: 4px;
  }

  /* Row */
  .col-md-4 > .row {
    flex-direction: row;
  }

  /* Column 6/12 */
  .page div .col-md-6 {
    min-height: 64px;
    height: 64px;
    margin-top: 0px !important;
  }
}

@media (max-width: 991px) {
  /* Column 4/12 */
  .col-md-12 > .row > .col-md-4 {
    transform: translatex(0px) translatey(0px);
  }

  /* Column 6/12 */
  .page div .col-md-6 {
    margin-left: 0px;
    width: 77% !important;
    transform: translatex(0px) translatey(0px);
    display: flex !important;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 0px !important;
    padding-bottom: 5px;
  }

  /* Button */
  .page div .btn-primary {
    font-size: 18px !important;
  }

  /* Column 8/12 */
  .page div .col-md-8 {
    padding-right: 6px !important;
  }

  /* Button */
  .page .card a {
    font-size: 9px;
    padding-left: 7px;
    padding-right: 7px;
  }

  /* Row */
  .col-md-4 > .row {
    justify-content: center !important;
    align-items: center;
    transform: translatex(0px) translatey(0px);
  }

  /* Row */
  .container .col-md-12 .row .col-md-4 .row:nth-child(4) {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    float: none;
  }

  /* Column 5/12 */
  .page div .col-md-5 {
    display: flex !important;
    justify-content: center;
    flex-wrap: wrap;
    width: 78%;
    min-height: 41px;
    transform: translatex(0px) translatey(0px);
    align-items: center;
    margin-bottom: 10px;
    flex-direction: column;
  }

  /* Row */
  .row .col-md-4 .row .col-md-7 .row {
    justify-content: center;
    align-items: center;
    width: 181px;
    margin-left: -26px;
  }

  /* Column 4/12 */
  .col-md-4 .row .col-md-6 .row .col-md-4 {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
}

@media (max-width: 767px) {
  /* Column 6/12 */
  .page div .col-md-6 {
    flex-direction: column;
    transform: translatex(0px) translatey(0px);
  }

  /* Column 4/12 */
  .col-md-4 .row .col-md-6 .row .col-md-4 {
    margin-left: 0px;
  }

  /* Column 4/12 */
  .page div .container .col-md-12 .row .col-md-4 .row .col-md-6 .row .col-md-4 {
    width: 33% !important;
  }

  /* Column 4/12 */
  .col-md-7 .col-md-4 {
    margin-left: 0px;
    width: 79px;
    max-width: 191px;
  }

  /* Row */
  .row .col-md-4 .row .col-md-7 .row {
    width: 305px;
    transform: translatex(0px) translatey(0px);
  }

  /* Heading */
  .row .col-md-4 .row .col-md-5 h1 {
    font-size: 32px;
  }

  /* Column 7/12 */
  .page div .col-md-7 {
    display: flex !important;
    justify-content: center;
  }

  /* Button */
  .page .card a {
    font-size: 17px;
  }
}

@media (max-width: 575px) {
  /* Row */
  .row .col-md-4 .row .col-md-7 .row {
    width: 422px;
  }

  /* Heading */
  .row .col-md-4 .row .col-md-6 h1 {
    font-size: 36px;
  }
}

@media (max-width: 450px) {
  /* Column 6/12 */
  .page div .col-md-6 {
    transform: translatex(0px) translatey(0px);
  }

  /* Heading */
  .row .col-md-4 .row .col-md-6 h1 {
    font-size: 40px;
  }

  /* Button */
  .page .card a {
    font-size: 16px;
  }
}

/* Division */
#app-content .page > div {
  padding-bottom: 45px;
}

@media (max-width: 767px) {
  /* Heading */
  .row .col-md-4 .row .col-md-6 h1 {
    transform: translatex(0px) translatey(0px);
    font-size: 40px;
  }

  /* Small Tag */
  .row .col-md-4 .row .col-md-6 small {
    font-size: 15px !important;
    padding-bottom: 10px;
  }

  /* Heading */
  .row .col-md-4 .row .col-md-5 h1 {
    font-size: 40px !important;
  }

  /* Small Tag */
  .row .col-md-4 .row .col-md-5 small {
    font-size: 15px !important;
  }

  /* Column 6/12 */
  .page div .col-md-6 {
    padding-bottom: 1px !important;
  }

  /* Column 7/12 */
  .page div .col-md-7 {
    margin-bottom: 10px;
  }

  /* Row */
  .page div .row:nth-child(3) {
    margin-top: 40px;
  }
}

@media (max-width: 575px) {
  /* Column 8/12 */
  .page div .col-md-8 {
    padding-left: 12px !important;
  }

  /* Column 8/12 */
  #app #app-content .page div .container .col-md-12 .row .col-md-8 {
    padding-right: 12px !important;
  }

  /* Row */
  .col-md-4 > .row {
    margin-top: 10px;
  }

  /* Heading */
  .row .col-md-4 .row .col-md-5 h1 {
    font-size: 40px !important;
  }

  /* Small Tag */
  .row .col-md-4 .row .col-md-5 small {
    font-size: 15px !important;
  }

  /* Small Tag */
  .row .col-md-4 .row .col-md-6 small {
    font-size: 15px !important;
  }

  /* Heading */
  .row .col-md-4 .row .col-md-6 h1 {
    font-size: 40px !important;
  }
}

@media (max-width: 767px) {
  /* Column 6/12 */
  #app
    #app-content
    .page
    div
    .container
    .col-md-12
    .row
    .col-md-4
    .row
    .col-md-6 {
    margin-top: 0px !important;
  }

  /* Row */
  .page div .row:nth-child(3) {
    margin-top: 55px !important;
  }

  /* Row */
  .container .col-md-12 .row .col-md-4 .row:nth-child(4) {
    margin-bottom: 40px;
  }
}
/* ------------------------------------------------ */

@media (max-width: 767px) {
  /* Row */
  .col-md-4:nth-child(2) > .row:nth-child(1) {
    margin-top: 50px;
  }
}

/* Heading */
.col-md-12 > .row > .col-md-4 > h5 {
  font-weight: 600;
  font-size: 18px;
  margin-bottom: 0px;
}

/* Heading */
.col-md-8 .row h4 {
  font-weight: 600;
  margin-bottom: 0px;
}

/* Column 12/12 */
.page .mb-3 {
  margin-top: 10px !important;
}

/* Row */
.container .col-md-12 .row .col-md-8 .row:nth-child(4) {
  margin-top: 30px !important;
}

@media (max-width: 1199px) {
  /* Column 3/12 */
  .text-primary .col-3 {
    padding-top: 20px !important;
  }
}

@media (max-width: 991px) {
  /* Column 3/12 */
  .text-primary .col-3 {
    padding-top: 20px !important;
  }
}

@media (max-width: 767px) {
  /* Column 3/12 */
  .text-primary .col-3 {
    padding-top: 20px !important;
    height: 119px !important;
  }
}

@media (max-width: 575px) {
  /* Heading */
  #collapse-chart-trends .card-body h5 {
    font-size: 27px !important;
  }

  /* Column 3/12 */
  .text-primary .col-3 {
    padding-top: 20px !important;
  }
}

@media (max-width: 450px) {
  /* Heading */
  #collapse-chart-trends .card-body h5 {
    font-size: 22px !important;
  }

  /* Bold Tag */
  .page h4 b {
    font-size: 18px;
  }

  /* Paragraph */
  .container .col-md-12 .row .col-md-8 p {
    font-size: 14px;
  }
}

@media (min-width: 1200px) {
  /* Heading */
  .col-md-8 .row h4 {
    font-size: 22px;
  }
}

/* Bar chart */
#bar-chart {
  padding-bottom: 0px !important;
}

/* ---------------- stacked graphs ---------------------- */
@media (max-width: 1199px) {
  /* Column 6/12 */
  .col-md-8 .col-md-6 {
    min-height: 15px !important;
    height: 170px !important;
  }
}

@media (max-width: 991px) {
  /* Row */
  .col-md-12 .row .col-md-8 > .row {
    justify-content: center;
    text-align: center;
  }

  /* Card body */
  .page .col-md-6:nth-child(2) .card-body {
    margin-bottom: 20px;
  }
  /* Column 6/12 */
  .page div .col-md-6:nth-child(3) {
    margin-top: 15px !important;
  }
}

@media (max-width: 767px) {
  /* Column 6/12 */
  .page div .container .col-md-12 .row .col-md-4 .row .col-md-6 {
    margin-top: 30px !important;
  }

  /* Row */
  .col-md-12 .row .col-md-8 > .row {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    float: left;
    text-align: center;
  }
}

@media (max-width: 991px) {
  /* Column 6/12 */
  .page div .col-md-6:nth-child(3) {
    margin-top: 15px !important;
  }

  /* Card body */
  .col-md-8 .row .col-md-6 .card .card-body {
    width: 470px;
  }

  /* Card */
  .page .col-md-6 .card {
    min-height: auto !important;
    min-width: auto;
    max-width: auto;
  }

  /* Card */
  #app
    #app-content
    .page
    div
    .container
    .col-md-12
    .row
    .col-md-8
    .row
    .col-md-6
    .card {
    height: 602px !important;
  }

  /* Card body */
  #app
    #app-content
    .page
    div
    .container
    .col-md-12
    .row
    .col-md-8
    .row
    .col-md-6
    .card
    .card-body {
    height: 250px !important;
  }

  /* Column 6/12 */
  .page div .container .col-md-12 .row .col-md-8 .row .col-md-6 {
    min-height: 2px !important;
    height: 260px !important;
  }

  /* Heading */
  .col-md-8 .row h4 {
    margin-bottom: 15px !important;
  }
}

@media (max-width: 450px) {
  /* Card body */
  .col-md-8 .row .col-md-6 .card .card-body {
    width: 342px;
  }

  /* Card */
  #app
    #app-content
    .page
    div
    .container
    .col-md-12
    .row
    .col-md-8
    .row
    .col-md-6
    .card {
    height: 190px !important;
  }

  /* Column 6/12 */
  .page div .container .col-md-12 .row .col-md-8 .row .col-md-6 {
    min-height: 1px !important;
    height: 190px !important;
  }

  /* Heading */
  .col-md-8 .row h4 {
    margin-bottom: 10px !important;
  }
}
/* -------------------Login Button ---------------------- */

/* Small Tag */
.col-md-12 center small {
  display: none;
}

/* -------------------- FOOTER ---------------------- */
</style>
