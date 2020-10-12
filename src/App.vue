<template>
  <div id="app">
    <div class="wrapper">

      <header class="header">
        <img alt="AVARC logo" src="./assets/logo-avarc.jpg">
        <div class="header__info">
          <p>Memorial dedicado à história de cada uma das vítimas do coronavírus no Brasil.</p>
        </div>
      </header>
      
      <!-- <div id="nav">
        <router-link to="/">Home</router-link> |
        <router-link to="/about">About</router-link>
      </div> -->
      <router-view/>

    </div>
  </div>
</template>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
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
  margin-bottom: 50px;

  &__info {
    max-width: 400px;
    display: block;
    margin: 0 auto;
    font-size: 20px;
  }
}
</style>
