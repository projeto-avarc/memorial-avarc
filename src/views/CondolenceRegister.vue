<template>
  <form class="form">

    <div>
      <h2 class="text-left mb-1 text-sm">Informações do falecido:</h2><hr>

      <div class="flex flex-wrap -mx-3 mb-6">
        <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label for="grid-name">
            Nome
          </label>
          <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-name" type="text" placeholder="Ana">
          <p class="text-red-500 text-xs italic">Por favor, preencha este campo.</p>
        </div>
        <div class="w-full md:w-1/2 px-3">
          <label for="grid-lastname">
            Sobrenome
          </label>
          <input id="grid-lastname" type="text" placeholder="Clara">
        </div>
      </div>

      <div class="flex flex-wrap -mx-3 mb-6">
        <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label for="grid-cpf">
            CPF
          </label>
          <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-cpf" type="text" placeholder="999.999.999-99">
        </div>
        <div class="w-full md:w-1/2 px-3">
          <label for="grid-rg">
            RG
          </label>
          <input id="grid-rg" type="text" placeholder="99.999.999-9">
        </div>
      </div>

      <div class="flex flex-wrap -mx-3 mb-6">
        <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label for="grid-breed">
            Cor/Raça
          </label>
          <div class="relative">
            <select id="grid-breed">
              <option>Selecionar</option>
              <option>Branca</option>
              <option>Parda</option>
              <option>Preta</option>
              <option>Amarela</option>
              <option>Indígena</option>
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
          <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-street" type="text" placeholder="Rua Augusta">
        </div>
      </div>

      <div class="flex flex-wrap -mx-3 mb-10">
        <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label for="grid-city">
            Cidade
          </label>
          <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-city" type="text" placeholder="São Paulo">
        </div>
        <div class="w-full md:w-1/2 px-3">
          <label for="grid-state">
            Estado
          </label>
          <input id="grid-state" type="text" placeholder="São Paulo">
        </div>
      </div>
    </div>
    <hr>

    <div>
      <div class="flex flex-wrap -mx-3 mb-8">
        <div class="w-full px-3 mb-6 md:mb-0">
          <label for="grid-email">
            E-mail
          </label>
          <input id="grid-email" type="email" placeholder="ana.maria@email.com">
        </div>
      </div>
      <div class="flex flex-wrap -mx-3 mb-8">
        <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label for="grid-feeling">
            Sentimentos
          </label>
          <div class="relative">
            <select id="grid-feeling">
              <option>Selecionar</option>
              <option>Saudades</option>
              <option>Inconformismo</option>
              <option>Fé</option>
              <option>Esperança</option>
            </select>
            <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
            </div>
          </div>
        </div>
        <div class="w-full md:w-1/2 px-3">
          <label for="grid-status">
            A minha mensagem é:
          </label>
          <div class="relative">
            <select id="grid-status">
              <option>Selecionar</option>
              <option>Sigilosa</option>
              <option>Sigilosa - Somente a condolência será colocado na cápsula do tempo sem identificação de sua autoria</option>
              <option>Parcialmente pública - Será relevado o seu conteúdo e autoria daqui dez anos</option>
              <option>Pública - Constará no blog do projeto em memória das vítimas do COVID-19</option>
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
            Escrever minha condolência:
          </label>
          <textarea class="form-textarea mt-1 block w-full" rows="8" placeholder="..." id="grid-message"></textarea>
        </div>
      </div>
    </div>

    <div class="text-center">
      <Button to='/condolencia/test' value='Enviar' class="primary-color"></Button>
    </div>

  </form>
</template>

<script>
import Button from '@/components/Button.vue'

export default {
  name: 'condolenceRegister',
  components: {
    Button
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
