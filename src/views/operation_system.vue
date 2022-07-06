<template>
  <h1 class="text-3xl font-bold underline">
    Tauri Operation system handling 
  </h1>
  <p>{{ msg }}</p>
</template>

<script>

export default {
  name: 'OperationSystem',
  components: {
  },
  data() {
    return {
      msg:'Hello from OS view' 
    }
  }
};
</script>

<style>
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
router-link {
  color: #42b983;
}
</style>
