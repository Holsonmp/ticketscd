export default {
  app: {
    head: {
      meta: [
        { name: "author", content: "Holduix" },
        { name: "msapplication-TileColor", content: "#da532c" },
        { name: "theme-color", content: "#440079" },
      ],
      link: [
        { rel: "icon", type: "image/png", href: "assets/images/fav.png" },
        {
          rel: "apple-touch-icon",
          sizes: "180x180",
          href: "https://dev.tickets.cd/assets/images/apple-touch-icon.png",
        },
        {
          rel: "icon",
          type: "image/png",
          sizes: "32x32",
          href: "https://dev.tickets.cd/assets/images/favicon-32x32.png",
        },
        {
          rel: "icon",
          type: "image/png",
          sizes: "16x16",
          href: "https://dev.tickets.cd/assets/images/favicon-16x16.png",
        },
        { rel: "manifest", href: "https://dev.tickets.cd/site.webmanifest" },
        { rel: "preconnect", href: "https://fonts.googleapis.com" },
        { rel: "preconnect", href: "https://fonts.gstatic.com" },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=DM+Sans:ital,wght@0,300;0,400;0,500;0,700;0,900&display=swap",
        },
        {
          rel: "stylesheet",
          href: "assets/vendor/unicons-2.0.1/css/unicons.css",
        },
        { rel: "stylesheet", href: "assets/css/style.css?s=s" },
        { rel: "stylesheet", href: "assets/vendor/OwlCarousel/assets/owl.theme.default.min.css" },
        { rel: "stylesheet", href: "assets/css/responsive.css" },
        { rel: "stylesheet", href: "assets/css/night-mode.css" },
        {
          rel: "stylesheet",
          href: "assets/vendor/fontawesome-free/css/all.min.css",
        },
      ],
      bodyAttrs: {
        class: 'd-flex flex-column h-100'
      },

      htmlAttrs: {
        class: 'h-100'
      },
      script: [
        { src: "/assets/js/jquery.min.js", body: true },
        { src: "/assets/js/custom.js", body: true },
      ]
    },
  },
  css: [
    "bootstrap/dist/css/bootstrap.min.css",
    "owl.carousel/dist/assets/owl.carousel.css",
    "bootstrap-select/dist/css/bootstrap-select.min.css",
  ],

  plugins: [
    { src: "~/plugins/bootstrap.js", mode: "client" },
    { src: "~/plugins/owl.js", mode: "client" },
    { src: "~/plugins/mixitup.js", mode: "client" },
  ],

  compatibilityDate: "2024-10-29",
};
