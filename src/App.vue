<template>
  <div id="app">
    <ul id="nav">
      <li><router-link to="/">Home</router-link><li/>
      <li><router-link :to="{ name: 'about' }">About</router-link><li/>
      <li><router-link to="/parent">Parent</router-link><li/>
      <li><router-link to="/store">Store</router-link><li/>
      <li><router-link to="/named_view">named_view</router-link><li/>
      <li><router-link to="/split-pane">split-pane</router-link><li/>
      <li><router-link to="/login">Login</router-link><li/>
    </ul>
    <transition-group :name="routerTransition">
      <router-view key="default" />
      <router-view key="email" name="email" />
      <router-view key="tel" name="tel" />
    </transition-group>
  </div>
</template>
<script>
export default {
  data () {
    return {
      routerTransition: ''
    }
  },
  watch: {
    '$route' (to) {
      to.query
        && to.query.transitionName
        && (this.routerTransition = to.query.transitionName)
    }
  }
}
</script>
<style lang="less">
.router-enter {
  opacity: 0;
}
.router-enter-active {
  transition: opacity 1s ease;
}
.router-enter-to {
  opacity: 1;
}
.router-leave {
  opacity: 1;
}
.router-leave-active {
  transition: opacity 1s ease;
}
.router-leave-to {
  opacity: 0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  // text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  display: flex;
  list-style: none;
  li {
    flex: 1;
    a {
      font-weight: bold;
      color: #2c3e50;
      &.router-link-exact-active {
        color: #42b983;
      }
    }
  }
}
</style>
