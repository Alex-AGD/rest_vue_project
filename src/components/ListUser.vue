<template>
  <div>
    <ul>
      <ListUserItem
          v-for="(listPerson, i) of listPost"
          v-bind:list="listPerson"
          v-bind:index="i"
          v-on:remove-user="remove"/>
    </ul>
  </div>
</template>

<script>
import ListUserItem from "@/components/ListUserItem";

export default {
  name: "ListUser",
  props: [ 'listPost' ],
  components: { ListUserItem },
  methods: {
    remove (id) {
      this.$emit ('remove-user', id)
    }
  },
  mounted() {
    console.log("ListUser")
  }

}
</script>

<style scoped>
ul {
  margin: 0;
  padding: 0;
}
</style>