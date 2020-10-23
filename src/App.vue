<template>
  <div id="app">
    <div class="wrapper">

      <header class="header">
        <img alt="AVARC logo" src="./assets/logo-avarc.jpg">
        <p class="text-base">Memorial em Homenagem às Vítimas do Coronavírus</p>
      </header>
    
      <router-view/>

    </div>
  </div>
</template>

<style lang="scss">
html {
  overflow: scroll;
  overflow-x: hidden;
}
::-webkit-scrollbar {
  width: 0px;
  background: transparent;
}
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  padding: 50px 0;
}
.wrapper {
  margin: 0 auto;
  max-width: 768px;
  padding: 0 15px;
}
.header {
  max-width: 260px;
  margin: 0 auto 50px auto;

  > img {
    margin: 0 auto;
  }
}
</style>
