<template>
  <h1 class="text-3xl font-bold underline">
    Dashboard
  </h1>
  <p>{{ msg }}</p>
  Hello world!
</template>

<script>

export default {
  name: 'DashBoard',
  components: {
  },
  data() {
    return {
      msg:'dashboard message' 
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
