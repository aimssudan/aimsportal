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

          <div class="row">
            <div class="col-6" style="width: 50%">
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
            <div class="col-6" style="width: 50%">
              <div class="container" style="height: 100%">
                <h1 class="text-center">$24.7M</h1>
                <h4>Total Funds</h4>
              </div>
            </div>

            <div class="col-6" style="width: 50%">
              <div class="container" style="height: 100%">
                <h1 class="text-center">16</h1>
                <h4>Projects</h4>
              </div>
            </div>
          </div>

          <div class="row">
            <div class="col-6" style="width: 20%">
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
              <div class="container" style="width: 100%">
                <h4>Eastern Equatoria</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                  cursus nunc eget blandit fringilla. Suspendisse facilisis
                  libero enim, eu semper neque vestibulum vitae. Aliquam erat
                  volutpat. Sed velit odio, auctor eget sem nec, interdum
                  fringilla erat.
                </p>
              </div>
            </div>

            <div class="col-6" style="width: 50%">
              <div class="container" style="height: 100%">
                <h2 class="text-center">56</h2>
                <h5>Square Km</h5>
                <hr />
                <h2 class="text-center">7</h2>
                <h5>Counties</h5>
                <hr />
                <h2 class="text-center">7</h2>
                <h5>Payam</h5>
                <hr />
                <h2 class="text-center">184K</h2>
                <h5>Population</h5>
              </div>
            </div>

            <div class="col-6" style="width: 30%">
              <div class="container" style="height: 100%; width: 100%">
                <ul>
                  <li class="chart-tabs">
                    <a
                      href="data:text/html,<p>Project Pie Chart (Active Vs Completed)</p>"
                      target="tabcontent"
                      >Projects</a
                    >
                  </li>

                  <li class="chart-tabs">
                    <a
                      href="data:text/html,<p>Budget Pie Chart (Disbused Vs Nondisbursed)</p>"
                      target="tabcontent"
                      >Budgets</a
                    >
                  </li>
                </ul>

                <iframe
                  src="data:text/html,<h2>HELLO</h2>"
                  name="tabcontent"
                ></iframe>
              </div>
            </div>
          </div>

          <hr />

          <div class="row3">
            <div class="col-8" style="width: 60%">
              <div class="container" style="height: 100%">
                <div class="report-tabs">
                  <input
                    type="radio"
                    class="tabs__radio"
                    name="tabs-example"
                    id="tab1"
                    checked
                  />
                  <label for="tab1" class="tabs__label">Bar Chart</label>
                  <div class="tabs__content">CONTENT for Tab #1</div>

                  <input
                    type="radio"
                    class="tabs__radio"
                    name="tabs-example"
                    id="tab2"
                  />
                  <label for="tab2" class="tabs__label">Pie Chart</label>
                  <div class="tabs__content">CONTENT for Tab #2</div>

                  <input
                    type="radio"
                    class="tabs__radio"
                    name="tabs-example"
                    id="tab3"
                    checked
                  />
                  <label for="tab3" class="tabs__label">Donut Chart</label>
                  <div class="tabs__content">CONTENT for Tab #3</div>
                </div>
              </div>
            </div>
            <div class="col-8" style="width: 40%">
              <div class="container" style="height: 100%">
                <h3>Download Report</h3>
                <a href="#" class="pdf-button">Download PDF</a>
                <a href="#" class="xml-button">Download XML</a>
              </div>
            </div>
          </div>
          <hr />
          <div class="row">
            <h2>Projects List</h2>

            <table id="project-list">
              <tr>
                <th>#</th>
                <th>Project Title</th>
                <th>Total Funding</th>
                <th>Reporting Org</th>
                <th>Actions</th>
              </tr>
              <tr>
                <td>01</td>
                <td>
                  Education in Emergencies Fund for Jonglei, Upper Nile and
                  Unity States
                </td>
                <td>10,000,000</td>
                <td>Olive International</td>
                <td>
                  <button class="edit-button">Edit</button>
                  <button class="delete-button">Delete</button>
                </td>
              </tr>
              <tr>
                <td>02</td>
                <td>Health Pooled Fund</td>
                <td>5,000,000</td>
                <td>Olive International</td>
                <td>
                  <button class="edit-button">Edit</button>
                  <button class="delete-button">Delete</button>
                </td>
              </tr>
              <tr>
                <td>03</td>
                <td>
                  WHO: Polio & Immunizations (Health and Emergency Response
                  Support)
                </td>
                <td>2,100,000</td>
                <td>Olive International</td>
                <td>
                  <button class="edit-button">Edit</button>
                  <button class="delete-button">Delete</button>
                </td>
              </tr>
              <tr>
                <td>04</td>
                <td>Sustainable Agriculture and Food Security Project</td>
                <td>0</td>
                <td>Olive International</td>
                <td>
                  <button class="edit-button">Edit</button>
                  <button class="delete-button">Delete</button>
                </td>
              </tr>
              <tr>
                <td>05</td>
                <td>
                  South Sudan Health Care Capacity Building and Training Program
                </td>
                <td>500,000</td>
                <td>Olive International</td>
                <td>
                  <button class="edit-button">Edit</button>
                  <button class="delete-button">Delete</button>
                </td>
              </tr>
              <tr>
                <td>06</td>
                <td>
                  South Sudanese Youth Engagement and Capacity Building Program
                </td>
                <td>6,000,000</td>
                <td>Olive International</td>
                <td>
                  <button class="edit-button">Edit</button>
                  <button class="delete-button">Delete</button>
                </td>
              </tr>
              <tr>
                <td>07</td>
                <td>
                  Protection of women and children from the conflict affected
                  and famine stricken populations including critical
                  psychosocial support for children in the Equatorias, Unity and
                  Upper Nile
                </td>
                <td>150,000</td>
                <td>Olive International</td>
                <td>
                  <button class="edit-button">Edit</button>
                  <button class="delete-button">Delete</button>
                </td>
              </tr>
              <tr>
                <td>08</td>
                <td>
                  Provision of integrated education in emergencies package to
                  ensure access to lifesaving inclusive and quality education
                  for the newly arrived refugees in Ajuong Thok
                </td>
                <td>180,000</td>
                <td>Olive International</td>
                <td>
                  <button class="edit-button">Edit</button>
                  <button class="delete-button">Delete</button>
                </td>
              </tr>
              <tr>
                <td>09</td>
                <td>
                  Scaling Up Provision of Life-saving Health Services in Ajuong
                  Thok
                </td>
                <td>12,000,000</td>
                <td>Olive International</td>
                <td>
                  <button class="edit-button">Edit</button>
                  <button class="delete-button">Delete</button>
                </td>
              </tr>
              <tr>
                <td>10</td>
                <td>
                  Life-saving assistance for 10,000 newly arrived refugees in
                  Ajuong Thok camp
                </td>
                <td>25,000,000</td>
                <td>Olive International</td>
                <td>
                  <button class="edit-button">Edit</button>
                  <button class="delete-button">Delete</button>
                </td>
              </tr>
            </table>
          </div>
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

