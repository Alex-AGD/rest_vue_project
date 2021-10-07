import * as axios from 'axios';

const instance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com',
    headers: {
        "Content-type": "application/json"
    }
});

    export const messagesApi = {
        getAllPosts () {
            try {
                return instance.get("/posts")
            } catch (e) {
                console.log(e)
            }
        }
    }
