<template>
  <div class="register">
    <h1>Formulário para registrar condolência aqui!</h1>
    
    <form action="/" method="get">
      <label for="fname">First name:</label>
      <input type="text" id="fname" name="fname"><br><br>
      <label for="lname">Last name:</label>
      <input type="text" id="lname" name="lname"><br><br>
      
      <Button to='/condolencia/297548' msg='Registrar'></Button>
    </form>
  </div>
</template>

<script>
import Button from '@/components/Button.vue'

export default {
  name: 'Register',
  components: {
    Button
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.register {

}
</style>