/* ------ location tabs ------------ */

/* Column 6/12 */
.right .col-6 {
  width: 20% !important;
  margin-bottom: 10px;
}

/* Column 6/12 */
.page .col-6:nth-child(1) {
  width: 45% !important;
}

/* Column 6/12 */
#app #app-content .page .row .right .container .row .col-6:nth-child(3) {
  width: 30% !important;
}

/* Container */
.right .row .container {
  display: flex;
  align-items: center;
  background-color: #ffffff;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  margin-bottom: 20px;
}

/* Container */
.page .col-6:nth-child(1) .container:nth-child(1) {
  min-height: 170px;
}

/* Container */
.page .container:nth-child(2) {
  min-height: 100px;
}

/* Column 6/12 */
.page .col-6:nth-child(2) {
  width: 25% !important;
}

/* Import Google Fonts */
@import url("//fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&display=swap");

/* Navigation */
.page .col-6 nav {
  background-color: #ffffff;
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
  border-bottom-left-radius: 30px;
  border-bottom-right-radius: 30px;
  box-shadow: 0px 0px 27px 0px rgba(44, 62, 80, 0.05);
}

/* Container */
.page .row:nth-child(3) .container {
  background-color: transparent;
  display: block;
  flex-direction: column;
  align-items: flex-end;
}

