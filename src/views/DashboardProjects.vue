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

          <div class="container">
            <div class="row-1">
              <div class="col-0a">
                <div class="col-1">
                  <nav>
                    <label for="touch"><span>Select a Year</span></label>
                    <input type="checkbox" id="touch" />

                    <ul class="slide">
                      <li><a href="#">2023</a></li>
                      <li><a href="#">2022</a></li>
                      <li><a href="#">2021</a></li>
                      <li><a href="#">2020</a></li>
                      <li><a href="#">2019</a></li>
                      <li><a href="#">2018</a></li>
                      <li><a href="#">2017</a></li>
                      <li><a href="#">2016</a></li>
                      <li><a href="#">2015</a></li>
                      <li><a href="#">2014</a></li>
                      <li><a href="#">2013</a></li>
                      <li><a href="#">2012</a></li>
                      <li><a href="#">2011</a></li>
                      <li><a href="#">2010</a></li>
                    </ul>
                  </nav>
                </div>
              </div>
              <div class="col-0b">
                <div class="col-3">
                  <div class="container">
                    <h1 class="text-center">$194.3M</h1>
                    <h4>Total Funds</h4>
                  </div>
                </div>
              </div>
            </div>
            <div class="row-2">
              <div class="col-4">
                <div class="col-4a">
                  <div class="col-4a1">
                    <div class="container" style="width: 100%">
                      <h1>168</h1>
                    </div>
                  </div>
                  <div class="col-4a2">
                    <h4>Total Projects</h4>
                    <p>Undertaken in the selected Financial Year (FY).</p>
                  </div>
                </div>
                <div class="col-4b">
                  <div class="col-4b1">
                    <h2 class="text-center">131</h2>
                    <h5>Active</h5>
                    <hr />
                  </div>
                  <div class="col-4b2">
                    <h2 class="text-center">37</h2>
                    <h5>Complete</h5>
                  </div>
                </div>
              </div>
              <div class="col-5">
                <div class="col-5a">
                  <div class="col-5a2">
                    <div class="col-5a2a">
                      <h2 class="text-center">65</h2>
                      <h5>1st Quarter</h5>
                      <p>Jan - Mar</p>
                    </div>
                    <div class="col-5a2b">
                      <h2 class="text-center">25</h2>
                      <h5>2nd Quarter</h5>
                      <p>Apr - Jun</p>
                    </div>
                  </div>
                </div>
                <div class="col-5b">
                  <div class="col-5b2">
                    <div class="col-5b2a">
                      <h2 class="text-center">54</h2>
                      <h5>3rd Quarter</h5>
                      <p>Jul - Sep</p>
                    </div>
                    <div class="col-5b2b">
                      <h2 class="text-center">39</h2>
                      <h5>4th Quarter</h5>
                      <p>Oct - Dec</p>
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
  name: "DashboardProjects",
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

/* --------------------------------------------------------- */

/* ---------------------- css project cards ----------------- */
/* Container */
.page .row .right > .container {
  display: flex;
  flex-direction: column;
}

/* Container */
.page .container > .container {
  display: flex;
  flex-direction: column;
}

/* Row 2 */
.right .row-2 {
  display: flex;
}

/* Column 4/12 */
.page .col-4 {
  display: flex;
  flex-direction: row;
  max-width: 70%;
}

/* Column 5/12 */
.page .col-5 {
  display: flex;
  flex-direction: row;
}

/* Column 4/12 */
.page .col-4a {
  display: flex;
  flex-direction: column;
  max-width: 60%;
}

/* Column 4/12 */
.page .col-4b {
  display: block;
  flex-direction: column;
  align-items: flex-end;
  justify-content: normal;
  flex-wrap: nowrap;
  max-width: 35%;
  padding-left: 30px;
}

/* Column 4/12 */
.page .col-4b .col-4b1 {
  display: block;
  flex-direction: column;
  align-items: flex-end;
  justify-content: normal;
  text-align: right;
  float: none;
}

/* Column 4/12 */
.page .col-4b .col-4b2 {
  display: block;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
  text-align: right;
}

/* Column 4/12 */
.page .col-4b .col-4b3 {
  display: block;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
  text-align: right;
}

/* Column 4/12 */
.page .col-4b .col-4b4 {
  display: block;
  align-items: flex-end;
  justify-content: center;
  flex-direction: column;
  text-align: right;
}

/* Column 5/12 */
.page .col-5a {
  display: flex;
  flex-direction: column;
  text-align: right;
  width: 160px;
}

/* Column 5/12 */
.page .col-5b {
  display: flex;
  flex-direction: column;
  text-align: right;
  width: 160px;
}

/* Column 5/12 */
.page .col-5a .col-5a2 {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
  text-align: right;
}

/* Column 5/12 */
.page .col-5b .col-5b2 {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
  text-align: right;
}

/* Heading */
.col-5b2 .col-5b2a h2 {
  text-align: right !important;
  color: #3298ff;
  font-weight: 700;
  margin-bottom: 0px;
}

/* Heading */
.col-5b2 .col-5b2b h2 {
  text-align: right !important;
  color: #3298ff;
  font-weight: 700;
  margin-bottom: 0px;
}

/* Column 1/12 */
.page .col-1 {
  display: flex;
  justify-content: center;
  align-items: flex-start;
}

/* Row 1 */
.page .row-1 {
  display: flex;
  margin-bottom: 30px;
}

/* Col */
.page .col-0a {
  max-width: 50%;
}

/* Col */
#app #app-content .page .row .right .container .container .row-1 .col-0a {
  width: 50% !important;
}

/* Column 1/12 */
.page .col-0a .col-1 {
  width: 250px;
}

/* Col */
.right .col-0b {
  display: flex;
}

/* Col */
#app #app-content .page .row .right .container .container .row-1 .col-0b {
  width: 50% !important;
}

/* Column 2/12 */
.page .col-0b .col-2 {
  max-width: 50%;
}

/* Column 3/12 */
.page .col-0b .col-3 {
  max-width: 50%;
}

/* Column 3/12 */
#app
  #app-content
  .page
  .row
  .right
  .container
  .container
  .row-1
  .col-0b
  .col-3 {
  width: 50% !important;
}

/* Column 2/12 */
#app
  #app-content
  .page
  .row
  .right
  .container
  .container
  .row-1
  .col-0b
  .col-2 {
  width: 50% !important;
}

/* Container */
.col-0b .col-2 .container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
}

/* Container */
.col-0b .col-3 .container {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
}

/* Column 5/12 */
.right .col-5 {
  max-width: 40%;
  align-items: normal;
  justify-content: flex-end;
}

/* Column 4/12 */
#app #app-content .page .row .right .container .container .row-2 .col-4 {
  width: 60% !important;
}

/* Column 5/12 */
#app #app-content .page .row .right .container .container .row-2 .col-5 {
  width: 40% !important;
}

/* Column 4/12 */
#app
  #app-content
  .page
  .row
  .right
  .container
  .container
  .row-2
  .col-4
  .col-4b
  .col-4b3 {
  height: auto !important;
}

/* Column 4/12 */
#app
  #app-content
  .page
  .row
  .right
  .container
  .container
  .row-2
  .col-4
  .col-4b
  .col-4b2 {
  height: auto !important;
}

/* Column 4/12 */
#app
  #app-content
  .page
  .row
  .right
  .container
  .container
  .row-2
  .col-4
  .col-4b
  .col-4b1 {
  height: auto !important;
}

