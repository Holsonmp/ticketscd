import 'bootstrap-select';
import 'bootstrap-select/dist/css/bootstrap-select.min.css';

export default defineNuxtPlugin((nuxtApp) => {
  if (process.client) {
    nuxtApp.provide('selectpicker', () => {
      // Initialiser Bootstrap Select ici
      setTimeout(() => {
        $('.selectpicker').selectpicker('refresh');
      }, 0);
    });
  }
});
