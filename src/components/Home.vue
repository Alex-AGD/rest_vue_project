<template>
  <div class="container">
    <header class="jumbotron">
      <Loader v-if="loadingFromBack"/>
      <h3>{{ allData }}</h3>
      <font-awesome-icon icon="horse"/>
    </header>
    <hr/>

  </div>
</template>

<script>
import Loader from "@/assets/Loader";
import {mapGetters, mapActions} from "vuex";
export default {
  name: "HomePage",
  data() {
    return {
      loading: false,
    }
  },
  components: {
    Loader
  },
  mounted() {
    this.fetchAllFromBack()
  },
  methods: mapActions(['fetchAllFromBack']),

  computed: {
    ...mapGetters(['loadingFromBack', 'allData'])
  },

};
</script>
