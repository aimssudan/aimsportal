<template>  
  <div id="bar-chart">
    <apexchart type="bar" height="350" :series="chartData" :options="chartOptions"></apexchart>
  </div>
</template>

<script>
import { mapActions} from 'vuex'

export default {
  name: 'BarChartReport',
  props: {
    chartData: {
      type: Array,
    },
    chartLabels: {
      type: Array
    },
    yAxisTitle: {
      type: String,
      default: "amount (millions)"
    }
  },
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
        decimalsInFloat: 0,
        forceNiceScale: true,
        title: {
          text: this.yAxisTitle,
          rotate: -90,
          offsetX: 0,
          offsetY: 0,
          style: {
              // color: undefined,
              // fontSize: '12px',
              // fontFamily: 'Helvetica, Arial, sans-serif',
              // fontWeight: 600,
              // cssClass: 'apexcharts-yaxis-title',
          },
      },
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