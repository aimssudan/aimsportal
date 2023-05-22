<template>
  <main class="page about-page">
    <div class="container" style="min-height: 80vh">
      <div class="col-md-12">
        <div class="card">
          <div class="card-body">
            <h2 class="text-primary">About us</h2>
            <p class="lead">
              Welcome to the South Sudan Aid Information Management System
              (AIMS)!
            </p>

            <p>
              The AIMS web application is a comprehensive, integrated system
              that collects, analyzes, and disseminates critical data on
              humanitarian aid and development activities in South Sudan. The
              platform was established in 2022 to enhance the coordination,
              monitoring, and reporting of aid interventions in the country.
            </p>
            <p>
              AIMS is designed to streamline the information management process
              by providing a centralized database for all stakeholders involved
              in humanitarian and development work in South Sudan. The platform
              ensures that information is accurate, reliable, and accessible to
              support evidence-based decision-making at all levels.
            </p>
            <p>
              Our system provides a range of features, including data
              collection, visualization, analysis, and reporting. With AIMS,
              humanitarian actors can easily track the implementation and impact
              of their interventions, identify gaps and duplication, and measure
              progress towards achieving common objectives.
            </p>
            <p>
              At AIMS, we are committed to enhancing transparency and
              accountability in the humanitarian and development sectors in
              South Sudan. We believe that access to accurate and timely
              information is essential for effective planning, coordination, and
              monitoring of aid activities, and ultimately for improving the
              lives of those affected by crisis and poverty in the country.
            </p>
            <p>
              Thank you for visiting our website, and please don't hesitate to
              contact us if you have any questions or feedback.
            </p>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  created() {
    let isLoggedIn = !!localStorage.getItem("token");
    if (isLoggedIn) {
      let token = localStorage.getItem("token");
      let loggedInUser = JSON.parse(localStorage.getItem("user"));
      this.$store.commit("auth/SET_TOKEN", token);
      this.$store.commit("auth/SET_USER", loggedInUser);
    }
  },
};
</script>

<style>
.about-page {
  padding-top: 5em;
}
</style>
