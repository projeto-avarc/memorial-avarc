<template>
  <div>
    
    <NavBar class="shadow-sm"></NavBar>
    <div class="container mx-auto max-w-screen-md mb-16">

      <h1 class="pt-12 text-4xl text-center text-gray-800 mb-6">Página não encontrada!</h1>
      <router-link to="/" class="underline  font-semibold text-md text-center block">Voltar</router-link>

    </div>

  </div>
</template>
<script>
// @ is an alias to /src
import NavBar from "@/components/NavBar.vue"

export default {
  name: 'pageNotFound',
  components: {
    NavBar
  }
}
</script>
