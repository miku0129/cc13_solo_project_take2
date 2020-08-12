<template>
  <div>
    <p>Hello world!!</p>
    <input type="text" id="addressInput" value="Tokyo" style="width:250px" />
    <input type="button" value="get location" @click="getLatLngMap" />
    <br />
    <br />
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
  data() {
    return {
      src: "",
    };
  },
  methods: {
    getLatLngMap() {
      console.log("map!");
    },
  },
};
</script>

<style>
body {
  background-color: lightgoldenrodyellow;
}
</style>