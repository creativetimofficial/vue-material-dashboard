<template>
  <div class="content">
    <div class="md-layout">
      <div class="md-layout-item">
        <md-card>
          <md-card-header data-background-color="green">
            <h4 class="title">Notifications</h4>
            <p class="category">
              Handcrafted by us with <i class="fa fa-heart heart"></i>
            </p>
          </md-card-header>
          <md-card-content>
            <div class="md-layout">
              <div class="md-layout-item md-medium-size-100">
                <h5>Notifications Style</h5>
                <div class="alert alert-info">
                  <span>This is a plain notification</span>
                </div>
                <div class="alert alert-info">
                  <button type="button" aria-hidden="true" class="close">
                    ×
                  </button>
                  <span>This is a notification with close button.</span>
                </div>
                <div
                  class="alert alert-info alert-with-icon"
                  data-notify="container"
                >
                  <button type="button" aria-hidden="true" class="close">
                    ×
                  </button>
                  <i data-notify="icon" class="material-icons">add_alert</i>
                  <span data-notify="message"
                    >This is a notification with close button and icon.</span
                  >
                </div>
                <div
                  class="alert alert-info alert-with-icon"
                  data-notify="container"
                >
                  <button type="button" aria-hidden="true" class="close">
                    ×
                  </button>
                  <i data-notify="icon" class="material-icons">add_alert</i>
                  <span data-notify="message"
                    >This is a notification with close button and icon and have
                    many lines. You can see that the icon and the close button
                    are always vertically aligned. This is a beautiful
                    notification. So you don't have to worry about the
                    style.</span
                  >
                </div>
              </div>
              <div class="md-layout-item md-medium-size-100">
                <h5>Notification states</h5>
                <div class="alert alert-info">
                  <button type="button" aria-hidden="true" class="close">
                    ×
                  </button>
                  <span
                    ><b> Info - </b> This is a regular notification made with
                    ".alert-info"</span
                  >
                </div>
                <div class="alert alert-success">
                  <button type="button" aria-hidden="true" class="close">
                    ×
                  </button>
                  <span
                    ><b> Success - </b> This is a regular notification made with
                    ".alert-success"</span
                  >
                </div>
                <div class="alert alert-warning">
                  <button type="button" aria-hidden="true" class="close">
                    ×
                  </button>
                  <span
                    ><b> Warning - </b> This is a regular notification made with
                    ".alert-warning"</span
                  >
                </div>
                <div class="alert alert-danger">
                  <button type="button" aria-hidden="true" class="close">
                    ×
                  </button>
                  <span
                    ><b> Danger - </b> This is a regular notification made with
                    ".alert-danger"</span
                  >
                </div>
                <div class="alert alert-primary">
                  <button type="button" aria-hidden="true" class="close">
                    ×
                  </button>
                  <span
                    ><b> Primary - </b> This is a regular notification made with
                    ".alert-primary"</span
                  >
                </div>
              </div>

              <div class="md-layout-item md-size-100">
                <div class="places-buttons text-center">
                  <h5 class="text-center">
                    Notifications Places
                    <p class="category">Click to view notifications</p>
                  </h5>
                  <md-button
                    class="md-primary"
                    @click="notifyVue('top', 'left')"
                    >Top Left</md-button
                  >
                  <md-button
                    class="md-primary"
                    @click="notifyVue('top', 'center')"
                    >Top Center</md-button
                  >
                  <md-button
                    class="md-primary"
                    @click="notifyVue('top', 'right')"
                    >Top Right</md-button
                  >
                  <md-button
                    class="md-primary"
                    @click="notifyVue('bottom', 'left')"
                    >Bottom Left</md-button
                  >
                  <md-button
                    class="md-primary"
                    @click="notifyVue('bottom', 'center')"
                    >Bottom Center</md-button
                  >
                  <md-button
                    class="md-primary"
                    @click="notifyVue('bottom', 'right')"
                    >Bottom Right</md-button
                  >
                </div>
              </div>
            </div>
          </md-card-content>
        </md-card>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      type: ["", "info", "success", "warning", "danger"],
      notifications: {
        topCenter: false,
      },
    };
  },
  methods: {
    notifyVue(verticalAlign, horizontalAlign) {
      var color = Math.floor(Math.random() * 4 + 1);
      this.$notify({
        message:
          "Welcome to <b>Material Dashboard</b> - a beautiful freebie for every web developer.",
        icon: "add_alert",
        horizontalAlign: horizontalAlign,
        verticalAlign: verticalAlign,
        type: this.type[color],
      });
    },
  },
};
</script>
