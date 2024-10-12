<template>
  <div class="shortcut-contact-container btn-chat-container">
    <div class="btn btn-chat" @click="toggleMenu">
      <div class="wave-effect"></div> <!-- เพิ่มคลื่นเอฟเฟกต์ -->
      <div class="close-icon" v-if="menuOpen"><i class="fas fa-times"></i></div>
      <div class="icon" v-else><i class="fas fa-comment-alt"></i></div>
    </div>
    <ul class="social-button" :class="{ show: menuOpen }">
      <li class="btn btn-line">
        <a href="https://line.me/ti/p/L1-lqcHgv8" target="_blank" @click="leadLineTrack">
          <div class="icon"><i class="fab fa-line"></i></div>
          <div class="text">@Einstein-16</div>
        </a>
      </li>
      <li class="btn btn-facebook">
        <a target="_blank" href="https://www.facebook.com/NantiyaNavarat/" @click="leadFacebookTrack">
          <div class="icon"><i class="fab fa-facebook"></i></div>
          <div class="text">Einstein-16</div>
        </a>
      </li>
      <li class="btn btn-mobile">
        <a href="tel:0925364156" @click="leadPhoneTrack">
          <div class="icon"><i class="fas fa-phone-alt"></i></div>
          <div class="text">0925364156</div>
        </a>
      </li>
      <li class="btn btn-email">
        <a href="mailto:navarat@einstein-16.com" @click="leadContactusTrack">
          <div class="icon"><i class="fas fa-envelope"></i></div>
          <div class="text">navarat@einstein-16.com</div>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      menuOpen: false,
    };
  },
  methods: {
    toggleMenu() {
      this.menuOpen = !this.menuOpen;
    },
    leadContactusTrack() {
      // Tracking function for contact us
    },
    leadPhoneTrack() {
      // Tracking function for phone call
    },
    leadFacebookTrack() {
      // Tracking function for Facebook
    },
    leadLineTrack() {
      // Tracking function for Line
    },
  },
};
</script>

<style scoped>
.shortcut-contact-container {
    position: fixed;
    z-index: 9;
    right: 20px;
    bottom: 20px;
}

.btn-chat-container .btn.btn-chat {
    line-height: 60px;
    position: relative;
    z-index: 201000000;
    width: 60px;
    height: 60px;
    margin: 0;
    padding: 0;
    cursor: pointer;
    text-align: center;
    border-radius: 50%;
    background-color: #fe7820;
    box-shadow: rgba(0, 0, 0, .15) 0 4px 12px 0;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: background-color 0.3s ease;
}

.wave-effect {
    position: absolute;
    width: 60px;
    height: 60px;
    top: 0;
    left: 0;
    border-radius: 50%;
    background-color: rgba(255, 120, 32, 0.5);
    animation: wave 2s infinite;
    pointer-events: none;
    z-index: -1; /* ทำให้คลื่นอยู่ข้างหลังปุ่ม */
}

@keyframes wave {
    0% {
        transform: scale(1);
        opacity: 0.7;
    }
    100% {
        transform: scale(2.5);
        opacity: 0;
    }
}

.btn-chat-container .btn.btn-chat:hover {
    background-color: #cb5000;
}

.btn-chat-container .btn.btn-chat .icon, .btn-chat-container .btn.btn-chat .close-icon {
    font-size: 24px;
    color: #fff;
    transition: transform 0.3s ease;
}

.btn-chat-container .btn.btn-chat.selected .icon {
    transform: rotate(540deg);
}

.btn-chat-container .btn.btn-chat.selected .close-icon {
    transform: rotate(360deg);
    opacity: 1;
}

.btn-chat-container .btn.btn-chat.selected {
    background-color: #ccc;
}

.btn-chat-container .social-button {
    position: absolute;
    bottom: 70px;
    right: 0;
    margin: 0;
    padding: 0;
    list-style: none;
    pointer-events: none;
    display: flex;
    flex-direction: column-reverse;
    align-items: flex-end;
}

.shortcut-contact-container .social-button.show {
    pointer-events: all;
}

.btn-chat-container .social-button .btn {
    position: relative;
    z-index: 1;
    width: auto;
    height: 50px;
    margin: 0.25px 0;
    padding: 0;
    transition: opacity 0.3s ease, transform 0.3s ease;
    opacity: 0;
    border-radius: 25px;
    background-color: #213d86;
    box-shadow: 2px 2px 6px rgba(0, 0, 0, .4);
    display: flex;
    align-items: center;
    justify-content: flex-start;
}

.btn-chat-container .social-button .btn:hover {
    transform: scale(1.2); /* เพิ่มขนาดการขยาย */
    transition: transform 0.3s ease; /* เพิ่ม transition */
}

.btn-chat-container .social-button .btn a {
    display: flex;
    align-items: center;
    width: 100%;
    height: 100%;
    padding: 0 10px;
    color: white;
    text-decoration: none;
}

.shortcut-contact-container .social-button .btn:nth-child(1) {
    transform: translateY(0);
    transition-delay: 0.4s;
}

.shortcut-contact-container .social-button .btn:nth-child(2) {
    transform: translateY(0);
    transition-delay: 0.3s;
}

.shortcut-contact-container .social-button .btn:nth-child(3) {
    transform: translateY(0);
    transition-delay: 0.2s;
}

.shortcut-contact-container .social-button .btn:nth-child(4) {
    transform: translateY(0);
    transition-delay: 0.1s;
}

.shortcut-contact-container .social-button .btn:nth-child(5) {
    transform: translateY(0);
    transition-delay: 0s;
}

.shortcut-contact-container .social-button.show .btn:nth-child(1) {
    transform: translateY(-20px);
}

.shortcut-contact-container .social-button.show .btn:nth-child(2) {
    transform: translateY(-40px);
}

.shortcut-contact-container .social-button.show .btn:nth-child(3) {
    transform: translateY(-60px);
}

.shortcut-contact-container .social-button.show .btn:nth-child(4) {
    transform: translateY(-80px);
}

.shortcut-contact-container .social-button.show .btn:nth-child(5) {
    transform: translateY(-100px);
}

.shortcut-contact-container .social-button.show .btn {
    opacity: 1;
}

.btn-chat-container .social-button .btn .icon {
    font-size: 20px;
    color: #fff;
    margin-right: 10px;
}

.btn-chat-container .btn .text {
    font-size: 14px;
    color: white !important;
    border-radius: 10px;
    white-space: nowrap;
}
</style>