<template>
  <div class="content">
    <div class="md-layout">
      <div class="md-layout-item">
        <md-card class="md-card-plain">
          <md-card-header data-background-color="green">
            <h4 class="title">Material Design Icons</h4>
            <p class="category">
              Handcrafted by our friends from
              <a target="_blank" href="https://design.google.com/icons/"
                >Google</a
              >
            </p>
          </md-card-header>

          <md-card-content>
            <div class="iframe-container hidden-sm">
              <iframe src="https://vuematerial.io/components/icon">
                <p>Your browser does not support iframes.</p>
              </iframe>
            </div>
            <div class="hidden-md">
              <h5>
                The icons are visible on Desktop mode inside an iframe. Since
                the iframe is not working on Mobile and Tablets please visit the
                icons on their original page on Google. Check the
                <a href="https://design.google.com/icons/" target="_blank"
                  >Material Icons</a
                >
              </h5>
            </div>
          </md-card-content>
        </md-card>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>
