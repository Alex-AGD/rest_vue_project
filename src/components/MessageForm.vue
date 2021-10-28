<template>
  <div>Добавить пост</div>
  <form @submit.prevent="submit">
    <input type="text" placeholder="message" v-model="message"/>
    <button type="submit"> Save</button>
  </form>
</template>

<script>
import {mapMutations, mapActions} from "vuex"

export default {
  name: "MessageForm",
  data() {
    return {
      message: '',
      id: Number,
    }
  },
  methods: {
    ...mapMutations(['createPost']),
    submit() {
      this.createPost({
            message: this.message,
            id: Date.now(),
          }
      )
      this.message = '';
    }

  }
}


</script>

<style scoped>
form {
  width: 100%;
  display: flex;
  padding-top: 10px;
  margin-bottom: 10px;
  flex-direction: column;
}

input {
  width: 50%;
  padding: 10px 15px;
  color: teal;
  margin-bottom: 5px;
  border: 1px solid teal;
}

button {
  align-items: flex-end;
  margin-top: 10px;
  padding: 10px 15px;
  background: none;
  border: 1px solid teal;
  color: teal;
  font-weight: bold;
  width: 300px;
}
</style>