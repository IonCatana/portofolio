<template>
  <GMapMap :center="center" :zoom="11" map-type-id="terrain" style="width: 100%; height: 300px">
    <GMapCluster>
      <GMapMarker :key="index" v-for="(m, index) in markers" :position="m.position" :clickable="true" :draggable="true"
        @click="center = m.position" />
    </GMapCluster>
  </GMapMap>
</template>
<script>
export default {
  name: 'GoogleMap',
  data() {
    return {
      center: {
        lat: 45.511185,
        lng: 9.104199
      },
      markers: [
        {
          position: {
            lat: 45.511185,
            lng: 9.104199
          },
        }
        , // Along list of clusters
      ]
    }
  }
}
</script>