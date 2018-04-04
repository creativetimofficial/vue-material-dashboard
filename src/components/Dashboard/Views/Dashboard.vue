<template>
  <div class="md-layout">
    <div class="md-layout-item md-medium-size-50 md-xsmall-size-100">
      <md-card class="md-card-stats">
        <md-card-header data-background-color="orange">
          <md-icon>content_copy</md-icon>
        </md-card-header>

        <md-card-content>
            <p class="category">Used Space</p>
            <h3 class="title">49/50
                <small>GB</small>
            </h3>
        </md-card-content>

        <md-card-actions md-alignment="left">
         <div class="stats">
             <md-icon class="text-danger">warning</md-icon>
             <a href="#pablo">Get More Space...</a>
         </div>
        </md-card-actions>
      </md-card>
    </div>
    <div class="md-layout-item md-medium-size-50 md-xsmall-size-100">
      <md-card class="md-card-stats">
        <md-card-header data-background-color="green">
          <md-icon>store</md-icon>
        </md-card-header>

        <md-card-content>
            <p class="category">Revenue</p>
            <h3 class="title">$34,245</h3>
        </md-card-content>

        <md-card-actions md-alignment="left">
         <div class="stats">
             <md-icon>date_range</md-icon>
             Last 24 Hours
         </div>
        </md-card-actions>
      </md-card>
    </div>
    <div class="md-layout-item md-medium-size-50 md-xsmall-size-100">
      <md-card class="md-card-stats">
        <md-card-header data-background-color="red">
          <md-icon>info_outline</md-icon>
        </md-card-header>

        <md-card-content>
            <p class="category">Fixed Issues</p>
            <h3 class="title">75</h3>
        </md-card-content>

        <md-card-actions md-alignment="left">
         <div class="stats">
            <md-icon>local_offer</md-icon>
            Tracked from Github
         </div>
        </md-card-actions>
      </md-card>
    </div>
    <div class="md-layout-item md-medium-size-50 md-xsmall-size-100">
      <md-card class="md-card-stats">
        <md-card-header data-background-color="blue">
          <i class="fab fa-twitter"></i>
        </md-card-header>

        <md-card-content>
            <p class="category">Folowers</p>
            <h3 class="title">+245</h3>
        </md-card-content>

        <md-card-actions md-alignment="left">
         <div class="stats">
            <md-icon>update</md-icon>
            Just Updated
         </div>
        </md-card-actions>
      </md-card>
    </div>
  </div>
</template>

<script>
export default{
}
</script>
