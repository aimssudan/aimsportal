<template>
  <main class="page">
    <div class="container" style="min-height: 80vh">
      <h1 class="text-primary">Dashboard</h1>
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item active" aria-current="page">Dashboard</li>
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
  </main>
</template>

<script>
import { mapState } from "vuex";
import FundingTrendChart from "../components/charts/FundingTrendChart.vue";
import FundingBySectorChart from "../components/charts/FundingBySectorChart.vue";
import FundingBySourceChart from "../components/charts/FundingBySourceChart.vue";
import TotalProjectsTrendChart from "../components/charts/TotalProjectsTrendChart.vue";

export default {
  name: "dashboard",
  components: {
    FundingTrendChart,
    FundingBySectorChart,
    FundingBySourceChart,
    TotalProjectsTrendChart,
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
</style>
