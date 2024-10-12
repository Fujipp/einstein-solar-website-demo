<script setup>
import Bg_effect from "../components/css/Background.vue";;
import Navbar from '../components/css/Navbar.vue';
import Contact from '../components/css/ContactButton.vue';
import FooterComponent from '../components/main/FooterComponent.vue';
import FormSection from '../components/main/FormSection.vue';
import MapSection from '../components/main/MapSection.vue';
</script>

<template>
  <Navbar />
  <header>
  </header>
  <main>
    <MapSection />
  </main>
  <footer>
    <FooterComponent />
  </footer>
  <Contact />
  <Bg_effect />
  <router-view></router-view>
</template>

<style>
@import 'swiper/swiper-bundle.css';
* {
  user-select: none;
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  scroll-behavior: smooth;
}

header {
  margin-bottom: 20px;
  background-color: #f8f9fa;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

main {
  padding-top: 50px;
  min-height: calc(100vh - 160px); /* Adjust according to header and footer height */
}

footer {
  text-align: center;
  position: relative;
  bottom: 0;
  width: 100%;
}

.loading-overlay {
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