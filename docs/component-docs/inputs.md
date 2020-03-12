## Inputs
To use the custom form group inputs you don't need to import the custom made component, you can use it like this:

<script>
module.exports = {
  data: () => ({
    initial: 'Initial Value',
    type: null
  })
}
</script>


```html
<md-field>
  <label>Initial Value</label>
  <md-input v-model="initial"></md-input>
</md-field>
<md-field>
  <label>Type here!</label>
  <md-input v-model="type"></md-input>
  <span class="md-helper-text">Helper text</span>
</md-field>
<script>
  export default {
    data: () => ({
      initial: 'Initial Value',
      type: null
    })
  }
</script>
```

> Note: For more details about the all inputs that you can use please see the **Input & Textarea** section from [vuematerial.io](https://vuematerial.io/components/input)
