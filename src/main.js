import Vue from "vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import "./index.css";
import VueI18n from "vue-i18n";

Vue.use(VueI18n);
import App from "./App.vue";

Vue.config.productionTip = false;

const messages = {
  en: {
    title: "User Profle",
    input: {
      first_name: "First Name",
      last_name: "Last Name",
      email: "Email",
    },
    btn_save: "Save",
    upload: "Drop or Upload your Image",
    error: {
      required: "This is Required",
      emale: "Must be a valid Email",
      alpha_num: "Must be AlphaNumeric value",
      max_length: "More than 50 characters are not Allowed",
    },
  },
};

// Create VueI18n instance with options
const i18n = new VueI18n({
  locale: "ja", // set locale
  messages, // set locale messages
});

new Vue({
  router,
  store,
  i18n,
  render: (h) => h(App),
}).$mount("#app");
