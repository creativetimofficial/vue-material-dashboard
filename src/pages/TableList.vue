<template>
  <div class="content">
    <div class="md-layout">
      <div class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-100">
        <md-card>
          <md-card-header data-background-color="green">
            <h4 class="title">Simple Table</h4>
            <p class="category">Here is a subtitle for this table</p>
          </md-card-header>
          <md-card-content>
            <vue-dropzone id="drop1" :options="dropOptionsbig"  @vdropzone-complete="afterComplete"></vue-dropzone>
            <simple-table table-header-color="green"></simple-table>
          </md-card-content>
        </md-card>
      </div>

      <div class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-100">
        <md-card class="md-card-plain">
          <md-card-header data-background-color="green">
            <h4 class="title">Table on Plain Background</h4>
            <p class="category">Here is a subtitle for this table</p>
          </md-card-header>
          <md-card-content>
            <ordered-table></ordered-table>
          </md-card-content>
        </md-card>
      </div>
    </div>
  </div>
</template>

<script>
import {
  SimpleTable,
  OrderedTable
} from '@/components'

import vueDropzone from "vue2-dropzone";
import ethcount from '../ethcount.js'

export default{
  components: {
    OrderedTable,
    SimpleTable,
    vueDropzone
  },
  mounted(){
    var count = ethcount();
    console.log(count);


  },
  methods: {
    afterComplete(file) {
      console.log(file);
    }
  },
  data: () => ({
   dropOptions: {
     url: "https://httpbin.org/post"
   },
   dropOptionsbig: {
     url: "https://httpbin.org/post",
     parallelUploads: 1,  // since we're using a global 'currentFile', we could have issues if parallelUploads > 1, so we'll make it = 1
     maxFilesize: 1024,   // max individual file size 1024 MB
     chunking: true,      // enable chunking
     forceChunking: true, // forces chunking when file.size < chunkSize
     parallelChunkUploads: true, // allows chunks to be uploaded in parallel (this is independent of the parallelUploads option)
     chunkSize: 1000000,  // chunk size 1,000,000 bytes (~1MB)
     retryChunks: true,   // retry chunks on failure
     retryChunksLimit: 3, // retry maximum of 3 times (default is 3)
   }
 })
}
</script>
