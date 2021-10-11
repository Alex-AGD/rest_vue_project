<template>
  <div id="nav">
    <div><h1>Лёха учит VueJs!</h1></div>
    <hr>
    <select v-model="notes">
      <option value="all">All</option>
      <option value="completed">Completed</option>
      <option value="not">Not</option>
    </select>
    <Loader v-if="loading"/>
    <ListUser
        v-else-if="filterNotes.length"
        v-bind:listPost="filterNotes"
        v-on:remove-user="removePost"
    />
    <p v-else>Список сообщений пуст</p>
    <AddNewPost
        v-on:add-post="addPost"/>

  </div>

  <div>
    <router-link to="/">Назад</router-link>
  </div>
</template>

<script>
import ListUser from "@/components/ListUser";
import AddNewPost from "@/components/AddNewPost";
import { messagesApi } from "@/api/api";
import Loader from "@/assets/Loader";


import {mapGetters} from 'vuex'
export default {
  name: 'app',
  data () {
    return {
      listPost: [],
      loading: true,
      notes: "all"
    }
  },
  watch: {
    notes (value) {
      //console.log (value)
    }
  },
  components: {
    ListUser,
    AddNewPost,
    Loader
  },
  mounted () {
    messagesApi.getAllPosts ()
        .then ((res) => {
          this.listPost = res.data;
          this.loading = false
        })
    this.$store.dispatch('fetchAllPost')
  },
  computed: {
    filterNotes () {
      if (this.notes === 'all') {
        return this.listPost;
      }
      if (this.notes === 'completed') {
        return this.listPost.filter (s => s.completed);
      }

      if (this.notes === 'not') {
        return this.listPost.filter (s => !s.completed);
      }
    },
      ...mapGetters(['allPosts'])
  },

  methods: {
    removePost (id) {
      this.listPost = this.listPost.filter (f => f.id !== id)
    },
    addPost (newPost) {
      console.log (newPost)
      this.listPost.push (newPost)
    }
  }
}
</script>
<style scoped>
select {
  background-color: #e8e8e8;
  width: 30%;
  padding: 5px 5px;
  display: flex;
  margin-bottom: 5px;
}
</style>

