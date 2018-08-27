<template>
  <div class="content">
    <div class="md-layout">
      <div class="md-layout-item md-medium-size-100 md-size-66">

      <md-card>
         <md-card-header data-background-color="green">
           <h4 class="title">Storage server list</h4>
           <p class="category">Here is a subtitle for this table</p>
         </md-card-header>
         <md-card-content>
           <ordered-table table-header-color="green"  :datalist="storagelist"></ordered-table>
         </md-card-content>
       </md-card>
       <md-card>
          <md-card-header data-background-color="green">
            <h4 class="title">Validation server list</h4>
            <p class="category">Here is a subtitle for this table</p>
          </md-card-header>
          <md-card-content>
            <ordered-table table-header-color="green"   :datalist="storagelist"></ordered-table>
          </md-card-content>
        </md-card>
      </div>
      <div class="md-layout-item md-medium-size-100 md-size-33">
        <file-info>

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

import {
  OrderedTable,

} from '@/components'


export default{
  components: {
    EditProfileForm,
    OrderedTable,
    FileInfo
  },
  data(){
    return {
      storagelist:[
        {
          id: 1,
          name: 'Dakota Rice',
          salary: '$36,738',
          country: 'Niger',
          city: 'Oud-Turnhout'
        },
        {
          id: 2,
          name: 'Minerva Hooper',
          salary: '$23,738',
          country: 'Curaçao',
          city: 'Sinaai-Waas'
        },
        {
          id: 3,
          name: 'Sage Rodriguez',
          salary: '$56,142',
          country: 'Netherlands',
          city: 'Overland Park'
        },
        {
          id: 4,
          name: 'Philip Chaney',
          salary: '$38,735',
          country: 'Korea, South',
          city: 'Gloucester'
        }
      ]
    }
  }
}
</script>
