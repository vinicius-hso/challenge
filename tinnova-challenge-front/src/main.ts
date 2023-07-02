import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import { createVuestic } from "vuestic-ui";
import "vuestic-ui/css";

const app = createApp(App)

app.use(
  createVuestic({
    config: {
      colors: {
        presets: {
          light: {
            primary: "hsl(316, 64%, 35%)",
          },
        },
      },
    },
  })
);
app.use(createPinia())
app.use(router)


app.mount('#app')
