import { createApp } from 'vue';
import { createPinia } from 'pinia';
import './style.css';
import '@fortawesome/fontawesome-free/css/all.css';
import 'swiper/css'; // ใช้ไฟล์ CSS หลักของ Swiper
import App from './App.vue';
import router from './router';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import i18n from './i18n'; // เพิ่มการ import i18n
import { googleMapsLoader } from './google-maps-loader'; 

// เพิ่มไอคอนไปยัง library
library.add(faCheck);

const app = createApp(App);
const pinia = createPinia();

// ลงทะเบียน FontAwesomeIcon component
app.component('font-awesome-icon', FontAwesomeIcon);

// ใช้ Pinia, router และ i18n
app.use(pinia);
app.use(router);
app.use(i18n); // ใช้ i18n

// Mount แอปไปที่ #app
app.mount('#app');