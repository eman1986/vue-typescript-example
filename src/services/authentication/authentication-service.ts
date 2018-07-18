import axios from 'axios';
import {AppConfig} from '../../core/app-config';
import {ICredential} from "../../model/credential";

export class AuthenticationService  {
    /**
     * determines if a user is authenticated.
     * @type {boolean}
     */
    static loggedIn: boolean = false;

    /**
     * Authenticates user and sets token if successful.
     * @param {ICredential} credential
     * @returns {Promise<void>}
     */
    static async login (credential: ICredential) {
        try {
            const response = await axios.post(AppConfig.LoginUrl,{
                'username': credential.username,
                'password': credential.password
            });

            if (response.data.code === 401) {
                console.log(response.data.message);
            } else {
                AuthenticationService.loggedIn = true;
                localStorage.setItem('UserToken', response.data.token);
            }
        } catch (error) {
            console.error(error);
        }
    }

    /**
     * Pings API to see if token is still valid.
     * @returns {Promise<boolean>}
     */
    static async ping()
    {
        try {
            const response = await axios.get(AppConfig.PingUrl);

            if (response.data.code === 401) {
                AuthenticationService.loggedIn = false;

                localStorage.removeItem('UserToken');

                return false;
            } else {
                return true;
            }
        } catch (error) {
            console.error(error);
        }
    }
}