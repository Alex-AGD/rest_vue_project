<template>
  <div>
    <form class="form" @submit.prevent>
      <h4>Создание поста</h4>
      <my-input
             v-model="post.title"
             type="text"
             placeholder="Название"/>
      <my-input v-model="post.body"
             type="text"
             placeholder="Описание"/>
      <my-button class="btn"
                 style="align-self: flex-end;
                 margin-top: 15px"
                 @click="createPost">Добавить пост
      </my-button>
    </form>
  </div>
</template>

<script>



export default {

  data () {
    return {
      post: {
        title: '',
        body: ''
      }
    }
  },
  methods: {
    createPost () {
      this.post.id = Date.now ();
      this.$emit ('create', this.post, 'second event');
      this.post = {
        title: '',
        body: ''
      }
      this.title = '';
      this.body = '';
    }
  }
}
</script>

<style scoped>

.form {
  display: flex;
  flex-direction: column;
}
</style>