<template>
  <h1 class="text-3xl font-bold underline">
    Tauri file system handling
  </h1>
  <p>{{ msg }}</p>
</template>

<script>

export default {
  name: 'FileSystem',
  components: {
  },
  data() {
    return {
      msg:'Hello File system' 
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
