<template>
  <div id="app">
    <div class="container">
      <sideBar/>
      <main>
        <resumeBoard/>
        <div class="detail"></div>  
      </main>
    </div>
  </div>
</template>

<script>
import resumeBoard from './components/resumeBoard'
import sideBar from './components/sideBar'
  export default {
    name: 'App',
    components:{
      sideBar,
      resumeBoard
    }
  }
</script>

<style lang="scss">
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
    height: 100vh;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
    .container {
        width: 1330px;
        height: 800px;
        background: rgb(30, 30, 30);
        display: flex;
        box-shadow: 0 0 30px 3px rgba($color: #000000, $alpha: 0.3);
    }
}
</style>