import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'
import defaultLayout from "./defaultLayout.vue";
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
import VueCookieComply from 'vue-cookie-comply'
import 'vue-cookie-comply/dist/style.css'


library.add(faUserSecret)



loadFonts()

const app = createApp(App)
  .use(router)
  .use(vuetify)
  .use(VueCookieComply)
app.component("defaultLayout", defaultLayout);
app.directive('scroll', {
  inserted: function (el, binding) {
    const onScrollCallback = binding.value; 
    window.addEventListener('scroll', () => onScrollCallback());
  }
})
app.mount('#app')
