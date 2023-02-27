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
            // columnWidth: '55%',
            // endingShape: 'rounded'
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
    console.log(`chart labels${this.chartData}`)
    // this.fetchData().then(
    //   (response) => {
    //       let chartData = response.data
    //       let colors = [];

    //       for (let i = 0; i < chartData.length; i++) {
    //           colors.push("#" + Math.floor(Math.random()*16777215).toString(16).padStart(6, '0').toUpperCase())
    //       }
    //       this.chartData.data.labels = chartData.map(value => value.year)
    //       this.chartData.data.datasets[0].data = chartData.map(value => value.data)
    //       this.chartData.data.datasets[0].label = 'Past '+chartData.length+' years (USD)'
    //       this.chartData.data.datasets[0].backgroundColor = colors
    //       const ctx = document.getElementById('funding-trend-chart').getContext('2d');
    //       new Chart(ctx, this.chartData);
    //   },
    //   (error) => {
    //     const errorMessage =
    //           (error.response &&
    //             error.response.data &&
    //             error.response.data.message) ||
    //           error.message ||
    //           error.toString();
             
    //     this.$store.commit("showSnackbar", errorMessage)
    //   }
    // )
    
  }
}
</script>