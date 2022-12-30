import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";

import App from "./App.vue";
import SusVPN from "./pages/nav/theHome.vue";
import About from "./pages/nav/theAbout.vue";
import Contact from "./pages/nav/theContact.vue";
import Pricing from "./pages/nav/thePricing.vue";
import PrivacyPolicy from "./pages/policies/privacyPolicy.vue";
import TermsConditions from './pages/policies/termsConditions.vue';
import SusPage from "./pages/susPage.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", component: SusVPN },
    { path: "/contact", component: Contact },
    { path: "/about", component: About },
    { path: "/pricing", component: Pricing },
    { path: "/privacy-policy", component: PrivacyPolicy },
    { path: "/terms&conditions", component: TermsConditions },
    { path: "/:notFound(.*)", component: SusPage },
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    }
    return {
      left: 0,
      top: 0,
    };
  },
});

const app = createApp(App);

app.use(router);

router.isReady().then(function () {
  app.mount("#app");
});
