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

          <div class="container">
            <div class="row-1">
              <div class="col-0a">
                <div class="col-1">
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
                </div>
              </div>
              <div class="col-0b">
                <div class="col-2">
                  <div class="container">
                    <h1 class="text-center">$24.7M</h1>
                    <h4>Total Funds</h4>
                  </div>
                </div>
                <div class="col-3">
                  <div class="container">
                    <h1 class="text-center">16</h1>
                    <h4>Projects</h4>
                  </div>
                </div>
              </div>
            </div>
            <div class="row-2">
              <div class="col-4">
                <div class="col-4a">
                  <div class="col-4a1">
                    <div class="container" style="width: 100%">
                      <svg
                        id="map"
                        fill="#3498db"
                        stroke="#ecf0f1"
                        stroke-width="1"
                        viewBox="460 400 400 200"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M753.398208922112,457.2061313515862 753.691574733532,458.0094802632996 753.2864505241952,458.7727338161206 752.6997190365197,459.4749839713727 752.2177609708534,460.2016168347969 752.1409271145317,461.0258151033758 752.4063532250991,461.6478731847479 754.6275511640116,465.1430684218567 755.6333766776568,466.2703178110992 756.87668873619,466.8539662690152 758.5111551198403,466.6083122197442 760.0338631731604,465.5507634688252 762.7859134007978,462.54870775513257 764.2736969801099,461.5607507704322 765.4890694053723,461.32203446297774 766.9139888098308,461.32203446297774 768.3249383976485,461.50499239616096 769.5333259821808,461.81689010644203 771.0700038521338,462.7159785046092 773.9827067683218,465.0594381930228 775.6241580602928,465.50372193399807 777.2306848782509,465.1639760532466 778.4390724627832,464.6046956923682 779.6893694296293,464.3119851089809 781.4006696696049,464.7719579226418 785.8430655474335,467.4985832355348 789.5450621573407,468.92367321177124 789.8803372834993,469.52470495942396 788.0502936697083,472.1708817312104 787.5962752373127,473.7403903990053 787.8058222165118,475.05030115579575 789.1469228563207,477.60381200670787 789.7476241606372,479.22188415001034 789.7615939772702,480.60999764448553 789.2097869635954,481.961492305725 786.62537426525,485.2163979733097 786.2831142307741,486.0853758964172 785.9967333276669,500.17467924678743 786.5625101579792,503.4508631442658 788.2179313341614,506.2498804217384 797.4310133076604,516.006815144747 793.0854749380983,515.9884998550016 787.9954862941305,515.9670468960813 787.8074401276199,512.0324139287073 785.169194105417,511.8445948423188 783.2847326609801,513.1593125460773 782.9076446993531,515.9643235555186 782.9013521524334,515.9990347450693 782.5309480832057,518.0422269878296 776.5684419721113,515.9956467748727 776.4671551316253,515.960880150422 773.2208251851036,510.09254053678745 770.488680585627,505.15310925038153 773.7769980197816,496.8086982568796 768.695052894274,495.31846097391735 761.9689490516851,495.31846097391735 764.5099216144388,490.1022333270635 763.0152318716417,488.3136689760286 757.7413346987613,491.21786067189663 753.0008105949023,493.82817344867954 751.8050588006654,491.5926474570519 747.1055479331918,493.35523122943493 741.5711290767338,495.4308623480763 735.3819982001437,497.75192161120344 729.8475793436891,499.82734708198694 724.7059876993138,501.755374900657 719.220822407678,503.8121473202521 712.6441875393695,506.19605233971214 708.0405431315562,508.4904434615828 703.3771111340303,510.81451526545885 698.6813019842928,513.2266063281957 693.3769704160047,515.9511266901749 686.5457390023977,522.6924347843451 679.7214924971031,529.4362790436271 672.8972460593981,536.173981582191 666.0660147133693,542.9160012412214 660.5898536886216,548.3910687085332 655.0228890585043,553.9316463406503 647.4687206139804,561.4659859174479 641.0007039598023,567.9249100369065 636.0274557932565,572.8898685337718 635.6967895475584,573.0824280901826 633.1915867333945,574.541282733973 630.2649140005735,574.9028491724192 619.3964108508884,574.3535454154905 617.8529716938759,574.2772895913339 613.2392222451384,574.049340087648 611.1472449411426,573.6460483010286 609.729310445005,572.903775394539 601.1972561201017,565.9673175898834 599.845678084019,565.4057576031574 598.6512603837101,565.831709185163 594.5511246079478,568.8619574128365 589.242601180078,571.5443656497644 583.5708630603576,573.2444920325636 572.9503239194079,574.1014896512249 560.5346656386721,575.1097059383588 557.5765607846276,575.7980643017372 545.1399478465239,583.3260236951472 544.3401768916989,584.2384916336673 544.2668354557408,585.1092338998599 544.5602011995784,587.5163108014933 544.5462314505279,588.5590583472729 544.3388823224202,589.5092682859579 544.245880730787,589.9354579872708 543.8023396270748,590.5176379722582 542.9816140148868,590.5489191387417 538.7347953672067,589.6956329063257 537.596256798266,589.1099694394348 536.562491718932,588.0481142453477 536.1138539090219,587.334184157471 535.2563155531204,585.9695358420614 534.487976584355,585.5611111745219 533.9518681382144,585.5282805282403 528.6416160270256,585.2030856358074 527.7196093456007,584.7251356066101 527.2516210965756,583.586730144569 527.0455666053291,580.491201274694 526.7906177558668,579.2154002513696 525.8197167838044,577.5988825964322 521.0071212382262,572.2449350360033 519.4075793285771,570.9098475180076 519.0072806147642,570.7248253978918 519.0094946275938,570.713460577649 519.2330114165306,569.5660909190093 520.8814476057807,566.9496536617129 525.3482906640272,554.7020493632738 526.6160498591566,552.2483721503115 527.9047637361557,550.7441131868032 534.9525270257654,545.7354045621189 537.2191267859868,543.526550764251 538.8535931873234,541.4219644036943 540.1772315341054,538.7102254075146 542.6917953032734,528.7438969656102 548.9747120664974,515.065377795925 552.8653009175122,509.4108079799949 554.2098939461591,506.8539290184659 554.9747404725451,504.5910852575617 555.0690366321245,502.4795764690936 554.4054712200489,500.0493912799995 553.3786909575778,497.70264059732733 547.9688866074531,488.3857862214915 547.0154478834703,485.75978331321636 545.4508304216943,479.80366290329687 544.8431442220494,437.4518403247107 546.519519987122,429.9172834202693 680.3257408891678,438.0690453234875 733.0163277416199,422.37072465696764 733.033081568,422.3657319939758 733.155971177967,423.1381288605719 732.4435114081598,424.56834976107115 732.2060248632758,425.33052986830916 732.1780852975919,426.11711103992957 732.5203453320638,426.8496104394642 733.6309443353166,428.0425066491564 733.8404912469305,428.7976388417118 733.6938083750051,429.7550474730078 733.4772765550753,430.52583924854355 733.351548340526,431.2669700924065 733.4702916467589,432.15456376398714 734.1408419666632,433.64546420480434 739.6100179479258,441.3762708644395 740.5739340792582,443.1753661666089 741.1606655669339,447.090546717114 741.8661404284288,448.3908704910035 744.8836168342165,450.6044580013941 750.2969136840994,453.7520677922012 752.902281107395,455.8503341016407 753.398208922112,457.2061313515862Z"
                        />
                      </svg>
                    </div>
                  </div>
                  <div class="col-4a2">
                    <h4>Eastern Equatoria</h4>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Donec cursus nunc eget blandit fringilla. Suspendisse
                      facilisis libero enim, eu semper neque vestibulum vitae.
                    </p>
                  </div>
                </div>
                <div class="col-4b">
                  <div class="col-4b1">
                    <h2 class="text-center">56</h2>
                    <h5>Square Km</h5>
                    <hr />
                  </div>
                  <div class="col-4b2">
                    <h2 class="text-center">7</h2>
                    <h5>Counties</h5>
                    <hr />
                  </div>
                  <div class="col-4b3">
                    <h2 class="text-center">7</h2>
                    <h5>Payam</h5>
                    <hr />
                  </div>
                  <div class="col-4b4">
                    <h2 class="text-center">184K</h2>
                    <h5>Population</h5>
                  </div>
                </div>
              </div>
              <div class="col-5">
                <div class="col-5a">
                  <div class="col-5a1">
                    <h3>Funds</h3>
                  </div>
                  <div class="col-5a2">
                    <div class="col-5a2a">
                      <h2 class="text-center">$84.7M</h2>
                      <h5>Disbursed</h5>
                    </div>
                    <div class="col-5a2b">
                      <h2 class="text-center">$18.4M</h2>
                      <h5>Budgeted</h5>
                    </div>
                  </div>
                </div>
                <div class="col-5b">
                  <div class="col-5b1">
                    <h3>Projects</h3>
                  </div>
                  <div class="col-5b2">
                    <div class="col-5b2a">
                      <h2 class="text-center">7</h2>
                      <h5>Active</h5>
                    </div>
                    <div class="col-5b2b">
                      <h2 class="text-center">13</h2>
                      <h5>Complete</h5>
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
  name: "DashboardLocations",
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

/* ---------------------- css location cards ----------------- */
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
</style>
