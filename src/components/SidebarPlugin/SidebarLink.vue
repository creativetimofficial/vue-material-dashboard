<template>
  <md-list-item @click="hideSidebar"
                v-bind="$attrs">
    <md-icon>{{link.icon}}</md-icon>
    <p>{{link.name}}</p>
  </md-list-item>
</template>
<script>
export default{
  inheritAttrs: false,
  inject: {
    autoClose: {
      default: true
    }
  },
  props: {
    link: {
      type: [String, Object],
      default: () => {
        return {
          name: '',
          path: '',
          icon: ''
        }
      }
    },
    tag: {
      type: String,
      default: 'router-link'
    }
  },
  methods: {
    hideSidebar () {
      if (this.autoClose && this.$sidebar && this.$sidebar.showSidebar === true) {
        this.$sidebar.displaySidebar(false)
      }
    }
  }
}
</script>
<style>
</style>
