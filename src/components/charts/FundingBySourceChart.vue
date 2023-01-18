<template>  
  <canvas id="funding-by-source-chart"></canvas>
</template>

<script>
import  Chart  from 'chart.js/auto';

export default {
  name: 'FundingBySourceChart',
  data() {
    return {
      chartData: {
          type: 'doughnut',
          data: {
              labels: ['United States Government of', 'European Commision', 'United Kingdom Government of', 'Sweden Government of', 'Canada Government of', 'All others'],
              datasets: [{
                  label: 'for this year',
                  data: [100, 19, 3, 5, 2, 8],
                  hoverOffset: 4
              }]
          },
          options: {
              
          }
      },
    }
  },
  mounted() {
    const ctx = document.getElementById('funding-by-source-chart').getContext('2d');
    new Chart(ctx, this.chartData);
  }
}
</script>