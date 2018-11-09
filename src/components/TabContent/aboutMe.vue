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
        <div class="aboutMe-board">
          <div class="photo"></div>
          <div class="aboutMe-message">
            <h1>张博涵</h1>
            <div class="aboutMe-message-tltle2">
              <div class="aboutMe-message-title2-site">
                <svg class="icon" aria-hidden="true">
                  <use xlink:href="#icon-site"></use>
                </svg>
                <p>重庆</p>
              </div>
              <h2>前端工程师</h2>
            </div>
            <div class="aboutMe-connection">
              <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-site"></use>
              </svg>
            </div>
          </div>
          <div class="aboutMe-header-h1">
            <div class="title1">
              <div class="sayHello">
                <h1>WELCOME TO</h1>
                <h1>MY PERSONAL PORTFOLIO</h1>
              </div>
            </div>
            <div class="mainText"></div>
          </div>
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
