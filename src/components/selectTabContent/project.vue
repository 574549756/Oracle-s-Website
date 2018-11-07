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
        <router-link to="/ability" class="pre">
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
  </div>
</template>
<style lang="scss">
.router {
	position: relative;
	.clickBox {
		position: absolute;
		right: 50px;
		top: 50px;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: flex-end;
		a.cross {
			margin: 0 5px 40px 0;
			display: block;
			svg {
				fill: #b1b0b0;
				height: 20px;
				width: 20px;
			}
		}
		.preAndNext {
			display: flex;
			div.pre {
				svg {
					height: 25px;
					width: 25px;
					fill: #4a4848;
					transform: rotate(180deg);
				}
			}
			a.pre {
				svg {
					height: 25px;
					width: 25px;
					fill: #b1b0b0;
					transform: rotate(180deg);
				}
			}
			a.next {
				svg {
					margin-left: 20px;
					height: 25px;
					width: 25px;
					fill: #b1b0b0;
				}
			}
			div.next {
				svg {
					margin-left: 20px;
					height: 25px;
					width: 25px;
					fill: #4a4848;
				}
			}
		}
	}
}
</style>
