# [Vue Material Dashboard](https://demos.creative-tim.com/vue-material-dashboard) [![Tweet](https://img.shields.io/twitter/url/http/shields.io.svg?style=social&logo=twitter)](https://twitter.com/home?status=Vue%20Material%20Dashboard,%20a%20free%20Material%20Admin%20Template%20%E2%9D%A4%EF%B8%8F%20https%3A//bit.ly/2Nh5aVy%20%20%23vue%20%23material%20%23design%20%23developers%20%23freebie%20%20via%20%40CreativeTim)


 ![version](https://img.shields.io/badge/version-1.3.2-blue.svg)  ![license](https://img.shields.io/badge/license-MIT-blue.svg) [![GitHub issues open](https://img.shields.io/github/issues/creativetimofficial/vue-material-dashboard.svg?maxAge=2592000)](https://github.com/creativetimofficial/vue-material-dashboard/issues?q=is%3Aopen+is%3Aissue) [![GitHub issues closed](https://img.shields.io/github/issues-closed-raw/creativetimofficial/vue-material-dashboard.svg?maxAge=2592000)](https://github.com/creativetimofficial/vue-material-dashboard/issues?q=is%3Aissue+is%3Aclosed) [![Join the chat at https://gitter.im/NIT-dgp/General](https://badges.gitter.im/NIT-dgp/General.svg)](https://gitter.im/creative-tim-general/Lobby) [![Chat](https://img.shields.io/badge/chat-on%20discord-7289da.svg)](https://discord.gg/E4aHAQy)


![Product Gif](https://s3.amazonaws.com/creativetim_bucket/github/gif/vue-material-dashboard.gif)

Vue Material Dashboard is a beautiful resource built over [Vue Material](https://vuematerial.io/) and [Vuejs](https://vuejs.org/v2/guide/). It will help you get started developing dashboards in no time. Vue Material Dashboard is the official Vuejs version of the Original Material Dashboard. Using the Dashboard is pretty simple but requires basic knowledge of Javascript, [Vuejs](https://vuejs.org/v2/guide/) and [Vue Router](https://router.vuejs.org/en/).

We have created it thinking about things you actually need in a dashboard. Vue Material Dashboard contains handpicked and optimised Vuejs plugins. Everything is designed to fit with one another. As you will be able to see, the dashboard you can access on Creative Tim is a customisation of this product.

Let us know what you think and what we can improve below. And good luck with development!


## Table of Contents

* [Versions](#versions)
* [Demo](#demo)
* [Quick Start](#quick-start)
* [Documentation](#documentation)
* [File Structure](#file-structure)
* [Browser Support](#browser-support)
* [Resources](#resources)
* [Reporting Issues](#reporting-issues)
* [Technical Support or Questions](#technical-support-or-questions)
* [Licensing](#licensing)
* [Useful Links](#useful-links)



## Versions

[<img src="https://s3.amazonaws.com/creativetim_bucket/github/html.png" width="60" height="60" />](https://www.creative-tim.com/product/material-kit)[<img src="https://s3.amazonaws.com/creativetim_bucket/github/react.svg" width="60" height="60" />](https://www.creative-tim.com/product/material-kit-react)
[<img src="https://s3.amazonaws.com/creativetim_bucket/github/vuejs.png" width="60" height="60" />](https://www.creative-tim.com/product/vue-material-dashboard)
[<img src="https://s3.amazonaws.com/creativetim_bucket/github/angular.png" width="60" height="60" />](https://www.creative-tim.com/product/material-dashboard-angular2)


| HTML | React  |
| --- | ---  |
| [![Material Dashboard  HTML](https://s3.amazonaws.com/creativetim_bucket/products/50/thumb/opt_md_thumbnail.jpg)](https://www.creative-tim.com/product/material-dashboard)  | [![Material Dashboard  React](https://s3.amazonaws.com/creativetim_bucket/products/71/thumb/opt_mdr_thumbnail.jpg)](https://www.creative-tim.com/product/material-dashboard-react)

| Vue | Angular  |
| --- | ---  |
| [![Vue Material Dashboard](https://s3.amazonaws.com/creativetim_bucket/products/81/thumb/opt_md_vue_thumbnail.jpg)](https://www.creative-tim.com/product/vue-material-dashboard) | [![Material Dashboard Angular 2](https://s3.amazonaws.com/creativetim_bucket/products/53/thumb/opt_md_angular_thumbnail.jpg)](https://www.creative-tim.com/product/material-dashboard-angular2)



## Demo

| Dashboard | User Profile | Tables | Maps | Notification |
| --- | --- | --- | --- | --- |
| [![Start page](src/assets/github/dashboard.png)](https://demos.creative-tim.com/vue-material-dashboard) | [![User profile page](src/assets/github/user_profile.png)](https://demos.creative-tim.com/vue-material-dashboard/#/user) | [![Tables page ](src/assets/github/tables.png)](https://demos.creative-tim.com/vue-material-dashboard/#/table) | [![Maps Page](src/assets/github/maps.png)](https://demos.creative-tim.com/vue-material-dashboard/#/maps) | [![Notification page](src/assets/github/notification.png)](https://demos.creative-tim.com/vue-material-dashboard/#/notifications)

[View More](https://demos.creative-tim.com/vue-material-dashboard).


## Quick start

## :cloud: Build Setup

### install dependencies
`npm install`
### serve with hot reload at localhost:8080
`npm run dev`
### build for production with minification
`npm run build`

- [Download from Github](https://github.com/creativetimofficial/vue-material-dashboard/archive/master.zip).
- [Download from Creative Tim](https://www.creative-tim.com/product/vue-material-dashboard).
- Clone the repo: `git clone https://github.com/creativetimofficial/vue-material-dashboard.git`.

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).


## Documentation
The documentation for the Vue Material Dashboard is hosted at our [website](https://demos.creative-tim.com/vue-material-dashboard/documentation).


## File Structure
Within the download you'll find the following directories and files:

```
vue-material-dashboard
├── README.md
├── babel.config.js
├── package.json
├── postcss.config.js
├── public
│   └── index.html
└── src
    ├── App.vue
    ├── assets
    │   ├── img
    │   └── scss
    │       ├── material-dashboard.scss
    │       └── md
    ├── components
    │   ├── Cards
    │   │   ├── ChartCard.vue
    │   │   ├── NavTabsCard.vue
    │   │   └── StatsCard.vue
    │   ├── Dropdown.vue
    │   ├── NotificationPlugin
    │   │   ├── Notification.vue
    │   │   ├── Notifications.vue
    │   │   └── index.js
    │   ├── SidebarPlugin
    │   │   ├── SideBar.vue
    │   │   ├── SidebarLink.vue
    │   │   └── index.js
    │   ├── Tables
    │   │   ├── NavTabsTable.vue
    │   │   ├── OrderedTable.vue
    │   │   └── SimpleTable.vue
    │   └── index.js
    ├── globalComponents.js
    ├── globalDirectives.js
    ├── main.js
    ├── material-dashboard.js
    ├── pages
    │   ├── Dashboard.vue
    │   ├── Icons.vue
    │   ├── Layout
    │   │   ├── Content.vue
    │   │   ├── ContentFooter.vue
    │   │   ├── DashboardLayout.vue
    │   │   ├── MobileMenu.vue
    │   │   └── TopNavbar.vue
    │   ├── Maps.vue
    │   ├── Notifications.vue
    │   ├── TableList.vue
    │   ├── Typography.vue
    │   ├── UpgradeToPRO.vue
    │   ├── UserProfile
    │   │   ├── EditProfileForm.vue
    │   │   └── UserCard.vue
    │   ├── UserProfile.vue
    │   └── index.js
    └── routes
        └── routes.js
```


## Browser Support

At present, we officially aim to support the last two versions of the following browsers:

<img src="https://s3.amazonaws.com/creativetim_bucket/github/browser/chrome.png" width="64" height="64"> <img src="https://s3.amazonaws.com/creativetim_bucket/github/browser/firefox.png" width="64" height="64"> <img src="https://s3.amazonaws.com/creativetim_bucket/github/browser/edge.png" width="64" height="64"> <img src="https://s3.amazonaws.com/creativetim_bucket/github/browser/safari.png" width="64" height="64"> <img src="https://s3.amazonaws.com/creativetim_bucket/github/browser/opera.png" width="64" height="64">


## Resources
- Demo: <https://demos.creative-tim.com/vue-material-dashboard>
- Download Page: <https://www.creative-tim.com/product/vue-material-dashboard>
- Documentation: <https://demos.creative-tim.com/vue-material-dashboard/documentation>
- License Agreement: <https://www.creative-tim.com/license>
- Support: <https://www.creative-tim.com/contact-us>
- Issues: [Github Issues Page](https://github.com/creativetimofficial/vue-material-dashboard/issues)
## Reporting Issues

We use GitHub Issues as the official bug tracker for the Vue Material Dashboard. Here are some advices for our users that want to report an issue:

1. Make sure that you are using the latest version of the Vue Material Dashboard. Check the CHANGELOG from your dashboard on our [website](https://www.creative-tim.com/).
2. Providing us reproducible steps for the issue will shorten the time it takes for it to be fixed.
3. Some issues may be browser specific, so specifying in what browser you encountered the issue might help.


## Technical Support or Questions

If you have questions or need help integrating the product please [contact us](https://www.creative-tim.com/contact-us) instead of opening an issue.



## Licensing

- Copyright 2018 Creative Tim (https://www.creative-tim.com/)

- Licensed under MIT (https://github.com/creativetimofficial/vue-material-dashboard/blob/master/LICENSE.md)



## Useful Links

- [More products](https://www.creative-tim.com/bootstrap-themes) from Creative Tim
- [Tutorials](https://www.youtube.com/channel/UCVyTG4sCw-rOvB9oHkzZD1w)
- [Freebies](https://www.creative-tim.com/bootstrap-themes/free) from Creative Tim
- [Affiliate Program](https://www.creative-tim.com/affiliates/new) (earn money)

##### Social Media

Twitter: <https://twitter.com/CreativeTim>

Facebook: <https://www.facebook.com/CreativeTim>

Dribbble: <https://dribbble.com/creativetim>

Google+: <https://plus.google.com/+CreativetimPage>

Instagram: <https://www.instagram.com/CreativeTimOfficial>
