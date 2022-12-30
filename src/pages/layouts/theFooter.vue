<template>
  <footer id="footer" class="footer-jumbotron">
    <div class="footer-info container1k">
      <div class="card center">
        <div class="center-text">
          <h4>Useful links</h4>
          <ul class="l-spacing">
            <li class="text-spacing">
              <router-link class="silent-text" to="/">Home</router-link>
            </li>
            <li class="text-spacing">
              <router-link to="about" class="silent-text">About</router-link>
            </li>
            <li class="text-spacing">
              <router-link class="silent-text" to="contact"
                >Contact</router-link
              >
            </li>
            <li class="text-spacing">
              <router-link class="silent-text" to="pricing"
                >Pricing</router-link
              >
            </li>
          </ul>
        </div>
      </div>
      <div class="card center">
        <div class="center-text">
          <h4>Important links</h4>
          <ul class="l-spacing">
            <li class="text-spacing">
              <router-link to="/privacy-policy" class="silent-text"
                >Privacy Policy</router-link
              >
            </li>
            <li class="text-spacing">
              <router-link to="terms&conditions" class="silent-text">Terms & Conditions</router-link>
            </li>
          </ul>
        </div>
      </div>
      <div class="card center">
        <div>
          <h4>Contact info</h4>
          <ul class="l-spacing">
            <div class="footer-contact-info">
              <a href="tel:069-420-69-69"
                ><img
                  src="@/img/icons/telephone.svg"
                  alt="Telephone"
                  class="contact-img tel"
              /></a>
              <ul class="footer-contact-text silent-text">
                <li class="text-spacing">Telephone :</li>
                <li class="text-spacing">
                  <a href="tel:069-420-69-69" class="silent-text"
                    >069-420-69-69</a
                  >
                </li>
              </ul>
            </div>
            <div class="footer-contact-info">
              <a href="mailto:susenterprise@susmail.com"
                ><img
                  src="@/img/icons/email.svg"
                  alt="Telephone"
                  class="contact-img mailto"
              /></a>
              <ul class="footer-contact-text silent-text">
                <li class="text-spacing">Email :</li>
                <li class="text-spacing">
                  <a href="mailto:susenterprise@susmail.com" class="silent-text"
                    >susenterprise@susmail.com</a
                  >
                </li>
              </ul>
            </div>
            <div class="footer-contact-info">
              <img
                src="@/img/icons/clock.svg"
                alt="Opening hours"
                class="contact-img"
              />
              <ul class="footer-contact-text silent-text">
                <li class="text-spacing">Opening hours :</li>
                <li class="text-spacing">24/7</li>
              </ul>
            </div>
          </ul>
        </div>
      </div>
    </div>
    <div id="copyright" class="silent-text">
      <p>
        Copyright © {{ currentYear() }} SUS Enterprise - All rights reserved
      </p>
    </div>
  </footer>
</template>

<script>
export default {
  methods: {
    currentYear() {
      const current = new Date();
      const year = `${current.getFullYear()}`;
      return year;
    },
  },
};
</script>

<style scoped>
ul {
  list-style-type: none;
}

footer a:hover,
footer a:active,
footer .router-link-active {
  transition: 0.2s all ease;
  color: #f7ae44;
}

#copyright {
  text-align: center;
  align-items: flex-end;
  font-weight: 600;
  letter-spacing: 1.5px;
}

.footer-jumbotron {
  background-color: #130c27;
  color: #e7e7ea;
  padding: 100px 25px 5px 50px;
}

.footer-info {
  align-items: flex-start;
  margin: none;
}

.footer-contact-info {
  align-items: center;
  display: flex;
}

.footer-contact-text {
  margin-left: 15px;
}

.footer-contact-img {
  width: 50px;
}

.contact-img {
  width: 50px;
}
.mailto:hover,
.tel:hover {
  transition: 0.2s ease-out;
}
</style>
