<template>
  <div class="home">
    <h1>Главная страница</h1>
    <div>
      <router-link to="/home">Home</router-link>
    </div>
    <div>
      <router-link to="/users">Users</router-link>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Home'
}
</script>

<style scoped lang="scss">
.home {
  display: flex;
  flex-direction: column;

  &.router-link-exact-active {
    color: #42b983;
  }
}
</style>
