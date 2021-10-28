<template>
  <h1>Добро пожаловать на страницу!</h1>
  <div>
    <Loader v-if="loadingMessages"/>
    <h1>{{ postsCount }}</h1>
    <ul>
      <li v-for="(post, id) of validationMessage">
        ID {{id + 1}}
        Сообщение: {{post.message }}
      </li>
    </ul>
    <MessageForm/>
    <hr/>
    <router-link to="/">Назад</router-link>
  </div>
</template>

<script>
import {mapGetters, mapActions} from "vuex";
import ListUserItem from "@/components/ListUserItem";

import Loader from "@/assets/Loader";
import MessageForm from "@/components/MessageForm";

export default {
  name: "Welcome",
  data() {
    return {
      loading: false
    }
  },
  components: {
    ListUserItem,
    Loader,
    MessageForm
  },
  mounted() {
    //this.$store.dispatch ('allMessages')
    this.fetchAllMessages(4)
  },
  methods: mapActions(['fetchAllMessages']),

  computed: {
    ...mapGetters(['validationMessage', 'loadingMessages', 'postsCount'])
  },

}
</script>

