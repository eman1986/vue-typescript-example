import Vuex, {StoreOptions} from 'vuex';
import Vue from 'vue';
import {RootState} from './types';
import {user} from './user';

Vue.use(Vuex);

const store: StoreOptions<RootState> = {
    state: {
        version: '2018.6.0'
    },
    modules: {
        user
    }
};

export default new Vuex.Store<RootState>(store);