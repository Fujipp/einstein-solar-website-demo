<template>
  <header :class="{'scrolled': isScrolled}">
    <div class="container mx-auto flex justify-between items-center relative">
      <div class="logo flex items-center" @click="scrollToTop">
        <img src="../../assets/icons/Logosolar.png" alt="logo" class="w-30 h-12" />
        <!-- <h3>Einstein-16</h3> -->
      </div>
      <nav class="hidden md:flex space-x-6">
        <router-link to="/" class="nav-link">หน้าแรก</router-link>
        <router-link to="about" class="nav-link">เกี่ยวกับเรา</router-link>
        <router-link to="article" class="nav-link">บทความ</router-link>
        <router-link to="portfolio" class="nav-link">ผลงานของเรา</router-link>
        <router-link to="contact" class="nav-link">ติดต่อเรา</router-link>
      </nav>
      <div class="md:hidden flex items-center" @click="toggleMenu">
        <div :class="{ 'open': isMenuOpen }" class="menu-btn">
          <div class="menu-btn__burger"></div>
        </div>
      </div>
    </div>
  </header>
    <transition name="menu">
      <nav v-show="isMenuOpen" class="dropdown_menu md:hidden flex flex-col items-center space-y-4 backdrop-blur-lg p-4 rounded-lg">
        <router-link to="" class="nav-link" @click="toggleMenu"></router-link>
        <router-link to="/" class="nav-link" @click="toggleMenu">หน้าแรก</router-link>
        <router-link to="about" class="nav-link" @click="toggleMenu">เกี่ยวกับเรา</router-link>
        <router-link to="article" class="nav-link" @click="toggleMenu">บทความ</router-link>
        <router-link to="portfolio" class="nav-link" @click="toggleMenu">ผลงานของเรา</router-link>
        <router-link to="contact" class="nav-link" @click="toggleMenu">ติดต่อเรา</router-link>
      </nav>
    </transition>
</template>

<script>
export default {
  name: 'Navbar',
  data() {
    return {
      isScrolled: false,
      isMenuOpen: false,
    };
  },
  methods: {
    scrollToTop() {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    },
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },
    handleScroll() {
      this.isScrolled = window.scrollY > 0;
    },
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll);
  }
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Kanit:wght@300&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Agbalumo&family=Kanit:wght@300&display=swap");
@import url("https://fonts.googleapis.com/css?family=Poppins:100,200,300,400,500,600,700,800,900");

* {
  user-select: none;
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  scroll-behavior: smooth;
}

header {
  z-index: 1000; /* Set higher z-index to ensure it stays on top */
  top: 0;
  width: 100%;
  position: fixed;
  padding: 15px 10%;
  background-color: transparent;
  transition: background-color 0.4s ease-in-out;
  background-color: rgba(255, 255, 255, 0.457);
}

header.scrolled {
  /* background-color: rgba(11, 11, 11, 0.9); */
  background-color: white;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
}
.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative; /* Add relative positioning */
  z-index: 1000; /* Ensure container stays above dropdown menu */
}

.logo {
  cursor: pointer;
  display: flex;
  align-items: center;
}

.logo h3 {
  font-family: "Poppins", sans-serif;
  font-size: 25px;
  font-weight: 600;
  color: #7a401a;
  margin-left: 10px;
}

.nav-link {
  font-family: "Kanit", sans-serif;
  font-weight: 500;
  font-size: 16px;
  color: #7e8084;
  text-decoration: none;
  transition: all 0.3s ease;
}

.nav-link:hover {
  color: #213d86;
  transform: translateY(-3px);
}

.nav-link::before {
  content: "";
  position: absolute;
  width: 0%;
  height: 2px;
  bottom: -1px;
  left: 50%;
  background-color: #213d86;
  transition: all 0.3s ease;
}

.nav-link:hover::before {
  width: 50%;
  left: 25%;
}

.cta {
  font-family: "Agbalumo", sans-serif;
  padding: 9px 25px;
  background-color: #262626;
  border: none;
  border-radius: 50px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.cta:hover {
  background-color: #88b4d6;
  transform: scale(1.05);
}

.cta:active {
  transform: scale(0.95);
}

.dropdown_menu {
  /* background-color: rgba(24, 24, 24, 0.314); */
  background-color: white;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  padding: 1rem;
  border-radius: 0.5rem;
  text-align: center;
  position: fixed;
  top: 60px; /* Adjust to start below the Navbar */
  width: 100%;
  left: 0;
  backdrop-filter: blur(10px);
  z-index: 990; /* Ensure it is below the header and container */
}

/* Styles for the menu icon */
.menu-icon {
  display: flex;
  align-items: center;
  cursor: pointer;
}

.menu-btn {
  position: relative;
  width: 30px;
  height: 22px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.menu-btn__burger {
  width: 100%;
  height: 3px;
  background-color: #7e8084;
  border-radius: 5px;
  transition: all 0.3s ease;
}

.menu-btn__burger::before,
.menu-btn__burger::after {
  content: "";
  position: absolute;
  width: 100%;
  height: 3px;
  background-color: #7e8084;
  border-radius: 5px;
  transition: all 0.3s ease;
}

.menu-btn__burger::before {
  transform: translateY(-8px);
}

.menu-btn__burger::after {
  transform: translateY(8px);
}

.menu-btn.open .menu-btn__burger {
  background-color: transparent; /* Hide middle line */
}

.menu-btn.open .menu-btn__burger::before {
  transform: rotate(45deg) translate(5px, -5px);
}

.menu-btn.open .menu-btn__burger::after {
  transform: rotate(-45deg) translate(5px, 5px);
}

/* Transitions */
.menu-enter-active, .menu-leave-active {
  transition: opacity 0.3s ease, transform 0.3s ease;
}
.menu-enter-from {
  transform: translateY(-100%);
  opacity: 0;
}
.menu-enter-to {
  transform: translateY(0);
  opacity: 1;
}
.menu-leave-from {
  transform: translateY(0);
  opacity: 1;
}
.menu-leave-to {
  transform: translateY(-100%);
  opacity: 0;
}

@media (max-width: 768px) {
  .container {
    flex-direction: row;
    justify-content: space-between;
  }
  .nav_links {
    display: none;
  }
  .logo h3 {
    margin-left: 10px;
  }
}
</style>