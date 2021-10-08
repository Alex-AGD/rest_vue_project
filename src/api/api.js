import * as axios from 'axios';

const instance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/',
    headers: {
        "Content-type": "application/json"
    }
});

export const messagesApi = {
    getAllPosts() {
        return instance.get("todos")
    },

    getPostFromUserById() {
        return instance.get("/todos/1")
}
}
