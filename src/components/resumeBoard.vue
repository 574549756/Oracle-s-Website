<template>
  <div class="nameBoard">
    <main>
      <section class="about"></section>
      <section class="ability"></section>
      <section class="project"></section>
      <section class="blog"></section>
    </main>
  </div>
</template>

<style lang="scss">
.nameBoard {
	height: 100vh;
	width: 100vw;
	display: flex;
	justify-content: flex-start;
	align-items: center;
	flex-direction: row;
	main {
		height: 100vh;
		width: 100vw;
		display: flex;
		section {
			width: 25vw;
			height: 100vh;
			background: rgba(0, 0, 0, 0.4);
			&:hover {
				background: rgba(0, 0, 0, 0.1);
			}
		}
	}
}
</style>