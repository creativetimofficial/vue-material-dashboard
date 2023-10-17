<template>
  <div class="content">
    <div class="md-layout">
      <div
        class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-100"
      >
        <md-card>
          <md-card-header data-background-color="green">
            <h4 class="title">Call Details Records</h4>
            <p class="category">Here is a subtitle for this table</p>
          </md-card-header>
          <md-card-content>
            <call-records :table-header-color="tableHeaderColor"></call-records>
          </md-card-content>
        </md-card>
      </div>
    </div>
  </div>
</template>

<script>
import CallRecords from "@/components/Cdr/CallRecords.vue"; // Import the CallRecords component

export default {
  components: {
    CallRecords,

  },
  data() {
    return {
      tableHeaderColor: "green", // Set your desired table header color here
    };
  },
};
</script>