/* Container */
.right .row .container {
  display: flex !important;
  transform: translatex(0px) translatey(0px);
  margin-bottom: 20px;
  flex-direction: column;
  padding-top: 0px;
}

/* Column 6/12 */
#app
  #app-content
  .page
  .row
  .right
  .container
  .row:nth-child(3)
  .col-6:nth-child(3) {
  width: 25% !important;
}

/* Column 6/12 */
.page .row:nth-child(3) .col-6:nth-child(1) {
  width: 50% !important;
}

/* Heading */
.right h1 {
  font-weight: 700;
  color: #036dd8;
  line-height: 1em;
  margin-bottom: 2px;
}

/* Paragraph */
.right p {
  font-weight: 600;
  color: #828282;
  text-transform: uppercase;
  font-size: 14px;
  font-family: "Open Sans", sans-serif;
}

@media (min-width: 1200px) {
  /* Heading */
  .right h1 {
    font-size: 50px;
  }
}

/* Container */
.page .col-6:nth-child(1) .container:nth-child(1) {
  padding-top: 10px;
  padding-bottom: 15px;
  flex-direction: column;
  justify-content: flex-start;
  align-items: normal;
  border-top-right-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-left-radius: 0px;
  margin-bottom: 0px;
}

/* Heading */
.right h4 {
  font-weight: 600;
  color: #0061b7;
  margin-top: 8px;
  margin-left: 10px;
}

/* Container */
.page .row:nth-child(4) .col-6:nth-child(2) .container {
  border-top-left-radius: 0px;
  border-bottom-left-radius: 0px;
  padding-left: 12px;
  margin-bottom: 0px;
  justify-content: center;
  transform: translatex(0px) translatey(0px);
}

/* Container */
.page .container:nth-child(2) {
  border-top-left-radius: 0px !important;
  border-top-right-radius: 0px !important;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 0px !important;
  margin-bottom: 0px !important;
}

/* Column 6/12 */
.page .row:nth-child(4) .col-6:nth-child(1) {
  padding-right: 0px;
}

/* Column 6/12 */
.page .row:nth-child(4) .col-6:nth-child(2) {
  padding-left: 0px;
}

@media (max-width: 1199px) {
  /* Heading */
  .right h4 {
    font-size: 18px;
  }
}
/* Container */
.page .col-6:nth-child(1) .container:nth-child(1) {
  padding-top: 10px;
  padding-bottom: 15px;
  flex-direction: column;
  justify-content: flex-start;
  align-items: normal;
  border-top-right-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-left-radius: 0px;
  margin-bottom: 0px;
}

/* Heading */
.right h4 {
  font-weight: 600;
  color: #0061b7;
  margin-top: 8px;
  margin-left: 0px;
}

/* Container */
.page .row:nth-child(4) .col-6:nth-child(2) .container {
  border-top-left-radius: 0px;
  border-bottom-left-radius: 0px;
  padding-left: 12px;
  margin-bottom: 0px;
  justify-content: center;
  transform: translatex(0px) translatey(0px);
  align-items: normal;
  padding-right: 20px;
}

/* Container */
.page .container:nth-child(2) {
  border-top-left-radius: 0px !important;
  border-top-right-radius: 0px !important;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 0px !important;
  margin-bottom: 0px !important;
  align-items: normal !important;
}

/* Column 6/12 */
.page .row:nth-child(4) .col-6:nth-child(1) {
  padding-right: 0px;
}

/* Column 6/12 */
.page .row:nth-child(4) .col-6:nth-child(2) {
  padding-left: 0px;
}

/* Horizontal Rule */
.page .col-6 hr {
  margin-top: 0px;
  margin-bottom: 0px;
}

/* Text center */
.right h2.text-center {
  line-height: 1em;
  color: #0068d1;
  font-weight: 600;
  margin-bottom: 0px;
  margin-top: 15px;
  text-align: right !important;
}

/* Paragraph */
.right p {
  font-size: 12px !important;
  text-transform: capitalize !important;
  font-weight: 400 !important;
}

