import { fileURLToPath } from "node:url";

const currentDir = fileURLToPath(new URL(".", import.meta.url));

export default defineNuxtConfig({
  css: [
    `${currentDir}/assets/css/main.css`,
    `${currentDir}/assets/css/transitions.css`,
  ],
  components: [
    {
      path: `${currentDir}/components`,
      pathPrefix: false,
    },
  ],
});
