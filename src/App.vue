<template>
  <NavBar/>
  <h1>Main Page</h1>
  <hr>
    <router-view/>
</template>

<script>
import NavBar from "@/components/NavBar";
import Home from "@/components/Home";

export default {
  components: {
    NavBar,
    Home
  }
};
</script>

<style lang="scss" >
#body, html {
  height: 100vh;
  background-color: #ffffff;
  line-height: 1.8;
  margin: 0;
  padding: 0;
}
</style>
