<template>
  <div id="app">
    <router-view/>
    <div id="nav">
      <router-link
        :to="{ name: 'transaction-detail', params: { id: 'new' } }"
      >
        Create Transaction
      </router-link> |
      <router-link :to="{ name: 'home' }">Home</router-link> |
    </div>
  </div>
</template>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
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
