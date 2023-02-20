// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  typescript: { shim: false },
  app: {
    head: {
      titleTemplate: "%s - Clinical",
      htmlAttrs: {
        lang: "fr",
      },
      bodyAttrs: {
        "data-sidebar": "dark",
        "data-layout-mode": "light",
      },
      link: [
        { rel: "shortcut icon", href: "/images/favicon.ico" },
        {
          href: "/css/bootstrap.min.css",
          id: "bootstrap-style",
          rel: "stylesheet",
          type: "text/css",
        },
        { href: "/css/icons.min.css", rel: "stylesheet", type: "text/css" },
        { href: "/css/app.min.css", id: "app-style", rel: "stylesheet", type: "text/css" },
      ],
      script: [
        { src: "/libs/jquery/jquery.min.js", body: true },
        { src: "/libs/bootstrap/js/bootstrap.bundle.min.js", body: true },
        { src: "/libs/metismenu/metisMenu.min.js", body: true },
        { src: "/libs/node-waves/waves.min.js", body: true },
        { src: "/js/app.js", body: true },
      ],
    },
  },
});