/* Column 4/12 */
#app
  #app-content
  .page
  .row
  .right
  .container
  .container
  .row-2
  .col-4
  .col-4a {
  width: 60% !important;
}

/* Column 4/12 */
#app
  #app-content
  .page
  .row
  .right
  .container
  .container
  .row-2
  .col-4
  .col-4b {
  width: 35% !important;
}

/* Heading */
.col-4b .col-4b1 h2 {
  text-align: right !important;
  margin-bottom: 0px;
  font-weight: 700;
  color: #3298ff;
}

/* Heading */
.col-4b .col-4b2 h2 {
  text-align: right !important;
  margin-bottom: 0px;
  font-weight: 700;
  color: #3298ff;
}

/* Heading */
.col-4b .col-4b3 h2 {
  text-align: right !important;
  margin-bottom: 0px;
  font-weight: 700;
  color: #3298ff;
}

/* Heading */
.col-4b .col-4b4 h2 {
  text-align: right !important;
  margin-bottom: 0px;
  color: #3298ff;
  font-weight: 700;
}

/* Horizontal Rule */
.col-4b .col-4b1 hr {
  margin-top: 10px;
  margin-bottom: 10px;
}

/* Horizontal Rule */
.col-4b .col-4b2 hr {
  margin-top: 10px;
  margin-bottom: 10px;
}

/* Horizontal Rule */
.col-4b .col-4b3 hr {
  margin-top: 10px;
  margin-bottom: 10px;
}

/* Heading */
.col-4b .col-4b1 h5 {
  font-weight: 600;
  font-size: 17px;
}

/* Heading */
.col-4b .col-4b2 h5 {
  font-size: 17px;
  font-weight: 600;
}

/* Heading */
.col-4b .col-4b3 h5 {
  font-size: 17px;
  font-weight: 600;
}

/* Heading */
.col-4b .col-4b4 h5 {
  font-size: 17px;
  font-weight: 600;
}

/* Heading */
.col-4a .col-4a2 h4 {
  font-weight: 700;
  color: #3298ff;
}

/* Heading */
.col-5a2 .col-5a2a h2 {
  font-weight: 700;
  color: #3298ff;
  margin-bottom: 0px;
}

/* Heading */
.col-5a2 .col-5a2b h2 {
  color: #3298ff;
  font-weight: 700;
  margin-bottom: 0px;
}

/* Column 4/12 */
.right .col-4 {
  background-color: #ffffff;
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 20px;
  padding-bottom: 20px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  box-shadow: 0px 0px 18px 0px rgba(44, 62, 80, 0.08);
}

/* Column 5/12 */
.col-5a .col-5a2 .col-5a2a {
  background-color: #ffffff;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  padding-left: 15px;
  padding-right: 15px;
  padding-top: 15px;
  padding-bottom: 15px;
  margin-bottom: 20px;
  box-shadow: 0px 0px 17px 0px rgba(44, 62, 80, 0.08);
}

/* Column 5/12 */
.col-5a .col-5a2 .col-5a2b {
  background-color: #ffffff;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  padding-left: 15px;
  padding-right: 15px;
  padding-top: 15px;
  padding-bottom: 15px;
  margin-bottom: 20px;
  box-shadow: 0px 0px 17px 0px rgba(44, 62, 80, 0.08);
}

/* Column 5/12 */
.col-5b .col-5b2 .col-5b2a {
  padding-left: 15px;
  padding-right: 15px;
  padding-top: 15px;
  padding-bottom: 15px;
  margin-bottom: 20px;
  background-color: #ffffff;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  box-shadow: 0px 0px 17px 0px rgba(44, 62, 80, 0.08);
}

/* Column 5/12 */
.col-5b .col-5b2 .col-5b2b {
  padding-left: 15px;
  padding-right: 15px;
  padding-top: 15px;
  padding-bottom: 15px;
  margin-bottom: 20px;
  background-color: #ffffff;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  box-shadow: 0px 0px 17px 0px rgba(44, 62, 80, 0.08);
}

/* Heading */
.col-2 h4 {
  font-weight: 600;
  color: #606060;
}

/* Heading */
.col-3 h4 {
  color: #606060;
  font-weight: 600;
}

/* Span Tag */
.col-0a nav span {
  background-color: #ffffff;
  box-shadow: 0px 0px 17px 0px rgba(46, 91, 136, 0.1);
}

/* List */
.col-0a nav ul {
  background-color: #ffffff;
  border-bottom-right-radius: 30px;
  border-bottom-left-radius: 30px;
  margin-top: -35px !important;
}

/* List */
.right .container .container .row-1 .col-0a .col-1 nav ul {
  padding-bottom: 30px !important;
}

/* Span Tag */
.right .container .container .row-1 .col-0a .col-1 nav label span {
  padding-bottom: 17px !important;
}

/* Span Tag */
.col-0a nav span {
  transform: translatex(0px) translatey(0px);
  margin-bottom: 10px;
}

/* List Item */
.page .container .container .row-1 .col-0a .col-1 nav .slide li:nth-child(1) {
  padding-top: 30px !important;
}

/* Column 1/12 */
.page .row .right .container .container .row-1 .col-0a .col-1 {
  width: 300px !important;
}

/* Heading */
.right .container .container .row-1 .col-0b .col-2 .container h1 {
  font-size: 50px !important;
}

/* Heading */
#app
  #app-content
  .page
  .row
  .right
  .container
  .container
  .row-1
  .col-0b
  .col-3
  .container
  h1 {
  font-size: 50px !important;
}

/* Heading */
.col-5a2 .col-5a2a h5 {
  font-size: 17px;
}

/* Heading */
.col-5a2 .col-5a2b h5 {
  font-size: 17px;
}

/* Heading */
.col-5b2 .col-5b2a h5 {
  font-size: 17px;
}

/* Heading */
.col-5b2 .col-5b2b h5 {
  font-size: 17px;
}

/* ------------------------------------------------------ */

/* ---------------------- State Maps SVG ----------------- */
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

/* Map */
#map {
  min-height: 155px;
  width: 297px !important;
}

/* Container */
.col-4a .col-4a1 .container {
  min-width: 100%;
  max-height: 170px;
  padding-left: 0px;
  padding-right: 0px;
}

/* Map */
#map {
  max-height: 170px;
  min-height: 160px !important;
}

/* Container */
.col-4a .col-4a1 .container {
  margin-top: -20px;
}

/* ---------------------- States Drop down ----------------- */

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

/* ------------------------- old css cards ----------------- */

.container {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 0.8fr 1.2fr 1fr;
  gap: 0px 0px;
  grid-auto-flow: row;
  grid-template-areas:
    "row-1 row-1 row-1"
    "row-2 row-2 row-2"
    ". . .";
}

.row-1 {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  gap: 0px 0px;
  grid-auto-flow: row;
  grid-template-areas:
    "col-1 col-2 col-3"
    "col-1 col-2 col-3"
    "col-1 col-2 col-3";
  grid-area: row-1;
}

.col-1 {
  grid-area: col-1;
}

.col-2 {
  grid-area: col-2;
}

.col-3 {
  grid-area: col-3;
}

.row-2 {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  gap: 0px 0px;
  grid-auto-flow: row;
  grid-template-areas:
    "col-4 col-4 col-5"
    "col-4 col-4 col-5"
    "col-4 col-4 col-5";
  grid-area: row-2;
}