/* Paragraph */
.page .row:nth-child(4) .col-6:nth-child(2) p:nth-child(2) {
  font-size: 12px;
  text-align: right;
  font-weight: 600 !important;
  text-transform: uppercase !important;
}

/* Paragraph */
.page p:nth-child(5) {
  font-size: 12px;
  text-align: right;
  text-transform: uppercase !important;
  font-weight: 600 !important;
}

/* Paragraph */
.page p:nth-child(8) {
  font-size: 12px;
  text-align: right;
  font-weight: 600 !important;
  text-transform: uppercase !important;
}

/* Container */
.right .row .container {
  transform: translatex(0px) translatey(0px);
}

/* Heading */
.right h6 {
  font-weight: 600;
}

@media (max-width: 1199px) {
  /* Heading */
  .right h4 {
    font-size: 18px;
  }

  /* Text center */
  .right h2.text-center {
    font-size: 28px;
  }
}

/* Heading */
.right .col-6 h5 {
  font-size: 12px;
  text-align: right;
  font-weight: 600;
  color: #7a7a7a;
  text-transform: uppercase;
}

/* Heading */
.right h4 {
  color: #686868 !important;
  margin-top: 0px !important;
  text-transform: capitalize;
}

@media (min-width: 1200px) {
  /* Heading */
  .right h4 {
    font-size: 18px;
  }
}

/* Column 6/12 */
.page .row:nth-child(4) .col-6:nth-child(1) {
  padding-left: 2px;
}

/* Container */
.page .container:nth-child(2) {
  padding-left: 20px;
}

/* Horizontal Rule */
.right > .container > hr {
  margin-top: 25px;
  margin-bottom: 35px;
  border-color: #86a7bf;
}

/* Horizontal Rule */
#app #app-content .page .row .right > .container > hr {
  border-width: 1px !important;
}

@media (max-width: 575px) {
  /* Column 6/12 */
  .page .row:nth-child(4) .col-6:nth-child(1) {
    width: 70% !important;
    padding-left: 12px;
  }

  /* Column 6/12 */
  .page .row:nth-child(4) .col-6:nth-child(2) {
    width: 30% !important;
  }

  /* Right */
  #app #app-content .page .row .right {
    padding-right: 15px !important;
  }

  /* Right */
  .page .right {
    transform: translatex(0px) translatey(0px);
  }
}

@media (max-width: 450px) {
  /* Right */
  .page .right {
    transform: translatex(0px) translatey(0px);
  }

  /* Column 6/12 */
  .page .row:nth-child(4) .col-6:nth-child(1) {
    width: 100% !important;
    padding-right: 12px !important;
    margin-bottom: 0px;
    padding-left: 12px;
  }

  /* Container */
  .right .row .container {
    border-top-right-radius: 0px !important;
  }

  /* Column 6/12 */
  .page .row:nth-child(4) .col-6:nth-child(2) {
    width: 100% !important;
    padding-left: 12px !important;
  }

  /* Container */
  #app-content .page .row .right .container .row .col-6 .container {
    border-bottom-left-radius: 10px !important;
  }

  /* Container */
  #app-content
    .page
    .row
    .right
    .container
    .row
    .col-6:nth-child(1)
    .container:nth-child(1) {
    border-bottom-left-radius: 0px !important;
  }

  /* Container */
  .page .col-6:nth-child(1) .container:nth-child(1) {
    border-top-right-radius: 10px !important;
  }

  /* Row */
  .page .container .row {
    transform: translatex(0px) translatey(0px);
  }

  /* Column 6/12 */
  .page .col-6 {
    transform: translatex(0px) translatey(0px);
  }

  /* Container */
  #app
    #app-content
    .page
    .row
    .right
    .container
    .row
    .col-6
    .container:nth-child(2) {
    border-bottom-left-radius: 0px !important;
  }

  /* Container */
  .page .row:nth-child(4) .col-6:nth-child(2) .container {
    padding-bottom: 20px;
    float: left;
    align-items: flex-start !important;
    flex-direction: column;
    justify-content: flex-start !important;
  }
}
/* Column 6/12 */
.page .row:nth-child(4) .col-6:nth-child(1) {
  padding-left: 12px !important;
}

