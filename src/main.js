import { createApp } from 'vue'
import App from './App.vue'

import AOS from 'aos'
import 'aos/dist/aos.css'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faAddressCard, faBars,  faFolder, faFolderClosed, faHome, faUser, faUserSecret, faArrowUpRightFromSquare, faLessThan, faGreaterThan, faCircleExclamation } from '@fortawesome/free-solid-svg-icons'

library.add(faUserSecret,faUser,faHome,faFolderClosed,faFolder,faAddressCard,faBars,faFacebook,faGithub,faTwitch,faHtml5,faSquareJs,faCss3Alt,faVuejs,faArrowUpRightFromSquare, faLessThan, faGreaterThan, faCircleExclamation, faYoutube)

import './assets/globalcss.css'
import { faCss3Alt, faFacebook, faGithub, faHtml5, faSquareJs, faTwitch, faVuejs, faYoutube} from '@fortawesome/free-brands-svg-icons'

AOS.init()
createApp(App).component('font-awesome-icon', FontAwesomeIcon).mount('#app')