.col-4 {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  gap: 0px 0px;
  grid-auto-flow: row;
  grid-template-areas:
    "col-4a col-4a col-4b"
    "col-4a col-4a col-4b"
    "col-4a col-4a col-4b";
  grid-area: col-4;
}

.col-4a {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  gap: 0px 0px;
  grid-auto-flow: row;
  grid-template-areas:
    "col-4a1 col-4a1 col-4a1"
    "col-4a1 col-4a1 col-4a1"
    "col-4a2 col-4a2 col-4a2";
  grid-area: col-4a;
}

.col-4a1 {
  grid-area: col-4a1;
}

.col-4a2 {
  grid-area: col-4a2;
}

.col-4b {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr;
  grid-auto-rows: 1fr;
  gap: 0px 0px;
  grid-auto-flow: row;
  grid-template-areas:
    "col-4b1 col-4b1 col-4b1"
    "col-4b2 col-4b2 col-4b2"
    "col-4b3 col-4b3 col-4b3"
    "col-4b4 col-4b4 col-4b4";
  grid-area: col-4b;
}

.col-4b1 {
  grid-area: col-4b1;
}

.col-4b2 {
  grid-area: col-4b2;
}

.col-4b3 {
  grid-area: col-4b3;
}

.col-4b4 {
  grid-area: col-4b4;
}

.col-5 {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 0px 0px;
  grid-auto-flow: row;
  grid-template-areas:
    "col-5a col-5b"
    "col-5a col-5b";
  grid-area: col-5;
}

.col-5a {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  gap: 0px 0px;
  grid-auto-flow: row;
  grid-template-areas:
    "col-5a1"
    "col-5a2"
    "col-5a2";
  grid-area: col-5a;
}

.col-5a1 {
  grid-area: col-5a1;
}

.col-5a2 {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 0px 0px;
  grid-auto-flow: row;
  grid-template-areas:
    "col-5a2a"
    "col-5a2b";
  grid-area: col-5a2;
}

.col-5a2a {
  grid-area: col-5a2a;
}

.col-5a2b {
  grid-area: col-5a2b;
}

.col-5b {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  gap: 0px 0px;
  grid-auto-flow: row;
  grid-template-areas:
    "col-5b1 col-5b1"
    "col-5b2 col-5b2"
    "col-5b2 col-5b2";
  grid-area: col-5b;
}

.col-5b1 {
  grid-area: col-5b1;
}

.col-5b2 {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 0px 0px;
  grid-auto-flow: row;
  grid-template-areas:
    "col-5b2a"
    "col-5b2b";
  grid-area: col-5b2;
}

.col-5b2a {
  grid-area: col-5b2a;
}

.col-5b2b {
  grid-area: col-5b2b;
}

/* ------------------------------------------------------ */

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

/* -------------------------------------------------*/

/* ------------- mobile css project -------------- */

@media (max-width: 1199px) {
  /* Right */
  #app #app-content .page .row .right {
    width: 70% !important;
  }
}

@media (max-width: 991px) {
  /* Heading */
  #app
    #app-content
    .page
    .row
    .right
    .container
    .container
    .row-1
    .col-0b
    .col-2
    .container
    h1 {
    font-size: 40px !important;
  }

  /* Heading */
  .col-2 h4 {
    font-size: 17px;
  }

  /* Heading */
  .col-3 h4 {
    font-size: 17px;
  }

  /* Heading */
  .col-3 h1 {
    transform: translatex(0px) translatey(0px);
  }

  /* Column 5/12 */
  .page .col-5 {
    flex-direction: column !important;
    align-items: flex-end !important;
    transform: translatex(0px) translatey(0px);
  }

  /* Column 5/12 */
  #app #app-content .page .row .right .container .container .row-2 .col-5 {
    width: 30% !important;
  }

  /* Column 5/12 */
  .right .col-5 {
    max-width: 30% !important;
  }

  /* Row 2 */
  .right .row-2 {
    align-items: normal;
    justify-content: normal;
  }

  /* Column 4/12 */
  .page .col-4 {
    min-width: 70%;
    flex-direction: column !important;
  }

  /* Column 4/12 */
  .page .col-4a {
    min-width: 100%;
  }

  /* Column 4/12 */
  .page .col-4b {
    display: flex !important;
    flex-direction: row !important;
    transform: translatex(0px) translatey(0px);
    max-width: 100% !important;
    min-width: 100%;
    justify-content: center !important;
    align-items: center !important;
    padding-left: 0px !important;
  }

  /* Horizontal Rule */
  .col-4b .col-4b3 hr {
    display: none;
  }

  /* Horizontal Rule */
  .col-4b .col-4b2 hr {
    display: none;
  }

  /* Horizontal Rule */
  .col-4b .col-4b1 hr {
    display: none;
  }

  /* Column 4/12 */
  .page .col-4b .col-4b1 {
    display: flex !important;
    justify-content: center !important;
    align-items: center !important;
    padding-left: 10px;
    padding-right: 10px;
    text-align: center !important;
  }

  /* Column 4/12 */
  .page .col-4b .col-4b2 {
    display: flex !important;
    align-items: center !important;
    padding-left: 10px;
    padding-right: 10px;
    border-left-style: solid;
    border-left-width: 1px;
    border-left-color: #e5e5e5;
  }

  /* Column 4/12 */
  .page .col-4b .col-4b3 {
    display: flex !important;
    align-items: center !important;
    margin-left: 10px;
    margin-right: 10px;
    padding-left: 10px;
    border-left-width: 1px;
    border-left-style: solid;
    border-left-color: #e5e5e5;
  }

  /* Column 4/12 */
  .page .col-4b .col-4b4 {
    display: flex !important;
    align-items: center !important;
    padding-left: 10px;
    border-left-width: 1px;
    border-left-style: solid;
    border-left-color: #eaeaea;
  }

  /* Heading */
  .col-4b .col-4b2 h5 {
    text-align: center;
    font-size: 16px !important;
  }

  /* Heading */
  .col-4b .col-4b3 h5 {
    text-align: center;
    font-size: 16px !important;
  }

  /* Heading */
  .col-4b .col-4b4 h5 {
    text-align: center;
    font-size: 16px !important;
  }

  /* Container */
  .col-4a .col-4a1 .container {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 0px !important;
    margin-bottom: 10px;
  }

  /* Paragraph */
  .col-4a .col-4a2 p {
    margin-bottom: 25px;
  }

  /* Map */
  #map {
    min-height: 170px;
  }

  /* Column 4/12 */
  .right .col-4 {
    transform: translatex(0px) translatey(0px);
  }

  /* Heading */
  .col-4b .col-4b1 h5 {
    font-size: 16px !important;
  }
}

