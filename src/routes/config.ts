import Vue from 'vue';
import VueRouter from 'vue-router';
import middleware from "./middleware";
import {RouteRules} from "./rules";

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
    routes: RouteRules
});

middleware(routerConfig);

export default routerConfig;