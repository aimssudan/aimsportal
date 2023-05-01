<template>
    <div class="state-wrapper">
        <h4>{{currentStateName}}</h4>
        <div ref="tooltipstate" id="toolTipState">
            <ul>
              <li>
                County: <b>{{ toolTip.state }}</b>
              </li>
              <li>
                Projects:
                <span class="badge rounded-pill bg-danger">{{
                  toolTip.projects
                }}</span>
              </li>
              <li>
                Funding (USD):
                <span class="badge rounded-pill bg-danger"
                  >{{ toolTip.funding }}
                </span>
              </li>
              <li>
                No. of Involved Orgs:
                <span class="badge rounded-pill bg-danger">{{
                  toolTip.organisations
                }}</span>
              </li>
            </ul>
          </div>
        <svg
        id="mapstate"
        @mouseout="leave"
        @mousemove="enter"
        width="500"
        height="500" 
        viewBox="0 0 800 594"
        >
        <g v-html="clickedState">
        </g>
        
        </svg>
        
    </div>
</template>

<script>
import { mapActions } from 'vuex';
import {Q319965, Q491138, Q488519, Q487709, Q332095, Q319979, Q487702, Q488904, Q491111, Q491096 } from '../maps/state-svgs'
//const statemaps = await import('../maps/state-svgs')

export default {
    name: "StatesMap",
    props: ["currentStateId","currentStateName"],
    data() {
        return {
            mapData: [],
            isMapDataLoaded: false,
            toolTip: {
            state: "",
            projects: 0,
            funding: 0,
            organisations: "",
            percentage: "",
            },
            currentCounty: "",
            allStates: { "Q319965":Q319965, "Q491138":Q491138, "Q488519":Q488519, "Q487709":Q487709, "Q332095":Q332095, "Q319979":Q319979, "Q487702":Q487702, "Q488904":Q488904, "Q491111":Q491111, "Q491096":Q491096 },
            
        };
    },
    computed: {
        clickedState() {
            return this.allStates[this.currentStateId]
        }
        
    },
    methods: {
        ...mapActions({
            getSummaryPerCountyReport: "reports/getSummaryPerCountyReport",
        }),
        getCurrentState() {
            console.log(this.unity)
            this.clickedState = this.unity[this.currentStateId]
        },
    enter(e) {
      if (e.target.nodeName == "path") {
        let details = e.target.attributes;
        this.toolTip.state = details.name.value;
        this.toolTip.projects = this.mapData.find(
          (element) => element.wikidataid == details.wikidataid.value
        )?.projects;
        this.toolTip.funding = this.mapData.find(
          (element) => element.wikidataid == details.wikidataid.value
        )?.funding;
        this.toolTip.organisations = this.mapData.find(
          (element) => element.wikidataid == details.wikidataid.value
        )?.organisations;
        this.$refs.tooltipstate.style.transform = `translate(${e.offsetX}px, ${e.offsetY}px)`;

        e.target.style.opacity = 0.6;
      }
    },
    leave: (e) => {
      if (e.target.nodeName == "path") {
        e.target.style.opacity = 1;
        //console.log(e.target)
      }
    },
    },
    created() {
        this.getSummaryPerCountyReport().then(
      (response) => {
        this.mapData = response.data;
        this.isMapDataLoaded = true;
      },
      (error) => {
        console.log(error);
      }
    );
    }
}
</script>

<style scoped>

svg#mapstate {
  width: 100%;
  height: 100%;
  position: relative;
  z-index: 998;
  filter: drop-shadow(3px 5px 2px rgb(0 0 0 / 0.4));
  /* border: 1px solid #000; */
}
.state-wrapper {
  width: 100%;
  height: 100%;
  margin: auto;
}

#toolTipState {
  padding-left: 15px;
  padding-right: 15px;
  padding-top: 10px;
  padding-bottom: 10px;
  color: white;
  font-weight: 500;
  font-size: 18px;
  background-color: rgba(31, 81, 191, 0.82) !important;
  box-shadow: 0px 0px 38px 15px rgba(109, 109, 109, 0.22);
  border-top-left-radius: 20px !important;
  border-top-right-radius: 20px !important;
  border-bottom-left-radius: 20px !important;
  border-bottom-right-radius: 20px !important;
}

div#toolTipState {
  position: absolute;
  transition: 0.2s ease-out;
  background-color: #ecf0f1;
  border-radius: 3px;
  z-index: 999;
  pointer-events: none;
}

div#toolTipState ul {
  font-family: sans-serif;
  list-style: none;
  padding: 5px;
  margin: 0;
  font-size: 0.7em;
}

div#toolTipState ul li {
  margin-bottom: 3px;
}
</style>