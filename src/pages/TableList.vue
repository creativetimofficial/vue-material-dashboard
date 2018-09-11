<template>
  <div class="content">
    <div class="md-layout">
      <div class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-100">
        <md-card>
          <md-card-header data-background-color="blue">
            <h4 class="title">Uploading files</h4>
            <p class="category">Your test account: ea28799184925f734f9e38d66b333c85316ac0c4</p>
          </md-card-header>
          <md-card-content>
            <vue-dropzone ref="dropzone" id="drop1" :options="dropOptionsbig"  @vdropzone-complete="afterComplete"
            @vdropzone-error="verror"
            @vdropzone-file-added="vfileAdded"
            >
            </vue-dropzone>
            <div  style="margin-bottom: 20px"></div>
            <table-single table-header-color="blue"  ref="simpletable" ></table-single>
          </md-card-content>
        </md-card>
      </div>


    </div>
  </div>
</template>

<script>
import {
  SimpleTable,
  OrderedTable,
  TableSingle
} from '@/components'

import vueDropzone from "vue2-dropzone";
import ethcount from '../ethcount.js'


var count;
count = ethcount();
console.log(count);
export default{
  components: {
    OrderedTable,
    SimpleTable,
    vueDropzone,
    TableSingle
  },
  mounted(){




  },
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
    vfileAdded(e){
      console.log('vfileAdded')
       console.log(e)
    },
    verror(file,e){
      console.log('verror')
      console.log(e)
      this.notifyVue('Failed to upload files');
    },
    afterComplete(file) {
      // this.$refs.dropzone.removeAllFiles();
      console.log('ok')
      console.log(file);
      var _this=this;
      setTimeout(function () {
        _this.$refs.simpletable.refresh();

      },2000)

    }
  },
  data: () => ({
   dropOptions: {
     url: "https://httpbin.org/post"
   },
   dropOptionsbig: {
     url: "/v1/api/putfile/"+count,
     parallelUploads: 1,  // since we're using a global 'currentFile', we could have issues if parallelUploads > 1, so we'll make it = 1
     maxFilesize: 200,   // max individual file size 1024 MB
     chunking: false,      // enable chunking
     forceChunking: false, // forces chunking when file.size < chunkSize
     parallelChunkUploads: true, // allows chunks to be uploaded in parallel (this is independent of the parallelUploads option)
     chunkSize: 1000000,  // chunk size 1,000,000 bytes (~1MB)
     retryChunks: true,   // retry chunks on failure
     retryChunksLimit: 3, // retry maximum of 3 times (default is 3)
     timeout:60000,
     dictDefaultMessage:'Click to select file or  Drop files here to upload to lambda'


   }
 })
}
</script>
