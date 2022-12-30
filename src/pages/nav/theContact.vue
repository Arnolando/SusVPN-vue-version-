<template>
  <article>
    <div class="jumbotron p-5 s-spacing">
      <div class="col">
        <div class="container800">
          <h1 class="center-text">
            <b>Contact us anytime</b>
          </h1>
        </div>
      </div>
    </div>

    <!-- Offices -->

    <div class="container1k">
      <h2 class="center-text l-spacing">We have offices in all continents</h2>
      <h3 class="center-text continent-text">Europe</h3>
      <div class="grid continents">
        <img
          src="@/img/continents/listenburg.png"
          alt="Lurenberg, Listenburg map"
          class="continent-image continent--1"
        />
        <div class="long-text">
          <h4>Lurenberg, Listenburg</h4>
          <p>
            The capital, where our employees work continuously with customers to
            guarantee their statisfaction.
          </p>
        </div>
      </div>
      <h3 class="center-text continent-text">Africa</h3>
      <div class="grid continents">
        <img
          src="@/img/continents/mao.jpg"
          alt="mao, chad map"
          class="continent-image continent--2"
        />
        <div class="long-text">
          <h4>Mao, Chad</h4>
          <p>
            The place where Giga Chad lives, and where our team prays to Mao at
            the mosque to give themselves the energy needed to sell SusVPN in
            Africa.
          </p>
        </div>
      </div>
      <h3 class="center-text continent-text">Asia</h3>
      <div class="grid continents">
        <img
          src="@/img/continents/batman.jpg"
          alt="batman, turkey map"
          class="continent-image continent--3"
        />
        <div class="long-text">
          <h4>Batman, Turkey</h4>
          <p>
            Not only is the place called as such, but “Turkish Batman” works for
            us.
          </p>
        </div>
      </div>
      <h3 class="center-text continent-text">North America</h3>
      <div class="grid continents">
        <img
          src="@/img/continents/bat-cave.jpg"
          alt="bat cave, usa map"
          class="continent-image continent--4"
        />
        <div class="long-text">
          <h4>Bat Cave, USA</h4>
          <p>
            The place that is in the state of “North Carolina” (in other words
            “the state of MrBeast”) where he himself comes and secretly works
            for us in a cave.
          </p>
        </div>
      </div>
      <h3 class="center-text continent-text">South America</h3>
      <div class="grid continents">
        <img
          src="@/img/continents/bananal.jpg"
          alt="bananal, brazil map"
          class="continent-image continent--5"
        />
        <div class="long-text">
          <h4>Bananal, Brazil</h4>
          <p>
            Brazilian Minions work for us to promote SusVPN by giving a banana
            as a gift to customers who buy it.
          </p>
        </div>
      </div>
      <h3 class="center-text continent-text">Australia</h3>
      <div class="grid continents">
        <img
          src="@/img/continents/casino.jpg"
          alt="casino, australia map"
          class="continent-image continent--6"
        />
        <div class="long-text">
          <h4>Casino, Australia</h4>
          <p>The city where our employees promote VPN in front of casinos.</p>
        </div>
      </div>
      <h3 class="center-text continent-text">Antarctica</h3>
      <div class="grid continents">
        <img
          src="@/img/continents/apocalypse-peaks.jpg"
          alt="apocalypse peaks, antarctica map"
          class="continent-image continent--7"
        />
        <div class="long-text">
          <h4>Apocalypse Peaks</h4>
          <p>
            It's a snow-covered place in the middle of the mountains where our
            yetis sell the VPN to the penguins.
          </p>
        </div>
      </div>
    </div>

    <!-- Contact info -->

    <div class="jumbotron-dark p-5">
      <div class="container800 center center-text">
        <h2>Let's keep in touch</h2>
        <p class="s-spacing long-text">
          Our service is available 24/7, so we invite you to contact us.
        </p>
        <a href="mailto:susenterprise@susmail.com" class="mailto silent-text"
          ><h3>susenterprise@susmail.com</h3></a
        >
        <a href="tel:069-420-69-69" class="tel silent-text"
          ><h3>+41 (0)69 420 69 69</h3></a
        >
      </div>
    </div>

    <!-- Download SusVPN now ! -->

    <div class="jumbotron p-5">
      <div class="center center-text">
        <h2 class="s-spacing">Download SusVPN with a 69% discount !</h2>
        <router-link to="pricing" class="butn1">Get SusVPN</router-link>
      </div>
    </div>
  </article>
</template>

<style scoped>
.grid {
  display: grid;
  align-items: center;
  grid-template-rows: repeat(4, 1fr);
  grid-template-columns: repeat(2, 1fr);
  row-gap: 4.8rem;
}

.continent-image {
  width: 400px;
  border-radius: 6px;
}

.continents {
  justify-items: center;
  grid-template-rows: 1fr;
  margin-bottom: 200px;
}

.continent--2,
.continent--4,
.continent--6 {
  grid-column: 2 / 3;
  grid-row: -2 / -1;
}

.continent-text {
  font-size: 30px;
  margin-bottom: 25px;
}
</style>
