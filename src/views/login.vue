<template>
    <section class="hero is-light is-bold is-fullheight">
        <div class="hero-body">
            <div class="container has-text-centered">
                <div class="column is-4 is-offset-4">
                    <div class="box">
                        <figure class="avatar">
                            <img src="https://placehold.it/128x128">
                        </figure>
                        <form @submit.prevent="authenticate">
                            <div class="field">
                                <div class="control">
                                    <input type="email" name="email"  placeholder="Email" class="input is-large" :class="{'input': true, 'is-danger': errors.has('email') }" v-model="username" v-validate required />
                                    <span v-show="errors.has('email')" class="help is-danger">{{ errors.first('email') }}</span>
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
    import {AuthenticationService} from "../services/authentication/authentication-service";
    import {ICredential} from "../model/credential";

    @Component
    export default class LoginComponent extends Vue {
        username: string;
        password: string;
        msg: string;

        authenticate(e) {
            const credentials: ICredential = {
                username: this.username,
                password: this.password
            };

            AuthenticationService.login(credentials);
        }
    }
</script>