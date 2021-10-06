<template>
  <div class="app">
      <messages-list
          :posts="posts"
      />
      <messages-from
          @create="createPost"
      />
  </div>
</template>

<script>
export default {
  components:{
    MessagesFrom,
    MessagesList
  },
  data () {
    return {
      posts: [
        { id: 1, title: 'JsTop', body: 'Js топчик' },
        { id: 2, title: 'JsTop 2', body: 'Описание 2' },
        { id: 3, title: 'JsTop 3', body: 'Описание 3' },
        { id: 4, title: 'JsTop 3', body: 'Описание 5' },
      ],
    }
  },
  methods: {
    createPost(posts){
     this.posts.push(posts)
    }
  }
}
import MessagesFrom from "@/components/MessagesForms";
import MessagesList from "@/components/MessagesList";
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.app{
  margin: 10px;
  padding: 10px;
}
</style>