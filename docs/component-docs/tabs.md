## Tabs

If you have information that you don't need to show at once, we suggest you use tabs. We carefully re-styled the custom tabs component from vuematerial.io which you can easily use.

In order to use the tabs, import the necessary components:

```js
import {NavTabsCard, NavTabsTable} from 'src/components'
```

#### Global Usage

```js
Vue.component(NavTabsCard)
Vue.component(NavTabsTable)
```
#### For Local Usage

```js
export default {
  components: {
    NavTabsCard,
    NavTabsTable
  }
}

```

### Nav Tabs table

::: demo
```html
<div class="md-layout">
  <div class="md-layout-item md-size-100">
    <nav-tabs-card>
      <template slot="content">
        <span class="md-nav-tabs-title">Tasks:</span>
        <md-tabs md-sync-route class="md-primary" md-alignment="left">

          <md-tab id="tab-home" md-label="Bugs" md-icon="bug_report">
            <nav-tabs-table></nav-tabs-table>
          </md-tab>

          <md-tab id="tab-pages" md-label="Website" md-icon="code">
            <nav-tabs-table></nav-tabs-table>
          </md-tab>

          <md-tab id="tab-posts" md-label="server" md-icon="cloud">
            <nav-tabs-table></nav-tabs-table>
          </md-tab>
        </md-tabs>
      </template>
    </nav-tabs-card>
  </div>
</div>
<script>
import {
  NavTabsCard,
  NavTabsTable
} from '@/components'

export default{
  components: {
    NavTabsCard,
    NavTabsTable
  }
}
</script>
```
:::

> Note: for more details about the tabs that can you use please see the **Tabs** section from [vuematerial.io](https://vuematerial.io/components/tabs/)
