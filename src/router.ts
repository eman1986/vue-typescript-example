import LoginComponent from './components/login.vue';
import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

export default new VueRouter({
    scrollBehavior (to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition
        } else {
            return { x: 0, y: 0 }
        }
    },
    linkActiveClass: 'is-active',
    routes: [
        { path: '/login', name: 'Home', component: LoginComponent }
    ]
});