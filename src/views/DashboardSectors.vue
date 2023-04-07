<template>
  <main class="page">
    <div class="row">
      <dashboard-menu></dashboard-menu>

      <div class="right" style="background-color: #ddd">
        <div class="container" style="min-height: 80vh">
          <h2 class="text-primary">Sectors</h2>
          <nav aria-label="breadcrumb">
            <ol class="breadcrumb">
              <li class="breadcrumb-item active" aria-current="page">
                Dashboard
              </li>
            </ol>
          </nav>
          <div class="container">
            <div class="row-1">
              <div class="col-1a">
                <div class="col-1b">
                  <label class="dropdown">
                    <div class="dd-button">Parent Sector</div>

                    <input type="checkbox" class="dd-input" id="test" />

                    <ul class="dd-menu">
                      <li>Parent Sector 1</li>
                      <li>Parent Sector 3</li>
                      <li>Parent Sector 3</li>
                      <li>Parent Sector 4</li>
                      <li>Parent Sector 5</li>
                      <li>Parent Sector 6</li>
                    </ul>
                  </label>
                </div>
                <div class="col-2a">
                  <label class="dropdown">
                    <div class="dd-button">Sub Sector</div>

                    <input type="checkbox" class="dd-input" id="test" />

                    <ul class="dd-menu">
                      <li>Sub Sector 1</li>
                      <li>Sub Sector 3</li>
                      <li>Sub Sector 3</li>
                      <li>Sub Sector 4</li>
                      <li>Sub Sector 5</li>
                      <li>Sub Sector 6</li>
                    </ul>
                  </label>
                </div>
              </div>
              <div class="col-1c">
                <div class="col-3a">
                  <div class="container" style="width: 100%">
                    <h1 class="text-center">$4.7M</h1>
                    <p>Total Funds</p>
                  </div>
                </div>
                <div class="col-4a">
                  <div class="container">
                    <h1 class="text-center">12</h1>
                    <p>Projects</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="row-2">
              <div class="col-5a">
                <div class="col-5b">
                  <h3 class="s-card-title">Sector Title</h3>
                </div>
                <div class="col-5c">
                  <div class="container">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Donec cursus nunc eget blandit fringilla. Suspendisse
                      facilisis libero enim, eu semper neque vestibulum vitae.
                      Aliquam erat volutpat. Sed velit odio, auctor eget sem
                      nec, interdum fringilla erat.
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-6">
                <div class="col-6a">
                  <div class="col-6b">
                    <h3 class="s-card-title">Funds</h3>
                  </div>
                  <div class="col-6c">
                    <div class="col-6d">
                      <div class="container">
                        <h2 class="text-center">$5.3M</h2>
                        <p>Disbursed</p>
                      </div>
                    </div>
                  </div>
                  <div class="col-6e">
                    <div class="container">
                      <h2 class="text-center">$16.5M</h2>
                      <p>Budgeted</p>
                    </div>
                  </div>
                </div>
                <div class="col-7a">
                  <div class="col-7b">
                    <h3 class="s-card-title">Projects</h3>
                  </div>
                  <div class="col-7c">
                    <div class="col-7d">
                      <div class="container">
                        <h2 class="text-center">13</h2>
                        <p>Active</p>
                      </div>
                    </div>
                    <div class="col-7e">
                      <div class="container">
                        <h2 class="text-center">8</h2>
                        <p>Complete</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <hr />
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import { mapState } from "vuex";
import DashboardMenu from "../components/navs/DashboardMenu.vue";
export default {
  name: "DashboardSectors",
  components: {
    DashboardMenu,
  },
  data() {
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

/* --------------------- Old Rows & Columns ------------------ */

.container {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  gap: 0px 0px;
  grid-auto-flow: row;
  grid-template-areas:
    "row-1a row-1a row-1a row-1a"
    ". . . ."
    ". . . .";
}

.row-1a {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  gap: 0px 0px;
  grid-auto-flow: row;
  grid-area: row-1a;
}

.col-1a {
  grid-area: 1 / 1 / 2 / 2;
}

.col\=2a {
  grid-area: 1 / 2 / 2 / 3;
}

.col-3a {
  grid-area: 1 / 3 / 2 / 4;
}

.col-4a {
  grid-area: 1 / 4 / 2 / 5;
}

.col-5a {
  grid-area: 2 / 1 / 4 / 3;
}

.col-6a {
  grid-area: 2 / 3 / 4 / 4;
}

.col-7a {
  grid-area: 2 / 4 / 4 / 5;
}

.col-6b {
  grid-area: 2 / 3 / 3 / 4;
}

.col-6c {
  grid-area: 3 / 3 / 4 / 4;
}

.col-7b {
  grid-area: 2 / 4 / 3 / 5;
}

.col-7c {
  grid-area: 3 / 4 / 4 / 5;
}

.col-5b {
  grid-area: 2 / 1 / 3 / 3;
}

.col-5c {
  grid-area: 3 / 1 / 4 / 3;
}

/* ------------------------------------------------------- */

/* Container */
.page .row .right > .container {
  display: flex;
  flex-direction: column;
}

/* Container */
.right .container > .container {
  display: flex;
  flex-direction: column;
}

/* Row 1 */
.page .row-1 {
  display: flex;
}

/* Row 2 */
.page .row-2 {
  display: flex;
}

/* Container */
.page .col-3a .container {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
}

/* Container */
.page .col-4a .container {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
}

/* Column 5/12 */
.right .col-5a {
  display: flex;
  flex-direction: column;
}

/* Container */
.col-5a .col-5c .container {
  display: flex;
}

/* Container */
.col-6c .col-6d .container {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
}

/* Container */
.col-6a .col-6e .container {
  display: flex;
  align-items: flex-end;
  justify-content: center;
  flex-direction: column;
}

/* Heading */
.col-6a .col-6b h3 {
  text-align: right;
}

/* Container */
.col-7c .col-7e .container {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
}

/* Container */
.col-7c .col-7d .container {
  display: inline-flex;
  align-items: flex-end;
  justify-content: center;
  flex-direction: column;
}

/* Heading */
.col-7a .col-7b h3 {
  text-align: right;
}

/* -------------------------------------------------------- */

/* Column 1/12 */
.right .col-1a {
  margin-right: 20px;
  display: flex;
}

/* Column 2/12 */
.right .col-2a {
  padding-right: 20px;
}

/* Column 1/12 */
.page .col-1c {
  display: flex;
}

/* Column 1/12 */
#app #app-content .page .row .right .container .container .row-1 .col-1c {
  width: 50% !important;
}

/* Column 1/12 */
#app #app-content .page .row .right .container .container .row-1 .col-1a {
  width: 50% !important;
}

