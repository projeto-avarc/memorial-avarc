<template>
  <div>

    <h1>Listagem das condolências: {{ condolences_count }}</h1>
    
    <div v-for="condolence in condolences" v-bind:key="condolence.id">
        <p v-if="condolence.name">{{ condolence.name }}</p>
        <p v-if="condolence.lastname">{{ condolence.lastname }}</p>
        <p v-if="condolence.cpf">{{ condolence.cpf }}</p>
        <p v-if="condolence.rg">{{ condolence.rg }}</p>
        <p v-if="condolence.message">{{ condolence.message }}</p>
    </div>

  </div>
</template>

<script>
// @ is an alias to /src
import axios from 'axios'

export default {
  name: 'condolences',
  data () {
    return {
      condolences: [],
      condolences_count: 0
    }
  },
  mounted () {
    axios
      .get('http://localhost:1337/condolencias')
      .then(response => (this.condolences = response.data));

    axios
      .get('http://localhost:1337/condolencias/count')
      .then(response => (this.condolences_count = response.data))
  }
}
</script>
