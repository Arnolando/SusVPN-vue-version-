<template>
  <article>
    <div class="jumbotron p-5 l-spacing">
      <div class="col">
        <div class="container800">
          <h1 class="center-text">
            <b>Get SusVPN with 69% off!</b>
          </h1>
        </div>
      </div>
    </div>

    <!-- Offers -->

    <div class="container800 center-text">
      <div class="l-spacing">
        <h2 class="xs-spacing">Our essential offers</h2>
        <p>Choose wisely! #nopressure</p>
      </div>
      <div class="col l-spacing">
        <div class="amateur-jumbotron center offer-option">
          <h3 class="xs-spacing">Amateur Offer</h3>
          <div class="col xs-spacing center">
            <p>$<span class="offer-number">11.90</span>/month</p>
          </div>
          <div class="s-spacing">
            <p class="text-spacing">Save 0%</p>
            <p class="text-spacing">11.90 dollars billed monthly</p>
          </div>
          <a
            href="https://youtu.be/ddyHiDD27Us"
            class="butn1 cringe-btn"
            target="_blank"
            >Choose cringe SUSbscription</a
          >
        </div>
        <div class="giga-jumbotron center offer-option">
          <h3 class="xs-spacing">Gigachad Offer</h3>
          <div class="col xs-spacing center">
            <p>$<span class="offer-number">3.69</span>/month</p>
          </div>
          <div class="s-spacing">
            <p class="text-spacing">Save 69%</p>
            <p class="text-spacing">2 year subscription</p>
            <p class="text-spacing">Then $11.90/month</p>
          </div>
          <a href="https://youtu.be/sXDBXVjKbp8" class="butn1" target="_blank"
            >Choose GIGA SUSbscription</a
          >
        </div>
      </div>
    </div>

    <!-- Why SusVPN -->

    <div class="jumbotron-dark p-5">
      <div class="container">
        <div class="l-spacing">
          <h2 class="center-text">Why SusVPN</h2>
        </div>
        <div class="cards">
          <div class="card">
            <div class="col">
              <img class="speed center" src="@/img/icons/speed.svg" />
            </div>
            <div class="card-text center-text">
              <h3>Super fast connection</h3>
              <p class="long-text silent-text">
                The speed of the VPN is such that you won't even have time to
                blink an eye. There are over 6900 super fast VPN servers
                worldwide. No bandwidth limit. Experience high-speed online
                security with SusVPN.
              </p>
            </div>
          </div>
          <div class="card">
            <div class="col">
              <img class="shield center" src="@/img/icons/vpn-lock.svg" />
            </div>
            <div class="card-text center-text">
              <h3>Very high security</h3>
              <p class="long-text silent-text">
                As a result, we cannot give details about you to third parties,
                even if they ask for it. Why? Because we never log your online
                activity. We don't know anything 😉 😉 😉
              </p>
            </div>
          </div>
          <div class="card">
            <div class="col">
              <img class="tv center" src="@/img/icons/tv.svg" />
            </div>
            <div class="card-text center-text">
              <h3>Access to diverse content</h3>
              <p class="long-text silent-text">
                High definition movies, live sports, black markets? It's
                possible with SusVPN. With one click, you hide your IP address,
                which will allow you to view your favorite content in complete
                privacy and security.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Customer reviews -->

    <div class="container p-5">
      <h2 class="center-text l-spacing">Customer reviews of our app.</h2>
      <div class="cards">
        <div class="card">
          <div class="card-text">
            <p class="long-text">
              I can recommend this VPN to everyone. It is <b>GIGA</b> secure
              like me <b>(¬‿¬)</b>. I even bought anabolic steroids and nobody
              saw anything!
            </p>
          </div>
          <div class="col">
            <div>
              <img class="card-img" src="@/img/users/gigachad.png" />
            </div>
            <div class="card-id">
              <h4>Giga Chad</h4>
              <p>Sexiest in the galaxy</p>
            </div>
          </div>
        </div>
        <div class="card">
          <div class="card-text">
            <p class="long-text">
              Best VPN I've ever had, super convenient and super simple! I was
              able to wander around weird sites without worrying about anything!
            </p>
          </div>
          <div class="col">
            <div>
              <img class="card-img" src="@/img/users/incredible.png" />
            </div>
            <div class="card-id">
              <h4>Mr. Incredible</h4>
              <p>Superhero</p>
            </div>
          </div>
        </div>
        <div class="card">
          <div class="card-text">
            <p class="long-text">
              Super VPN that is perfect for buying bombs. The customer service
              is so great I didn't even have to pull out my gun for them to help
              me.
            </p>
          </div>
          <div class="col">
            <div>
              <img class="card-img" src="@/img/users/gru.png" />
            </div>
            <div class="card-id">
              <h4>Gru</h4>
              <p>Despicable</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Q&A -->

    <query-list></query-list>
  </article>
</template>

<script>
import QueryList from "@/components/queryList.vue";

export default {
  components: {
    QueryList,
  },
};
</script>

<style scoped>
.giga-jumbotron {
  background: rgb(247, 174, 68);
  background: linear-gradient(
    180deg,
    rgba(247, 174, 68, 1) 51%,
    rgba(255, 102, 0, 1) 86%
  );
  color: #130c27;
  /* box-shadow: 0 3px 3px 0px #130c274a; */
  transition: all 0.2s ease-out;
}

.giga-jumbotron:hover {
  box-shadow: 0 5px 5px 0px #130c274a;
}

.amateur-jumbotron {
  background: #130c27;
  color: #e7e7ea;
}

.cringe-btn:hover {
  border-color: #e7e7ea;
  text-shadow: 0 0 1px #e7e7ea;
}

.offer-option {
  padding: 50px;
  border-radius: 6px;
}

.offer-number {
  font-size: 40px;
}

.app-container {
  max-width: 420px;
  margin: 0 auto;
}

.butn-install {
  font-weight: 600;
  border: 1px solid mediumseagreen;
  border-radius: 6px;
  box-shadow: inset 0 0 0 0 mediumseagreen;
  transition: ease-out 0.5s;
  padding: 10px 0;
  display: block;
}

.butn-install:hover {
  box-shadow: inset 420px 0 0 0 mediumseagreen;
  cursor: pointer;
  color: white;
}

.stats {
  display: flex;
  align-items: flex-end;
  gap: 75px;
  margin-bottom: 23px;
}

.play-button {
  position: absolute;
  top: 80px;
  right: 182px;
  width: 76px;
  opacity: 0.4;
}

.blur {
  filter: blur(14px);
}

.material-symbols-outlined {
  font-variation-settings: "FILL" 1, "wght" 400, "GRAD" 0, "opsz" 48;
}
</style>
