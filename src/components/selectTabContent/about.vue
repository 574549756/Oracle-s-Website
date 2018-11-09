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
				height: 40%;
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
						p {
							color: rgb(119, 119, 119);
						}
					}
					div.aboutMe-board {
						margin-top: 50px;
						display: flex;
						justify-content: flex-start;
						flex: 1;
						div.photo {
							width: 40%;
							height: 100%;
							background: white;
						}
						.row-right {
							display: flex;
							flex-direction: column;
							flex: 1;
							justify-content: flex-start;
							align-items: flex-start;
							padding: 50px 0 0 50px;
							main.aboutMe-main-container {
								width: 100%;
								margin-top: 30px;
								display: flex;
								justify-content: flex-start;
								align-items: center;
								.row-1 {
									display: flex;
									justify-content: space-between;
									div {
										display: flex;
										flex-direction: column;
										justify-content: flex-start;
										align-items: flex-start;
										font-size: 18px;
										p {
											margin-bottom: 5px;
										}
									}
									.messageTitle {
										margin-right: 80px;
										p {
											color: rgb(112, 112, 112);
										}
									}
								}
							}
							> .aboutMe-message {
								display: flex;
								h1 {
									margin: 0;
									font-family: "Courier New",
										Courier, monospace;
									font-weight: 100;
									font-size: 50px;
								}
								h2 {
									font-weight: 100;
									font-size: 24px;
									color: rgb(175, 175, 175);
								}
								.aboutMe-message-title2-site {
									display: flex;
									justify-content: flex-start;
									align-items: center;
									svg {
										fill: rgb(112, 112, 112);
										height: 20px;
										width: 20px;
									}
									p {
										color: rgb(112, 112, 112);
										font-size: 15px;
									}
								}
							}
						}
						div.aboutMe-header-h1 {
							position: absolute;
							bottom: 0;
							left: 0;
							display: flex;
							height: 90px;
							flex-direction: row;
							width: 100%;
							justify-content: space-between;
							padding-top: 20px;
							align-items: flex-end;
							background: #9c1a1ad5;
							.aboutMe-connection {
								margin: 0 45px;
								display: flex;
								flex-direction: column;
								justify-content: center;
								align-items: flex-start;
								.github,
								.wechat {
									display: flex;
									width: 100%;
									justify-content: space-between;
									align-items: center;
									div {
										display: flex;
										justify-content: center;
										align-items: flex-end;
									}
									svg {
										height: 20px;
										width: 20px;
										color: white;
									}
									.qq {
										margin-left: 30px;
										fill: white;
									}
									a {
										fill: rgb(175, 175, 175);
										margin-left: 10px;
									}

									p {
										fill: rgb(175, 175, 175);
										margin-left: 10px;
									}
								}
								.wechat {
									margin-top: 5px;
								}
							}
							.title1 {
								display: flex;
								justify-content: center;
								width: 40%;
								height: 100%;
								.sayHello {
									display: flex;
									flex-direction: column;
									align-items: flex-end;
									h3 {
										font-size: 20px;
										margin: 0;
										color: rgb(202, 202, 202);
									}
									p {
										font-size: 18px;
										color: white;
									}
								}
								h1 {
									margin: 0 0 0 12px;
									font-size: 20px;
									font-weight: 100;
								}
							}

							.mainText {
								flex: 1;
								height: 100%;
							}
						}
					}
				}
			}
		}
	}
}
</style>

