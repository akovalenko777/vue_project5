import { createApp } from 'vue'
//import VueLazyLoad from 'vue3-lazyload'
import App from './App.vue'
import router from './router'
import Vue3Progress from "vue3-progress";


import './assets/css/bootstrap.min.css'
import './assets/css/main.css'
import './assets/css/responsive.css'

import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
//import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'

// import { faFacebook, faTwitter, faLinkedin, faDribbble, faGooglePlus } from '@fortawesome/free-brands-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'

/* add icons to the library */
library.add(faUserSecret)


//library.add(faFacebook, faTwitter, faLinkedin, faDribbble, faGooglePlus)
library.add(fab)


import Toaster from '@meforma/vue-toaster';

import formatDate from '@/helpers/formatDate';

//createApp(App).use(router).component('font-awesome-icon', FontAwesomeIcon).mount('#app')
const app = createApp(App)
    app.use(router)
    app.use(Toaster)
    //app.use(VueLazyLoad)
    app.use(Vue3Progress, {position: "fixed", height: "3px", color: '#f00'})
    app.directive('format-date', {
        created(el, binding){
            if(el.innerText !== ''){
                el.innerText = formatDate(el.innerText, binding.value)
            }
        },
        updated(el, binding){
            if(el.innerText !== '' && el.innerText.indexOf('T') !== -1){
                el.innerText = formatDate(el.innerText, binding.value)
            }
        }
    })
    app.mount('#app')

    