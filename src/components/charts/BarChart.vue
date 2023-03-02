<template>  
  <div id="bar-chart">
    <apexchart type="bar" height="350" :series="chartData" :options="chartOptions"></apexchart>
  </div>
</template>

<script>
import { mapActions} from 'vuex'

export default {
  name: 'BarChartReport',
  props: ['chartData', 'chartLabels'],
  data() {
    return {
      series: [],
        chartOptions: {
        chart: {
            type: 'bar',
            height: 350
        },
        plotOptions: {
            bar: {
            horizontal: false,
            },
        },
        dataLabels: {
            enabled: false
        },
        stroke: {
            show: true,
            width: 2,
            colors: ['transparent']
        },
        xaxis: {
            type: "category",
            categories: this.chartLabels,
            //overwriteCategories: this.chartLabels,
            labels: {
            show: true,
            rotate: -45,
            rotateAlways: true,
            hideOverlappingLabels: true,
            trim: true,
            minHeight: 40
            }
        },
        yaxis: {
        //   title: {
        //     text: '$ (thousands)'
        //   }
        },
        fill: {
            opacity: 1
        },
        tooltip: {
        //   y: {
        //     formatter: function (val) {
        //       return "$ " + val + " thousands"
        //     }
        //   }
        },
        colors: ['#ec8633']
        },
    }
  },
  methods: {
    ...mapActions({
      fetchData : 'reports/getFundingTrendReport'
    })
  },
  mounted() {
    
  }
}
</script>