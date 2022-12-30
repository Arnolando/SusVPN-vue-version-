<template>
  <div class="container1k">
    <h2 class="center-text s-spacing">Frequently Asked Questions</h2>
    <div class="grid">
      <img
        src="../img/query/SusVPN3.gif"
        alt="Sus query"
        class="query-image img1"
      />
      <div class="long-text query-text--1">
        <h3>What is SusVPN ?</h3>
        <transition name="query" mode="out-in">
          <p v-if="visibleSmallText1">A suspiciously secured VPN.</p>
          <p v-else>
            Internet is full of dangerous viruses ready to attack your device
            anytime. So protect yourself with SusVPN, your trusted cybersecurity
            partner. Its VPN makes your connection impenetrable and secures you
            against all malware. SusVPN is essential in these times of
            cybercrime booms. You can also secure an entire business, preventing
            hackers from disrupting your business and putting you out of
            business. But, SusVPN is much more than a computer program: it is a
            service that is at your disposal daily to help you with any problem
            and guarantee that our products work flawlessly.
          </p>
        </transition>
        <transition name="fade-query-button" mode="out-in">
          <button
            class="col query-btn"
            v-if="!visibleSmallText1"
            @click="toggleQueryText1"
          >
            Learn less<img class="arrow" :src="arrowL" />
          </button>
          <button class="col query-btn" v-else @click="toggleQueryText1">
            Learn more<img class="arrow" :src="arrowR" />
          </button>
        </transition>
      </div>
      <img
        src="../img/query/SusVPN2.gif"
        alt="Sus fights virus"
        class="query-image img2"
      />
      <div class="long-text query-text--2">
        <h3>Is SusVPN secure ?</h3>
        <transition name="query" mode="out-in">
          <p v-if="visibleSmallText2">Yes.</p>
          <p v-else>
            SusVPN is the most secure service and is always one step ahead of
            the rivalry. It was developed in conjunction with several of today's
            top hackers to make the system impenetrable. A team of more than
            1000 programmers works around the clock to fix any problem that may
            arise. If, despite using SusVPN, your device gets hacked, we will
            refund all subscription fees and offer you a new device equivalent
            to your hacker's device.
          </p>
        </transition>
        <transition name="fade-query-button" mode="out-in">
          <button
            class="col query-btn"
            v-if="!visibleSmallText2"
            @click="toggleQueryText2"
            @mouseover="hover2 = true"
            @mouseleave="hover2 = false"
          >
            Learn less<img class="arrow" :src="arrowL" />
          </button>
          <button class="col query-btn" v-else @click="toggleQueryText2">
            Learn more<img class="arrow" :src="arrowR" />
          </button>
        </transition>
      </div>
      <img
        src="../img/query/SusVPN4.gif"
        alt="Sus does moneydance"
        class="query-image img3"
      />
      <div class="long-text query-text--3">
        <h3>Is SusVPN free ?</h3>
        <transition name="query" mode="out-in">
          <p v-if="visibleSmallText3">No.</p>
          <p v-else>
            Creating an app of this magnitude is a colossal job. A lot of time
            and money had to be invested in order to guarantee a trouble-free
            service. This is why we must, unfortunately, inform you that we are
            not able to offer these services free of charge. However, the cost
            is pretty low and persistently decrease than that of our
            competitors.
          </p>
        </transition>
        <transition name="fade-query-button" mode="out-in">
          <button
            class="col query-btn"
            v-if="!visibleSmallText3"
            @click="toggleQueryText3"
          >
            Learn less<img class="arrow" :src="arrowL" />
          </button>
          <button class="col query-btn" v-else @click="toggleQueryText3">
            Learn more<img class="arrow" :src="arrowR" />
          </button>
        </transition>
      </div>
      <img
        src="../img/query/SusVPN5.gif"
        alt="Sus all over the world"
        class="query-image img4"
      />
      <div class="long-text query-text--4">
        <h3>Is SusVPN available in all countries ?</h3>
        <transition name="query" mode="out-in">
          <p v-if="visibleSmallText4">Yes.</p>
          <p v-else>
            In many countries there is censorship preventing inhabitants from
            consulting content contrary to the opinion of the government in
            place for example. This is no longer a problem with our VPN! In just
            a few clicks you can change the country or at least the country in
            which you are thought to be. But it also allows you to watch
            streaming content not available in your country. SusVPN then offers
            many other advantages apart from simple security.
          </p>
        </transition>
        <transition name="fade-query-button" mode="out-in">
          <button
            class="col query-btn"
            v-if="!visibleSmallText4"
            @click="toggleQueryText4"
          >
            Learn less <img class="arrow" :src="arrowL" />
          </button>
          <button class="col query-btn" v-else @click="toggleQueryText4">
            Learn more <img class="arrow" :src="arrowR" />
          </button>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      visibleSmallText1: true,
      visibleSmallText2: true,
      visibleSmallText3: true,
      visibleSmallText4: true,
      arrowR: require("@/img/icons/arrowR.svg"),
      arrowL: require("@/img/icons/arrowL.svg"),
    };
  },
  methods: {
    toggleQueryText1() {
      this.visibleSmallText1 = !this.visibleSmallText1;
    },
    toggleQueryText2() {
      this.visibleSmallText2 = !this.visibleSmallText2;
    },
    toggleQueryText3() {
      this.visibleSmallText3 = !this.visibleSmallText3;
    },
    toggleQueryText4() {
      this.visibleSmallText4 = !this.visibleSmallText4;
    },
  },
};
</script>

<style>
.arrow {
  width: 16px;
}

.query-btn {
  color: #e7e7ea;
  background-color: #130c27;
  border-radius: 6px;
  border-style: none;
  transition: 0.2s ease-out;
  padding: 7.5px 13px;
  font-weight: 600;
}

.query-btn:hover {
  cursor: pointer;
}

.query-btn img {
  transition: all 0.2s ease-out;
}

.query-btn:hover img {
  transform: translateX(5px);
}

.query-image {
  width: 400px;
}

.img2 {
  grid-column: 2 / 3;
  grid-row: -4 / -3;
}

.query-text--3 {
  grid-column: 3 / 2;
  grid-row: 3 / 4;
}

.img4 {
  grid-column: 2 / -2;
  grid-row: -2 / -1;
}

.query-enter-from,
.query-leave-to,
.fade-query-button-enter-from,
.fade-query-button-leave-to {
  opacity: 0;
}

.query-enter-active,
.fade-query-button-enter-active {
  transition: opacity 0.3s ease-out;
}

.query-leave-active,
.fade-query-button-leave-active {
  transition: opacity 0.3s ease-in;
}

.query-enter-to,
.query-leave-from,
.fade-query-button-enter-to,
.fade-query-button-leave-from {
  opacity: 1;
}
</style>
