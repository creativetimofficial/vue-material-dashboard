<template>
  <div>
    <md-table v-model="list"  @md-selected="onSelect" :table-header-color="tableHeaderColor">
      <md-table-toolbar>
        <h1 class="md-title">File list</h1>
      </md-table-toolbar>

      <md-table-row slot="md-table-row" slot-scope="{ item }"  md-selectable="single">
        <md-table-cell md-label="ID" md-sort-by="id" md-numeric>{{ item.orderid }}</md-table-cell>
        <md-table-cell md-label="Name" md-sort-by="name">{{ item.filename }}</md-table-cell>
        <md-table-cell md-label="Size" md-sort-by="name">{{bytesToSize(item.filesize) }}</md-table-cell>
        <md-table-cell md-label="Upload Time" md-sort-by="name">{{item.timestamp }}</md-table-cell>
        <md-table-cell md-label="Hash" md-sort-by="id" md-numeric>{{ item.hash }}</md-table-cell>
        <md-table-cell md-label="PDP details"  ><md-icon class="md-size-1x">description</md-icon></md-table-cell>

      </md-table-row>
    </md-table>


    <md-dialog :md-active.sync="showDialog">
     <md-dialog-title>PDP details</md-dialog-title>

     <div v-if="pdpinfo.tpa" class="contenthtml">
       <md-list class="md-triple-line">
       <md-list-item>
         <md-avatar>
                <img src="@/assets/img/Verification.png" >
              </md-avatar>


       <div class="md-list-item-text">
         <span>Verification node</span>
         <span>{{pdpinfo.tpa}}</span>

       </div>

     </md-list-item>
  <md-divider class="md-inset"></md-divider>
     <md-list-item>
       <md-avatar>
              <img src="@/assets/img/Storage.png" >
            </md-avatar>


     <div class="md-list-item-text">
       <span>Storage node</span>
       <span>{{pdpinfo.server}}</span>

     </div>

   </md-list-item>
  <md-divider class="md-inset"></md-divider>
  <md-list-item>
    <md-avatar>
           <img src="@/assets/img/states.png" >
         </md-avatar>


  <div class="md-list-item-text">
    <span>Status</span>
    <span>{{statusformat(pdpinfo.status)}}</span>

  </div>

</md-list-item>
  <md-divider class="md-inset"></md-divider>
<md-list-item>

  <md-avatar>
         <img src="@/assets/img/time.png" >
       </md-avatar>

<div class="md-list-item-text">
  <span>Verification time</span>
  <p>{{DateTimeformat(pdpinfo.createtime)}}</p>

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
import moment from "moment"
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
      list: [],
      pdpinfo:{}
    }),
    methods: {
      DateTimeformat(t){
                return moment(t).format('YYYY-MM-DD HH:mm:ss')
      },
      statusformat(num){
        //0 进行中 1 完整存储  2 丢失或损坏
        if(num==0){
          return 'In progress'
        }else if (num==1) {
          return 'Complete storage'
        }else if (num==2) {
          return 'Loss or damage'
        }else {
          return 'Other'
        }

      },
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
          this.$data.showDialog=true;
          this.$data.selectItem=item;
          // this.$routes.push('/pdpdetails')
          // this.$router.push('/pdpdetails/'+item.orderid)
          this.getPDPinfo(item.id)

        }

      },
      getFileList(){
        var _this=this;
        axios.get('/filelist?address='+count)
        .then(function (response) {
          if(response.data){
            _this.$data.list=response.data.orders;


          }
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
      },
      getPDPinfo(fileid){
        var _this=this;
        axios.get('/filepdpinfo2?address='+count+"&fileid="+fileid)
        .then(function (response) {
          if(response.data){

            console.log(response.data);
            _this.$data.pdpinfo=response.data

            // _this.$data.list=response.data.orders;


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
  .md-list {
   width: 320px;
   max-width: 100%;
   display: inline-block;
   vertical-align: top;
   border: 1px solid rgba(#000, .12);
 }
</style>
