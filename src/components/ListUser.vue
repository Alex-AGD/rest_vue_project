<template>
  <div>
    <ul>
      <ListUserItem
          v-for="listPerson of list"
          v-bind:list="listPerson" list-person
          v-on:remove-user="remove" />
    </ul>
  </div>
</template>

<script>
import ListUserItem from "@/components/ListUserItem";

export default {
  name: "ListUser",
  props: ['list'],
  components: {ListUserItem},
  methods:{
    remove(id) {
      this.$emit('remove-by-id', id)
    }
  }
}
</script>

<style scoped>
ul {
  margin: 0;
  padding: 0;
}
</style>