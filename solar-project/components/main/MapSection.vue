<template>
  <div ref="map" style="width: 100%; height: 500px;"></div>
</template>

<script>
import { googleMapsLoader } from '../../google-maps-loader';

export default {
  name: 'MapComponent',
  mounted() {
    googleMapsLoader.load().then(() => {
      const map = new google.maps.Map(this.$refs.map, {
        center: { lat: 12.6964948, lng: 101.2108573 }, // แทนที่ด้วยพิกัดที่ได้จาก Geocoding API
        zoom: 12,
      });

      new google.maps.Marker({
        position: { lat: 12.6964948, lng: 101.2108573 }, // แทนที่ด้วยพิกัดที่ได้จาก Geocoding API
        map,
      });
    }).catch(error => {
      console.error('Error loading Google Maps:', error);
    });
  },
};
</script>

<style scoped>
/* เพิ่มสไตล์ที่นี่ */
</style>
