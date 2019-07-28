import { authService } from './../services/Auth'

const user = JSON.parse(localStorage.getItem('user')) || null; //da nam na refresh user ne bi bilo null

export const AuthModule = {
    state: {
        user,
        error: null
    },
    mutations: {
        setUser(state, playload) { //mutacija da bismo menjali stanje user-a
            state.user = playload;
        }
    },
    actions: {
        login(context, { email, password }) { //umesto playload  moze stajati i {email, password}
            return authService.login(email, password)
                .then((user) => {
                    context.commit('setUser', user);
                })
                .catch((err) => {
                    console.log('text'); //eslint-disable-line
                })
        },

        logout(context) {
            context.commit('setUser', null);
            return authService.logout();
        }
    },
    getters: {
        getUser(state) {
            return state.user;
        }
    }

};