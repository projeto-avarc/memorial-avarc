<template>
  <div>
    <div v-if="condolence" class="mt-4 px-4 py-4 text-left border-solid border border-gray-300 rounded-lg">
      <div>
        <p class="inline" v-if="condolence.name">{{ condolence.name }} </p>
        <p class="inline" v-if="condolence.lastname">{{ condolence.lastname }}</p>
      </div>
      <p v-if="condolence.cpf">{{ condolence.cpf }}</p>
      <p v-if="condolence.rg">{{ condolence.rg }}</p>
      <p v-if="condolence.message">{{ condolence.message }}</p>
    </div>
    <div v-else>
      <p>Condolência não encontrada!</p>
    </div>
    <div class="text-left">
      <router-link to="/condolencias" class="mt-4 ml-4 underline inline-block text-xs font-semibold">Voltar</router-link>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import axios from 'axios'

export default {
  name: 'condolencia',
  data () {
    return {
      condolence: null
    }
  },
  mounted () {
    axios
      .get(`http://localhost:1337/condolencias/${ this.$route.params.id }`)
      .then(response => (this.condolence = response.data))
  }
}
</script>
