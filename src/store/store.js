import { createStore } from 'vuex'
import {auth} from "@/store/modules/auth";
import posts from "@/store/modules/posts";
import messages from "@/store/modules/messages";
import main from "@/store/modules/main";


export default createStore({
    modules: {
        posts,
        messages,
        main,
        auth,

    }

})