<template>
  <div class="aboutMe-Container">
    <header class="aboutMe-header">
      <div class="aboutMe-header-text">
        <div class="logo">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-gerenlogoBold"></use>
          </svg>
          <p>ex.arc.zhang@gmail.com</p>
        </div>
        <div class="aboutMe-header-h1">
          <h1>张博涵</h1>
          <h2>前端工程师</h2>
        </div>
      </div>
    </header>
    <main class="aboutMe-main-container">
      <ul class="row-1">
        <li>这是一堆字</li>
        <li>这是一堆字</li>
        <li>这是一堆字</li>
        <li>这是一堆字</li>
      </ul>
      <ul class="row-2">
        <li>这又是一堆字</li>
        <li>这又是一堆字</li>
        <li>这又是一堆字</li>
        <li>这又是一堆字</li>
      </ul>
    </main>
    <footer></footer>
  </div>
</template>
<script>
export default {}
</script>
<style lang="scss">
$designWidth: 1920;
@function px($px) {
	@return $px/$designWidth * 10 + rem;
}
</style>
