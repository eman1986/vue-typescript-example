import LoginComponent from './views/login.vue';
import Vue from 'vue';
import VueRouter, {Route} from 'vue-router';

Vue.use(VueRouter);

// todo: temp placement.
const Auth = {
    loggedIn: false,
    login: function () {
        this.loggedIn = true
    },
    logout: function () {
        this.loggedIn = false
    }
};

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

routerConfig.beforeEach((to: Route, from: Route, next: Function) => {
    if (to.matched.some(record => record.meta.requiresAuth) && !Auth.loggedIn) {
        next({ path: '/login', query: { redirect: to.fullPath }});
    } else {
        next();
    }
});

export default routerConfig;