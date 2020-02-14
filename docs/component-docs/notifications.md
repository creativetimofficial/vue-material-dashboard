## Notifications

<script>
module.exports = {
  data () {
    return {
      type: ['', 'info', 'success', 'warning', 'danger'],
      notifications: {
        topCenter: false
      }
    }
  },
  methods: {
    notifyVue (verticalAlign, horizontalAlign) {
      var color = Math.floor((Math.random() * 4) + 1)
      this.$notify(
        {
          message: 'Welcome to <b>Material Dashboard</b> - a beautiful freebie for every web developer.',
          icon: 'add_alert',
          horizontalAlign: horizontalAlign,
          verticalAlign: verticalAlign,
          type: this.type[color]
        })
    }
  }
}
</script>





We crafted a custom plugin inspired by **vue-notifyjs** which is simple yet effective.

#### Usage

To use the notification plugin, import it from the components folder. Note that this is already done in **src/main.js**

```js
import Notifications from './components/NotificationPlugin'
Vue.use(Notifications)
```

#### Trigger Notifications

<md-card>
  <md-card-header data-background-color="green">
    <h4 class="title">Notifications</h4>
    <p class="category">Handcrafted by us with <i class="fa fa-heart heart"></i></p>
  </md-card-header>
  <md-card-content>
    <div class="md-layout">
      <div class="md-layout-item md-size-100">
        <div class="places-buttons text-center">
          <h5 class="text-center">Notifications Places
            <p class="category">Click to view notifications</p>
          </h5>
          <md-button class="md-primary" @click="notifyVue('top','left')">Top Left</md-button>
          <md-button class="md-primary" @click="notifyVue('top','center')">Top Center</md-button>
          <md-button class="md-primary" @click="notifyVue('top','right')">Top Right</md-button>
          <md-button class="md-primary" @click="notifyVue('bottom','left')">Bottom Left</md-button>
          <md-button class="md-primary" @click="notifyVue('bottom','center')">Bottom Center</md-button>
          <md-button class="md-primary" @click="notifyVue('bottom','right')">Bottom Right</md-button>
        </div>
      </div>
    </div>
  </md-card-content>
</md-card>

```html
<template>

  <div class="md-layout">
    <div class="md-layout-item">
      <notifications></notifications>
      <md-card>
        <md-card-header data-background-color="green">
          <h4 class="title">Notifications</h4>
          <p class="category">Handcrafted by us with <i class="fa fa-heart heart"></i></p>
        </md-card-header>
        <md-card-content>
          <div class="md-layout">
            <div class="md-layout-item md-size-100">
              <div class="places-buttons text-center">
                <h5 class="text-center">Notifications Places
                  <p class="category">Click to view notifications</p>
                </h5>
                <md-button class="md-primary" @click="notifyVue('top','left')">Top Left</md-button>
                <md-button class="md-primary" @click="notifyVue('top','center')">Top Center</md-button>
                <md-button class="md-primary" @click="notifyVue('top','right')">Top Right</md-button>
                <md-button class="md-primary" @click="notifyVue('bottom','left')">Bottom Left</md-button>
                <md-button class="md-primary" @click="notifyVue('bottom','center')">Bottom Center</md-button>
                <md-button class="md-primary" @click="notifyVue('bottom','right')">Bottom Right</md-button>
              </div>
            </div>
          </div>
        </md-card-content>
      </md-card>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      type: ['', 'info', 'success', 'warning', 'danger'],
      notifications: {
        topCenter: false
      }
    }
  },
  methods: {
    notifyVue (verticalAlign, horizontalAlign) {
      var color = Math.floor((Math.random() * 4) + 1)
      this.$notify(
        {
          message: 'Welcome to <b>Material Dashboard</b> - a beautiful freebie for every web developer.',
          icon: 'add_alert',
          horizontalAlign: horizontalAlign,
          verticalAlign: verticalAlign,
          type: this.type[color]
        })
    }
  }
}

</script>

```

> Note: ```<notifications></notifications>``` can be declared only once anywhere in your app, preferably in your root component so the notification component is alive inside any other components.

#### Notification options

```js
this.$notify(
  {
    message: 'Welcome to <b>Material Dashboard</b> - a beautiful freebie for every web developer.',
    icon: 'add_alert',
    horizontalAlign: horizontalAlign,
    verticalAlign: verticalAlign,
    type: this.type[color]
  })
```

### Notification (passed through the object sent to **$notify** method)

```js
props: {
  message: String,
  icon: String,
  verticalAlign: {
    type: String,
    default: 'top'
  },
  horizontalAlign: {
    type: String,
    default: 'center'
  },
  type: {
    type: String,
    default: 'info'
  },
  timeout: {
    type: Number,
    default: 1200
  },
  timestamp: {
    type: Date,
    default: () => new Date()
  }
}
```
