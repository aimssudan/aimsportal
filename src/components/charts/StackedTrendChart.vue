<template>  
  <canvas id="stacked-trend-chart"  style="background-color: white;"></canvas>
</template>

<script>
import  Chart  from 'chart.js/auto';
import { mapActions} from 'vuex'

export default {
  name: 'StackedTrendChart',
  data() {
    return {
      chartData: {
          type: 'bar',
          data: {
              labels: ['2018', '2019', '2020', '2021', '2022', '2023'],
              datasets: [
                {
                  label: 'committed amount',
                  data: [12, 19, 3, 5, 2, 3],
                  backgroundColor: 'green',
                  borderWidth: 1
                },
                {
                    label: 'budgeted amount',
                    data: [12, 19, 3, 5, 2, 3],
                    backgroundColor: 'red',
                    borderWidth: 1
                }
              ]
          },
          options: {
              scales: {
                  y: {
                      stacked: true,
                  },
                  x: {
                    stacked: true,
                  }
              }
          }
      },
    }
  },
  methods: {
    ...mapActions({
      fetchData : 'reports/getFundingTrendReport',
      fetchProjectCount: 'reports/getBudgetingTrendReport'
    })
  },
  mounted() {
    this.fetchData().then(
      (response) => {

          let chartData = response.data
          const colorOne = "#" + Math.floor(Math.random()*16777215).toString(16).padStart(6, '0').toUpperCase();
          this.chartData.data.labels = chartData.map(value => value.year)
          this.chartData.data.datasets[0].data = chartData.map(value => value.data)
          this.chartData.data.datasets[0].label = 'committed amount (USD)'
          this.chartData.data.datasets[0].backgroundColor = colorOne
          this.fetchProjectCount().then(
            (result) => {
              let projectData = result.data
              const colorTwo = "#" + Math.floor(Math.random()*16777215).toString(16).padStart(6, '0').toUpperCase();
              this.chartData.data.datasets[1].data = projectData.map(value => value.data)
              this.chartData.data.datasets[1].label = 'budgeted amount (USD)'
              this.chartData.data.datasets[1].backgroundColor = colorTwo

              const ctx = document.getElementById('stacked-trend-chart').getContext('2d');
              new Chart(ctx, this.chartData);
            },
            (err) => {
              const errorMessage =
              (err.response &&
                err.response.data &&
                err.response.data.message) ||
              err.message ||
              err.toString();
              console.log(errorMessage)
            }
          )
          
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