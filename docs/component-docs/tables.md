## Tables

To use the table component, import it:

```js
import {SimpleTable} from 'src/components'
import {OrderedTable} from 'src/components'
```

#### Global Usage

```js  
Vue.component(SimpleTable)
Vue.component(OrderedTable)
```

#### For Local Usage

```js
export default {
  components: {
    SimpleTable,
    OrderedTable
  }
}
```

> Note: For more details about the tables and which tables you can use in your project please see the **Table** section from [vuematerial.io](https://vuematerial.io/components/table)

### Simple Table

::: demo
```html
<template>
  <div class="content">
    <div class="md-layout">
      <div class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-100">
        <md-card>
          <md-card-header data-background-color="green">
            <h4 class="title">Simple Table</h4>
            <p class="category">Here is a subtitle for this table</p>
          </md-card-header>
          <md-card-content>
            <simple-table table-header-color="green"></simple-table>
          </md-card-content>
        </md-card>
      </div>
    </div>
  </div>
</template>

<script>
import {
  SimpleTable
} from '@/components'

export default{
  components: {
    SimpleTable
  }
}
</script>

```
:::

### Ordered Table

::: demo
```html
<template>
  <div class="content">
    <div class="md-layout">
      <div class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-100">
        <md-card>
          <md-card-header data-background-color="green">
            <h4 class="title">Ordered Table</h4>
            <p class="category">Here is a subtitle for this table</p>
          </md-card-header>
          <md-card-content>
            <ordered-table table-header-color="green"></ordered-table>
          </md-card-content>
        </md-card>
      </div>
    </div>
  </div>
</template>

<script>
import {
  OrderedTable
} from '@/components'

export default{
  components: {
    OrderedTable
  }
}
</script>

```
:::
