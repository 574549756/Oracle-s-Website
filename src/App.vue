<template>
  <div id="app">
    <div class="container">
      <topBar/>
      <main>
        <resumeBoard/>
        <div class="detail"></div>  
      </main>
    </div>
  </div>
</template>

<script>
import resumeBoard from './components/resumeBoard'
import topBar from './components/topBar'
  export default {
    name: 'App',
    components:{
      topBar,
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
p {
    color: #d2cfce;
    font-weight: 600;
}
#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    background-color: #3b3b3b;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
    .container {
        width: 76vw;
        display: flex;
        background-color: #3b3b3b;
        justify-content: center;
        flex-direction: column;
    }
}
</style>