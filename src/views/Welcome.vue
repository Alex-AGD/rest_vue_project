<template>
 <h1>Добро пожаловать на страницу!</h1>
  <div>
    <ul>
    <li v-for="post in allPosts">{{ post.title }}</li>

    </ul>
    <router-link to="/">Назад</router-link>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import ListUserItem from "@/components/ListUserItem";

export default {
  name: "Welcome",
  components: { ListUserItem },

  mounted () {
    this.$store.dispatch('fetchAllPost')

  },
  methods:{

  },
  computed: {
    ...mapGetters(['allPosts'])
  }
}
</script>

