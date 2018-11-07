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
		border: 1px solid red;
		div.aboutMe-Container {
			flex: 1;
			margin: 120px 120px 0 120px;
			border: 1px solid green;
			color: rgb(255, 255, 255);
			display: flex;
			width: 100%;
			flex-direction: column;
			height: 100%;
			header.aboutMe-header {
				display: flex;
				height: 40%;
				background: gray;
				div.aboutMe-header-text {
					display: flex;
					flex-direction: column;
					div.aboutMe-header-h3 {
						display: flex;
						font-size: 30px;
						h3 {
							font-weight: 200;
						}
					}
					h1 {
						font-size: 50px;
						font-weight: 100;
					}
					h2 {
						font-size: 30px;
						font-weight: 100;
					}
				}
			}
			main.aboutMe-main-container {
				display: flex;
				justify-content: center;
				align-items: flex-start;
				border: 1px solid yellow;
			}
		}
	}
}
</style>

