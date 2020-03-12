## Dropdown

To use the custom dropdown you don't need to import the custom made component because it's global registered, so you can use it like this:


### As List Item

```html
<div class="md-list">
  <md-list-item href="#something" class="dropdown">
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
</div>
```

> Note: Drop-down uses a click outside directive internally. You will get a warning if the directive is not imported. You can find the declaration of this directive in **src/globalDirectives.js**


#### Dropdown Attributes
| Attribute      | Description    | Type      | Accepted values       | Default   |
|---------- |-------- |---------- |-------------  |-------- |
| position     | drop down menu direction (up or down)   | string  |   dropdown-menu-right/dropdown-menu-left        |     -     |
| icon     | Dropdown icon   | string  |   -        |     -     |
| tag     | html tag that you want the dropdown to be rendered as   | string  |   -        |     li    |
| title     | Dropdown title   | string  |   -        |     —     |

#### Dropdown Slots
| Name | Description |
|---------- |-------- |
|  title  | Content for dropdown title |
