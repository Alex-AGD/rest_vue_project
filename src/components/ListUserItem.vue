<template>
  <li class="li">
    <span v-bind:class="{ checked:list.completed }">
      <input type="checkbox"
             v-on:change="list.completed = !list.completed">
      <strong>ID:{{index +1 }} </strong> Имя : {{ list.title }}
      <button v-on:click="$emit('remove-user', list.id)">X</button>
    </span>
  </li>
</template>

<script>


export default {
  name: "ListUserItem",
  props: {
    list: {
      type: Object,
      required: true
    },
    index: Number
  }
}
</script>

<style scoped>
.li {
  list-style-type: none;
  border: 1px solid #2c3e50;
  display: flex;
  justify-content: space-between;
  padding: .5rem;
  margin-bottom: 1em;
}

button {
  align-items: flex-end;
  background: #2c3e50;
  color: #42b983;
  border-radius: 30%;
  font-weight: bold;
}

input {
  margin-right: 1rem;
}

.checked {
  color: crimson;
}
</style>