<template>
    <div id="app">
        <nav class="navbar">
            <div class="navbar-brand">
                <router-link :to="{ name: 'Home' }" class="navbar-item ">Home</router-link>
                <div class="navbar-burger burger" data-target="AppMenu">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>

            <div id="AppMenu" class="navbar-menu">
                <div class="navbar-start">
                    <router-link :to="{ name: RouteNames.login }" class="navbar-item ">Login</router-link>
                    <router-link :to="{ name: RouteNames.dashboard }" class="navbar-item ">Dashboard</router-link>
                </div>
            </div>
        </nav>
        <div class="container">
            <div class="columns">
                <div class="column is-11">
                    <br>
                    <router-view></router-view>
                </div>
            </div>
        </div>
    </div>
</template>

/<script lang="ts">
    import Vue from 'vue'
    import Component from 'vue-class-component'
    import store from './store';
    import routerConfig from './routes/config';

    @Component({
        router: routerConfig,
        store:  store
    })
    export default class App extends Vue {
        name = "AdminApp";
    }
</script>