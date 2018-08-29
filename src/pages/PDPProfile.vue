<template>
  <div class="content">
    <div class="md-layout">
      <div class="md-layout-item md-medium-size-100 md-size-66">

      <md-card>
         <md-card-header data-background-color="blue">
           <h4 class="title">Storage server list</h4>
           <p class="category">Here is a subtitle for this table</p>
         </md-card-header>
         <md-card-content>
           <ordered-table table-header-color="blue"  :datalist="storageserverlist"></ordered-table>
         </md-card-content>
       </md-card>
       <md-card>
          <md-card-header data-background-color="blue">
            <h4 class="title">Validation server list</h4>
            <p class="category">Here is a subtitle for this table</p>
          </md-card-header>
          <md-card-content>
            <ordered-table table-header-color="blue"   :datalist="validationserverlist"></ordered-table>
          </md-card-content>
        </md-card>
      </div>
      <div class="md-layout-item md-medium-size-100 md-size-33">
        <file-info  :data="fileinfo">

        </file-info>
      </div>
    </div>
  </div>
</template>

<script>
import {
  EditProfileForm,
  FileInfo
} from '@/pages'

import axios from 'axios';

import {
  OrderedTable,

} from '@/components'

var fileid;
export default{
  components: {
    EditProfileForm,
    OrderedTable,
    FileInfo
  },
  mounted(){
    console.log('- -!')
     fileid=this.$route.params.fileid;
     this.getfileinfo();

  },
  methods: {
    getfileinfo(){
      console.log(fileid);
      var _this=this;
      axios('/filepdpinfo?fileid='+fileid)
      .then(function(response) {
        console.log(response)
        _this.$data.storageserverlist=response.data.storageserverlist;
        _this.$data.validationserverlist=response.data.validationserverlist;
        _this.$data.fileinfo=response.data.fileinfo;

      })
      .catch(function(err) {
        console.log(err)

      })

    }

  },
  data(){
    return {
      storageserverlist:[],
      validationserverlist:[],
      fileinfo:{}
    }
  }
}
</script>
