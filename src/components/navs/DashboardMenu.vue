<template>
  <div class="left" style="background-color: #bbb">
    <h2>Dashboard</h2>

    <ul id="myMenu">
      <li><a href="/dashboard">Overview</a></li>
      <li><a href="/dashboard-projects">Projects</a></li>
      <li><a href="/dashboard-funds">Funds</a></li>
      <li><a href="/dashboard-locations">Locations</a></li>
      <li><a href="/dashboard-time-trends">Time Trends</a></li>
      <li><a href="/dashboard-sectors">Sectors</a></li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'DashboardMenu'
  }
</script>

<style scoped>

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

/* Link */
#myMenu li a {
  font-weight: 600;
  font-size: 20px;
  color: #345392 !important;
}
/*------------------ munu -------------------*/

/* Left */
.page .left {
  padding-top: 30px;
  transform: translatex(0px) translatey(0px);
}

/* Menu */
#myMenu {
  margin-top: 30px !important;
}

/* Link */
#myMenu li a {
  padding-left: 40px !important;
  padding-right: 20px !important;
  padding-top: 15px !important;
  padding-bottom: 15px !important;
}

@media (max-width: 991px) {
  /* Link */
  #myMenu li a {
    padding-left: 20px !important;
    font-size: 16px;
  }
}

@media (max-width: 575px) {
  /* Link */
  #myMenu li a {
    text-align: left;
  }
}

@media (max-width: 450px) {
  /* Link */
  #myMenu li a {
    text-align: center;
  }
  /* Menu */
  #myMenu {
    margin-top: 20px !important;
  }

}
</style>