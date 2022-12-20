import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import MyButton from "./components/common/MyButton.vue";
import MyInput from "./components/common/MyInput.vue";
import router from "./router";
import VFocus from "./directives/VFocus";

const app = createApp(App);

app.component("MyButton", MyButton);
app.component("MyInput", MyInput);
app.directive("focus", VFocus);

app.use(router).mount("#app");
