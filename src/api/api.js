import * as axios from 'axios';

const instance = axios.create({
    baseURL: 'http://localhost:8081',
    headers: {
        "Content-type": "application/json"
    }
});

export const messagesApi = {
    getAllPosts() {
        return instance.get("todos?_limit=11")
    },

    getPostFromUserById() {
        return instance.get("/todos/1")
},
    getAllMessages() {
        return instance.get("/messages")
    }

}
