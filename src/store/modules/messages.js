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
        },
        createPost (state, newMessage) {
            state.listMessages.push(newMessage)
        }
    },

    actions: {
        fetchAllMessages (ctx, limit = 3) {
            messagesApi.getAllMessages (limit)
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
        },
        postsCount (state, getters) {
            return getters.validationMessage.length
        },
        validationMessage(state){
            return state.listMessages.filter( p => {
                return p.message
            })
        }
    }
}