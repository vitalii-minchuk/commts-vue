import { DefaultApolloClient } from "@vue/apollo-composable";
import { createApp, h, provide } from "vue";
import apolloClient from "./apollo/client";
import App from "./App.vue";
import router from "./router";
import "./styles.css";

const app = createApp({
  setup() {
    provide(DefaultApolloClient, apolloClient);
  },
  render: () => h(App),
});

// app.component("BaseBtn", BaseBtn);

app.use(router);

app.mount("#app");
