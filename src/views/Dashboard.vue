<template>
  <main class="page">
    <div class="row">
      <div class="left" style="background-color: #bbb">
        <h2>Dashboard</h2>

        <ul id="myMenu">
          <li><a href="#">Overview</a></li>
          <li><a href="#">Projects</a></li>
          <li><a href="#">Time Trends</a></li>
          <li><a href="#">Locations</a></li>
          <li><a href="#">Sectors</a></li>
          <li><a href="#">Budgets</a></li>
        </ul>
      </div>

      <div class="right" style="background-color: #ddd">
        <div class="container" style="min-height: 80vh">
          <h2 class="text-primary">Overview</h2>
          <nav aria-label="breadcrumb">
            <ol class="breadcrumb">
              <li class="breadcrumb-item active" aria-current="page">
                Dashboard
              </li>
            </ol>
          </nav>

          <div class="row">
            <div class="col-6" style="width: 20%">
              <div class="container" style="width: 100%">
                <h1 class="text-center">56</h1>
              </div>
              <div class="container" style="width: 100%">
                <h3>Projects</h3>
                <button class="btn btn-primary" type="button">View</button>
              </div>
            </div>
            <div class="col-6" style="width: 50%">
              <div class="container" style="height: 100%">
                Project Bar Chart
              </div>
            </div>
            <div class="col-6" style="width: 30%">
              <div class="container" style="height: 100%; width: 100%">
                Project Pie Chart
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

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

@media (max-width: 1399px) {
  /* Left */
  #app #app-content .page .row .left {
    width: 300px !important;
    max-width: 300px !important;
    padding-left: 70px !important;
  }
}

@media (max-width: 991px) {
  /* Left */
  #app #app-content .page .row .left {
    width: 250px !important;
    max-width: 230px !important;
    padding-left: 44px !important;
  }

  /* Link */
  #myMenu li a {
    padding-left: 20px !important;
  }
}

@media (max-width: 575px) {
  /* Left */
  #app #app-content .page .row .left {
    padding-left: 20px !important;
    max-width: 180px !important;
  }

  /* Left */
  .page .left {
    padding-right: 0px !important;
  }

  /* Heading */
  .page .left h2 {
    font-size: 20px !important;
    text-align: left;
  }

  /* Link */
  #myMenu li a {
    text-align: left;
  }
}

@media (max-width: 450px) {
  /* Left */
  #app #app-content .page .row .left {
    max-width: 100% !important;
    padding-right: 50px !important;
    padding-left: 50px !important;
  }

  /* Left */
  .page .left {
    align-self: center;
  }

  /* Link */
  #myMenu li a {
    text-align: center;
  }

  /* Heading */
  .page .left h2 {
    text-align: center;
  }

  /* Menu */
  #myMenu {
    margin-top: 20px !important;
  }
}

/*--------------- project overview ------------ */

/* Heading */
.right h1 {
  font-weight: 700;
  color: #007cf9;
}

/* Heading */
.right h3 {
  font-weight: 700;
  color: #494949;
}

/* Container */
.right .row .container {
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  background-color: #ffffff;
  padding-left: 15px;
  padding-right: 15px;
  padding-top: 15px;
  padding-bottom: 15px;
  margin-bottom: 20px;
  box-shadow: none;
}

/* Container */
.page .col-6:nth-child(1) .container:nth-child(1) {
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 10px;
  padding-bottom: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
}

/* Container */
.page .container:nth-child(2) {
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
  padding-bottom: 0px;
  background-color: transparent;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
}

/* Button */
.right .btn-primary {
  text-transform: uppercase;
  font-weight: 600;
}

/* Column 6/12 */
.page .col-6:nth-child(1) {
  width: 16% !important;
}

/* Column 6/12 */
.page .col-6:nth-child(2) {
  width: 54% !important;
}

@media (max-width: 1399px) {
  /* Heading */
  .right h1 {
    font-size: 62px !important;
  }
}

@media (max-width: 1199px) {
  /* Heading */
  .right h1 {
    font-size: 58px;
    margin-bottom: 0px;
  }

  /* Heading */
  .right h3 {
    font-size: 22px;
  }
}

@media (max-width: 991px) {
  /* Heading */
  .right h1 {
    font-size: 40px;
  }

  /* Heading */
  .right h3 {
    font-size: 18px;
  }

  /* Button */
  .right .btn-primary {
    font-size: 13px;
  }
}

@media (max-width: 767px) {
  /* Column 6/12 */
  .page .col-6:nth-child(1) {
    width: 25% !important;
  }

  /* Column 6/12 */
  .page .col-6:nth-child(2) {
    width: 75% !important;
  }

  /* Right */
  #app #app-content .page .row .right {
    padding-right: 25px !important;
  }

  /* Column 6/12 */
  .right .col-6 {
    margin-bottom: 20px;
  }

  /* Column 6/12 */
  .page .col-6:nth-child(3) {
    width: 100% !important;
  }
}

@media (max-width: 575px) {
  /* Heading */
  .right h1 {
    font-size: 55px;
  }

  /* Heading */
  .right h3 {
    font-size: 25px;
  }

  /* Button */
  .right .btn-primary {
    transform: translatex(0px) translatey(0px);
    font-size: 16px;
  }

  /* Column 6/12 */
  .page .col-6:nth-child(2) {
    width: 100% !important;
  }

  /* Column 6/12 */
  #app-content .page .row .right .container .row .col-6:nth-child(1) {
    width: 126px !important;
  }
}

@media (max-width: 450px) {
  /* Heading */
  .right h1 {
    font-size: 40px;
  }

  /* Heading */
  .right h3 {
    font-size: 20px;
  }

  /* Button */
  .right .btn-primary {
    font-size: 14px;
  }

  /* Column 6/12 */
  #app-content .page .row .right .container .row .col-6:nth-child(1) {
    width: 101px !important;
  }
}

@media (min-width: 1200px) {
  /* Heading */
  .right h1 {
    font-size: 70px;
    margin-bottom: 0px;
  }
}

@media (max-width: 991px) {
  /* Heading */
  .page .row .right .container .row .col-6 .container h1 {
    font-size: 40px !important;
  }
}

@media (max-width: 767px) {
  /* Container */
  .page .col-6:nth-child(3) .container {
    min-height: 150px;
  }

  /* Container */
  .page .col-6:nth-child(2) .container {
    min-width: 15px;
    min-height: 150px;
  }
}

@media (max-width: 575px) {
  /* Heading */
  .right h3 {
    font-size: 19px !important;
  }

  /* Button */
  .right .btn-primary {
    font-size: 13px !important;
  }
}
@media (max-width: 991px) {
  /* Right */
  #app #app-content .page .row .right {
    padding-right: 25px !important;
  }

  /* Right */
  .page .right {
    transform: translatex(0px) translatey(0px);
  }

  /* Heading */
  .right h3 {
    font-size: 17px !important;
  }

  /* Container */
  .right .row .container {
    padding-right: 10px !important;
  }

  /* Heading */
  #app #app-content .page .row .right .container .row .col-6 .container h1 {
    font-size: 43px !important;
  }
}

@media (max-width: 767px) {
  /* Heading */
  .right h1 {
    font-size: 37px;
  }

  /* Heading */
  #app #app-content .page .row .right .container .row .col-6 .container h1 {
    font-size: 37px !important;
  }
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

@media (max-width: 450px) {
  /* Right */
  #app #app-content .page .row .right {
    padding-right: 15px !important;
  }
}

/* ---------------- project overview ------------- */
</style>
