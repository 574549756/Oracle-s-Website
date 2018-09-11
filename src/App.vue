<template>
  <div id="app">
    <div class="container">
      <topbar/>
    </div>
  </div>
</template>

<script>
import topbar from './components/topbar'
  export default {
    name: 'App',
    components:{
      topbar
    }
  }
</script>

<style>
.icon {
    width: 1em;
    height: 1em;
    vertical-align: -0.15em;
    fill: currentColor;
    overflow: hidden;
}

#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
</style>