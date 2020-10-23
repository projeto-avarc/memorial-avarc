<template>

  <form class="form" v-on:submit.prevent="submitForm">
    <div>
      <h2 class="text-left mb-1 text-sm">Informações do falecido:</h2><hr>

      <div class="flex flex-wrap -mx-3 mb-6">
        <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label for="grid-name">
            Nome*
          </label>
          <input required v-model="condolence.name" class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-name" type="text" placeholder="Ana">
          <!-- <p class="text-red-500 text-xs italic">Por favor, preencha este campo.</p> -->
        </div>
        <div class="w-full md:w-1/2 px-3">
          <label for="grid-lastname">
            Sobrenome*
          </label>
          <input required v-model="condolence.lastname" id="grid-lastname" type="text" placeholder="Clara">
        </div>
      </div>

      <div class="flex flex-wrap -mx-3 mb-6">
        <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label for="grid-cpf">
            CPF*
          </label>
          <input required v-model="condolence.cpf" class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-cpf" type="text" placeholder="999.999.999-99">
        </div>
        <div class="w-full md:w-1/2 px-3">
          <label for="grid-rg">
            RG*
          </label>
          <input required v-model="condolence.rg" id="grid-rg" type="text" placeholder="99.999.999-9">
        </div>
      </div>

      <div class="flex flex-wrap -mx-3 mb-6">
        <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label for="grid-breed">
            Cor/Raça
          </label>
          <div class="relative">
            <select v-model="condolence.breed" id="grid-breed">
              <option value="">Selecionar</option>
              <option value="branca">Branca</option>
              <option value="parda">Parda</option>
              <option value="preta">Preta</option>
              <option value="amarela">Amarela</option>
              <option value="indigena">Indígena</option>
            </select>
            <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
            </div>
          </div>
        </div>
        <div class="w-full md:w-1/2 px-3">
          <label for="grid-street">
            Rua
          </label>
          <input v-model="condolence.address_street" class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-street" type="text" placeholder="Rua Augusta">
        </div>
      </div>

      <div class="flex flex-wrap -mx-3 mb-10">
        <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label for="grid-city">
            Cidade
          </label>
          <input v-model="condolence.address_city" class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-city" type="text" placeholder="São Paulo">
        </div>
        <div class="w-full md:w-1/2 px-3">
          <label for="grid-state">
            Estado
          </label>
          <input v-model="condolence.address_state" id="grid-state" type="text" placeholder="São Paulo">
        </div>
      </div>
    </div>
    <hr>

    <div>
      <div class="flex flex-wrap -mx-3 mb-8">
        <div class="w-full px-3 mb-6 md:mb-0">
          <label for="grid-email">
            E-mail*
          </label>
          <input required v-model="condolence.email" id="grid-email" type="email" placeholder="ana.maria@email.com">
        </div>
      </div>
      <div class="flex flex-wrap -mx-3 mb-8">
        <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label for="grid-feeling">
            Sentimentos
          </label>
          <div class="relative">
            <select v-model="condolence.feeling" id="grid-feeling">
              <option value="saudades" selected>Saudades</option>
              <option value="inconformismo">Inconformismo</option>
              <option value="fe">Fé</option>
              <option value="esperanca">Esperança</option>
            </select>
            <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
            </div>
          </div>
        </div>
        <div class="w-full md:w-1/2 px-3">
          <label for="grid-status">
            A minha mensagem é
          </label>
          <div class="relative">
            <select v-model="condolence.status" id="grid-status">
              <option value="publica">Pública</option>
              <option value="parcialmente_publica">Parcialmente pública - Será relevado o seu conteúdo e autoria daqui dez anos</option>
              <option value="apenas_mensagem">Sigilosa - Somente a condolência será colocado na cápsula do tempo sem identificação de sua autoria</option>
              <option value="sigilosa">Sigilosa</option>
            </select>
            <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
            </div>
          </div>
        </div>
      </div>
      <div class="flex flex-wrap -mx-3 mb-6">
        <div class="w-full px-3">
          <label for="grid-message">
            Escrever minha condolência*
          </label>
          <textarea required v-model="condolence.message" class="form-textarea mt-1 block w-full" rows="8" placeholder="..." id="grid-message"></textarea>
        </div>
      </div>
    </div>

    <div class="text-center">
      <Button value="Enviar" class="primary-color mt-10 inline-block" type="submit"></Button>
    </div>
  </form>

</template>

<script>
import Button from '@/components/Button.vue'
import axios from 'axios'

export default {
  name: 'condolenceRegister',
  data () {
    return {
      condolence: {
        name: '',
        lastname: '',
        cpf: '',
        rg: '',
        breed: 'branca',
        address_street: '',
        address_city: '',
        address_state: '',
        feeling: 'saudades',
        message: '',
        status: 'publica',
        email: ''
      }
    }
  },
  components: {
    Button
  },
  methods: {
    submitForm(){
     axios
      .post('http://localhost:1337/condolencias', this.condolence)
      .then(() => {
        this.$router.push('/condolencia/sucesso')
      })
    },
  }
}
</script>

<style lang="scss">
.form {
  text-align: left;
  @apply mb-10 w-full;
  label {
    @apply block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2;
  }
  input, textarea {
    @apply appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight;
    &:focus {
      @apply outline-none bg-white border-gray-500;
    }
  }
  select {
    @apply block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight;
    &:focus {
      @apply outline-none bg-white border-gray-500;
    }
  }
  hr {
    @apply mb-5;
  }
}
</style>
