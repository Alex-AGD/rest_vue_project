import { messagesApi } from "@/api/api";

export default {

    state: {
        listPost: [],
        loading: true,
        notes: "all"
    },

    mutations: {
        newPost (state, listPosts) {
            state.listPost = listPosts
        }
    },

    actions: {
        fetchAllPost (ctx) {
            messagesApi.getAllPosts ()
                .then ((res) => {
                    const resAll = res.data;
                    this.loading = false
                    ctx.commit ('newPost', resAll)
                })
        }
    },

    getters: {
        allPosts (state) {
            return state.listPost
        }
    }
}