<template>
    <section class="hero is-success is-fullheight">
        <div class="hero-body">
            <div class="container has-text-centered">
                <div class="column is-4 is-offset-4">
                    <div class="box">
                        <figure class="avatar">
                            <img src="images/login-icon.png">
                        </figure>
                        <form @submit.prevent="authenticate">
                            <div class="field">
                                <div class="control">
                                    <input class="input is-large" type="email" placeholder="Email" autofocus>
                                </div>
                            </div>

                            <div class="field">
                                <div class="control">
                                    <input class="input is-large" type="password" placeholder="Your Password">
                                </div>
                            </div>
                            <button class="button is-block is-info is-large is-fullwidth">Login</button>
                        </form>
                    </div>
                    <p class="has-text-grey">
                        <router-link :to="{ name: RouteNames.accountRecovery }">Forgot Password</router-link>
                    </p>
                </div>
            </div>
        </div>
    </section>
</template>

<script lang="ts">
    import './style/login.css';
    import Vue from 'vue'
    import Component from 'vue-class-component'

    @Component
    export default class LoginComponent extends Vue {
        username: string;
        password: string;
        msg: string;

        authenticate(e) {
            // write you own auth logic here
            this.msg = 'Login failed';
        }
    }
</script>