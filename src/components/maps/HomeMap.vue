<template>
    <div class="map-area">
        <div ref="maparea" id="mapArea"></div>
    </div>
</template>
<script>
    // import {ref} from 'vue'


    export default{
        name: 'HomeMap',
        data() {
            return {
                msg: 'Map Area of Distribution',
                url: "https://10ax.online.tableau.com/t/marshud/views/Updated-aims-data/Sheet1",
                options: {
                    hideTabs: false
                }
            }
        },
        mounted: function () {
            let tableau_ = document.createElement('script')
            tableau_.setAttribute("https://10ax.online.tableau.com/javascripts/api/tableau.embedding.3.latest.min.js");
            document.head.appendChild(tableau_);

            this.initViz();
        },
        methods: {
            initViz: function () {
                let viz = new tableau.Viz(this.$refs.maparea, this.url, this.options);
            } 
        },
        
        
    }
</script>