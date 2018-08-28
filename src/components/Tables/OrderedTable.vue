<template>
  <div>
    <md-table v-model="datalist" :table-header-color="tableHeaderColor">
      <md-table-row slot="md-table-row" slot-scope="{ item }">

        <md-table-cell md-label="Ip">{{ item.ip }}</md-table-cell>
        <md-table-cell md-label="states">{{ item.states }}</md-table-cell>
      </md-table-row>
    </md-table>
  </div>
</template>

<script>
export default {
  name: 'ordered-table',
  props: {
    tableHeaderColor: {
      type: String,
      default: ''
    },
    datalist:{
      type: Array,
      default: []
    }
  },
  data () {
    return {

    }
  }
}
</script>
