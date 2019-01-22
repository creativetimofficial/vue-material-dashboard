<template>
  <md-card>
    <md-card-header class="card-chart" :data-background-color="dataBackgroundColor">
      <vue-chartist :data="chartData" :options="chartOptions" :type="chartType"></vue-chartist>
    </md-card-header>

    <md-card-content>
      <slot name="content"></slot>
    </md-card-content>

    <md-card-actions md-alignment="left">
      <slot name="footer"></slot>
    </md-card-actions>
  </md-card>
</template>
<script>
import VueChartist from "v-chartist";

export default {
  components: {
    "vue-chartist": VueChartist
  },
  name: "chart-card",
  props: {
    chartType: {
      type: String,
      default: "Line" // Line | Pie | Bar
    },
    chartOptions: {
      type: Object,
      default: () => {
        return {};
      }
    },
    chartData: {
      type: Object,
      default: () => {
        return {
          labels: [],
          series: []
        };
      }
    },
    dataBackgroundColor: {
      type: String,
      default: ""
    }
  }
};
</script>
