<template>
  <div id="nav">
    <div><h3>Лёха учит Vuejs!</h3></div>
    <hr>
    <ListUser v-bind:list="listPost"
              v-on:remove="removePost"
    />
  </div>
</template>

<script>
import ListUser from "@/components/ListUser";

export default {
  name: 'app',
  data() {
    return {
      listPost: [
        {id: 1, firstName: 'Лёха: Фулл-стак синьёр, тим лид, биг-дата, архитектор ', lastName: 'Жака', completed: false},
        {id: 2, firstName: 'Лёха: Фулл-стак синьёр, тим лид, биг-дата, архитектор ', lastName: 'Жака', completed: false},
      ]
    }
  },
  components: {
    ListUser
  },
  methods:{
    removePost(){

    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
