import LoginComponent from './views/login.vue';
import Vue from 'vue';
import VueRouter, {Route} from 'vue-router';
import middleware from "./routes/middleware";

Vue.use(VueRouter);

const routerConfig = new VueRouter({
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition
        } else {
            return {x: 0, y: 0}
        }
    },
    linkActiveClass: 'is-active',
    routes: [
        {path: '/login', name: 'Login', component: LoginComponent},
        {path: '/dashboard', name: 'Dashboard', component: LoginComponent, meta: {requiresAuth: true}}
    ]
});

middleware(routerConfig);

export default routerConfig;