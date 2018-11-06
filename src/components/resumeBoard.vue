<template>
  <div class="nameBoard">
    <main v-bind:class="{normal:selectTab.normal}">
      <section v-bind:class="{active:selectTab.about}" v-on:click="switchTab()">
        <router-link to="/about" class="about">
          <div class="Tab-inner">
            <h2>00</h2>
            <h1>About Me</h1>
          </div>
        </router-link>
        <router-view class="router"></router-view>
      </section>
      <section v-bind:class="{active:selectTab.ability}" v-on:click="switchTab()">
        <router-link to="/ability" class="ability">
          <div class="Tab-inner">
            <h2>01</h2>
            <h1>Ability</h1>
          </div>
        </router-link>
        <router-view class="router"></router-view>
      </section>
      <section v-bind:class="{active:selectTab.project}" v-on:click="switchTab()">
        <router-link to="/project" class="project">
          <div class="Tab-inner">
            <h2>02</h2>
            <h1>Portfolio</h1>
          </div>
        </router-link>
        <router-view class="router"></router-view>
      </section>
      <section v-bind:class="{active:selectTab.blog}" v-on:click="switchTab()">
        <router-link to="/blog" class="blog">
          <div class="Tab-inner">
            <h2>03</h2>
            <h1>Blog</h1>
          </div>
        </router-link>
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
	created() {
		this.switchTab()
	},
	methods: {
		switchTab() {
			for (let i in this.selectTab) {
				this.selectTab[i] = false
			}
			console.log(this.$router)
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
	@return $px/$designWidth * 10 + rem;
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
				.Tab-inner {
					display: flex;
					flex-direction: column;
					justify-content: flex-start;
					align-items: center;
					margin-top: 50px;
					h2 {
						color: rgb(184, 184, 184);
						font-size: 13px;
						font-weight: 100;
					}
					h1 {
						margin-top: 50px;
						font-size: 16px;
						color: white;
						font-weight: 200;
						writing-mode: vertical-rl;
						transform: rotate(180deg);
					}
				}
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
					display: flex;
					justify-content: center;
					align-items: flex-end;
					.Tab-inner {
						display: flex;
						flex-direction: column;
						justify-content: flex-end;
						align-items: center;
						margin-bottom: 100px;
						h2 {
							color: rgb(121, 121, 121);
							font-size: 13px;
						}
						h1 {
							font-size: 18px;
							writing-mode: horizontal-tb;
							transform: none;
						}
					}
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