@media (max-width: 767px) {
  /* Right */
  #app #app-content .page .row .right {
    width: 60% !important;
  }

  /* Heading */
  .col-4a .col-4a2 h4 {
    font-size: 20px;
  }

  /* Heading */
  .col-5a2 .col-5a2a h2 {
    font-size: 22px;
  }

  /* Heading */
  .col-5a2 .col-5a2b h2 {
    font-size: 22px;
  }

  /* Heading */
  .col-5b2 .col-5b2a h2 {
    font-size: 22px;
  }

  /* Heading */
  .col-5b2 .col-5b2b h2 {
    font-size: 22px;
  }

  /* Heading */
  .col-5a2 .col-5a2a h5 {
    font-size: 14px !important;
  }

  /* Heading */
  .col-5a2 .col-5a2b h5 {
    font-size: 14px !important;
  }

  /* Heading */
  .col-5b2 .col-5b2a h5 {
    font-size: 14px !important;
  }

  /* Heading */
  .col-5b2 .col-5b2b h5 {
    font-size: 14px !important;
  }

  /* Heading */
  .col-4b .col-4b1 h5 {
    font-size: 12px !important;
  }

  /* Heading */
  .col-4b .col-4b2 h5 {
    font-size: 12px !important;
  }

  /* Heading */
  .col-4b .col-4b3 h5 {
    font-size: 12px !important;
  }

  /* Heading */
  .col-4b .col-4b4 h5 {
    font-size: 12px !important;
  }

  /* Heading */
  .col-4b .col-4b1 h2 {
    font-size: 22px;
  }

  /* Heading */
  .col-4b .col-4b2 h2 {
    font-size: 22px;
  }

  /* Heading */
  .col-4b .col-4b3 h2 {
    font-size: 22px;
  }

  /* Heading */
  .col-4b .col-4b4 h2 {
    font-size: 22px;
  }

  /* Column 4/12 */
  .page .col-4b .col-4b2 {
    padding-right: 0px;
  }
}

@media (max-width: 575px) {
  /* Row 2 */
  .page .row-2 {
    flex-direction: column;
  }

  /* Column 4/12 */
  .page .col-4 {
    max-width: 100% !important;
    min-width: 100%;
  }

  /* Column 4/12 */
  .page .col-4b {
    flex-direction: column !important;
  }

  /* Column 4/12 */
  .page .col-4b .col-4b2 {
    border-style: none;
    padding-bottom: 10px;
  }

  /* Column 4/12 */
  .page .col-4b .col-4b3 {
    border-left-style: none;
    padding-bottom: 10px;
  }

  /* Column 4/12 */
  .page .col-4b .col-4b4 {
    border-left-style: none;
  }

  /* Column 4/12 */
  .page .col-4b .col-4b1 {
    margin-bottom: 10px;
  }

  /* Paragraph */
  .col-4a .col-4a2 p {
    font-size: 14px;
  }

  /* Column 5/12 */
  .page .col-5a .col-5a2 {
    align-items: center !important;
    margin-bottom: 20px;
  }

  /* Column 5/12 */
  .page .col-5b .col-5b2 {
    align-items: center !important;
  }

  /* Heading */
  .col-5b .col-5b1 h3 {
    text-align: center;
  }

  /* Heading */
  .col-5a .col-5a1 h3 {
    text-align: center;
  }

  /* Column 5/12 */
  .col-5a .col-5a2 .col-5a2b {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }

  /* Column 5/12 */
  .col-5a .col-5a2 .col-5a2a {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  /* Column 5/12 */
  .col-5b .col-5b2 .col-5b2a {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  /* Column 5/12 */
  .col-5b .col-5b2 .col-5b2b {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  /* Column 5/12 */
  .page .col-5 {
    max-width: 100% !important;
    min-width: 100%;
    justify-content: center !important;
    align-items: center !important;
    margin-top: 30px;
  }

  /* Heading */
  .col-5a2 .col-5a2a h5 {
    padding-top: 8px;
    padding-left: 8px;
  }

  /* Heading */
  .col-5a2 .col-5a2b h5 {
    padding-left: 8px;
    padding-top: 8px;
  }

  /* Heading */
  .col-5b2 .col-5b2a h5 {
    padding-left: 8px;
    padding-top: 8px;
  }

  /* Heading */
  .col-5b2 .col-5b2b h5 {
    padding-left: 8px;
    padding-top: 8px;
  }

  /* Col */
  #app #app-content .page .row .right .container .container .row-1 .col-0a {
    width: 100% !important;
  }

  /* Col */
  .page .col-0a {
    max-width: 100% !important;
    min-width: 100%;
  }

  /* Col */
  .page .col-0b {
    min-width: 100%;
    max-width: 100%;
    align-items: center;
    justify-content: center;
  }

  /* Col */
  #app #app-content .page .row .right .container .container .row-1 .col-0b {
    width: 100% !important;
  }

  /* Row 1 */
  .page .row-1 {
    flex-direction: column;
  }

  /* Navigation */
  #app
    #app-content
    .page
    .row
    .right
    .container
    .container
    .row-1
    .col-0a
    .col-1
    nav {
    width: 84% !important;
  }

  /* Navigation */
  .col-0a nav {
    margin-bottom: 30px;
  }

  /* Span Tag */
  .col-0a nav span {
    padding-left: 30px;
  }

  /* Column 1/12 */
  .page .col-0a .col-1 {
    justify-content: normal;
  }

  /* Heading */
  #app
    #app-content
    .page
    .row
    .right
    .container
    .container
    .row-1
    .col-0b
    .col-2
    .container
    h1 {
    font-size: 30px !important;
  }

  /* Heading */
  .col-2 h4 {
    font-size: 14px;
  }

  /* Heading */
  .col-3 h4 {
    font-size: 14px;
  }

  /* Heading */
  #app
    #app-content
    .page
    .row
    .right
    .container
    .container
    .row-1
    .col-0b
    .col-3
    .container
    h1 {
    font-size: 30px !important;
  }

  /* Column 2/12 */
  .page .col-0b .col-2 {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  /* Container */
  .col-0b .col-2 .container {
    justify-content: normal !important;
    align-items: normal !important;
  }
}

@media (max-width: 1199px) {
  /* Right */
  #app #app-content .page .row .right {
    width: 70% !important;
  }
}

@media (max-width: 991px) {
  /* Heading */
  #app
    #app-content
    .page
    .row
    .right
    .container
    .container
    .row-1
    .col-0b
    .col-2
    .container
    h1 {
    font-size: 40px !important;
  }

  /* Heading */
  .col-2 h4 {
    font-size: 17px;
  }

  /* Heading */
  .col-3 h4 {
    font-size: 17px;
  }

  /* Heading */
  .col-3 h1 {
    transform: translatex(0px) translatey(0px);
  }

  /* Column 5/12 */
  .page .col-5 {
    flex-direction: column !important;
    align-items: flex-end !important;
    transform: translatex(0px) translatey(0px);
  }

  /* Column 5/12 */
  #app #app-content .page .row .right .container .container .row-2 .col-5 {
    width: 30% !important;
  }

  /* Column 5/12 */
  .right .col-5 {
    max-width: 30% !important;
  }

  /* Row 2 */
  .right .row-2 {
    align-items: normal;
    justify-content: normal;
  }

  /* Column 4/12 */
  .page .col-4 {
    min-width: 70%;
    flex-direction: column !important;
  }

  /* Column 4/12 */
  .page .col-4a {
    min-width: 100%;
  }

  /* Column 4/12 */
  .page .col-4b {
    display: flex !important;
    flex-direction: row !important;
    transform: translatex(0px) translatey(0px);
    max-width: 100% !important;
    min-width: 100%;
    justify-content: center !important;
    align-items: center !important;
    padding-left: 0px !important;
  }

  /* Horizontal Rule */
  .col-4b .col-4b3 hr {
    display: none;
  }

  /* Horizontal Rule */
  .col-4b .col-4b2 hr {
    display: none;
  }

  /* Horizontal Rule */
  .col-4b .col-4b1 hr {
    display: none;
  }

  /* Column 4/12 */
  .page .col-4b .col-4b1 {
    display: flex !important;
    justify-content: center !important;
    align-items: center !important;
    padding-left: 10px;
    padding-right: 10px;
    text-align: center !important;
  }

  /* Column 4/12 */
  .page .col-4b .col-4b2 {
    display: flex !important;
    align-items: center !important;
    padding-left: 10px;
    padding-right: 10px;
    border-left-style: solid;
    border-left-width: 1px;
    border-left-color: #e5e5e5;
  }

  /* Column 4/12 */
  .page .col-4b .col-4b3 {
    display: flex !important;
    align-items: center !important;
    margin-left: 10px;
    margin-right: 10px;
    padding-left: 10px;
    border-left-width: 1px;
    border-left-style: solid;
    border-left-color: #e5e5e5;
  }

  /* Column 4/12 */
  .page .col-4b .col-4b4 {
    display: flex !important;
    align-items: center !important;
    padding-left: 10px;
    border-left-width: 1px;
    border-left-style: solid;
    border-left-color: #eaeaea;
  }

  /* Heading */
  .col-4b .col-4b2 h5 {
    text-align: center;
    font-size: 16px !important;
  }

  /* Heading */
  .col-4b .col-4b3 h5 {
    text-align: center;
    font-size: 16px !important;
  }

  /* Heading */
  .col-4b .col-4b4 h5 {
    text-align: center;
    font-size: 16px !important;
  }

  /* Container */
  .col-4a .col-4a1 .container {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 0px !important;
    margin-bottom: 10px;
  }

  /* Paragraph */
  .col-4a .col-4a2 p {
    margin-bottom: 25px;
  }

  /* Map */
  #map {
    min-height: 170px;
  }

  /* Column 4/12 */
  .right .col-4 {
    transform: translatex(0px) translatey(0px);
  }

  /* Heading */
  .col-4b .col-4b1 h5 {
    font-size: 16px !important;
  }
}

