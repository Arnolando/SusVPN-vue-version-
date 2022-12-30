<template>
  <loading-screen v-if="isLoaded" />
  <the-status />
  <the-header />
  <router-view class="slot" v-slot="slotProps">
    <component :is="slotProps.Component"></component>
  </router-view>
  <the-footer />
</template>

<script>
import LoadingScreen from "./components/loadingScreen.vue";
import TheStatus from "./pages/layouts/theStatus.vue";
import TheHeader from "./pages/layouts/theHeader.vue";
import TheFooter from "./pages/layouts/theFooter.vue";

export default {
  data() {
    return {
      isLoaded: true,
    };
  },
  components: {
    LoadingScreen,
    TheStatus,
    TheHeader,
    TheFooter,
  },
  mounted() {
    setTimeout(() => {
      this.isLoaded = false;
    }, 500);
  }
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Candal&family=Raleway:wght@400;600&display=swap");
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  position: relative;
}

/* .slot {
  margin-top: 156.8px;
} */

body {
  overflow-x: hidden;
  background: #e7e7ea;
  color: #130c27;
}

h1,
h2,
h3,
h4,
h5 {
  font-family: "Candal", sans-serif;
  font-weight: lighter;
  letter-spacing: -1px;
}

h1 {
  font-size: 70px;
}

h2 {
  font-size: 35px;
  margin-bottom: 5px;
}

h3 {
  font-size: 25px;
  margin-bottom: 5px;
}

h4 {
  font-size: 20px;
  margin-bottom: 5px;
}

p,
a,
span,
button,
li,
div {
  font-family: "Raleway", sans-serif;
}

a {
  text-decoration: none;
  color: #130c27;
  transition: 0.2s all ease;
}

a:hover {
  transition: 0.2s all ease;
  color: #f7ae44;
}

.col {
  display: flex;
  align-items: center;
}

.col2 {
  display: flex;
  align-items: flex-start;
  justify-content: center;
}

.grid {
  display: grid;
  grid-template-rows: repeat(4, 1fr);
  grid-template-columns: repeat(2, 1fr);
  row-gap: 4.8rem;
}

.butn1 {
  font-weight: 600;
  color: #e7e7ea;
  background-color: #e03131;
  border: 2px solid #e03131;
  border-radius: 6px;
  transition: 0.2s ease-out;
  padding: 10px 20px;
}

.butn1:hover {
  cursor: pointer;
  background-color: #130c27;
  border-color: #130c27;
  color: #e7e7ea;
  box-shadow: 0 3px 2px 0 #130c275b;
  text-shadow: 0 0 1px #e7e7ea;
}

.p-5 {
  padding: 150px 25px;
}

.jumbotron {
  background: linear-gradient(to right, #f7ae44, #f7ae44, #ff6600);
}

.jumbotron-dark {
  background-color: #130c27;
  color: #e7e7ea;
}

.cards,
.footer-info {
  display: flex;
  align-items: flex-start;
  gap: 50px;
  margin-bottom: 46px;
}

.card-text {
  margin-bottom: 10px;
}

.card {
  justify-content: space-between;
}

.card-img {
  border-radius: 50%;
  width: 75px;
}

.card-id {
  margin-left: 25px;
}

.center {
  display: block;
  margin-left: auto;
  margin-right: auto;
}

.center-text {
  text-align: center;
}

.silent-text {
  color: #bbbfc4;
}

.container {
  max-width: 1290px;
  margin: 0 auto;
}

.container800 {
  max-width: 800px;
  margin: 0 auto;
}

.container600 {
  margin: 0 auto;
  max-width: 600px;
}

.container1k {
  max-width: 1090px;
  margin: 0 auto;
}

.text-spacing {
  margin-top: 10px;
  margin-bottom: 10px;
}

.xs-spacing {
  margin-bottom: 25px;
}

.s-spacing {
  margin-bottom: 50px;
}

.m-spacing {
  margin-bottom: 75px;
}

.l-spacing {
  margin-bottom: 100px;
}

.l-right-spacing {
  margin-right: 25px;
}

.m-right-spacing {
  margin-right: 15px;
}

.s-right-spacing {
  margin-right: 5px;
}

.l-left-spacing {
  margin-left: 25px;
}

.m-left-spacing {
  margin-left: 15px;
}

.s-left-spacing {
  margin-left: 5px;
}

.long-text {
  line-height: 1.7;
}

.status-text,
.card-id {
  font-weight: 600;
  letter-spacing: 1.5px;
}

.danger-text {
  color: #e03131;
}

.sussy-text {
  color: #f7ae44;
}

.speed,
.shield,
.tv {
  width: 50px;
  margin-bottom: 15px;
}

.step-number {
  display: inline-block;
  background-color: #f7ae44;
  color: #130c27;
  border-radius: 50%;
  width: 50px;
  line-height: 50px;
  text-align: center;
  box-shadow: 0 1px 2px #130c274a;
}
</style>