/* Column 1/12 */
.right .col-1c {
  align-items: center;
  justify-content: flex-end;
  transform: translatex(0px) translatey(0px);
}

/* Column 1/12 */
.page .col-1a .col-1b {
  margin-right: 20px;
}

/* Column 5/12 */
#app #app-content .page .row .right .container .container .row-2 .col-5a {
  width: 70% !important;
}

/* Column 6/12 */
#app #app-content .page .row .right .container .container .row-2 .col-6a {
  width: 15% !important;
}

/* Column 7/12 */
#app #app-content .page .row .right .container .container .row-2 .col-7a {
  width: 15% !important;
}

.col-5a .col-5c .container {
  padding-left: 0px;
}

/* Row 1 */
.page .row-1 {
  margin-bottom: 30px;
}

/* Container */
.col-1c .col-4a .container {
  margin-left: 20px;
  margin-right: 2px;
}

/* Container */
.col-6c .col-6d .container {
  margin-bottom: 20px;
  background-color: #ffffff;
  padding-left: 15px;
  padding-right: 15px;
  padding-top: 15px;
  padding-bottom: 15px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  box-shadow: 0px 0px 16px 0px rgba(44, 62, 80, 0.06);
}

/* Container */
.col-7c .col-7d .container {
  transform: translatex(0px) translatey(0px);
  margin-bottom: 20px;
  box-shadow: 0px 0px 16px 0px rgba(44, 62, 80, 0.06);
  background-color: #ffffff;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  padding-left: 15px;
  padding-right: 15px;
  padding-top: 15px;
  padding-bottom: 15px;
}

/* Column 5/12 */
.right .col-5a {
  background-color: #ffffff;
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 20px;
  padding-bottom: 20px;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  box-shadow: 0px 0px 15px 0px rgba(44, 62, 80, 0.06);
  margin-left: 10px;
  margin-right: 10px;
  margin-top: 10px;
  margin-bottom: 10px;
}

/* Column 6/12 */
.right .col-6a {
  margin-left: 10px;
  margin-right: 10px;
  margin-top: 10px;
  margin-bottom: 10px;
}

/* Column 7/12 */
.right .col-7a {
  margin-left: 10px;
  margin-right: 10px;
  margin-top: 10px;
  margin-bottom: 10px;
}

/* Container */
.col-7c .col-7e .container {
  box-shadow: 0px 0px 17px 0px rgba(44, 62, 80, 0.06);
  transform: translatex(0px) translatey(0px);
  background-color: #ffffff;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  padding-left: 15px;
  padding-right: 15px;
  padding-top: 15px;
  padding-bottom: 15px;
}

