import App from "@/App.vue";
import router from "@/router";
import "@/styles.css";
import { DefaultApolloClient } from "@vue/apollo-composable";
import { createApp, h, provide } from "vue";
import apolloClient from "./apollo/client";
import uiComponents from "@/components/ui";

const app = createApp({
  setup() {
    provide(DefaultApolloClient, apolloClient);
  },
  render: () => h(App),
});

uiComponents.forEach((el) => {
  app.component(el.name, el.component);
});

app.use(router);

app.mount("#app");
