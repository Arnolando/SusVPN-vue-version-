<template>
  <header class="jumbotron p-1" :class="{ position: scrollPosition > 30.4 }">
    <div class="main-header container">
      <div class="logo">
        <router-link to="/"
          ><img
            src="@/img/SusVPN-Logo.gif"
            alt="SusVPN Logo"
            class="logo-image"
        /></router-link>
        <div class="logo-text">
          <router-link to="/" id="title-text">SusVPN</router-link>
          <p id="subtitle-text">The sussiest VPN on earth</p>
        </div>
      </div>
      <nav class="main-nav">
        <router-link to="/" class="anchor home">home</router-link>
        <router-link class="anchor about" to="about">about</router-link>
        <router-link to="contact" class="anchor contact">contact</router-link>
      </nav>
      <div>
        <button
          id="lang-btn"
          class="butn1 col"
          :style="{
            borderBottomLeftRadius: isOpen ? '0' : '6px',
            borderBottomRightRadius: isOpen ? '0' : '6px',
            color: isOpen ? '#e7e7ea' : '#130c27',
            backgroundColor: isOpen ? '#130c27' : 'transparent',
          }"
          @click="isOpen = !isOpen"
        >
          EN
        </button>
        <transition name="expand">
          <div class="lang-list" v-if="isOpen">
            <router-link to id="lang-text" class="col"
              ><img class="flag l-right-spacing" src="@/img/flags/uk.png" /><u
                >English</u
              ></router-link
            >
            <a href="fr" id="lang-text" class="col"
              ><img
                class="flag l-right-spacing"
                src="@/img/flags/france.png"
              />Français</a
            >
          </div>
        </transition>
      </div>
      <router-link to="pricing" id="title-btn" class="butn1"
        >Get SusVPN</router-link
      >
    </div>
  </header>
  <div id="header-spacing" v-if="scrollPosition > 30.4"></div>
</template>

<script>
export default {
  data() {
    return {
      isOpen: false,
      scrollPosition: null,
    };
  },
  methods: {
    updateScroll() {
      this.scrollPosition = window.scrollY;
    },
  },
  mounted() {
    window.addEventListener("scroll", this.updateScroll);
  },
};
</script>

<style scoped>
/* #loading {
  position: absolute;
  z-index: 1000;
  background-color: white;
  height: 100vh;
  width: 100vw;
  text-align: center;
  line-height: 100vh;
}
.img {
  position: relative;
  margin: auto;
  margin-top: 20%;
  width: 400px;
} */

.position {
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 1;
  box-shadow: 0 0.1px 4px 0 #130c27;
}

#header-spacing {
  padding-top: 126.5px;
  background: linear-gradient(to right, #f7ae44, #f7ae44, #ff6600);
}

#title-text {
  font-family: Candal, sans-serif;
  font-size: 25px;
  transition: all 0.2s ease-out;
  color: #130c27;
}

#subtitle-text {
  color: #130c27;
  margin-top: 10px;
  font-size: 16px;
  font-weight: 600;
}

#title-btn {
  box-shadow: 0 1px 1px 0 #130c274b;
}

#title-btn:hover {
  box-shadow: 0 3px 2px 0 #130c275b;
  text-shadow: 0 0 1px #e7e7ea;
}

#lang-btn {
  color: #130c27;
  border: 2px solid #130c27;
  background: transparent;
  box-shadow: 0 0 3px 0 #130c274b;
}

#lang-btn:hover {
  color: #e7e7ea !important;
  background-color: #130c27 !important;
}

#lang-text {
  color: #e7e7ea;
}

#lang-text:first-child {
  padding-bottom: 15px;
}

#lang-text:hover {
  cursor: pointer;
}

.main-header,
.main-nav,
.logo {
  align-items: center;
  display: flex;
  justify-content: space-between;
}

.logo-image {
  width: 85px;
  display: block;
  align-items: center;
  border-radius: 50%;
  border: 2px solid #e7e7ea;
  transition: all 0.2s ease-out;
}

.logo-image:hover {
  box-shadow: 0 0 2px 1px #e7e7eaaa;
}

.p-1 {
  padding: 20px;
}

.logo-text {
  margin-left: 15px;
}

.main-header {
  margin: 0 auto;
}

.main-nav {
  gap: 75px;
  font-size: 16px;
  text-transform: capitalize;
}

.anchor {
  font-weight: 600;
  transition: 0.2s ease-out;
  color: #130c27;
  padding: 20px 0;
  border-bottom: 2px solid transparent;
}

.anchor:hover,
.anchor:active,
.anchor.router-link-active {
  cursor: pointer;
  border-bottom-color: #130c27;
}

.flag {
  width: 30px;
}

.lang-list {
  position: absolute;
  box-shadow: 1px 0 10px #130c274a;
  background-color: #130c27;
  border-radius: 6px;
  border-top-left-radius: 0;
  padding: 15px;
  width: fit-content;
  overflow: hidden;
  z-index: 1;
}

.expand-enter-active,
.expand-leave-active {
  transition: all 0.2s ease;
}

.expand-enter-from,
.expand-leave-to {
  opacity: 0;
  border-top-left-radius: 6px;
  transform: translateY(5px);
}

.expand-enter-to,
.expand-leave-from {
  border-top-left-radius: 0;
  opacity: 1;
}
</style>