@media (max-width: 1399px) {
  /* Column 6/12 */
  .page .row:nth-child(3) .col-6:nth-child(2) {
    width: 30% !important;
  }

  /* Column 6/12 */
  #app
    #app-content
    .page
    .row
    .right
    .container
    .row:nth-child(3)
    .col-6:nth-child(1) {
    width: 45% !important;
  }

  /* Column 6/12 */
  #app
    #app-content
    .page
    .row
    .right
    .container
    .row:nth-child(3)
    .col-6:nth-child(3) {
    width: 20% !important;
  }

  /* Text center */
  .right h1.text-center {
    font-size: 43px;
  }
}

@media (max-width: 1199px) {
  /* Column 6/12 */
  .page .row:nth-child(4) .col-6:nth-child(1) {
    width: 50% !important;
  }

  /* Column 6/12 */
  .page .row:nth-child(4) .col-6:nth-child(2) {
    width: 20% !important;
  }

  /* Column 6/12 */
  .page .row:nth-child(3) .col-6:nth-child(2) {
    padding-left: 0px;
    padding-right: 0px;
  }

  /* Text center */
  .right h1.text-center {
    font-size: 35px;
  }

  /* Column 6/12 */
  #app
    #app-content
    .page
    .row
    .right
    .container
    .row:nth-child(3)
    .col-6:nth-child(3) {
    width: 15% !important;
  }
}

@media (max-width: 991px) {
  /* Right */
  #app #app-content .page .row .right {
    padding-right: 15px !important;
  }
}

@media (max-width: 767px) {
  /* Column 6/12 */
  #app #app-content .page .row .right .container .row .col-6 {
    width: 243% !important;
  }

  /* Navigation */
  .page .col-6 nav {
    width: 256px;
  }

  /* Column 6/12 */
  #app
    #app-content
    .page
    .row
    .right
    .container
    .row:nth-child(3)
    .col-6:nth-child(2) {
    width: 30% !important;
  }

  /* Right */
  .page .right {
    transform: translatex(0px) translatey(0px);
  }
}

@media (max-width: 450px) {
  /* Column 6/12 */
  #app
    #app-content
    .page
    .row
    .right
    .container
    .row:nth-child(3)
    .col-6:nth-child(1) {
    width: 100% !important;
  }

  /* Column 6/12 */
  .page .row:nth-child(3) .col-6:nth-child(2) {
    max-width: 50%;
  }

  /* Column 6/12 */
  #app
    #app-content
    .page
    .row
    .right
    .container
    .row:nth-child(3)
    .col-6:nth-child(2) {
    width: 50% !important;
  }

  /* Column 6/12 */
  .page .row:nth-child(3) .col-6:nth-child(3) {
    max-width: 923px;
    transform: translatex(0px) translatey(0px);
  }

  /* Container */
  .page .row:nth-child(3) .col-6:nth-child(3) .container {
    width: 140px;
    justify-content: center;
    align-items: flex-end;
  }

  /* Column 6/12 */
  #app
    #app-content
    .page
    .row
    .right
    .container
    .row:nth-child(3)
    .col-6:nth-child(3) {
    width: 42% !important;
  }

  /* Container */
  .page .row:nth-child(3) .col-6:nth-child(2) .container {
    justify-content: center;
    align-items: flex-start;
  }
}

@media (min-width: 1200px) {
  /* Right */
  .page .right {
    transform: translatex(0px) translatey(0px);
  }
}

/* ------------ tabs -------------- */

/* List */
.page .col-6 .container ul {
  display: inline;
}

/* List Item */
.row .col-6 .container ul li {
  display: inline;
  font-weight: 600;
  font-size: 14px;
  text-transform: capitalize;
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 0px;
  padding-bottom: 0px;
  margin-top: 10px;
  margin-bottom: 10px;
}

/* Iframe */
#app #app-content .page .row .right .container .row .col-6 .container iframe {
  width: 100% !important;
  height: auto !important;
}

/* Iframe */
.page iframe {
  max-width: 100%;
  min-height: 225px;
}

