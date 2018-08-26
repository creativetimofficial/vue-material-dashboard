<template>
  <div>
    <md-table v-model="users" :table-header-color="tableHeaderColor"
    @md-selected="onSelect">
      <md-table-row slot="md-table-row" slot-scope="{ item }" selectable="single">
        <md-table-cell md-label="Name">{{ item.name }}</md-table-cell>
        <md-table-cell md-label="Size">{{ item.country }}</md-table-cell>
        <md-table-cell md-label="PDP details"  ><md-icon class="md-size-1x">description</md-icon></md-table-cell>

      </md-table-row>
    </md-table>
  </div>
</template>

<script>
import ethcount from '../../ethcount.js'
export default {
  name: 'simple-table',
  props: {
    tableHeaderColor: {
      type: String,
      default: ''
    }
  },
  mounted(){
    var count = ethcount();
    console.log(count);
    this.getFileList();



  },
  methods:{
    refresh(){
      console.log('refresh')
    },
    getClass: ({ id }) => ({
       'md-primary': id === 2,
       'md-accent': id === 3
     }),
    onSelect(item) {
        console.log('- - -')
         this.selected = item
         console.log(item)
    },
    getFileList(){
      axios.get('/user?ID=12345')
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
    }

  },
  data () {

    return {
      selected: {},
      users: [
        {
           id: 1,
          name: 'Dakota Rice',
          salary: '$36,738',
          country: 'Niger',
          city: '->'
        },
        {
           id: 2,
          name: 'Dakota Rice',
          salary: '$36,738',
          country: 'Niger',
          city: '->'
        },

      ]
    }
  }
}
</script>
