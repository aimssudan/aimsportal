<template>  
  <div id="pie-chart">
    <apexchart type="pie"  :series="chartData[0].data" :options="chartOptions"></apexchart>
  </div>
</template>

<script>
import { mapActions} from 'vuex'

export default {
  name: 'PieChartReport',
  props: {
    chartData: {
      type: Array,
    },
    chartLabels: {
      type: Array
    },
    title: {
      type: String,
      default: "Pie Chart"
    }
  },
  data() {
    return {
      series: [],
        chartOptions: {
          chart: {
            height: 'auto',
          },
          labels: this.chartLabels,
          dataLabels: {
              enabled: false
          },
          legend: {
            show: true,
            position: 'bottom'
          }
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