import UserService from "../../services/user.service";

export default {

    state:
        {
            mainPageListContent: '',
            loading: true
        },

    mutations: {
        loading(state, loadingFromBack) {
            state.loading = loadingFromBack
        },
        fetchingAllData(state, allData){
            state.mainPageListContent = allData
        }
    },

    actions: {
        fetchAllFromBack(ctx) {
            UserService.getPublicContent()
                .then((res) => {
                    const resAll = res.data;
                    ctx.commit('loading', this.loading)
                    ctx.commit('fetchingAllData', resAll)
                },
                (error) => {
                    this.mainPageListContent =
                        (error.response &&
                            error.response.data &&
                            error.response.data.message) ||
                        error.message ||
                        error.toString();
                }
            );
        }
    },
    getters: {
        loadingFromBack(state) {
            return state.loading;
        },
        allData(state){
            return state.mainPageListContent;
        }
    }
}