/* List */
.right .row .container ul {
  padding-left: 0px;
  margin-left: 0px;
  margin-right: 0px;
}

/* Container */
.page .row:nth-child(4) .col-6:nth-child(3) .container {
  padding-top: 10px;
}

/* Paragraph */
.right p {
  font-size: 14px;
}

/* Paragraph */
#app #app-content .page .row .right .container .row .col-6 .container p {
  font-size: 14px !important;
}

/* Link */
.right .chart-tabs a {
  font-size: 15px;
}

/* List Item */
.row .col-6 .container ul li {
  display: inline;
  font-weight: 600;
  font-size: 14px;
  text-transform: capitalize;
  padding-left: 0px !important;
  padding-right: 0px !important;
  padding-top: 0px;
  padding-bottom: 0px;
  margin-top: 0px !important;
  margin-bottom: 0px !important;
  margin-left: 20px;
  margin-right: 20px;
  color: #ffffff;
}

/* Iframe */
#app #app-content .page .row .right .container .row .col-6 .container iframe {
  width: 100% !important;
}

/* Iframe */
.page iframe {
  max-width: 100%;
}

/* List */
.right .row .container ul {
  padding-left: 20px !important;
  margin-left: 0px;
  margin-right: 0px;
  padding-right: 20px;
  padding-top: 10px;
  padding-bottom: 10px;
  margin-bottom: 0px;
  display: flex !important;
  width: 100%;
  justify-content: center;
  align-items: center;
  background-color: #0061b7;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}

/* Container */
.page .row:nth-child(4) .col-6:nth-child(3) .container {
  padding-top: 0px !important;
  padding-left: 0px;
  padding-right: 0px;
}

/* Paragraph */
.right p {
  font-size: 14px;
}

/* Paragraph */
#app #app-content .page .row .right .container .row .col-6 .container p {
  font-size: 14px !important;
}

/* Iframe */
.right iframe {
  padding-left: 5px;
  padding-right: 5px;
  padding-top: 5px;
  padding-bottom: 5px;
}

/* Link */
.page .chart-tabs a {
  color: #ffffff;
}

@media (max-width: 991px) {
  /* Column 6/12 */
  .page .row:nth-child(3) .col-6:nth-child(3) {
    max-width: 73%;
    min-width: 25%;
  }

  /* Column 6/12 */
  #app
    #app-content
    .page
    .row
    .right
    .container
    .row:nth-child(3)
    .col-6:nth-child(3) {
    width: 25% !important;
  }

  /* List */
  .right .row .container ul {
    text-align: center;
  }
}

@media (max-width: 767px) {
  /* Column 6/12 */
  #app
    #app-content
    .page
    .row
    .right
    .container
    .row:nth-child(4)
    .col-6:nth-child(3) {
    width: 100% !important;
  }

  /* Column 6/12 */
  .page .row:nth-child(4) .col-6:nth-child(3) {
    margin-top: 30px;
  }

  /* List */
  .right .row .container ul {
    text-align: left;
    justify-content: flex-start !important;
  }

  /* Container */
  .page .row:nth-child(4) .col-6:nth-child(2) .container {
    justify-content: flex-start !important;
    align-items: flex-start !important;
    padding-left: 20px !important;
    margin-left: 12px;
    padding-bottom: 20px;
    border-top-right-radius: 0px;
    border-bottom-left-radius: 10px !important;
  }

  /* Column 6/12 */
  .page .row:nth-child(4) .col-6:nth-child(1) {
    margin-bottom: 0px;
  }

  /* Container */
  .page .container:nth-child(2) {
    border-bottom-left-radius: 0px !important;
  }
}

@media (max-width: 450px) {
  /* Container */
  .right .row .container {
    margin-right: 0px;
    margin-left: 0px !important;
  }
}
/* Container */
.page .row:nth-child(3) .col-6:nth-child(2) .container {
  padding-left: 27px;
}

/* --------------- hide graphs ------------- */

/* Row */
.page .row:nth-child(11) {
  display: none;
}
/* ------------------------------ */

/* --------------- table ------------- */

