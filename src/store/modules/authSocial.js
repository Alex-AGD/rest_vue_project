import axios from "axios";

const SET_USER = "SET_USER";

export default {

    state: {
        currentUser: JSON.parse(localStorage.getItem("currentUser")) || {

        },
    },

    mutations: {
        [SET_USER](state, payload) {
            state.currentUser = payload;
        }
    },

    actions: {
        fetchUser({commit}) {
            axios.post("http://localhost:8080/login", {withCredentials: true}).then(response => {
                commit(SET_USER, response.data);
                localStorage.setItem("currentUser", JSON.stringify(this.state.currentUser));
            }).catch(() => {
                commit(SET_USER, {});
            });
        },

        logout({commit}) {
            commit(SET_USER, {});
            localStorage.setItem("currentUser", {});
            document.cookie = "backend-session" + '=; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
        }
    },

    getters: {
        isAuthenticated: (state) => {
            return state.currentUser.toString().includes("name");
        }
    }

}