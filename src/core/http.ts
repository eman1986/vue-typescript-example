import { default as Axios, AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';
import { default as VueRouter } from 'vue-router';

let initialized: boolean = false;

export function UseAxios(router: VueRouter) {
    if (!initialized) {
        Axios.interceptors.request.use((config: AxiosRequestConfig) => {
            // ensure axios does not follow redirects, so custom response interceptor below can push to app login page
            if (!config.maxRedirects || config.maxRedirects === 5) {
                config.maxRedirects = 0;
            }

            return config;
        });

        Axios.interceptors.response.use(undefined, (config: AxiosError) => {
            let response: AxiosResponse = config.response as AxiosResponse;

            if (response.status === 401) {
                let location: string = response.headers['location'] || response.headers['Location'];

                if (location) {
                    let redirectTo = `/${location}`;

                    window.setTimeout(() => router.replace(redirectTo), 200);
                }
            }

            return config;
        });

        initialized = true;
    }
}