@media (max-width: 767px) {
  /* Right */
  #app #app-content .page .row .right {
    width: 60% !important;
  }

  /* Heading */
  .col-4a .col-4a2 h4 {
    font-size: 20px;
  }

  /* Heading */
  .col-5a2 .col-5a2a h2 {
    font-size: 22px;
  }

  /* Heading */
  .col-5a2 .col-5a2b h2 {
    font-size: 22px;
  }

  /* Heading */
  .col-5b2 .col-5b2a h2 {
    font-size: 22px;
  }

  /* Heading */
  .col-5b2 .col-5b2b h2 {
    font-size: 22px;
  }

  /* Heading */
  .col-5a2 .col-5a2a h5 {
    font-size: 14px !important;
  }

  /* Heading */
  .col-5a2 .col-5a2b h5 {
    font-size: 14px !important;
  }

  /* Heading */
  .col-5b2 .col-5b2a h5 {
    font-size: 14px !important;
  }

  /* Heading */
  .col-5b2 .col-5b2b h5 {
    font-size: 14px !important;
  }

  /* Heading */
  .col-4b .col-4b1 h5 {
    font-size: 12px !important;
  }

  /* Heading */
  .col-4b .col-4b2 h5 {
    font-size: 12px !important;
  }

  /* Heading */
  .col-4b .col-4b3 h5 {
    font-size: 12px !important;
  }

  /* Heading */
  .col-4b .col-4b4 h5 {
    font-size: 12px !important;
  }

  /* Heading */
  .col-4b .col-4b1 h2 {
    font-size: 22px;
  }

  /* Heading */
  .col-4b .col-4b2 h2 {
    font-size: 22px;
  }

  /* Heading */
  .col-4b .col-4b3 h2 {
    font-size: 22px;
  }

  /* Heading */
  .col-4b .col-4b4 h2 {
    font-size: 22px;
  }

  /* Column 4/12 */
  .page .col-4b .col-4b2 {
    padding-right: 0px;
  }
}

