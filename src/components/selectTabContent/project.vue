<template>
  <div>
    <div class="Tab-inner-unfold">
      <h2>01</h2>
      <h1>Portfolio</h1>
    </div>
    <div class="clickBox">
      <router-link to="/" class="cross">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-cross"></use>
        </svg>
      </router-link>
      <div class="preAndNext">
        <router-link to="/about" class="pre">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-next1"></use>
          </svg>
        </router-link>
        <router-link to="/blog" class="next">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-next1"></use>
          </svg>
        </router-link>
      </div>
    </div>
    <main class="inner-container">
      <portfolio/>
    </main>
  </div>
</template>
<script>
import portfolio from "../TabContent/portfolio"
export default {
	components: {
		portfolio
	}
}
</script>

<style lang="scss">
.router {
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 0 100px;
	main.inner-container {
		display: block;
		height: 100vh;
		overflow-x: hidden;
		overflow-y: scroll;
		&::-webkit-scrollbar {
			display: none;
		}
		main.skills-container {
			margin: 120px 120px 0 120px;
			color: rgb(255, 255, 255);
			display: flex;
			width: 900px;
			flex-direction: column;
			.row1 {
				width: 100%;
				border: 1px solid red;
			}
		}
	}
}
</style>
