<template>  
  <canvas id="funding-trend-chart"></canvas>
</template>

<script>
import  Chart  from 'chart.js/auto';
import { mapActions} from 'vuex'

export default {
  name: 'FundingTrendChart',
  data() {
    return {
      chartData: {
          type: 'bar',
          data: {
              labels: ['2018', '2019', '2020', '2021', '2022', '2023'],
              datasets: [{
                  label: 'past years',
                  data: [12, 19, 3, 5, 2, 3],
                  borderWidth: 1
              }]
          },
          options: {
              scales: {
                  y: {
                      beginAtZero: true
                  }
              }
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
    this.fetchData().then(
      (response) => {
          let chartData = response.data
          this.chartData.data.labels = chartData.map(value => value.year)
          this.chartData.data.datasets[0].data = chartData.map(value => value.data)
          this.chartData.data.datasets[0].label = 'Past '+chartData.length+' years (USD)'
          const ctx = document.getElementById('funding-trend-chart').getContext('2d');
          new Chart(ctx, this.chartData);
      },
      (error) => {
        const errorMessage =
              (error.response &&
                error.response.data &&
                error.response.data.message) ||
              error.message ||
              error.toString();
             
        this.$store.commit("showSnackbar", errorMessage)
      }
    )
    
  }
}
</script>