#project-list {
  font-family: Arial, Helvetica, sans-serif;
  border-collapse: collapse;
  width: 100%;
}

#project-list td,
#project-list th {
  border: 0px solid #ddd;
  padding: 8px;
}

#project-list tr:nth-child(even) {
  background-color: #fff;
}

#project-list tr:hover {
  background-color: #cde8ff;
}

#project-list th {
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: left;
  background-color: #0061b7;
  color: white;
}

.edit-button {
  background-color: #1c95ff;
  border: none;
  color: white;
  padding: 5px 10px;
  text-align: center;
  font-size: 12px;
  margin: 4px 2px;
  opacity: 0.6;
  transition: 0.3s;
  display: inline-block;
  text-decoration: none;
  cursor: pointer;
  border-radius: 8px;
}

.delete-button {
  background-color: #ff3715;
  border: none;
  color: white;
  padding: 5px 10px;
  text-align: center;
  font-size: 12px;
  margin: 4px 2px;
  opacity: 0.6;
  transition: 0.3s;
  display: inline-block;
  text-decoration: none;
  cursor: pointer;
  border-radius: 8px;
}

.edit-button:hover {
  opacity: 1;
}
.delete-button:hover {
  opacity: 1;
}
/* Project list */
#project-list {
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  box-shadow: 0px 0px 20px 0px rgba(44, 62, 80, 0.24);
  transform: translatex(0px) translatey(0px);
  margin-bottom: 50px;
  margin-left: 12px;
  margin-right: 12px;
}

/* Body Of Table */
#project-list tbody {
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
}

/* Table Row */
#project-list tbody tr {
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}

/* Th */
.page tr th:nth-child(1) {
  border-top-left-radius: 10px;
}

/* Th */
.page tr th:nth-child(5) {
  border-top-right-radius: 10px;
}

/* Table Data */
.page tr:nth-child(11) td:nth-child(1) {
  border-bottom-left-radius: 10px;
}

/* Table Data */
.page tr:nth-child(11) td:nth-child(5) {
  border-bottom-right-radius: 10px;
}

/* Table Data */
#project-list tr td {
  transform: translatex(0px) translatey(0px);
}

/* Table Data */
.page tr:nth-child(2) td:nth-child(2) {
  width: 425px;
}

/* Heading */
.right .row h2 {
  font-weight: 600;
  color: #0077ef !important;
}

/* Container */
.page .row .right > .container {
  transform: translatex(0px) translatey(0px);
}

@media (max-width: 991px) {
  /* Table Data */
  #project-list tr td {
    font-size: 12px;
  }
}

@media (min-width: 1200px) {
  /* Heading */
  .page .row:nth-child(6) h2 {
    font-size: 28px;
  }
}

/* Body Of Table */
#project-list tbody {
  background-color: transparent;
}

/* Project list */
#project-list {
  background-color: #f2f9fc;
}

@media print {
  #project-list {
    page-break-after: always;
  }
}
/* ------------------------------ */

/* ---------download buttons --------- */

.pdf-button {
  background-color: #1c95ff;
  border: none;
  color: white;
  padding: 10px 20px;
  text-align: center;
  font-size: 18px;
  font-weight: 600;
  margin: 10px 5px;
  opacity: 0.6;
  transition: 0.3s;
  display: inline-block;
  text-decoration: none;
  cursor: pointer;
  border-radius: 8px;
  box-shadow: 0px 0px 17px 4px rgba(0, 68, 158, 0.24);
  border-style: solid;
  border-width: 1px;
  border-color: #ffffff;
}

.xml-button {
  background-color: #01ad1c;
  border: none;
  color: white;
  padding: 10px 20px;
  text-align: center;
  font-size: 18px;
  font-weight: 600;
  margin: 10px 5px;
  opacity: 0.6;
  transition: 0.3s;
  display: inline-block;
  text-decoration: none;
  cursor: pointer;
  border-radius: 8px;
  box-shadow: 0px 0px 17px 4px rgba(0, 68, 158, 0.24);
  border-style: solid;
  border-width: 1px;
  border-color: #ffffff;
}

.pdf-button:hover {
  opacity: 1;
}
.xml-button:hover {
  opacity: 1;
}

