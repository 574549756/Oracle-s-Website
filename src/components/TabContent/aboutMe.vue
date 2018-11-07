<template>
  <div class="aboutMe-Container">
    <header class="aboutMe-header">
      <div class="photo"></div>
      <div class="aboutMe-header-text">
        <p>我是</p>
        <h1>张博涵</h1>
        <h2>前端工程师</h2>
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
