<template>
  <md-card class="md-card-profile">

    <md-card-content v-if="data">
      <h3 class="card-title">file info</h3>
      <h4 class="card-title">states:{{data.states}}</h4>
      <p class="card-description">
          {{data.filename}}
      </p>
    </md-card-content>
  </md-card>
</template>
<script>
console.log('file-info')
export default {
  name: 'file-info',
  props: {
    cardUserImage: {
      type: String,
      default: require('@/assets/img/faces/marc.jpg')
    },
    data:{
      type: Object,
      default:null
    }
  },
  data () {
    return {
    }
  }
}

</script>
<style>

</style>
