<template>
  <div class="home">
    <p class="font-medium text-lg">Deixe sua homenagem para um amigo ou ente querido</p>
    <router-link to="/condolencia/criar">
      <Button value="Quero escrever :)" class="primary-color"></Button>
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