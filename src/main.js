import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'
import defaultLayout from "./defaultLayout.vue";


loadFonts()

const app = createApp(App)
  .use(router)
  .use(vuetify)
app.component("defaultLayout", defaultLayout);
app.mount('#app')
