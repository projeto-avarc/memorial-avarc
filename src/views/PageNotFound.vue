<template>
  <div>
      
    <h1 class="text-2xl mb-5 mt-20">Página não encontrada :(</h1>
    <router-link to="/">
      <Button value="Voltar" class="primary-color text-sm"></Button>
    </router-link>

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

<style lang="scss">
.home {
  > p {
    margin-bottom: 20px;
  }
}
</style>