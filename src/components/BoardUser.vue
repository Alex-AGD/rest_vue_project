<template>
  <div class="container" v-if="!err">
    <header class="jumbotron">
      <Loader v-if="loading"/>
      <ul class="list-group" >
        <li class="list-group-item"
            v-for="(message, id) of content">
          ID {{id + 1}}
          Сообщение: {{message.message }}
        </li>
      </ul>
    </header>
    <router-link to="/">Назад</router-link>
  </div>
  <p v-else>{{err}}</p>
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
      err: ""
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
       this.err =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();
        console.log(this.content)
      }
    );

  },
};
</script>
