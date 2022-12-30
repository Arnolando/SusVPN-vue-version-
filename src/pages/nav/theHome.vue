<template>
  <article>
    <div class="jumbotron p-5">
      <div class="col">
        <div class="container800">
          <h1 class="s-spacing">
            <b>Buy SusVPN with 69% off!</b>
          </h1>
          <div class="s-spacing">
            <p class="col xs-spacing">
              <img
                class="check-icon m-right-spacing"
                src="@/img/icons/check.svg"
              />Fast connection
            </p>
            <p class="col xs-spacing">
              <img
                class="check-icon m-right-spacing"
                src="@/img/icons/check.svg"
              />Strong Protection
            </p>
            <p class="col xs-spacing">
              <img
                class="check-icon m-right-spacing"
                src="@/img/icons/check.svg"
              />A hacker-proof system
            </p>
            <p class="col xs-spacing">
              <img class="check-icon m-right-spacing" src="@/img/icons/x.svg" />A
              prank
            </p>
          </div>
          <div class="col">
            <router-link to="pricing" class="butn1 m-right-spacing">
              Take advantage of this offer
            </router-link>
            <count-down
              :year="2023"
              :month="0"
              :day="1"
              :hour="0"
              :minute="0"
              :second="0"
              :millisecond="0"
            />
          </div>
        </div>
        <div>
          <img
            class="promo-image"
            src="@/img/SusVPN-Stonks.png"
            alt="Sus Stonks"
          />
        </div>
      </div>
    </div>

    <!-- How SusVPN works -->

    <div class="container p-5">
      <div class="container m-spacing">
        <h2 class="center-text">How our app works</h2>
        <p class="center-text">Here's how SusVPN works in three steps.</p>
      </div>
      <div class="cards">
        <div class="card col2">
          <div class="col">
            <h3 class="step-number m-right-spacing">1</h3>
          </div>
          <div class="card-text">
            <h3>Access through the VPN tunnel</h3>
            <p class="long-text">
              A VPN is a virtual private network. It is a digital tool that
              redirects your internet traffic through a secure tunnel, masking
              your IP address and encrypting your data. This is how a VPN
              protects your private data and protects you from potential
              cyberattacks.
            </p>
          </div>
        </div>
        <div class="card col2">
          <div class="col">
            <h3 class="step-number m-right-spacing">2</h3>
          </div>
          <div class="card-text">
            <h3>Protects users</h3>
            <p class="long-text">
              A VPN is a top cybersecurity solution. Indeed, it protects all
              users when browsing the Internet. Individuals, companies, on
              smartphones, computers or tablets, most VPN services are
              compatible with almost all devices and platforms.
            </p>
          </div>
        </div>
        <div class="card col2">
          <div class="col">
            <h3 class="step-number m-right-spacing">3</h3>
          </div>
          <div class="card-text">
            <h3>Access to foreign countries</h3>
            <p class="long-text">
              Additionally, a VPN service allows you to connect to the Internet
              through high-speed VPN servers in different countries. So you can
              continue to watch your favorite movies and series during all your
              trips, without restrictions.
            </p>
          </div>
        </div>
      </div>
    </div>

    <!-- What SusVPN brings you -->

    <div class="jumbotron-dark p-5">
      <div class="container">
        <div>
          <h2 class="center-text">What SusVPN has to offer</h2>
          <p class="center-text l-spacing">
            Here's what makes SusVPN unique and better for everyone.
          </p>
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

    <!-- What others think -->

    <div class="container p-5">
      <h2 class="center-text l-spacing">
        Find out what others think of our app.
      </h2>
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

    <!-- Buy SusVPN now ! -->

    <div class="jumbotron p-5 m-spacing">
      <div class="center center-text">
        <h2 class="s-spacing">Save 69% on discounts before it's too late !</h2>
        <router-link to="pricing" class="butn1">Get SusVPN</router-link>
      </div>
    </div>

    <!-- Q&A -->

    <query-list></query-list>
  </article>
</template>

<script>
import CountDown from "@/components/countDown.vue";
import QueryList from "@/components/queryList.vue";

export default {
  components: {
    CountDown,
    QueryList,
  },
};
</script>

<style scoped>
.check-icon {
  width: 20px;
}

.promo-image {
  width: 600px;
}
</style>
