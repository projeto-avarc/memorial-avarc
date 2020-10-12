<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->

    <h1>Página principal com formulário <br>de registro de condolência</h1>
    <p>formulário (component) aqui!</p>

    <p>após preenchimento gerar QR Code com link da condolência. ex:</p>
    <Button to='/condolencia/297548' msg='Ver condolência'></Button>
  </div>
</template>

<script>
// @ is an alias to /src
import Button from '@/components/Button.vue'

export default {
  name: 'home',
  components: {
    Button
  }
}
</script>
