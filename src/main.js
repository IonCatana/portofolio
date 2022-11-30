import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/tailwind.css'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'
/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
/* import specific icons */
import { faEnvelopeSquare, faMapMarkerAlt, faPhoneSquareAlt, faUserSecret } from '@fortawesome/free-solid-svg-icons'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
// googlemaps
import VueGoogleMaps from '@fawmi/vue-google-maps'


/* add icons to the library */
library.add(faUserSecret)
library.add(faMagnifyingGlass)
library.add(faLinkedin)
library.add(faGithub, faEnvelopeSquare, faPhoneSquareAlt, faMapMarkerAlt)



createApp(App).use(store).use(router).use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyAySQ-DosECWKntJEQwkjqRNHMtmeDbDkY',
  },
}).component('font-awesome-icon', FontAwesomeIcon).mount('#app')
