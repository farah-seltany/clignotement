import { createApp } from 'vue'
import HomePage from "@/components/HomePage";
import BlinkingPage from "@/components/BlinkingPage";
import { createRouter, createWebHashHistory } from "vue-router/dist/vue-router";
import App from "@/App";

const routes = [
    { path: '/', component: HomePage },
    { path: '/blinking', component: BlinkingPage },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

const app = createApp(App);

app.use(router);
app.mount('#app');