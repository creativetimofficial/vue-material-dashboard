<template>
  <div>
    <md-table v-model="callRecords" :table-header-color="tableHeaderColor">
      <md-table-row slot="md-table-row" slot-scope="{ item }">
        <md-table-cell md-label="Date and Time">{{ item.start }}</md-table-cell>
        <md-table-cell md-label="From">{{ item.from }}</md-table-cell>
        <md-table-cell md-label="To">{{ item.to }}</md-table-cell>
        <md-table-cell md-label="Duration (secs)">{{ calculateDuration(item.start, item.end) }}</md-table-cell>
      </md-table-row>
    </md-table>
  </div>
</template>
  
  <script>
  import axios from './axios-config'; // Import the custom Axios instance
  
  const apiClient = axios.create({
    baseURL: 'http://45.119.160.27:8080', // Your API endpoint
    withCredentials: false, // Include credentials (cookies, Authorization headers, etc.)  
  });
  
  export default {
    name: "call-records",
    props: {
      tableHeaderColor: {
        type: String,
        default: "",
      },
    },
    data() {
      return {
        callRecords: [],
      };
    },
    mounted() {
      this.fetchCallRecords();
    },
    methods: {
      async fetchCallRecords() {
        try {
          const response = await apiClient.get('/cdrs/hosted.voice.atomcomm.com/ext-timestamp', {
            params: {
              start: '2023-09-05T10:00:00Z',
              end: '2023-10-05T11:00:00Z',
              extension: '890'
            }
          });
          console.log(response.data); // Log API response data for debugging
          this.callRecords = response.data;
        } catch (error) {
          // Handle errors more gracefully
          console.error('Error fetching call records:', error);
          this.callRecords = []; // Clear the records to indicate loading failure
        }
      },
      calculateDuration(start, end) {
        const startDate = new Date(start);
        const endDate = new Date(end);
        const durationInSeconds = (endDate - startDate) / 1000;
        return durationInSeconds.toFixed(2);
      }
    }
  };
  </script>
  