import { ActionTree } from 'vuex';
import axios from 'axios';
import { ProfileState, User } from './types';
import { RootState } from '../types';

export const actions: ActionTree<ProfileState, RootState> = {
    // todo: api calls for getting data.
    // async getUser() {
    //     try {
    //         const response = await axios.get('/user?ID=12345');
    //         console.log(response);
    //     } catch (error) {
    //         console.error(error);
    //     }
    // }

    // fetchData({ commit }): any {
    //     axios({
    //         url: 'https://....'
    //     }).then((response) => {
    //         const payload: User = response && response.data;
    //         commit('profileLoaded', payload);
    //     }, (error) => {
    //         console.log(error);
    //         commit('profileError');
    //     });
    // }
};