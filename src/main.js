import { createApp } from 'vue'
import App from './App'
import components from '@/components/UI'
import router from "@/router/router";
import store from '@/store/store'
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from './plugins/font-awesome'

//console.log(components)
const app = createApp (App)

components.forEach (component => {
    app.component (component.name, component);
})

app .use(router)
    .use(store)
    .component("font-awesome-icon", FontAwesomeIcon)
    .mount ('#app')