<template>
  <div class="condolence">
    <p>Vamos registrar uma homenagem à um querido?</p>

    <Button to='/registrar-condolencia' msg='Quero escrever um condolência :)'></Button>
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
