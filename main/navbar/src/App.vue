<template>
  <div id="navbar-app">
    <div id="nav">
      <router-link to="/program1">program1</router-link> |
      <router-link to="/program2">program2</router-link> |
      <router-link to="/program3">program3</router-link>
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
