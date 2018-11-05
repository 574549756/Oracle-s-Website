<template>
  <div id="app">
    <div class="container">
      <resumeBoard/>
    </div>
  </div>
</template>

<script>
import resumeBoard from "./components/resumeBoard"
import topBar from "./components/topBar"
export default {
	name: "App",
	components: {
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
	font-family: "Avenir", Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	background: url("./assets/Rose2kTiny.jpg") no-repeat center;
	width: 100vw;
	height: 100vh;
	display: flex;
	justify-content: center;
	align-items: center;
}
</style>