@media (max-width: 575px) {
  /* Row 2 */
  .page .row-2 {
    flex-direction: column;
  }

  /* Column 4/12 */
  .page .col-4 {
    max-width: 100% !important;
    min-width: 100%;
  }

  /* Column 4/12 */
  .page .col-4b {
    flex-direction: column !important;
  }

  /* Column 4/12 */
  .page .col-4b .col-4b2 {
    border-style: none;
    padding-bottom: 10px;
  }

  /* Column 4/12 */
  .page .col-4b .col-4b3 {
    border-left-style: none;
    padding-bottom: 10px;
  }

  /* Column 4/12 */
  .page .col-4b .col-4b4 {
    border-left-style: none;
  }

  /* Column 4/12 */
  .page .col-4b .col-4b1 {
    margin-bottom: 10px;
  }

  /* Paragraph */
  .col-4a .col-4a2 p {
    font-size: 14px;
  }

  /* Column 5/12 */
  .page .col-5a .col-5a2 {
    align-items: center !important;
    margin-bottom: 20px;
  }

  /* Column 5/12 */
  .page .col-5b .col-5b2 {
    align-items: center !important;
  }

  /* Heading */
  .col-5b .col-5b1 h3 {
    text-align: center;
  }

  /* Heading */
  .col-5a .col-5a1 h3 {
    text-align: center;
  }

  /* Column 5/12 */
  .col-5a .col-5a2 .col-5a2b {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }

  /* Column 5/12 */
  .col-5a .col-5a2 .col-5a2a {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  /* Column 5/12 */
  .col-5b .col-5b2 .col-5b2a {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  /* Column 5/12 */
  .col-5b .col-5b2 .col-5b2b {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  /* Column 5/12 */
  .page .col-5 {
    max-width: 100% !important;
    min-width: 100%;
    justify-content: center !important;
    align-items: center !important;
    margin-top: 30px;
  }

  /* Heading */
  .col-5a2 .col-5a2a h5 {
    padding-top: 8px;
    padding-left: 8px;
  }

  /* Heading */
  .col-5a2 .col-5a2b h5 {
    padding-left: 8px;
    padding-top: 8px;
  }

  /* Heading */
  .col-5b2 .col-5b2a h5 {
    padding-left: 8px;
    padding-top: 8px;
  }

  /* Heading */
  .col-5b2 .col-5b2b h5 {
    padding-left: 8px;
    padding-top: 8px;
  }

  /* Col */
  #app #app-content .page .row .right .container .container .row-1 .col-0a {
    width: 100% !important;
  }

  /* Col */
  .page .col-0a {
    max-width: 100% !important;
    min-width: 100%;
  }

  /* Col */
  .page .col-0b {
    min-width: 100%;
    max-width: 100%;
    align-items: center;
    justify-content: center;
  }

  /* Col */
  #app #app-content .page .row .right .container .container .row-1 .col-0b {
    width: 100% !important;
  }

  /* Row 1 */
  .page .row-1 {
    flex-direction: column;
  }

  /* Navigation */
  #app
    #app-content
    .page
    .row
    .right
    .container
    .container
    .row-1
    .col-0a
    .col-1
    nav {
    width: 84% !important;
  }

  /* Navigation */
  .col-0a nav {
    margin-bottom: 30px;
  }

  /* Span Tag */
  .col-0a nav span {
    padding-left: 30px;
  }

  /* Column 1/12 */
  .page .col-0a .col-1 {
    justify-content: normal;
  }

  /* Heading */
  #app
    #app-content
    .page
    .row
    .right
    .container
    .container
    .row-1
    .col-0b
    .col-2
    .container
    h1 {
    font-size: 30px !important;
  }

  /* Heading */
  .col-2 h4 {
    font-size: 14px;
  }

  /* Heading */
  .col-3 h4 {
    font-size: 14px;
  }

  /* Heading */
  #app
    #app-content
    .page
    .row
    .right
    .container
    .container
    .row-1
    .col-0b
    .col-3
    .container
    h1 {
    font-size: 30px !important;
  }

  /* Column 2/12 */
  .page .col-0b .col-2 {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  /* Container */
  .col-0b .col-2 .container {
    justify-content: normal !important;
    align-items: normal !important;
  }
}
/* ---------------------------------------------------*/

/* ---------------------- end of copied -----------------------*/

/* Container */
#app
  #app-content
  .page
  .row
  .right
  .container
  .container
  .row-2
  .col-4
  .col-4a
  .col-4a1
  .container {
  height: 170% !important;
}

/* Container */
.col-4a .col-4a1 .container {
  max-height: 90px !important;
  padding-top: 10px;
  padding-bottom: 10px;
}

/* Col */
.right .col-0b {
  justify-content: flex-end;
}

/* Column 4/12 */
#app #app-content .page .row .right .container .container .row-2 .col-4 {
  width: 435px !important;
}

/* Row 2 */
.right .row-2 {
  transform: translatex(0px) translatey(0px);
}

/* Column 5/12 */
#app
  #app-content
  .page
  .row
  .right
  .container
  .container
  .row-2
  .col-5
  .col-5a
  .col-5a2 {
  width: 100% !important;
}

/* Column 5/12 */
#app
  #app-content
  .page
  .row
  .right
  .container
  .container
  .row-2
  .col-5
  .col-5b
  .col-5b2 {
  width: 100% !important;
}

/* Column 5/12 */
#app
  #app-content
  .page
  .row
  .right
  .container
  .container
  .row-2
  .col-5
  .col-5b {
  width: 45% !important;
}

/* Column 5/12 */
#app
  #app-content
  .page
  .row
  .right
  .container
  .container
  .row-2
  .col-5
  .col-5a {
  width: 45% !important;
}

/* Heading */
.col-5a2 .col-5a2a h5 {
  font-weight: 600;
}

/* Heading */
.col-5b2 .col-5b2a h5 {
  font-weight: 600;
}

/* Heading */
.col-5a2 .col-5a2b h5 {
  font-weight: 600;
}

/* Heading */
.col-5b2 .col-5b2b h5 {
  font-weight: 600;
}

/* Column 4/12 */
.page .col-4 {
  max-width: 51% !important;
}

/* Column 5/12 */
.page .col-5 {
  min-width: 50%;
}

/* Heading */
.col-5a2 .col-5a2a h5 {
  font-size: 15px !important;
}

/* Heading */
.col-5b2 .col-5b2a h5 {
  font-size: 15px !important;
}

/* Heading */
.col-5a2 .col-5a2b h5 {
  font-size: 15px !important;
}

/* Heading */
.col-5b2 .col-5b2b h5 {
  font-size: 15px !important;
}

/* Paragraph */
.col-5a2 .col-5a2a p {
  margin-bottom: 0px;
  font-size: 12px;
  font-weight: 600;
}

/* Paragraph */
.col-5b2 .col-5b2a p {
  margin-bottom: 0px;
  font-size: 12px;
  font-weight: 600;
}

/* Paragraph */
.col-5a2 .col-5a2b p {
  margin-bottom: 0px;
  font-size: 12px;
  font-weight: 600;
}

/* Paragraph */
.col-5b2 .col-5b2b p {
  margin-bottom: 0px;
  font-size: 12px;
  font-weight: 600;
}

/* Heading */
.col-5a2 .col-5a2a h5 {
  background-color: #828282;
  color: #ffffff;
  padding-right: 10px;
  padding-bottom: 4px;
  margin-bottom: 5px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  display: inline;
  flex-direction: row;
}

/* Heading */
.col-5b2 .col-5b2a h5 {
  background-color: #828282;
  color: #ffffff;
  padding-right: 10px;
  padding-bottom: 4px;
  margin-bottom: 5px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  display: inline;
  flex-direction: row;
}

/* Heading */
.col-5a2 .col-5a2b h5 {
  background-color: #828282;
  color: #ffffff;
  padding-right: 10px;
  padding-bottom: 4px;
  margin-bottom: 5px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  display: inline;
  flex-direction: row;
}

/* Heading */
.col-5b2 .col-5b2b h5 {
  background-color: #828282;
  color: #ffffff;
  padding-right: 10px;
  padding-bottom: 4px;
  margin-bottom: 5px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  display: inline;
  flex-direction: row;
}

/* Heading */
.col-5a2 .col-5a2a h5 {
  padding-left: 10px;
  padding-top: 3px;
}

/* Heading */
.right .container .container .row-2 .col-5 .col-5a .col-5a2 .col-5a2a h5 {
  font-size: 13px !important;
}

/* Paragraph */
.col-5a2 .col-5a2a p {
  margin-right: 4px;
}

/* Paragraph */
.col-5b2 .col-5b2a p {
  padding-right: 4px;
}

/* Paragraph */
.col-5a2 .col-5a2b p {
  margin-right: 4px;
}

/* Paragraph */
.col-5b2 .col-5b2b p {
  margin-right: 4px;
}

/* Heading */
.col-5b2 .col-5b2a h5 {
  padding-top: 3px;
  padding-left: 10px;
}

/* Heading */
.col-5b2 .col-5b2b h5 {
  padding-left: 10px;
  padding-top: 3px;
}

/* Heading */
.col-5a2 .col-5a2b h5 {
  padding-left: 10px;
  padding-top: 3px;
}

/* Heading */
.right .container .container .row-2 .col-5 .col-5b .col-5b2 .col-5b2a h5 {
  font-size: 12px !important;
}

/* Heading */
.right .container .container .row-2 .col-5 .col-5b .col-5b2 .col-5b2b h5 {
  font-size: 12px !important;
}

/* Heading */
.right .container .container .row-2 .col-5 .col-5a .col-5a2 .col-5a2b h5 {
  font-size: 12px !important;
}

/* Column 4/12 */
.page .col-4b {
  justify-content: center !important;
  align-self: center;
}

/* Column 4/12 */
.page .col-4a {
  display: block !important;
  align-self: center;
}

/* Column 5/12 */
.page .col-5a .col-5a2 {
  display: block !important;
  padding-left: 10px;
  padding-right: 10px;
}

/* Column 5/12 */
.page .col-5b .col-5b2 {
  display: block !important;
  align-self: center;
  padding-left: 10px;
  padding-right: 10px;
}

/* Heading */
.col-5a2 .col-5a2a h2 {
  text-align: right !important;
}

/* Heading */
.col-5a2 .col-5a2b h2 {
  text-align: right !important;
}

/* Column 4/12 */
.page .col-4b {
  display: block;
}

/* Column 5/12 */
.col-5a .col-5a2 .col-5a2b {
  padding-bottom: 15px;
  margin-bottom: 0px !important;
}

/* Column 5/12 */
.col-5b .col-5b2 .col-5b2b {
  margin-bottom: 0px !important;
}

/* Column 4/12 */
.page .col-4a {
  padding-left: 15px;
}

/* Column 5/12 */
.right .col-5 {
  transform: translatex(0px) translatey(0px);
}

/* Heading */
.col-5a2 .col-5a2a h2 {
  font-size: 27px;
}

/* Heading */
.col-5a2 .col-5a2b h2 {
  font-size: 27px;
}

/* Heading */
.col-5b2 .col-5b2a h2 {
  font-size: 27px;
}

/* Heading */
.col-5b2 .col-5b2b h2 {
  font-size: 27px;
}

/* Heading */
.col-4b .col-4b1 h2 {
  font-size: 37px;
}

/* Heading */
.col-4b .col-4b2 h2 {
  font-size: 37px;
}

/* ------------------- Mobile -------------------- */
@media (max-width: 991px) {
  /* Span Tag */
  .col-0a nav span {
    width: 250px;
  }

  /* Label */
  #app
    #app-content
    .page
    .row
    .right
    .container
    .container
    .row-1
    .col-0a
    .col-1
    nav
    label {
    width: 196px !important;
  }

  /* Label */
  .col-0a nav label {
    transform: translatex(0px) translatey(0px);
  }

  /* Navigation */
  .col-0a nav {
    width: 250px;
  }

  /* Column 1/12 */
  .page .col-0a .col-1 {
    justify-content: flex-start;
  }

  /* Column 5/12 */
  .page .row .right .container .container .row-2 .col-5 {
    flex-direction: row !important;
    align-items: center !important;
  }

  /* Paragraph */
  .col-4a .col-4a2 p {
    text-align: center;
    font-size: 14px;
    margin-bottom: 10px !important;
  }

  /* Heading */
  .col-4a .col-4a2 h4 {
    text-align: center;
    font-size: 20px;
  }

  /* Column 5/12 */
  .right .col-5 {
    justify-content: center !important;
    min-width: 60% !important;
  }

  /* Column 5/12 */
  #app #app-content .page .row .right .container .container .row-2 .col-5 {
    width: 60% !important;
  }

  /* Column 4/12 */
  .right .col-4 {
    min-width: 40% !important;
  }

  /* Column 4/12 */
  #app #app-content .page .row .right .container .container .row-2 .col-4 {
    width: 40% !important;
  }

  /* Column 4/12 */
  .page .row .right .container .container .row-2 .col-4 {
    max-width: 40px !important;
  }

  /* Heading */
  .right .container .container .row-2 .col-4 .col-4a .col-4a1 .container h1 {
    font-size: 70px !important;
  }

  /* Heading */
  .col-5a2 .col-5a2a h2 {
    font-size: 20px !important;
  }

  /* Heading */
  .col-5b2 .col-5b2a h2 {
    font-size: 20px !important;
  }

  /* Heading */
  .col-5b2 .col-5b2b h2 {
    font-size: 20px !important;
  }

  /* Heading */
  .col-5a2 .col-5a2b h2 {
    font-size: 20px !important;
  }

  /* Heading */
  .col-5a2 .col-5a2b h5 {
    display: inline;
    font-size: 10px;
  }

  /* Heading */
  #app
    #app-content
    .page
    .row
    .right
    .container
    .container
    .row-2
    .col-5
    .col-5a
    .col-5a2
    .col-5a2b
    h5 {
    font-size: 10px !important;
  }

  /* Heading */
  #app
    #app-content
    .page
    .row
    .right
    .container
    .container
    .row-2
    .col-5
    .col-5a
    .col-5a2
    .col-5a2a
    h5 {
    font-size: 10px !important;
  }

  /* Heading */
  #app
    #app-content
    .page
    .row
    .right
    .container
    .container
    .row-2
    .col-5
    .col-5b
    .col-5b2
    .col-5b2a
    h5 {
    font-size: 10px !important;
  }

  /* Heading */
  .col-5b2 .col-5b2b h5 {
    font-size: 10px;
  }

  /* Heading */
  #app
    #app-content
    .page
    .row
    .right
    .container
    .container
    .row-2
    .col-5
    .col-5b
    .col-5b2
    .col-5b2b
    h5 {
    font-size: 10px !important;
  }

  /* Heading */
  .col-4b .col-4b1 h2 {
    font-size: 25px !important;
  }

  /* Heading */
  .col-4b .col-4b2 h2 {
    font-size: 25px !important;
  }
}

