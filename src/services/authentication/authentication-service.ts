// todo: temp placement.
export const Auth = {
    loggedIn: false,
    login: function () {
        this.loggedIn = true
    },
    logout: function () {
        this.loggedIn = false
    }
};