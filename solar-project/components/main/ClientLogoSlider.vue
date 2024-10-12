<template>
  <div class="logo-slider-container">
    <h2 class="title">Our Clients</h2>
    <swiper
      :modules="[Autoplay, Pagination, Navigation]"
      :slides-per-view="5"
      :space-between="30"
      loop
      :autoplay="{ delay: 5000 }"
      :pagination="{ clickable: true }"
      :navigation="true"
      :breakpoints="{
        320: { slidesPerView: 1, spaceBetween: 10 },
        480: { slidesPerView: 2, spaceBetween: 20 },
        640: { slidesPerView: 3, spaceBetween: 30 },
        768: { slidesPerView: 4, spaceBetween: 30 },
        1024: { slidesPerView: 5, spaceBetween: 30 }
      }"
      class="mySwiper"
    >
      <swiper-slide v-for="(logo, index) in logos" :key="index" class="swiper-slide">
        <img :src="logo" alt="Client Logo" class="logo-image" />
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Autoplay, Pagination, Navigation } from 'swiper/modules';

import Vopak from '../../assets/customer/1200px-Vopak.svg.png';
import S from '../../assets/customer/angthong-logo.png';
import Sp from '../../assets/customer/autoโลโก้แถบแดงpng.png';
import Buu from '../../assets/customer/buu.png';
import Cmu from '../../assets/customer/CMU SUB-LOGO-01.png';
import EXIONTH from '../../assets/customer/EXIONTH.png';
import Hospital from '../../assets/customer/hospital.png';
import Bps from '../../assets/customer/images.png';
import IRPC from '../../assets/customer/IRPC.png';
import Sch from '../../assets/customer/logo (2).png';
import Tc from '../../assets/customer/logo-tc-png-2.png';
import Siam from '../../assets/customer/logo.png';
import Techtronic from '../../assets/customer/Techtronic.png';
import Khaowpong from '../../assets/customer/Khaowpong.png';
import Rc from '../../assets/customer/RC_ALX_Logo_1__1.webp';

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      Autoplay,
      Pagination,
      Navigation
    };
  },
  data() {
    return {
      logos: [
        Vopak,
        S,
        Sp,
        Buu,
        Cmu,
        EXIONTH,
        Hospital,
        Bps,
        IRPC,
        Sch,
        Tc,
        Siam,
        Techtronic,
        Khaowpong,
        Rc,
      ],
    };
  },
};
</script>

<style scoped>
.logo-slider-container {
  text-align: center;
  padding: 20px;
}

.title {
  font-size: 24px;
  margin-bottom: 20px;
}

.logo-image {
  width: 100px;
  height: auto;
  display: block;
  margin: 0 auto;
}

.swiper-button-next,
.swiper-button-prev {
  color: #000;
}

.swiper-pagination {
  bottom: 10px !important;
  text-align: center;
  width: 100%;
}

.swiper-pagination-bullet {
  width: 10px;
  height: 10px;
  background: #000;
  opacity: 0.2;
  border-radius: 50%;
  margin: 0 4px;
}

.swiper-pagination-bullet-active {
  background: #000;
  opacity: 1;
}
</style>