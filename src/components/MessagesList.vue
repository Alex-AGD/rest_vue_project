<template>
  <div>
    <h3>Список пользователей</h3>
    <message-item
        v-for="post in posts"
        :post="post"
    />
  </div>
</template>

<script>
import MessageItem from "@/components/MessageItem";
export default {
  components: { MessageItem },
  props: {
    posts: {
      type: Array,
      required: true,
    }
  }
}
</script>

<style scoped>

</style>