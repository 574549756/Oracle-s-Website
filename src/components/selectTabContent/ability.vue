<template>
  <div>
    <div class="Tab-inner-unfold">
      <h2>01</h2>
      <h1>Skills</h1>
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
        <router-link to="/project" class="next">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-next1"></use>
          </svg>
        </router-link>
      </div>
    </div>
    <main>
      <skills/>
    </main>
  </div>
</template>
<script>
import skills from "../TabContent/skills"
export default {
	components: {
		skills
	}
}
</script>

<style lang="scss">
</style>
