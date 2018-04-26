## Cards


## Stats cards

:::demo
```html
<template>
  <div>
  <stats-card data-background-color="green">
        <template slot="header">
          <md-icon >store</md-icon>
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
:::




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
