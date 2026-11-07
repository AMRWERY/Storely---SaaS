import { fileURLToPath } from "node:url";

const resolve = (p: string) => fileURLToPath(new URL(p, import.meta.url));

// Runs before first paint so the saved theme never flashes the wrong colors (dark is the default).
const themeInitScript = `try{var t=localStorage.getItem('storely-theme');document.documentElement.classList.toggle('dark',t!=='light')}catch(e){}`;

export default defineNuxtConfig({
  css: [
    resolve("./assets/css/main.css"),
    resolve("./assets/css/transitions.css"),
  ],
  components: [
    {
      path: resolve("./components"),
      pathPrefix: false,
    },
  ],
  app: {
    head: {
      script: [{ innerHTML: themeInitScript, tagPosition: "head" }],
    },
  },
});
