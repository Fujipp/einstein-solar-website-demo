<template>
    <footer class="bg-gray-900 text-white py-8">
      <div class="container mx-auto px-4">
        <div class="flex flex-wrap justify-between">
          <div class="w-full md:w-1/3 mb-8 md:mb-0 flex flex-col items-center md:items-start  pr-1">
            <img src="../../assets/icons/LogosolarWhite.png" alt="logo" class="w-40 h-auto mb-4" />
            <h2 class="text-lg font-semibold text-center md:text-left">บริษัท ไอน์สไตน์-สิบหก ดีไซน์ แอนด์ คอนซัลแทน จำกัด</h2>
            <p class="text-gray-400 text-center md:text-left">88/20 Moo 6 Nonglalok, Bankhai Rayong 21120 Thailand</p>
            <p class="text-gray-400 text-center md:text-left">Phone: (123) 456-7890</p>
            <p class="text-gray-400 text-center md:text-left">Email: info@company.com</p>
          </div>
          <div class="w-full md:w-1/3 mb-8 md:mb-0 text-center md:text-left">
            <h2 class="text-lg font-semibold mb-4">Quick Links</h2>
            <ul>
            <li class="mb-2"><router-link to="about" class="text-gray-400 hover:text-white">เกี่ยวกับเรา</router-link></li>
            <li class="mb-2"><router-link to="article" class="text-gray-400 hover:text-white">บทความ</router-link></li>
            <li class="mb-2"><router-link to="portfolio" class="text-gray-400 hover:text-white">ผลงานของเรา</router-link></li>
            <li class="mb-2"><router-link to="contact" class="text-gray-400 hover:text-white">ติดต่อเรา</router-link></li>
          </ul>
          </div>
          <div class="w-full md:w-1/3 mb-4 text-center md:text-left">
            <h2 class="text-lg font-semibold mb-4">Follow Us</h2>
            <div class="flex justify-center md:justify-start space-x-4">
              <a href="#" class="text-gray-400 hover:text-white"><i class="fab fa-facebook-f"></i></a>
              <a href="#" class="text-gray-400 hover:text-white"><i class="fab fa-twitter"></i></a>
              <a href="#" class="text-gray-400 hover:text-white"><i class="fab fa-linkedin-in"></i></a>
              <a href="#" class="text-gray-400 hover:text-white"><i class="fab fa-instagram"></i></a>
            </div>
          </div>
        </div>
        <div class="border-t border-gray-700 mt-8 pt-4 text-center text-gray-400">
          &copy; 2024 Company Name. All rights reserved.
        </div>
      </div>
    </footer>
  </template>
  
  <script>
  export default {
    name: 'FooterComponent'
  };
  </script>
  
  <style scoped>
  @import url("https://fonts.googleapis.com/css2?family=Kanit:wght@300&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Agbalumo&family=Kanit:wght@300&display=swap");
@import url("https://fonts.googleapis.com/css?family=Poppins:100,200,300,400,500,600,700,800,900");
  footer {
    background-color: #1a202c; /* Tailwind's gray-900 */
    color: #f7fafc; /* Tailwind's white */
    font-family: "Kanit", sans-serif;
  }
  </style>