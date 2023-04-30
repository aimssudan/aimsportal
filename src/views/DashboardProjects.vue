<template>
  <main class="page">
    <div class="row">
      
      <dashboard-menu></dashboard-menu>

      <div class="right" style="background-color: #ddd">
        <div class="container" style="min-height: 80vh">
          <h2 class="text-primary">Projects</h2>
          <nav aria-label="breadcrumb">
            <ol class="breadcrumb">
              <li class="breadcrumb-item active" aria-current="page">
                Dashboard
              </li>
            </ol>
          </nav>
          <div class="row">
            <div class="col-md-4">
              <div class="card border-light">
                <div class="card-header d-flex justify-content-between">
                  <h5>Funding trends</h5>
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
                    <funding-trend-chart />
                  </div>
                </div>
              </div>
            </div>

            <div class="col-md-4">
              <div class="card border-light">
                <div class="card-header d-flex justify-content-between">
                  <h5>Funding By Source</h5>
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
                    <funding-by-source-chart />
                  </div>
                </div>
              </div>
            </div>

            <div class="col-md-4">
              <div class="card border-light">
                <div class="card-header d-flex justify-content-between">
                  <h5>Funding By Sector</h5>
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
                    <funding-by-sector-chart />
                  </div>
                </div>
              </div>
            </div>

            <div class="col-md-4">
              <div class="card border-light">
                <div class="card-header d-flex justify-content-between">
                  <h5>Trend of Total Projects</h5>
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
                    <total-projects-trend-chart></total-projects-trend-chart>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import { mapState } from "vuex";
import FundingTrendChart from "../components/charts/FundingTrendChart.vue";
import FundingBySectorChart from "../components/charts/FundingBySectorChart.vue";
import FundingBySourceChart from "../components/charts/FundingBySourceChart.vue";
import TotalProjectsTrendChart from "../components/charts/TotalProjectsTrendChart.vue";
import DashboardMenu from "../components/navs/DashboardMenu.vue";


export default {
  name: "DashboardProjects",
  components: {
    FundingTrendChart,
    FundingBySectorChart,
    FundingBySourceChart,
    TotalProjectsTrendChart,
    DashboardMenu,
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
  },
  computed: {
    ...mapState("auth", ["user"]),
    profile() {
      return this.user;
    },
  },
};
</script>

<style scoped>
.page {
  padding-top: 4em;
  padding-bottom: 4em;
  overflow-x: hidden;
}
/* Card */
.page .card {
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  margin-bottom: 20px;
  box-shadow: 0px 0px 13px 0px rgba(44, 62, 80, 0.14);
  border-style: none;
}

/* Card header */
.page .card .card-header {
  background-color: rgba(0, 41, 117, 0.87);
  height: 50px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}

/* Heading */
.page .card h5 {
  color: #ffffff;
  font-weight: 600;
  font-size: 18px;
  margin-top: 5px;
  margin-bottom: 5px;
}

/* Button */
.page .card .btn-sm {
  height: 25px;
  width: 25px;
  padding-top: 8px;
  padding-bottom: 8px;
  margin-right: 0px;
  transform: translatex(0px) translatey(0px);
  margin-top: 5px;
}

/* Svg */
.page .card .w-5 {
  width: 25px;
  height: 20px;
  position: relative;
  top: -29px;
  left: -8px;
  font-weight: 600;
  font-size: 14px;
}

@media (max-width: 1199px) {
  /* Heading */
  .page .card h5 {
    font-size: 17px;
  }
}

@media (max-width: 991px) {
  /* Heading */
  .page .card h5 {
    font-size: 15px;
  }
}

@media (max-width: 767px) {
  /* Heading */
  .page .card h5 {
    font-size: 19px;
  }
}

@media (max-width: 450px) {
  /* Heading */
  .page .card h5 {
    font-size: 17px;
  }
}

* {
  box-sizing: border-box;
}

/* Create a column layout with Flexbox */
.row {
  display: flex;
}

/* Left column (menu) */
.left {
  flex: 35%;
  padding: 15px 0;
}

.left h2 {
  padding-left: 8px;
}

/* Right column (page content) */
.right {
  flex: 65%;
  padding: 15px;
}

/* Style the navigation menu inside the left column */
#myMenu {
  list-style-type: none;
  padding: 0;
  margin: 0;
}

#myMenu li a {
  padding: 12px;
  text-decoration: none;
  color: black;
  display: block;
}

#myMenu li a:hover {
  background-color: #eee;
}

/*-------------- new edit --------------*/
/* Right */
.page .right {
  background-color: transparent !important;
  padding-right: 150px;
}

/* Left */
.page .left {
  background-color: #a7cdf5 !important;
  width: 509px;
  max-width: 400px;
  padding-left: 150px;
}

/* Heading */
.page .left h2 {
  font-weight: 700;
  color: #0060c1;
}

/* Link */
#myMenu li a {
  font-weight: 600;
  font-size: 20px;
  color: #345392 !important;
}

/* Page */
#app-content .page {
  padding-top: 56px;
  padding-bottom: 0px;
  transform: translatex(0px) translatey(0px);
}

@media (max-width: 1199px) {
  /* Left */
  .page .left {
    padding-left: 125px;
  }

  /* Right */
  .page .right {
    padding-right: 125px;
  }
}

@media (max-width: 991px) {
  /* Left */
  .page .left {
    padding-left: 100px;
  }

  /* Right */
  .page .right {
    padding-right: 100px;
  }

  /* Link */
  #myMenu li a {
    font-size: 16px;
  }

  /* Heading */
  .page .left h2 {
    font-size: 25px;
  }
}

@media (max-width: 767px) {
  /* Left */
  .page .left {
    padding-left: 70px;
  }

  /* Right */
  .page .right {
    padding-right: 70px;
    transform: translatex(0px) translatey(0px);
  }
}

@media (max-width: 575px) {
  /* Left */
  #app #app-content .page .row .left {
    width: 100% !important;
  }

  /* Left */
  .page .left {
    max-width: 100%;
    padding-right: 130px;
    padding-left: 130px;
    text-align: center;
  }
}

/* Row */
.page .container .row {
  transform: translatex(0px) translatey(0px);
}

@media (max-width: 1399px) {
  /* Column 4/12 */
  .page .col-md-4 {
    width: 350px;
  }
}

@media (max-width: 1199px) {
  /* Column 4/12 */
  .page .col-md-4 {
    width: 300px;
  }

  /* Right */
  .page .right {
    padding-right: 60px !important;
    transform: translatex(0px) translatey(0px);
  }
}

@media (max-width: 991px) {
  /* Column 4/12 */
  .page .col-md-4 {
    width: 100%;
  }

  /* Left */
  #app #app-content .page .row .left {
    width: 280px !important;
  }
}

@media (max-width: 450px) {
  /* Left */
  .page .left {
    padding-left: 80px !important;
    padding-right: 80px !important;
  }
}

@media (min-width: 576px) {
  /* Left */
  .page .left {
    max-width: 380px !important;
  }
}

@media (min-width: 1200px) {
  /* Left */
  .page .left {
    padding-left: 90px !important;
  }

  /* Right */
  .page .right {
    padding-right: 90px !important;
  }
}
</style>
