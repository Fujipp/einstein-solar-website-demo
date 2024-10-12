<template>
    <div class="container mx-auto p-4">
      <div class="relative">
        <img :src="require(`/src/assets/work/1/${images[currentIndex].src}`)" :alt="images[currentIndex].alt" class="w-full h-auto transition-transform duration-500 ease-in-out transform hover:scale-105" />
        <div class="absolute top-0 left-0 right-0 bottom-0 flex flex-col justify-center items-center bg-black bg-opacity-50 text-white p-4">
          <h1 class="text-4xl font-bold mb-4 animate-fade-in">{{ images[currentIndex].heading }}</h1>
          <p class="text-lg animate-fade-in">{{ images[currentIndex].description }}</p>
        </div>
      </div>
      <div class="flex justify-between mt-4">
        <button @click="prevImage" class="bg-gray-800 text-white py-2 px-4 rounded hover:bg-gray-700 transition-colors duration-300">Back</button>
        <button @click="nextImage" class="bg-gray-800 text-white py-2 px-4 rounded hover:bg-gray-700 transition-colors duration-300">Next</button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        currentIndex: 0,
        images: [
          {
            src: 'work1.png',
            alt: 'Image 1',
            heading: 'Image 1 Heading',
            description: 'This is a short description for image 1.'
          },
          {
            src: 'image2.jpg',
            alt: 'Image 2',
            heading: 'Image 2 Heading',
            description: 'This is a short description for image 2.'
          },
          // Add more images as needed
        ]
      };
    },
    methods: {
      nextImage() {
        this.currentIndex = (this.currentIndex + 1) % this.images.length;
      },
      prevImage() {
        this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
      }
    }
  };
  </script>
  
  <style scoped>
  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  
  .animate-fade-in {
    animation: fadeIn 1s ease-in-out;
  }
  </style>