## Textarea

<script>
module.exports = {
  data: () => ({
    aboutme: null
  })
}
</script>

To use the custom form group inputs you don't need to import the custom made component, you can use it like this:

::: demo
```html
<md-field>
  <label>About Me</label>
  <md-textarea v-model="aboutme"></md-textarea>
</md-field>
<script>
  export default {
    data: () => ({
      aboutme: null
    })
  }
</script>
```
:::

> Note: For more details about the textarea please see the **Input & Textarea** section from [vuematerial.io](https://vuematerial.io/components/input)
