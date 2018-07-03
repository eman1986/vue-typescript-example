import 'font-awesome/css/font-awesome.css';
import 'bulma/css/bulma.css';
import 'buefy/lib/buefy.css'
import './styles/app.scss';

import store from './store';
import App from './app.vue';
import routerConfig from './router';
import Buefy from 'buefy';
import Vue from 'vue';
import VeeValidate from 'vee-validate';

Vue.use(Buefy);
Vue.use(VeeValidate);

new Vue({
    el: "#app",
    router: routerConfig,
    store:  store,
    components: { App: App },
    render: h => h(App),
    methods: {
        //  validations(){}
    }
}).$mount('#app');