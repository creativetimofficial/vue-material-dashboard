<template>
  <md-card>
    <md-card-header :data-background-color="dataBackgroundColor">
      <slot name="header"></slot>
    </md-card-header>

    <md-card-content>
      <slot name="content"></slot>
    </md-card-content>
  </md-card>
</template>
<script>
  export default {
    props: {
      dataBackgroundColor: {
        type: String,
        default: ''
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
