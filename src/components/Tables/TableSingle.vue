<template>
  <div>

    <md-table v-model="list"   :table-header-color="tableHeaderColor">
      <md-table-toolbar>
        <h1 class="md-title">File list</h1>
      </md-table-toolbar>

      <md-table-row slot="md-table-row" slot-scope="{ item }"  md-selectable="single">
        <md-table-cell md-label="ID" md-sort-by="orderid" md-numeric>{{ item.orderid }}</md-table-cell>
        <md-table-cell md-label="Name" md-sort-by="filename">
          <div @click="onSelect(item)">
            {{ item.filename }}
          </div>
        </md-table-cell>
        <md-table-cell md-label="Size" md-sort-by="filesize">{{bytesToSize(item.filesize) }}</md-table-cell>
        <md-table-cell md-label="Upload Time" md-sort-by="timestamp">{{DateTimeformat(item.timestamp) }}</md-table-cell>
        <!-- <md-table-cell md-label="Hash" md-sort-by="id" md-numeric>{{ item.hash }}</md-table-cell> -->
        <md-table-cell  md-label="PDP details"  >
          <div @click="onSelect(item)">
            <md-icon class="md-size-1x">description</md-icon>
          </div>
        </md-table-cell>

      </md-table-row>
    </md-table>
    <md-empty-state v-if="list.length==0"
      md-icon="file_copy"
      md-label="No uploaded files "
      md-description="Please select file upload">

    </md-empty-state>


    <md-dialog :md-active.sync="showDialog">
     <md-dialog-title>PDP details</md-dialog-title>
<div v-if="pdpinfo.tpa==undefined" class="contenthtml">
  Wait for Verification
  </div>
     <div v-if="pdpinfo.tpa!=undefined" class="contenthtml">
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
import axiosget from '@/axiosget.js'
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
      notifyVue (msg) {
        console.log('smg')
        var color = Math.floor((Math.random() * 4) + 1)
        this.$notify(
          {
            message: msg,
            icon: 'add_alert',
            horizontalAlign: 'center',
            verticalAlign: 'top',
            type: 'warning'
          })
      },
      DateTimeformat(t){
                // console.log(t)
                return moment.unix(t).format('YYYY-MM-DD HH:mm:ss')
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
      ondownload(item){
        this.getPDPinfoDown(item.orderid)
      },
      onSelect (item) {
        this.selected = item
        console.log('选择',item)
        var _this=this;
        if(item!=undefined){
          _this.$data.showDialog=true;
          _this.$data.selectItem=item;
          _this.getPDPinfo(item.orderid)
          // this.$routes.push('/pdpdetails')
          // this.$router.push('/pdpdetails/'+item.orderid)



        }



      },
      getFileList(){
        var _this=this;
        axiosget('filelist/'+count,[])
        .then(function (response) {

            _this.$data.list=response;



          // console.log(response);
        })
        .catch(function (error) {
          console.log(error);
          _this.notifyVue(error.message);
        });
      },
      getPDPinfo(fileid){
        var _this=this;
        axiosget('filestatus/'+count,{},{
          orderid:fileid
        })
        .then(function (response) {


            console.log(response.data);
            _this.$data.pdpinfo=response

            // _this.$data.list=response.data.orders;



          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
          _this.notifyVue(error.message);
        });

      },
      getPDPinfoDown(fileid){
        var _this=this;
        axiosget('filestatus/'+count,{},{
          orderid:fileid
        })
        .then(function (response) {


            console.log(response.data);
            _this.$data.pdpinfo=response

            // _this.$data.list=response.data.orders;



          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
          this.notifyVue('error');
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
