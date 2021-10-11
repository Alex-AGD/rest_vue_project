import { createStore } from 'vuex'
import posts from "@/store/modules/posts";

export default createStore({
    modules: {
        posts
    }

})