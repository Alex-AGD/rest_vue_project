<template>
  <input
      type="text"
      class="input"
      @input="updateValue"/>
</template>

<script>

export default {
  name: "my-input",
  props: {
    modelValue: [ String, Number ]
  },
  methods: {
    updateValue (event) {
      this.$emit ('update:modelValue', event.target.value);
    }
  }
}
</script>

<style scoped>
.input {
  width: 100%;
  padding: 10px 15px;
  margin-top: 10px;
}
</style>