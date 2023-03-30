<template>
  <main class="page">
    <div class="row">
      <dashboard-menu></dashboard-menu>

      <div class="right" style="background-color: #ddd">
        <div class="container" style="min-height: 80vh">
          <h2 class="text-primary">Locations</h2>
          <nav aria-label="breadcrumb">
            <ol class="breadcrumb">
              <li class="breadcrumb-item active" aria-current="page">
                Dashboard
              </li>
            </ol>
          </nav>

          <nav>
            <label for="touch"><span>Select a State</span></label>
            <input type="checkbox" id="touch" />

            <ul class="slide">
              <li><a href="#">Equatoria</a></li>
              <li><a href="#">Western Equatoria</a></li>
              <li><a href="#">Eastern Equatoria</a></li>
              <li><a href="#">Jonglei</a></li>
              <li><a href="#">Unity</a></li>
              <li><a href="#">Upper Nile</a></li>
              <li><a href="#">Lakes</a></li>
              <li><a href="#">Warrap</a></li>
              <li><a href="#">Western Bahr el Ghazal</a></li>
              <li><a href="#">Northern Bahr el Ghazal</a></li>
            </ul>
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
  name: "DashboardLocations",
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

nav {
  width: 300px;
  margin: 40px auto;
}

span {
  padding: 30px;
  font-size: 1.2em;
  font-variant: small-caps;
  cursor: pointer;
  display: block;
}

span::after {
  float: right;
  right: 10%;
  content: "+";
}

.slide {
  clear: both;
  width: 100%;
  height: 0px;
  overflow: hidden;
  text-align: center;
  transition: height 0.4s ease;
}

.slide li {
  padding: 30px;
}

#touch {
  position: absolute;
  opacity: 0;
  height: 0px;
}

#touch:checked + .slide {
  height: 300px;
}

.slide {
  max-height: 200px;
  overflow: scroll;
}
.slide::-webkit-scrollbar {
  display: none;
}

/* Navigation */
.page nav {
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 0px;
}

/* Label */
#app #app-content .page .row .right .container nav label {
  width: 100% !important;
}

/* Span Tag */
.page nav span {
  font-weight: 600;
  text-transform: uppercase;
  color: #2e5b88;
  padding-left: 30px;
  padding-top: 20px;
  padding-bottom: 10px;
}

/* List Item */
.page .slide li {
  padding-left: 0px;
  padding-top: 10px;
  padding-bottom: 10px;
}

/* List */
.page nav ul {
  list-style-type: none;
  padding-left: 30px;
  text-align: left !important;
  padding-right: 30px;
  padding-bottom: 10px;
  margin-bottom: 20px;
}

/* Navigation */
#app #app-content .page .row .right .container nav:nth-child(3) {
  height: auto !important;
}

/* Navigation */
.page nav:nth-child(3) {
  background-color: #ffffff;
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
  border-bottom-left-radius: 30px;
  border-bottom-right-radius: 30px;
}

/* List */
.page nav ul {
  margin-top: -30px;
  padding-bottom: 20px !important;
}

/* Navigation */
.page nav:nth-child(3) {
  padding-bottom: 0px;
}

/* Span Tag */
.page nav span {
  padding-bottom: 30px !important;
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
  border-bottom-left-radius: 30px;
  border-bottom-right-radius: 30px;
}

/* List Item */
.page .slide li:nth-child(1) {
  padding-top: 30px;
}

/* List Item */
.page .slide li {
  font-weight: 600;
}

/* List Item */
.page .slide li:nth-child(1) {
  padding-top: 25px !important;
}

/* Navigation */
.page nav:nth-child(3) {
  box-shadow: 0px 0px 17px 0px rgba(14, 81, 148, 0.09);
}
</style>
