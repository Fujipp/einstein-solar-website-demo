<template>
  <div class="flex items-center justify-center min-h-screen py-16 px-4 sm:px-6 lg:px-8">
    <div class="max-w-4xl w-full">
      <div class="text-center">
        <h2 class="text-base text-custom-blue font-semibold tracking-wide uppercase">FAQs</h2>
        <p class="mt-1 text-4xl leading-10 font-extrabold text-[#213d86] sm:text-5xl sm:leading-none">
          You Should Know
        </p>
        <div class="border-b-2 border-custom-blue w-16 mx-auto mt-2"></div>
      </div>
      <div class="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8 relative">
        <div class="flex flex-col items-end md:pr-8">
          <dt class="w-full text-right">
            <p class="text-lg leading-6 font-bold text-gray-900">ทำไมต้องเปลี่ยนมาใช้โซลาร์ ?</p>
          </dt>
          <dd class="mt-2 text-base text-gray-500 w-full text-right">
            <ul class="list-none space-y-2">
              <li class="flex justify-end items-center">
                <span>โซลาร์เซลล์ ช่วยประหยัด ราคา ค่าไฟฟ้าอาคารให้กับคุณ</span>
                <font-awesome-icon icon="check" class="text-[#40c232] ml-2" />
              </li>
              <li class="flex justify-end items-center">
                <span>ใช้พลังงานแสงอาทิตย์ผลิตไฟฟ้าได้อย่างไม่จำกัด</span>
                <font-awesome-icon icon="check" class="text-[#40c232] ml-2" />
              </li>
              <li class="flex justify-end items-center">
                <span>โซลาร์เซลล์ คุ้มค่าคุ้ม ราคาในระยะยาว</span>
                <font-awesome-icon icon="check" class="text-[#40c232] ml-2" />
              </li>
              <li class="flex justify-end items-center">
                <span>โซลาร์เซลล์ทำให้บ้านและอาคารเย็นขึ้น</span>
                <font-awesome-icon icon="check" class="text-[#40c232] ml-2" />
              </li>
              <li class="flex justify-end items-center">
                <span>การบำรุงดูแลรักษาโซลาร์เซลล์ง่ายกว่า</span>
                <font-awesome-icon icon="check" class="text-[#40c232] ml-2" />
              </li>
            </ul>
          </dd>
        </div>
        <div class="flex flex-col items-start md:pl-8">
          <dt class="w-full text-left">
            <p class="text-lg leading-6 font-bold text-gray-900">ทำไมถึงต้องติดตั้งกับเรา ?</p>
          </dt>
          <dd class="mt-2 text-base text-gray-500 w-full text-left">
            <ul class="list-none space-y-2">
              <li class="flex items-start ">
                <font-awesome-icon icon="check" class="text-[#40c232] mr-2 mt-1" />
                <span>เราเลือกและหาโซลูชั่นพลังงานแสงอาทิตย์ให้กับลูกค้าที่เหมาะสมเพื่อลดต้นทุนพลังงานไฟฟ้า</span>
              </li>
              <li class="flex items-start">
                <font-awesome-icon icon="check" class="text-[#40c232] mr-2 mt-1" />
                <span>เรามีประสบการณ์และความสามารถในการสนับสนุนโครงการพลังงานแสงอาทิตย์ทุกประเภทตั้งแต่เริ่มก่อตั้ง จนตลอดอายุการใช้งานของโรงงาน</span>
              </li>
              <li class="flex items-start">
                <font-awesome-icon icon="check" class="text-[#40c232] mr-2 mt-1" />
                <span>เราเป็นผู้เชี่ยวชาญด้าน O&M สำหรับโรงไฟฟ้าพลังงานแสงอาทิตย์ โดยให้บริการตรวจสอบโรงงาน บำรุงรักษา และแก้ไขตามความต้องการของลูกค้าอย่างครบวงจร</span>
              </li>
            </ul>
          </dd>
        </div>
        <div class="absolute inset-0 flex justify-center items-center pointer-events-none">
          <div class="h-full border-l-2 border-custom-blue"></div>
        </div>
      </div>
      <div class="mt-10 text-center">
        <button class="px-8 py-3 bg-custom-blue text-white text-lg font-medium rounded-md shadow-md bg">
          สนใจติดต่อ
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

export default {
  name: 'FaqSection',
  components: {
    FontAwesomeIcon
  }
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Kanit:wght@300&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Agbalumo&family=Kanit:wght@300&display=swap");
@import url("https://fonts.googleapis.com/css?family=Poppins:100,200,300,400,500,600,700,800,900");

* {
  font-family: "Kanit", sans-serif;
}
.md\\:pr-8 {
  padding-right: 2rem;
}
.md\\:pl-8 {
  padding-left: 2rem;
}
.border-custom-blue {
  border-color: #fe7820;
}
.text-custom-blue {
  color: #fe7820;
}
.bg-custom-blue {
  background-color: #fe7820;
}
.bg:hover {
  background-color: #cb5000;
}

@media (max-width: 767px) {
  .border-custom-blue {
 display: none;
}
}
</style>