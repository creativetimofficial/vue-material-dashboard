## Maps

For maps we've used the library **google-maps**. You can use it by simply importing the maps view in the page you want to render it:

```js
import GoogleMapsLoader from 'google-maps'
methods: {
  initMap (google) {
    var myLatlng = new google.maps.LatLng(40.748817, -73.985428)
    var mapOptions = {
      zoom: 13,
      center: myLatlng,
      scrollwheel: false, // we disable de scroll over the map, it is a really annoing when you scroll through page
      styles: [{
        'featureType': 'water',
        'stylers': [{'saturation': 43}, {'lightness': -11}, {'hue': '#0088ff'}]
      }, {
        'featureType': 'road',
        'elementType': 'geometry.fill',
        'stylers': [{'hue': '#ff0000'}, {'saturation': -100}, {'lightness': 99}]
      }, {
        'featureType': 'road',
        'elementType': 'geometry.stroke',
        'stylers': [{'color': '#808080'}, {'lightness': 54}]
      }, {
        'featureType': 'landscape.man_made',
        'elementType': 'geometry.fill',
        'stylers': [{'color': '#ece2d9'}]
      }, {
        'featureType': 'poi.park',
        'elementType': 'geometry.fill',
        'stylers': [{'color': '#ccdca1'}]
      }, {
        'featureType': 'road',
        'elementType': 'labels.text.fill',
        'stylers': [{'color': '#767676'}]
      }, {
        'featureType': 'road',
        'elementType': 'labels.text.stroke',
        'stylers': [{'color': '#ffffff'}]
      }, {'featureType': 'poi', 'stylers': [{'visibility': 'off'}]}, {
        'featureType': 'landscape.natural',
        'elementType': 'geometry.fill',
        'stylers': [{'visibility': 'on'}, {'color': '#b8cb93'}]
      }, {'featureType': 'poi.park', 'stylers': [{'visibility': 'on'}]}, {
        'featureType': 'poi.sports_complex',
        'stylers': [{'visibility': 'on'}]
      }, {'featureType': 'poi.medical', 'stylers': [{'visibility': 'on'}]}, {
        'featureType': 'poi.business',
        'stylers': [{'visibility': 'simplified'}]
      }]

    }
    var map = new google.maps.Map(document.getElementById('map'), mapOptions)

    var marker = new google.maps.Marker({
      position: myLatlng,
      title: 'Hello World!'
    })

    // To add the marker to the map, call setMap();
    marker.setMap(map)
  }
},
mounted () {
  GoogleMapsLoader.KEY = 'YOUR_KEY_HERE'
  GoogleMapsLoader.load((google) => {
    this.initMap(google)
  })
}
```

For this component to work, you will need a google maps **API key**

Follow these steps to get an API key:

1. Go to the [Google API Console](https://developers.google.com/maps/documentation/javascript/get-api-key)
2. Create or select a project.
3. Click Continue to enable the API and any related services.
4. On the Credentials page, get an API key.
> Note: If you have an existing unrestricted API key, or a key with browser restrictions, you may use that key.

5. From the dialog displaying the API key, select Restrict key to set a browser restriction on the API key.
6. In the Key restriction section, select HTTP referrers (web sites), then follow the on-screen instructions to set referrers.
7. (Optional) Enable billing. See [Usage Limits](https://developers.google.com/maps/documentation/javascript/usage) for more information.
