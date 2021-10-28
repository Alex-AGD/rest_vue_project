import { createStore } from 'vuex'
import {auth} from "@/store/auth";
import posts from "@/store/modules/posts";
import messages from "@/store/modules/messages";

export default createStore({
    modules: {
        posts,
        messages,
        auth
    }

})