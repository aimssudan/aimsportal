<template>  
  <canvas id="funding-by-sector-chart"></canvas>
</template>

<script>
import  Chart  from 'chart.js/auto';
import { mapActions} from 'vuex'

export default {
  name: 'FundingBySectorChart',
  data() {
    return {
      chartData: {
          type: 'doughnut',
          data: {
              labels: [],
              datasets: [{
                  label: 'this year',
                  data: [],
                  backgroundColor: [],
                  hoverOffset: 4
              }]
          },
          options: {
            
          }
      },
    }
  },
  methods: {
    ...mapActions({
      fetchData : 'reports/getFundingBySectorReport'
    })
  },
  mounted() {
    this.fetchData().then(
      (response) => {
          let chartData = response.data
          let colors = [];
          
          for (let i = 0; i < chartData.length; i++) {
              colors.push("#" + Math.floor(Math.random()*16777215).toString(16).padStart(6, '0').toUpperCase())
          }
          this.chartData.data.labels = chartData.map(value => value.sector)
          this.chartData.data.datasets[0].data = chartData.map(value => value.data)
          this.chartData.data.datasets[0].label = 'Value in  (USD)'
          this.chartData.data.datasets[0].backgroundColor = colors
          const ctx = document.getElementById('funding-by-sector-chart').getContext('2d');
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