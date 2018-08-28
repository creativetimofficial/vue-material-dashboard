<template>
  <div>
    <md-table v-model="list"  @md-selected="onSelect" :table-header-color="tableHeaderColor">
      <md-table-toolbar>
        <h1 class="md-title">File list</h1>
      </md-table-toolbar>

      <md-table-row slot="md-table-row" slot-scope="{ item }"  md-selectable="single">
        <md-table-cell md-label="ID" md-sort-by="id" md-numeric>{{ item.fileid }}</md-table-cell>
        <md-table-cell md-label="Name" md-sort-by="name">{{ item.filename }}</md-table-cell>
        <md-table-cell md-label="Size" md-sort-by="name">{{bytesToSize(item.size) }}</md-table-cell>
        <md-table-cell md-label="PDP details"  ><md-icon class="md-size-1x">description</md-icon></md-table-cell>

      </md-table-row>
    </md-table>


    <md-dialog :md-active.sync="showDialog">
     <md-dialog-title>PDP details</md-dialog-title>

     <div class="contenthtml">
       <md-list class="md-triple-line">
       <md-list-item>


       <div class="md-list-item-text">
         <span>Sandra Adams</span>
         <span>Oui oui</span>

       </div>

     </md-list-item>

     <md-list-item>


     <div class="md-list-item-text">
       <span>Sandra Adams</span>
       <span>Oui oui</span>

     </div>

   </md-list-item>

  <md-list-item>


  <div class="md-list-item-text">
    <span>Sandra Adams</span>
    <span>Oui oui</span>

  </div>

</md-list-item>
     </md-list>
     </div>

     <md-dialog-actions>
       <md-button class="md-raised" @click="showDialog = false">Close</md-button>


     </md-dialog-actions>
   </md-dialog>
  </div>
</template>

<script>
import ethcount from '../../ethcount.js'
var count = ethcount();
console.log(count);

import axios from 'axios'
  export default {
    name: 'table-single',
    props: {
      tableHeaderColor: {
        type: String,
        default: ''
      }
    },
    mounted(){

      this.getFileList()



    },

    data: () => ({
      selected: {},
      showDialog: false,
      list: []
    }),
    methods: {
      bytesToSize(bytes) {
         var sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
         if (bytes == 0) return '0 Byte';
         var i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)));
         return Math.round(bytes / Math.pow(1024, i), 2) + ' ' + sizes[i];
      },
      refresh(){
        console.log('refresh')
        this.getFileList();
      },
      onSelect (item) {
        this.selected = item
        console.log('选择',item)
        if(item!=undefined){
          // this.$data.showDialog=true;
          this.$data.selectItem=item;
          // this.$routes.push('/pdpdetails')
          this.$router.push('/pdpdetails/'+item.fileid)

        }

      },
      getFileList(){
        var _this=this;
        axios.get('/filelist?address='+count)
        .then(function (response) {
          if(response.data){
            _this.$data.list=response.data;


          }
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
      }
    }
  }
</script>

<style lang="scss" scoped>
  .md-table + .md-table {
    margin-top: 16px
  }
  .contenthtml{
    // width: 500px;
    margin: 20px;
  }
</style>
