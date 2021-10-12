import { createStore } from 'vuex'
import posts from "@/store/modules/posts";
import messages from "@/store/modules/messages";

export default createStore({
    modules: {
        posts,
        messages
    }

})