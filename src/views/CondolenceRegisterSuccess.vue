<template>
  <div>
    <p class="info">Sua condolência foi registrada e está em processo de aprovação pelos moderadores. Em breve você receberá um e-mail com seu QR Code para compartilhar com os amigos!</p>

    <div class="mt-12 d-flex">
      <router-link to="/condolencia/criar" class="mx-1 mb-2 inline-block text-sm">
        <Button value="Escrever nova condolência"></Button>
      </router-link>
      <router-link to="/condolencias" class="mx-1 mb-2 inline-block text-sm">
        <Button value="Ver condolências" class="primary-color"></Button>
      </router-link>
    </div>
  </div>
</template>

<script>
import Button from '@/components/Button.vue'

export default {
  name: 'qrCode',
  components: {
    Button
  },
  data () {
    return {}
  }
}
</script>

<style lang="scss" scoped>
  .info {
    @apply mb-16 mt-20 mx-auto font-bold;
    max-width: 680px;
  }
</style>