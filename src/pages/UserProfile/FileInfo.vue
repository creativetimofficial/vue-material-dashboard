<template>
  <md-card class="md-card-profile">

    <md-card-content>
      <h3 class="card-title">file info</h3>
      <h4 class="card-title">states:xxxxx</h4>
      <p class="card-description">
          Don't be scared of the truth because we need to restart the human foundation in truth And I love you like Kanye loves Kanye I love Rick Owens’ bed design but the back is...
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