/* Container */
.col-6a .col-6e .container {
  box-shadow: 0px 0px 17px 0px rgba(44, 62, 80, 0.06);
  background-color: #ffffff;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  padding-left: 15px;
  padding-right: 15px;
  padding-top: 15px;
  padding-bottom: 15px;
}

/* Paragraph */
.col-6d p {
  margin-bottom: 0px;
}

/* Paragraph */
.col-7d p {
  margin-bottom: 0px;
}

/* Paragraph */
.col-7e p {
  margin-bottom: 0px;
}

/* Paragraph */
.col-6e p {
  margin-bottom: 0px;
}

/* Heading */
.col-6d h2 {
  font-weight: 700;
  color: #009dff;
}

/* Heading */
.col-7d h2 {
  color: #009dff;
  font-weight: 700;
}

/* Heading */
.col-7e h2 {
  color: #009dff;
  font-weight: 700;
}

/* Heading */
.col-6e h2 {
  font-weight: 700;
  color: #009dff;
}

@media (min-width: 1200px) {
  /* Heading */
  .col-3a h1 {
    font-size: 50px !important;
  }

  /* Heading */
  .col-4a h1 {
    font-size: 50px !important;
  }
}

/* Column 6/12 */
.right .col-6 {
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
}

/* Column 6/12 */
#app #app-content .page .row .right .container .container .row-2 .col-6 {
  width: 40% !important;
}

/* Column 5/12 */
.right .col-5a {
  max-width: 60%;
  margin-right: 10px;
  margin-left: 0px !important;
}

/* Column 6/12 */
#app
  #app-content
  .page
  .row
  .right
  .container
  .container
  .row-2
  .col-6
  .col-6a {
  width: 144px !important;
}

/* Column 7/12 */
#app
  #app-content
  .page
  .row
  .right
  .container
  .container
  .row-2
  .col-6
  .col-7a {
  width: 100px !important;
}

/* Container */
.right .container > .container {
  padding-left: 0px;
  padding-right: 0px;
  transform: translatex(0px) translatey(0px);
}

/* Column 7/12 */
.page .col-7a {
  margin-right: 0px !important;
}

/* --------------------- Button Dropdown ------------------ */

a {
  text-decoration: none;
  color: #000000;
}

a:hover {
  color: #222222;
}

/* Dropdown */

.dropdown {
  display: inline-block;
  position: relative;
}

.dd-button {
  display: inline-block;
  border: 1px solid gray;
  border-radius: 4px;
  padding: 10px 30px 10px 20px;
  background-color: #ffffff;
  cursor: pointer;
  white-space: nowrap;
}

.dd-button:after {
  content: "";
  position: absolute;
  top: 50%;
  right: 15px;
  transform: translateY(-50%);
  width: 0;
  height: 0;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  border-top: 5px solid black;
}

.dd-button:hover {
  background-color: #eeeeee;
}

.dd-input {
  display: none;
}

.dd-menu {
  position: absolute;
  top: 100%;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 0;
  margin: 2px 0 0 0;
  box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.1);
  background-color: #ffffff;
  list-style-type: none;
}

.dd-input + .dd-menu {
  display: none;
}

.dd-input:checked + .dd-menu {
  display: block;
}

.dd-menu li {
  padding: 10px 20px;
  cursor: pointer;
  white-space: nowrap;
}

.dd-menu li:hover {
  background-color: #f6f6f6;
}

.dd-menu li a {
  display: block;
  margin: -10px -20px;
  padding: 10px 20px;
}

.dd-menu li.divider {
  padding: 0;
  border-bottom: 1px solid #cccccc;
}

/* ------------------------------------------------------- */
/* --------------------- new Rows & Columns ------------------ */

/* ------------------------------------------------------- */
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

/* ---------------- dashboard overview right ------------- */
/* Right */
.page .right {
  padding-top: 30px;
  padding-bottom: 80px;
  padding-left: 30px;
}

@media (max-width: 1199px) {
  /* Right */
  .page .right {
    padding-left: 20px;
  }
}

@media (max-width: 991px) {
  /* Right */
  .page .right {
    padding-left: 10px;
  }
}

/* Right */
.page .right {
  padding-top: 30px;
  padding-bottom: 80px;
  padding-left: 30px;
}

/* Horizontal Rule */
.right hr {
  margin-top: 40px;
  margin-bottom: 40px;
}

/* Horizontal Rule */
.right hr {
  border-color: #94a6b6;
}

@media (max-width: 1199px) {
  /* Right */
  .page .right {
    padding-left: 20px;
  }
}

@media (max-width: 991px) {
  /* Right */
  .page .right {
    padding-left: 10px;
  }
}

@media (min-width: 1200px) {
  /* Heading */
  .right h3 {
    font-size: 20px;
  }
}
</style>
