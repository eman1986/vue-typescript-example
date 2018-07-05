import {RouteConfig} from 'vue-router';
import LoginComponent from './views/login.vue';
import  NotFoundComponent from './views/not-found.vue';

import {UserRoles} from '../model/user';
import { RouteNames } from './names';

export const RouteRules: RouteConfig[] = [
    {
        component: LoginComponent,
        name: RouteNames.login,
        path: '/login',
        meta: {
            title: 'Login'
        }
    },
    {
        component: NotFoundComponent,
        path: '*'
    }
];