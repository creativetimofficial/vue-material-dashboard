# Toolbar

We re-styled the default toolbar from vuematerial.io and you can easily use this like the example below:

::: demo
```html
<md-toolbar class="md-primary">
  <div class="md-toolbar-row">
    <div class="md-toolbar-section-start">
      <h3 class="md-title">Brand</h3>
    </div>
    <div class="md-toolbar-section-end">
      <md-button class="md-just-icon md-simple md-toolbar-toggle">
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
      </md-button>

      <div class="md-collapse">
        <md-list>
          <md-list-item to="#dashboard">
            <i class="material-icons">dashboard</i>
            <p class="hidden-lg hidden-md">Dashboard</p>
          </md-list-item>

          <md-list-item to="#notifications" class="dropdown">
            <drop-down>
              <a slot="title" class="dropdown-toggle" data-toggle="dropdown">
                <i class="material-icons">notifications</i>
                <span class="notification">5</span>
                <p class="hidden-lg hidden-md">Notifications</p>
              </a>
              <ul class="dropdown-menu dropdown-menu-right">
                <li><a href="#">Mike John responded to your email</a></li>
                <li><a href="#">You have 5 new tasks</a></li>
                <li><a href="#">You're now friend with Andrew</a></li>
                <li><a href="#">Another Notification</a></li>
                <li><a href="#">Another One</a></li>
              </ul>
            </drop-down>
          </md-list-item>

          <md-list-item to="#user">
            <i class="material-icons">person</i>
            <p class="hidden-lg hidden-md">Profile</p>
          </md-list-item>
        </md-list>
      </div>
    </div>
  </div>

</md-toolbar>
```
:::
