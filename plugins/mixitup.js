// plugins/mixitup.js
import mixitup from 'mixitup';

export default defineNuxtPlugin((nuxtApp) => {
  if (process.client) {
    nuxtApp.provide('mixitup', mixitup);
  }
});
