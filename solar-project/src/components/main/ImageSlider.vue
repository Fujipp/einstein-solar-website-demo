<template>
  <div class="slider-container">
    <div class="slider">
      <div
        class="slide"
        v-for="(slide, index) in slides"
        :key="index"
        :class="{ active: index === currentIndex, fade: true }"
      >
        <div class="image-overlay">
          <img :src="slide.image" :alt="slide.text" class="slide-image" />
        </div>
      </div>
    </div>
    <div class="fixed-content">
      <h2>รับปรึกษา และออกแบบติดตั้ง</h2>
      <p> ระบบโซล่าเซลส์ ทุกระบบ Solar Rooftop / Solar Floating / Solar Farm 
        <br>หากคุณประสบปัญหาค่าไฟฟ้าแพง ต้นทุนการค้าสูงขึ้น เราช่วยคุณได้ 
        <br>เพียงแค่คุณติดตั้งระบบผลิตไฟฟ้าพลังงานแสงอาทิตย์ กับเรา ไอน์สไตน์-16</p>
        <br><router-link to="about"><button class="cta-button bg">เกี่ยวกับเรา</button></router-link>
    </div>
    <div class="navigation">
      <span v-for="(slide, index) in slides" :key="index" :class="{'active': index === currentIndex}" @click="goToSlide(index)"></span>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import Image1 from '/images/IMG_3678_4K.png';
import Image2 from '/images/IMG_3670_4K.png';
import Image3 from '/images/IMG_3671_4K.png';
import { useRouter } from 'vue-router';

export default {
  setup() {
    const router = useRouter();
    const currentIndex = ref(0);
    const slides = ref([
      { image: Image1 },
      { image: Image2 },
      { image: Image3 },
    ]);

    const handleButtonClick = () => {
      router.push('/your-desired-route');
    };

    const nextSlide = () => {
      currentIndex.value = (currentIndex.value + 1) % slides.value.length;
    };

    const startAutoSlide = () => {
      setInterval(nextSlide, 5000); // เปลี่ยนสไลด์ทุก ๆ 5 วินาที
    };

    const goToSlide = (index) => {
      currentIndex.value = index;
    };

    onMounted(() => {
      startAutoSlide();
    });

    return {
      currentIndex,
      slides,
      handleButtonClick,
      nextSlide,
      goToSlide,
    };
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Kanit:wght@300&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Agbalumo&family=Kanit:wght@300&display=swap");
@import url("https://fonts.googleapis.com/css?family=Poppins:100,200,300,400,500,600,700,800,900");

.slider-container {
  position: relative;
  overflow: hidden;
  width: 100%;
  max-width: 100%;
  margin: auto;
}

.slider {
  position: relative;
  display: flex;
  flex-direction: column;
}

.slide {
  position: absolute;
  width: 100%;
  opacity: 0;
  transition: opacity 1s ease-in-out;
}

.slide.active {
  opacity: 1;
  position: relative;
}

.image-overlay {
  position: relative;
  width: 100%;
  height: 100%;
}

.image-overlay::before {
  content: '';
  position: absolute;
  width: 100%;
  height: 100%;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0));
  z-index: 1;
}

.slide-image {
  width: 100%;
  height: auto;
  display: block;
}

.fixed-content {
  position: absolute;
  bottom: 20%;
  left: 10%;
  color: white;
  z-index: 2;
}

.fixed-content h2 {
  font-family: "Kanit", sans-serif;
  font-size: 2.5em;
  font-weight: 600;
  margin: 0;
}

.fixed-content p {
  font-family: "Kanit", sans-serif;
  font-weight: 500;
  font-size: 1.2em;
  margin: 10px 0;
}

.cta-button {
  background-color: #fe7820;
  font-family: "Kanit", sans-serif;
  color: white;
  border: none;
  padding: 10px 20px;
  font-size: 1em;
  cursor: pointer;
  border-radius: 50px;
}

.navigation {
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  z-index: 3; /* เพิ่ม z-index ให้กับ navigation */
}

.navigation span {
  display: block;
  width: 20px; /* เพิ่มขนาดของปุ่ม */
  height: 20px; /* เพิ่มขนาดของปุ่ม */
  margin: 5px 0;
  background: rgba(255, 255, 255, 0.5);
  border-radius: 50%;
  cursor: pointer;
}

.navigation span.active {
  background: white;
}

.bg:hover {
  background-color: #cb5000;
}
</style>