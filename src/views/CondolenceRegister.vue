<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->

    <h1>Página principal com formulário de registro de condolência</h1>
    <p>formulário (componente) aqui!</p>

    <p>após preenchimento gerar QRcode com link da condolência. ex:</p>
    <router-link to="/condolencia/297548">Ir para condolência de id 297548</router-link>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    // HelloWorld
  }
}
</script>
