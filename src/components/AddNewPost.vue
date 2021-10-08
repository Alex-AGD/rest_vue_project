<template>
  <form @submit.prevent>
    <div>
      <input type="text"
             v-model="firstName">
      <button v-on:click="savePost"> Save</button>
    </div>
  </form>

</template>

<script>

export default {
  name: "AddNewPost",
  data() {
    return {
      firstName: '',
      completed: false
    }
  },
  methods: {
    savePost() {
      if (this.firstName.trim()) {
        const listItem = {
          id: Date.now(),
          firstName: this.firstName,
          completed: this.completed = false
        }
        this.$emit('add-post', listItem);
        this.firstName = '';
      }
    }
  }
}
</script>

<style scoped>
form {
  width: 100%;
  display: flex;
  flex-direction: column;
}

input {
  width: 50%;
  padding: 10px 15px;
  color: teal;
  border: 1px solid teal;
}

button {
  align-items: flex-end;
  margin-top: 10px;
  margin-left: 5px;
  padding: 10px 15px;
  background: none;
  border: 1px solid teal;
  color: teal;
  font-weight: bold;
}
</style>