<template>
  <LoadingSpinner :speed="speed" />
</template>

<script setup>
import { ref, onMounted } from 'vue';
import LoadingSpinner from './LoadingSpinner.vue';

const speed = ref(1);

const testInternetSpeed = async () => {
  const imageUrl = "https://www.google.com/images/phd/px.gif";
  const startTime = new Date().getTime();

  const downloadImage = new Image();
  downloadImage.onload = () => {
    const endTime = new Date().getTime();
    const duration = (endTime - startTime) / 1000;
    const fileSize = 0.015; // Approximate file size in MB
    speed.value = fileSize / duration;
  };

  downloadImage.src = imageUrl + "?cache=" + startTime;
};

onMounted(() => {
  testInternetSpeed();
});
</script>

<style scoped>
.loading-spinner {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(255, 255, 255, 0.7);
  z-index: 1000;
}
</style>