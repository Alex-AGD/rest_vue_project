import { messagesApi } from "@/api/api";

export default {

    state: {
        listMessages: [],
        loading: true,
        notes: "all"
    },

    mutations: {
        newPost (state, listMessages) {
            state.listMessages = listMessages
        },
        loading (state, loadingMessages) {
            state.loading = loadingMessages
        }
    },

    actions: {
        fetchAllMessages (ctx) {
            messagesApi.getAllMessages ()
                .then ((res) => {
                    const resAll = res.data;
                    this.loading = false
                    ctx.commit ('newPost', resAll)
                    ctx.commit ('loading', this.loading)
                })
        }
    },

    getters: {
        allMessages (state) {
            return state.listMessages
        },
        loadingMessages (state) {
            return state.loading
        }
    }
}