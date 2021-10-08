<template>
  <div id="nav">
    <div><h3>Лёха учит VueJs!</h3></div>
    <hr>
    <ListUser
        v-if="listPost.length"
        v-bind:list="listPost"
        v-on:remove-user="removePost"
    />
    <p v-else>Нету дел</p>
    <AddNewPost
        v-on:add-post="addPost"/>
  </div>
</template>

<script>
import ListUser from "@/components/ListUser";
import AddNewPost from "@/components/AddNewPost";
import {messagesApi} from "@/api/api";

export default {
  name: 'app',
  data() {
    return {
      listPost: [
        {id: 1, firstName: 'Лёха: Фулл-стак синьёр, тим лид, биг-дата, архитектор ', lastName: 'Жака', completed: false},
        {id: 2, firstName: 'Лёха: Фулл-стак синьёр, тим лид, биг-дата, архитектор ', lastName: 'Жака', completed: false},
      ]
    }
  },
  components: {
    ListUser,
    AddNewPost
  },
  mounted() {
    messagesApi.getAllPosts()
        .then((res) => {
          console.log(res.data)
          //this.listPost = res.data
        })

  },
  methods: {
    removePost(id) {
      this.listPost = this.listPost.filter(f => f.id !== id)
    },
    addPost(newPost) {
      console.log(newPost)
      this.listPost.push(newPost)
    }
  },

}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
