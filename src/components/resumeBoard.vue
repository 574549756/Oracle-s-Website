<template>
  <div class="nameBoard">
    <main v-bind:class="{normal:selectTab.normal}">
      <section v-bind:class="{active:selectTab.about}" v-on:click="switchTab()">
        <router-link to="/about" class="about"></router-link>
        <router-view class="router"></router-view>
      </section>
      <section v-bind:class="{active:selectTab.ability}" v-on:click="switchTab()">
        <router-link to="/ability" class="ability"></router-link>
        <router-view class="router"></router-view>
      </section>
      <section v-bind:class="{active:selectTab.project}" v-on:click="switchTab()">
        <router-link to="/project" class="project"></router-link>
        <router-view class="router"></router-view>
      </section>
      <section v-bind:class="{active:selectTab.blog}" v-on:click="switchTab()">
        <router-link to="/blog" class="blog"></router-link>
        <router-view class="router"></router-view>
      </section>
    </main>
  </div>
</template>
<script>
import store from "../store/index"
export default {
	name: "resumeBoard",
	store,
	methods: {
		switchTab() {
			for (let i in this.selectTab) {
				this.selectTab[i] = false
			}
			this.selectTab[this.$route.name] = true
		}
	},
	computed: {
		selectTab() {
			return this.$store.state.selectTab
		}
	}
}
</script>

<style lang="scss">
$designWidth: 1920;
@function px($px) {
	@return $px/$designWidth * 100 + rem;
}
.nameBoard {
	height: 100vh;
	width: 100vw;
	display: flex;
	justify-content: flex-start;
	align-items: center;
	flex-direction: row;
	main {
		background: url("../assets/Rose2kTiny.jpg") no-repeat center;
		background-size: cover;
		height: 100vh;
		width: 100vw;
		display: flex;
		section {
			width: 75px;
			height: 100vh;
			background: rgba(10, 5, 0, 0.5);
			border-left: 0.5px solid rgba(100, 100, 100, 0.3);
			border-right: 0.5px solid rgba(100, 100, 100, 0.3);
			transition: all 0.3s;
			display: flex;
			a {
				width: 75px;
				height: 100vh;
			}
			.router {
				background: black;
				display: none;
			}
			&.active {
				width: 100%;
				height: 100vh;
				a {
					display: none;
				}
				.router {
					display: block;
				}
			}
		}
		&.normal {
			section {
				width: 25vw;
				height: 100vh;
				background: rgba(10, 5, 0, 0.5);
				border-left: 0.5px solid rgba(100, 100, 100, 0.3);
				border-right: 0.5px solid rgba(100, 100, 100, 0.3);
				transition: all 0.3s;
				display: flex;
				a {
					width: 25vw;
					height: 100vh;
				}
				&:hover {
					background: rgba(10, 5, 0, 0.3);
					z-index: 2;
					box-shadow: 0 0 30px 5px rgba(0, 0, 0, 0.8);
				}
			}
			.router {
				display: none;
			}
		}
	}
}
</style>