@media (max-width: 991px) {
  /* Th */
  #project-list tr th {
    font-size: 14px;
  }

  /* Table Data */
  #project-list tr td {
    font-size: 14px !important;
    transform: translatex(0px) translatey(0px);
  }
}

@media (max-width: 767px) {
  /* Th */
  #project-list tr th {
    font-size: 14px;
  }
}

@media (max-width: 450px) {
  /* Button */
  .right .pdf-button {
    font-size: 14px;
  }

  /* Button */
  .right .xml-button {
    font-size: 14px;
  }

  /* Heading */
  .right h3 {
    font-size: 20px;
  }

  /* Th */
  #project-list tr th {
    font-size: 12px;
  }
}

/* ----------------------------------------*/

/* ----------------------------------------*/

.report-tabs {
  display: flex;
  flex-wrap: wrap;
  max-width: 400px;
  font-family: sans-serif;
}

.tabs__label {
  padding: 10px 16px;
  cursor: pointer;
}

.tabs__radio {
  display: none;
}

.tabs__content {
  order: 1;
  width: 100%;
  line-height: 1.5;
  font-size: 0.9em;
  display: none;
  margin-bottom: 35px;
}

.tabs__radio:checked + .tabs__label {
  font-weight: bold;
  color: #0085f9;
  border-bottom: 2px solid #0085f9;
  background-color: rgba(255, 255, 255, 0.66);
}

.tabs__radio:checked + .tabs__label + .tabs__content {
  display: initial;
}

/* Tabs  content */
.right .report-tabs .tabs__content {
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 20px;
  padding-bottom: 20px;
}

/* Label */
.right .report-tabs label {
  background-color: rgba(252, 252, 252, 0.34);
}

/* Label (hover) */
.right .report-tabs label:hover {
  background-color: rgba(255, 255, 255, 0.63);
}

/* Tabs  content */
.right .report-tabs .tabs__content {
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 20px;
  padding-bottom: 20px;
  background-color: rgba(255, 255, 255, 0.63);
  min-height: 400px;
  border-bottom-right-radius: 10px;
  border-bottom-left-radius: 10px;
}

/* Label */
.right .report-tabs label {
  background-color: rgba(252, 252, 252, 0.34);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}

/* Label (hover) */
.right .report-tabs label:hover {
  background-color: rgba(255, 255, 255, 0.63);
}

/* Label (active) */
.right .report-tabs label:active {
  background-color: rgba(255, 255, 255, 0.66);
}

/* Report tabs */
.right .report-tabs {
  max-width: 700px;
  width: 700px;
}

/* Tabs  content */
.page .report-tabs .tabs__content {
  border-top-right-radius: 10px;
}

/* Report tabs */
.page .report-tabs {
  max-width: 100% !important;
}

/* Tabs  content */
#app
  #app-content
  .page
  .row
  .right
  .container
  .row3
  .col-6
  .container
  .report-tabs
  .tabs__content {
  width: 100% !important;
}

/* Tabs  content */
.page .report-tabs .tabs__content {
  max-width: 100%;
}

/* Column 8/12 */
#app #app-content .page .row .right .container .row3 .col-8 {
  width: 60% !important;
}

/* Column 8/12 */
#app #app-content .page .row .right .container .row3 .col-8:nth-child(2) {
  width: 40% !important;
}

/* Row3 */
.right .row3 {
  display: flex;
}

/* Heading */
.page h3 {
  margin-top: 50px;
  font-weight: 600;
  color: #686868;
  padding-left: 5px;
}

/* Label */
.page .report-tabs label {
  border-top-left-radius: 0px !important;
  border-top-right-radius: 5px !important;
}

/* Tabs  label */
.page .report-tabs .tabs__label:nth-child(2) {
  border-top-left-radius: 10px !important;
  border-top-right-radius: 0px !important;
}

/* Tabs  label */
.page .report-tabs .tabs__label:nth-child(8) {
  border-top-right-radius: 10px !important;
}

@media (min-width: 1200px) {
  /* Heading */
  .page h3 {
    font-size: 20px;
  }
}


</style>
