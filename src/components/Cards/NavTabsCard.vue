<template>
  <md-card class="md-card-nav-tabs">
    <md-card-content>
      <slot name="content"></slot>
    </md-card-content>
  </md-card>
</template>

<script>
export default {
  name: "nav-tabs-card",
};
</script>
