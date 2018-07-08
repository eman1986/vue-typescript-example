import 'font-awesome/css/font-awesome.css';
import 'bulma/css/bulma.css';
import 'buefy/lib/buefy.css'
import './styles/app.scss';

import App from './app.vue';
import routerConfig from './router';
import Buefy from 'buefy';
import Vue from 'vue';
import VeeValidate from 'vee-validate';
import {UseAxios} from "./core/http";

Vue.use(Buefy);
Vue.use(VeeValidate);

UseAxios(routerConfig);

Vue.config.errorHandler = function(err, vm, info) {
    // todo:
};
Vue.config.warnHandler = function(msg, vm, info) {
    // todo:
};

new App().$mount('#app');