export default defineNuxtConfig({
  extends: ["@storely/core"],
  components: [
    {
      path: "~/components",
      pathPrefix: false,
    },
  ],
  app: {
    head: {
      titleTemplate: "%s | Storely",
      title: "Shop Online",
      meta: [
        {
          name: "description",
          content:
            "Shop the latest collection. Free shipping on orders over $50. New arrivals every week.",
        },
        { property: "og:site_name", content: "StoreOS Store" },
        { property: "og:type", content: "merchantsite" },
        { property: "og:image", content: "/og-default.jpg" },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "robots", content: "index, follow" },
      ],
      link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
    },
  },
});
