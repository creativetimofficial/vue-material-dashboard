## Cards

We think cards are one of the best ways to organise your information. We went all out with possibilities and we recommended finding the right fit for your product.


```js
import {StatsCard} from 'src/components'
import {ChartCard} from 'src/components'
```

### Local Usage

```js
components: {
  ChartCard,
  StatsCard
}
```

### Global Usage

```js
Vue.component(ChartCard)
Vue.component(StatsCard)
```

<script>
module.exports = {
  data() {
   return {
    dailySalesChart: {
          data: {
            labels: ['M', 'T', 'W', 'T', 'F', 'S', 'S'],
            series: [
              [12, 17, 7, 17, 23, 18, 38]
            ]
          },
          options: {
            low: 0,
            high: 50, // creative tim: we recommend you to set the high sa the biggest value + something for a better look
            chartPadding: {
              top: 0,
              right: 0,
              bottom: 0,
              left: 0
            }
          }
        }
   }
  }
}
</script>

### Stats card

<stats-card data-background-color="green">
  <template slot="header">
    <md-icon>store</md-icon>
  </template>

  <template slot="content">
    <p class="category">Revenue</p>
    <h3 class="title">$34,245</h3>
  </template>

  <template slot="footer">
    <div class="stats">
        <md-icon>date_range</md-icon>
        Last 24 Hours
    </div>
  </template>
</stats-card>


```html
<template>
  <div>
  <stats-card data-background-color="green">
    <template slot="header">
      <md-icon>store</md-icon>
    </template>

    <template slot="content">
      <p class="category">Revenue</p>
      <h3 class="title">$34,245</h3>
    </template>

    <template slot="footer">
      <div class="stats">
          <md-icon>date_range</md-icon>
          Last 24 Hours
      </div>
    </template>
  </stats-card>
  </div>
</template>

<script>
  export default {}
</script>
```

### StatsCard Attributes
| Attribute      | Description    | Type      | Accepted values       | Default   |
|---------- |-------- |---------- |-------------  |-------- |
| type     | Card type   | string  |   primary/danger/success/info/warning        |     primary     |
| icon     | Card icon   | string  |   -        |     -     |
| title     | Card title   | string  |   -        |     —     |
| subTitle     | Card subtitle (displayed above with smaller font)  | string  |      -        |     -     |

### StatsCard Slots
| Name | Description |
|---------- |-------- |
|  icon  | Content for card icon |
|  default  | Default card content |
|  footer  | Content for card footer |


### Chart card

For the implementation of graphic charts, we used [Chartist.js](https://gionkunz.github.io/chartist-js/).

<chart-card
    :chart-data="dailySalesChart.data"
    :chart-options="dailySalesChart.options"
    chart-type="Line"
    data-background-color="green">
    <template slot="content">
      <h4 class="title">Daily Sales</h4>
        <p class="category">
          <span class="text-success"><i class="fa fa-long-arrow-up"></i> 55% </span> increase in today sales.
        </p>
    </template>

    <template slot="footer">
      <div class="stats">
        <md-icon>access_time</md-icon>
        updated 4 minutes ago
      </div>
    </template>
  </chart-card>

```html
<template>
 <chart-card
     :chart-data="dailySalesChart.data"
     :chart-options="dailySalesChart.options"
     chart-type="Line"
     data-background-color="green">
     <template slot="content">
       <h4 class="title">Daily Sales</h4>
         <p class="category">
           <span class="text-success"><i class="fa fa-long-arrow-up"></i> 55% </span> increase in today sales.
         </p>
     </template>

     <template slot="footer">
       <div class="stats">
         <md-icon>access_time</md-icon>
         updated 4 minutes ago
       </div>
     </template>
   </chart-card>
</template>

<script>
  export default {
    data(){
    return {
      dailySalesChart: {
        data: {
          labels: ['M', 'T', 'W', 'T', 'F', 'S', 'S'],
          series: [
            [12, 17, 7, 17, 23, 18, 38]
          ]
        },
        options: {
          lineSmooth: this.$Chartist.Interpolation.cardinal({
            tension: 0
          }),
          low: 0,
          high: 50, // creative tim: we recommend you to set the high sa the biggest value + something for a better look
          chartPadding: {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0
          }
        }
      }
      }
    }
  }
</script>
```

### ChartCard Attributes
| Attribute      | Description    | Type      | Accepted values       | Default   |
|---------- |-------- |---------- |-------------  |-------- |
| type     | Chart type   | string  |   line/bar/pie        |    -     |
| options     | Chart options   | string  |   -        |    -     |
| data     | Chart data   | string  |   -        |    -     |
| title     | Card title   | string  |   -       |     —     |
| subTitle     | Card subtitle (displayed above with smaller font)  | string  |      -        |     -     |

### ChartCard Slots
| Name | Description |
|---------- |-------- |
|  default  | Default card content |
|  footer  | Content for card footer |
