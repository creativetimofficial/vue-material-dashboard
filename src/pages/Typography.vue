<template>
  <div class="content">
    <div class="md-layout">
      <div class="md-layout-item">
        <md-card>
          <md-card-header data-background-color="blue">
            <h4 class="title">Token Distribution</h4>
            <p class="category">Token For Public Sale</p>
          </md-card-header>
          <md-card-content>
            <div id="typography">
               <div class="row">
                   <img src="../assets/img/tokensale1.jpg">

               </div>
           </div>
          </md-card-content>
        </md-card>
      </div>
    </div>
  </div>
</template>

<script>
export default{
  props: {
    dataBackgroundColor: {
      type: String,
      default: ''
    }
  }
}
</script>
