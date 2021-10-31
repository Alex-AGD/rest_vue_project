<template>
  <div class="container">
    <header class="jumbotron">
      <ul class="list-group">
        <Loader v-if="loading"/>
        <li class="list-group-item"
            v-for="(message, id) of content"
            v-else-if="content.length" >
          ID {{id + 1}}
          Сообщение: {{message.message }}
        </li>
      </ul>
    </header>
    <router-link to="/">Назад</router-link>
  </div>
</template>

<script>
import UserService from "../services/user.service";
import Loader from "@/assets/Loader";

export default {
  name: "User",
  data() {
    return {
      content: "",
      loading: true,
    };
  },
  components: {
    Loader
  },
  mounted() {
    UserService.getUserBoard().then(
      (response) => {
        this.content = response.data;
        this.loading = false;
      },
      (error) => {
        this.content =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();
      }
    );
  },
};
</script>
<style lang="scss">

</style>