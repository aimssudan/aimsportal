<template>
    <div class="map-area">
        <div ref="maparea" id="vizContainer"></div>        
    </div>
</template>
<script>
 import * as Tableau from '../../globals/tableau-api'


    export default{
        name: 'HomeMap',
        data() {
            return {
                viz: null,
                activeSheet: null,
                url: '<iframe allowtransparency="true" allowfullscreen="true" title="Data Visualization" marginheight="0" marginwidth="0" style="display: block; width: 712px; height: 600px; visibility: visible;" scrolling="no" src="https://public.tableau.com/views/aims-south-sudan-sample-1/Sheet1?:size=712,1&amp;:embed=y&amp;:showVizHome=n&amp;:bootstrapWhenNotified=y&amp;:tabs=n&amp;:toolbar=n&amp;:apiID=host1#navType=1&amp;navSrc=Parse" frameborder="0"></iframe>'
            }
        },
        mounted: function () {
            
            this.initViz();
        },
        methods: {
             initViz(){
            

            const placeholderDiv = document.getElementById("vizContainer");
            const url = "https://public.tableau.com/views/aims-south-sudan-sample-1/Sheet1"
            const options = {
               // hideTabs: true,
                hideToolbar: true,
                // onFirstInteractive: function () {
                //  let workbook = this.viz.getWorkbook();
                //  let activeSheet = workbook.getActiveSheet();
                //  this.activeSheet = activeSheet
                // }
            };
            this.viz = new Tableau.Viz(placeholderDiv, url, options);
        }
        },
        
        
    }
</script>