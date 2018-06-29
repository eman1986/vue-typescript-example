import 'font-awesome/css/font-awesome.css';
import 'bulma/css/bulma.css';
import 'buefy/lib/buefy.css'
// import './style/main.css';

import App from './app.vue';
import appRouter from './router';
import Buefy from 'buefy';
import Vue from 'vue';
import VeeValidate from 'vee-validate';
import 'components';
import Component from 'vue-class-component'

Vue.use(Buefy);
Vue.use(VeeValidate);

@Component({
    router: appRouter
    // components: {
    //     'navbar': NavbarComponent
    // },
    // templateUrl: "./app.component.html"
})
export class AppComponent extends Vue {

}


// new Vue({
//     router,
//     render: h => h(App)
// }).$mount('#app');