@media (max-width: 767px) {
  /* Column 4/12 */
  .right .col-4 {
    min-width: 80% !important;
  }

  /* Column 4/12 */
  #app #app-content .page .row .right .container .container .row-2 .col-4 {
    width: 80% !important;
  }

  /* Row 2 */
  .right .row-2 {
    flex-direction: column;
    justify-content: center !important;
    align-items: center !important;
  }

  /* Column 5/12 */
  .page .row .right .container .container .row-2 .col-5 {
    min-width: 80% !important;
  }

  /* Column 5/12 */
  #app #app-content .page .row .right .container .container .row-2 .col-5 {
    width: 80% !important;
  }

  /* Column 4/12 */
  .page .col-4 {
    margin-bottom: 20px;
  }

  /* Paragraph */
  .col-5a2 .col-5a2a p {
    text-align: center;
  }

  /* Heading */
  .right .container .container .row-2 .col-5 .col-5a .col-5a2 .col-5a2a h2 {
    text-align: center !important;
  }

  /* Heading */
  .right .container .container .row-2 .col-5 .col-5b .col-5b2 .col-5b2a h2 {
    text-align: center !important;
  }

  /* Paragraph */
  .col-5b2 .col-5b2a p {
    text-align: center;
  }

  /* Paragraph */
  .col-5b2 .col-5b2b p {
    text-align: center;
  }

  /* Heading */
  .right .container .container .row-2 .col-5 .col-5b .col-5b2 .col-5b2b h2 {
    text-align: center !important;
  }

  /* Heading */
  .col-5b2 .col-5b2a h5 {
    text-align: center;
    float: none;
    display: flex !important;
    justify-content: center;
    align-items: center;
  }

  /* Heading */
  .col-5a2 .col-5a2a h5 {
    display: flex !important;
    justify-content: center;
    align-items: center;
  }

  /* Heading */
  .col-5a2 .col-5a2b h5 {
    display: flex !important;
    justify-content: center;
    align-items: center;
  }

  /* Heading */
  .col-5b2 .col-5b2b h5 {
    display: flex !important;
    justify-content: center;
    align-items: center;
  }

  /* Heading */
  .col-5a2 .col-5a2a h2 {
    margin-bottom: 5px !important;
  }

  /* Heading */
  .col-5b2 .col-5b2a h2 {
    margin-bottom: 5px !important;
  }

  /* Heading */
  .col-5b2 .col-5b2b h2 {
    padding-bottom: 5px;
  }

  /* Heading */
  .right .container .container .row-2 .col-5 .col-5a .col-5a2 .col-5a2b h2 {
    text-align: center !important;
  }

  /* Heading */
  .col-5a2 .col-5a2b h2 {
    margin-bottom: 5px !important;
  }

  /* Paragraph */
  .col-5a2 .col-5a2b p {
    text-align: center;
  }

  /* Row 1 */
  .page .row-1 {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-width: 100%;
    max-width: 100%;
  }

  /* Col */
  .page .col-0a {
    min-width: 100%;
    max-width: 100% !important;
    transform: translatex(0px) translatey(0px);
    display: flex;
    justify-content: center;
    align-items: center;
  }

  /* Row 1 */
  #app #app-content .page .row .right .container .container .row-1 {
    width: 100% !important;
  }

  /* Col */
  #app #app-content .page .row .right .container .container .row-1 .col-0a {
    width: 78% !important;
  }

  /* Col */
  .page .col-0b {
    min-width: 100%;
    max-width: 100%;
    justify-content: center !important;
    align-items: center;
  }

  /* Column 1/12 */
  .page .col-0a .col-1 {
    justify-content: center;
    align-items: center;
  }

  /* Container */
  .col-0b .container {
    min-width: 1%;
    max-width: 100%;
    margin-left: 0px;
    margin-right: 0px;
    width: 100%;
    align-items: center !important;
  }

  /* Column 3/12 */
  #app
    #app-content
    .page
    .row
    .right
    .container
    .container
    .row-1
    .col-0b
    .col-3 {
    width: 100% !important;
  }

  /* Column 3/12 */
  .page .col-0b .col-3 {
    min-width: 100%;
    text-align: center;
    transform: translatex(0px) translatey(0px);
  }

  /* Col */
  #app #app-content .page .row .right .container .container .row-1 .col-0b {
    width: 100% !important;
  }

  /* Container */
  .col-4a .col-4a1 .container {
    margin-bottom: 0px !important;
  }
}

