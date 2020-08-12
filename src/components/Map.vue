<template>
  <div>
    <GmapMap
      :zoom="10"
      :center="{ lat: 35.658636, lng: 139.745414 }"
      map-type-id="terrain"
      style="width: 100%; height: 300px"
    >
      <GmapMarker
        v-for="address in addresses"
        :key="address.key"
        :position="address.position"
        :animation="address.defaultAnimation"
        :type="address.type"
        :icon="address.icon"
        :clickable="true"
        @click="center = address.position"
      />
    </GmapMap>
  </div>
</template>

<script>
import { gmapApi } from "vue2-google-maps";
export default {
  google: gmapApi,
};
</script>
