<template>
  <div class="condolence">
    <p>Vamos registrar uma homenagem à um querido?</p>

    <input class="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal" type="email" placeholder="jane@example.com">
    <button class="btn btn-blue">
      Button
    </button>

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
