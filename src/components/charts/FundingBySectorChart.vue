<template>  
  <canvas id="funding-by-sector-chart"></canvas>
</template>

<script>
import  Chart  from 'chart.js/auto';

export default {
  name: 'FundingBySectorChart',
  data() {
    return {
      chartData: {
          type: 'doughnut',
          data: {
              labels: ['Education', 'Food Sector', 'Security', 'Emergency Relief', 'Not Specified', 'Water sanitation Hygiend'],
              datasets: [{
                  label: 'this year',
                  data: [12, 19, 3, 5, 2, 3],                  
                  hoverOffset: 4
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
    const ctx = document.getElementById('funding-by-sector-chart').getContext('2d');
    new Chart(ctx, this.chartData);
  }
}
</script>