@media (max-width: 575px) {
  /* Column 4/12 */
  .right .col-4 {
    min-width: 100% !important;
  }

  /* Column 5/12 */
  .page .col-5b {
    max-width: 100%;
    min-width: 100% !important;
  }

  /* Column 5/12 */
  #app
    #app-content
    .page
    .row
    .right
    .container
    .container
    .row-2
    .col-5
    .col-5b {
    width: 79% !important;
  }

  /* Column 4/12 */
  #app #app-content .page .row .right .container .container .row-2 .col-4 {
    width: 100% !important;
  }

  /* Column 4/12 */
  .page .row .right .container .container .row-2 .col-4 {
    max-width: 100% !important;
  }

  /* Column 4/12 */
  .page .row .right .container .container .row-2 .col-4 .col-4b {
    flex-direction: row !important;
  }

  /* Column 4/12 */
  .page .col-4b {
    align-self: auto !important;
    display: flex;
  }

  /* Container */
  .col-4a .col-4a1 .container {
    margin-bottom: 0px !important;
  }

  /* Heading */
  .right .container .container .row-2 .col-4 .col-4b .col-4b2 h2 {
    font-size: 37px !important;
  }

  /* Heading */
  .col-4b .col-4b1 h2 {
    font-size: 37px !important;
  }

  /* Heading */
  .right .container .container .row-2 .col-4 .col-4b .col-4b2 h5 {
    font-size: 15px !important;
  }

  /* Heading */
  .col-4b .col-4b1 h5 {
    font-size: 15px;
  }

  /* Heading */
  #app
    #app-content
    .page
    .row
    .right
    .container
    .container
    .row-2
    .col-4
    .col-4b
    .col-4b1
    h5 {
    font-size: 15px !important;
  }

  /* Column 4/12 */
  .page .col-4a {
    padding-left: 0px !important;
  }

  /* Column 5/12 */
  .page .col-5 {
    min-width: 100% !important;
    width: 100%;
    display: flex;
  }

  /* Column 5/12 */
  #app
    #app-content
    .page
    .row
    .right
    .container
    .container
    .row-2
    .col-5
    .col-5b {
    width: 1000% !important;
  }

  /* Column 5/12 */
  .page .row .right .container .container .row-2 .col-5 {
    flex-direction: column !important;
  }

  /* Column 5/12 */
  .page .col-5a {
    display: block !important;
    flex-direction: row !important;
    flex-wrap: wrap;
    min-width: 80%;
  }

  /* Column 5/12 */
  #app
    #app-content
    .page
    .row
    .right
    .container
    .container
    .row-2
    .col-5
    .col-5a {
    width: 99% !important;
  }

  /* Column 5/12 */
  .page .col-5b {
    min-width: 80%;
  }

  /* Column 5/12 */
  .col-5a .col-5a2 .col-5a2a {
    flex-direction: column;
  }

  /* Column 5/12 */
  .col-5a .col-5a2 .col-5a2b {
    flex-direction: column !important;
  }

  /* Column 5/12 */
  .col-5b .col-5b2 .col-5b2a {
    flex-direction: column;
  }

  /* Column 5/12 */
  .col-5b .col-5b2 .col-5b2b {
    flex-direction: column;
  }

  /* Heading */
  .col-5a2 .col-5a2a h2 {
    font-size: 30px !important;
  }

  /* Heading */
  #app
    #app-content
    .page
    .row
    .right
    .container
    .container
    .row-2
    .col-5
    .col-5a
    .col-5a2
    .col-5a2a
    h5 {
    font-size: 15px !important;
  }

  /* Paragraph */
  .col-5a2 .col-5a2a p {
    font-size: 13px !important;
  }

  /* Heading */
  .col-5a2 .col-5a2b h2 {
    font-size: 30px !important;
  }

  /* Heading */
  .col-5b2 .col-5b2a h2 {
    font-size: 30px !important;
  }

  /* Heading */
  .col-5b2 .col-5b2b h2 {
    font-size: 30px !important;
  }

  /* Paragraph */
  .col-5a2 .col-5a2b p {
    font-size: 13px !important;
  }

  /* Paragraph */
  .col-5b2 .col-5b2a p {
    font-size: 13px !important;
  }

  /* Paragraph */
  .col-5b2 .col-5b2b p {
    font-size: 13px !important;
  }

  /* Heading */
  #app
    #app-content
    .page
    .row
    .right
    .container
    .container
    .row-2
    .col-5
    .col-5a
    .col-5a2
    .col-5a2b
    h5 {
    font-size: 15px !important;
  }

  /* Heading */
  #app
    #app-content
    .page
    .row
    .right
    .container
    .container
    .row-2
    .col-5
    .col-5b
    .col-5b2
    .col-5b2a
    h5 {
    font-size: 15px !important;
  }

  /* Heading */
  #app
    #app-content
    .page
    .row
    .right
    .container
    .container
    .row-2
    .col-5
    .col-5b
    .col-5b2
    .col-5b2b
    h5 {
    font-size: 15px !important;
  }

  /* Col */
  .right .col-0b {
    justify-content: center !important;
  }

  /* Column 3/12 */
  #app
    #app-content
    .page
    .row
    .right
    .container
    .container
    .row-1
    .col-0b
    .col-3 {
    width: 100% !important;
  }

  /* Column 3/12 */
  .page .col-0b .col-3 {
    min-width: 100%;
    align-self: center;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  /* Container */
  .col-0b .container {
    text-align: center;
    transform: translatex(0px) translatey(0px);
    flex-direction: column;
    align-items: center !important;
  }

  /* Navigation */
  #app
    #app-content
    .page
    .row
    .right
    .container
    .container
    .row-1
    .col-0a
    .col-1
    nav {
    width: 250px !important;
  }

  /* Navigation */
  .col-0a nav {
    max-width: 250px;
  }
}

@media (max-width: 450px) {
  /* Col */
  .right .col-0a {
    align-self: center;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  /* Column 1/12 */
  .page .col-0a .col-1 {
    align-items: center;
    justify-content: center !important;
  }

  /* Heading */
  .col-5a2 .col-5a2a h2 {
    margin-bottom: 7px !important;
  }

  /* Heading */
  .col-5a2 .col-5a2b h2 {
    margin-bottom: 7px !important;
  }

  /* Heading */
  .col-5b2 .col-5b2a h2 {
    margin-bottom: 7px !important;
  }

  /* Heading */
  .col-5b2 .col-5b2b h2 {
    margin-bottom: 7px !important;
  }

  /* Paragraph */
  .col-4a .col-4a2 p {
    font-size: 15px !important;
  }
}
</style>
