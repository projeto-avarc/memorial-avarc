<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->

    <p>após preenchimento gerar QR Code com link da condolência. ex:</p>
    <Register></Register>

  </div>
</template>

<script>
// @ is an alias to /src
import Register from '@/components/Register.vue'

export default {
  name: 'condolenceRegister',
  components: {
    Register
  }
}
</script>
