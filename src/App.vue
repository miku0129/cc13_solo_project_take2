<template>
  <div>
    <p>Hello world!!</p>
    <Map />
  </div>
</template>

<script>
import Map from "./components/Map";
export default {
  name: "app",
  components: {
    Map,
  },
  methods: {
    updateSrc: function () {
      // updated="http://maps.google.com/maps/api/js?key=xxxxxxxxxx"
    },
    getMap: function () {
      console.log("clicked!");
      //   let addressInput = document.getElementById('addressInput2').value;
      //   let geocoder = new google.maps.Geocoder();

      //   geocoder.geocode({
      //   address: addressInput
      // }, function(results, status) {
      //   if (status == google.maps.GeocoderStatus.OK) {

      //     //making instance for Map class
      //     let map = new google.maps.Map(
      //       document.getElementById("mapArea"),
      //       {
      //         mapTypeId: google.maps.MapTypeId.ROADMAP
      //       }
      //     );

      //     //making instance for ShowingMap class
      //     let bounds = new google.maps.LatLngBounds();

      //     for (let i in results) {
      //       if (results[i].geometry) {

      //     //get information about lat and lng
      //     let latlng = results[i].geometry.location;

      //     //get address
      //     let address = results[i].formatted_addres

      //     //expand showing 1area on the map
      //     bounds.extend(latlng);

      //     //showing information about lng, lat and address
      //     new google.maps.InfoWindow(
      //           {
      //             content: "(lat, lng) = " + latlng.toString() +
      //                      "<br />" + address
      //           }
      //         ).open(
      //           map,
      //           new google.maps.Marke(
      //             {
      //               position: latlng,
      //               map: map
      //             }
      //           )
      //         );
      //       }
      //     }
      //     //move to showing area
      //     map.fitBounds(bound);
      //     //setting for zooming
      //     map.setZoom(15);

      //     // else part
      //   } else if (status == google.maps.GeocoderStatus.ZERO_RESULTS) {
      //     alert("Couldn't find address");
      //   } else if (status == google.maps.GeocoderStatus.ERROR) {
      //     alert("Failed to connect server.");
      //   } else if (status == google.maps.GeocoderStatus.INVALID_REQUEST) {
      //     alert("Invalid request.");
      //   } else if (status == google.maps.GeocoderStatus.OVER_QUERY_LIMIT) {
      //     alert("Too many request");
      //   } else if (status == google.maps.GeocoderStatus.REQUEST_DENIED) {
      //     alert("Out of service");
      //   } else if (status == google.maps.GeocoderStatus.UNKNOWN_ERROR) {
      //     alert("Unknown error");
      //   }
      //     //end of if block
      // });
      //last line
    },
    //end of method block
  },
  //end of export block
};
</script>

<style>
body {
  background-color: lightgoldenrodyellow;
}
</style>