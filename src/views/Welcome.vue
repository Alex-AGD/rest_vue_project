<template>
  <h1>Добро пожаловать на страницу!</h1>
  <div>
    <Loader v-if="loadingMessages"/>
    <ul>
      <li v-for="post of allMessages">
        {{ post.id }} {{ post.message }}
      </li>
    </ul>
    <router-link to="/">Назад</router-link>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import ListUserItem from "@/components/ListUserItem";

import Loader from "@/assets/Loader";

export default {
  name: "Welcome",
  data () {
    return {
      loading: false
    }
  },
  components: {
    ListUserItem,
    Loader
  },
  mounted () {
    this.$store.dispatch ('fetchAllMessages')
  },
  methods: {},
  computed: {
    ...mapGetters ([ 'allMessages' ]),
    ...mapGetters ([ 'loadingMessages' ])
  },

}
</script>

