<template>
  <div>
    <md-table v-model="users">
      <md-table-row slot="md-table-row" slot-scope="{ item }">
        <md-table-cell md-label="ID">{{ item.id }}</md-table-cell>
        <md-table-cell md-label="Name">{{ item.name }}</md-table-cell>
        <md-table-cell md-label="Salary">{{ item.salary }}</md-table-cell>
        <md-table-cell md-label="Country">{{ item.country }}</md-table-cell>
      </md-table-row>
    </md-table>
  </div>
</template>

<script>
export default {
  name: 'SimpleTable',
  data () {
    return {
      selected: [],
      users: [
        {
          id: 1,
          name: 'Dakota Rice',
          salary: '$36,738',
          country: 'Niger'
        },
        {
          id: 2,
          name: 'Minerva Hooper',
          salary: '$23,738',
          country: 'Curaçao'
        },
        {
          id: 3,
          name: 'Sage Rodriguez',
          salary: '$56,142',
          country: 'Netherlands'
        },
        {
          id: 4,
          name: 'Philip Chaney',
          salary: '$38,735',
          country: 'Korea, South'
        }
      ]
    }
  }
}
</script>
