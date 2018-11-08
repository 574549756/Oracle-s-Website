<template>
  <div>
    <div class="Tab-inner-unfold">
      <h2>00</h2>
      <h1>About Me</h1>
    </div>
    <div class="clickBox">
      <router-link to="/" class="cross">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-cross"></use>
        </svg>
      </router-link>
      <div class="preAndNext">
        <div class="pre">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-next1"></use>
          </svg>
        </div>
        <router-link to="/ability" class="next">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-next1"></use>
          </svg>
        </router-link>
      </div>
    </div>
    <main class="inner-container">
      <aboutMe/>
    </main>
  </div>
</template>

<script>
import aboutMe from "../TabContent/aboutMe"
import clickBox from "./clickBox.scss"
export default {
	components: {
		aboutMe
	}
}
</script>

<style lang="scss">
$designWidth: 1920;
@function px($px) {
	@return $px/$designWidth * 10 + rem;
}
.router {
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 0 100px;
	main.inner-container {
		display: flex;
		justify-content: flex-start;
		align-items: center;
		flex-direction: column;
		flex: 1;
		height: 100%;
		div.aboutMe-Container {
			margin: 120px 120px 0 120px;

			color: rgb(255, 255, 255);
			display: flex;
			width: 900px;
			flex-direction: column;
			height: 100%;
			header.aboutMe-header {
				display: flex;
				height: 35%;
				position: relative;
				div.aboutMe-header-text {
					display: flex;
					flex-direction: column;
					flex: 1;
					.logo {
						display: flex;
						align-items: flex-end;
						justify-content: space-between;
						svg {
							fill: rgb(141, 141, 141);
							height: 40px;
							width: 40px;
						}
					}
					div.aboutMe-header-h1 {
						position: absolute;
						bottom: 0;
						left: 0;
						display: flex;
						width: 70%;
						padding: 20px 0;
						align-items: flex-end;
						background: #a3121979;
						h1 {
							margin: 0 10px 0 0;
							font-size: 50px;
							font-weight: 100;
						}
						h2 {
							font-size: 30px;
							font-weight: 100;
						}
					}
				}
			}
			main.aboutMe-main-container {
				display: flex;
				justify-content: center;
				align-items: flex-start;
			}
		}
	}
}
</style>

