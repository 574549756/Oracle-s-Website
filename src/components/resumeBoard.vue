<template>
  <div class="nameBoard">
    <main v-bind:class="{normal:selectTab.normal}">
      <section v-bind:class="{active:selectTab.about}" v-on:click="switchTab()">
        <router-link to="/about" class="clickable">
          <div class="Tab-inner">
            <h2>00</h2>
            <h1>About Me</h1>
          </div>
        </router-link>
        <router-view class="router"></router-view>
      </section>
      <section v-bind:class="{active:selectTab.ability}" v-on:click="switchTab()">
        <router-link to="/ability" class="clickable">
          <div class="Tab-inner">
            <h2>01</h2>
            <h1>Skills</h1>
          </div>
        </router-link>
        <router-view class="router"></router-view>
      </section>
      <section v-bind:class="{active:selectTab.project}" v-on:click="switchTab()">
        <router-link to="/project" class="clickable">
          <div class="Tab-inner">
            <h2>02</h2>
            <h1>Portfolio</h1>
          </div>
        </router-link>
        <router-view class="router"></router-view>
      </section>
      <section v-bind:class="{active:selectTab.blog}" v-on:click="switchTab()">
        <router-link to="/blog" class="clickable">
          <div class="Tab-inner">
            <h2>03</h2>
            <h1>My Blog</h1>
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
@keyframes slidein {
	0% {
		transform: translateY(-200px);
	}
	40% {
		transform: translateY(-200px);
	}
	100% {
		transform: translateX(0);
	}
}
@keyframes fadein {
	0% {
		opacity: 0;
	}
	50% {
		opacity: 0;
	}
	100% {
		opacity: 1;
	}
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
			background: rgba(80, 45, 12, 0.1);
			border-left: 0.5px solid rgba(100, 100, 100, 0.3);
			border-right: 0.5px solid rgba(100, 100, 100, 0.3);
			transition: all 0.3s;
			display: flex;
			a.clickable {
				width: 75px;
				height: 100vh;
				&:hover {
					> .Tab-inner {
						> h1 {
							margin-top: 70px;
						}
					}
				}
				.Tab-inner {
					display: flex;
					flex-direction: column;
					justify-content: flex-start;
					align-items: center;
					margin-top: 50px;
					animation: 0.6s fadein;
					h2 {
						color: rgb(184, 184, 184);
						font-size: 13px;
						font-weight: 100;
					}
					h1 {
						margin-top: 50px;
						font-size: 16px;
						color: rgb(235, 235, 235);
						font-weight: 200;
						transform: rotate(-90deg);
					}
				}
			}
			.router {
				background: rgba(34, 32, 32, 1);
				display: none;
			}
			&.active {
				width: 100%;
				height: 100vh;
				a.clickable {
					display: none;
				}
				.router {
					display: block;
					width: 100%;
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
				display: flex;
				a.clickable {
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
						animation: 0.6s fadein;
						h2 {
							transition: all 0.3s;
							color: rgb(121, 121, 121);
							font-size: 13px;
						}
						h1 {
							transition: all 0.3s;
							margin-top: 20px;
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
					a.clickable {
						.Tab-inner {
							animation: 0.6s fadein;
							h2 {
								transform: translateX(px(30));
							}
							h1 {
								color: white;
								transform: translateY(px(-80));
							}
						}
					}
				}
			}
			.router {
				display: none;
			}
		}
	}
}
</style>