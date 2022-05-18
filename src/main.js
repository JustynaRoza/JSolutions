import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'
import defaultLayout from "./defaultLayout.vue";
/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import specific icons */
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'

/* add icons to the library */
library.add(faUserSecret)

/* add font awesome icon component */


loadFonts()

const app = createApp(App)
  .use(router)
  .use(vuetify)
app.component("defaultLayout", defaultLayout);
app.directive('scroll', {
  inserted: function (el, binding) {
    const onScrollCallback = binding.value; 
    window.addEventListener('scroll', () => onScrollCallback());
  }
})
app.mount('#app')
