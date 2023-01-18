<template>  
  <canvas id="funding-trend-chart"></canvas>
</template>

<script>
import  Chart  from 'chart.js/auto';

export default {
  name: 'FundingTrendChart',
  data() {
    return {
      chartData: {
          type: 'bar',
          data: {
              labels: ['2018', '2019', '2020', '2021', '2022', '2023'],
              datasets: [{
                  label: 'past 6 years in USD (m)',
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
  mounted() {
    const ctx = document.getElementById('funding-trend-chart').getContext('2d');
    new Chart(ctx, this.chartData);
  }
}
</script>