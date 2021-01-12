<template>
  <div class="container px-2 mb-20">
    <Jumbotron>
      <form class="form" v-on:submit.prevent="submitForm">
        <h3 class="text-2xl text-gray-900 font-semibold">
          Prestar Condolência
        </h3>
        <p class="text-gray-600">
          Informações do {{ vitima ? "falecido" : "homenageante" }}
        </p>
        <hr />

        <div v-show="vitima">
          <div class="md:flex mt-3">
            <div class="p-2 w-full md:w-1/3">
              <label for="vitima_name">Nome*</label>
              <input
                type="text"
                v-model="condolencia.vitima.nome"
                id="vitima_name"
                name="name"
                :class="{
                  'border-red-700':
                    warning && $v.condolencia.vitima.nome.$error,
                }"
              />
              <span
                v-if="warning && !$v.condolencia.vitima.nome.required"
                class="invalid-feedback text-red-700"
              >
                Nome é obrigatório
              </span>
            </div>

            <div class="p-2 w-full md:w-1/3">
              <label for="vitima_lastname">Sobrenome*</label>
              <input
                type="text"
                v-model="condolencia.vitima.sobrenome"
                id="vitima_lastname"
                name="vitima_lastname"
                :class="{
                  'border-red-700':
                    warning && $v.condolencia.vitima.sobrenome.$error,
                }"
              />
              <span
                v-if="warning && !$v.condolencia.vitima.sobrenome.required"
                class="invalid-feedback text-red-700"
              >
                Sobrenome é obrigatório
              </span>
            </div>
            <div class="p-2 w-full md:w-1/3">
              <label for="vitima_cpf">CPF</label>
              <input
                type="text"
                v-model="condolencia.vitima.cpf"
                id="vitima_cpf"
                name="vitima_cpf"
                v-mask="'###.###.###-##'"
                :class="{
                  'border-red-700':
                    warning && $v.condolencia.vitima.cpf.$error,
                }"
              />

              <span
                v-if="warning && !$v.condolencia.vitima.cpf.valid"
                class="invalid-feedback text-red-700"
              >
                CPF inválido
              </span>
            </div>
          </div>

          <div class="md:flex mt-3">
            <div class="p-2 w-full md:w-1/3">
              <label for="vitima_rg">RG</label>
              <input
                type="text"
                v-model="condolencia.vitima.rg"
                id="vitima_rg"
                name="vitima_rg"
              />
            </div>

            <div class="p-2 w-full md:w-1/3">
              <label for="vitima_adressstreet">Endereço</label>
              <input
                type="text"
                v-model="condolencia.vitima.endereco_rua"
                id="vitima_adressstreet"
                name="vitima_adressstreet"
                :class="{
                  'border-red-700':
                    warning && $v.condolencia.vitima.endereco_rua.$error,
                }"
              />
            </div>

            <div class="p-2 w-full md:w-1/3">
              <label for="vitima_adresscity">Cidade</label>
              <input
                type="text"
                v-model="condolencia.vitima.endereco_cidade"
                id="vitima_adresscity"
                name="vitima_adresscity"
                :class="{
                  'border-red-700':
                    warning && $v.condolencia.vitima.endereco_cidade.$error,
                }"
              />
            </div>
          </div>

          <div class="md:flex mt-3">
            <div class="p-2 w-full md:w-1/3">
              <label for="vitima_adressstate">Estado</label>
              <input
                type="text"
                v-model="condolencia.vitima.endereco_estado"
                id="vitima_adressstate"
                name="vitima_adressstate"
                :class="{
                  'border-red-700':
                    warning && $v.condolencia.vitima.endereco_estado.$error,
                }"
              />
            </div>

            <div class="form-group p-2 w-full md:w-2/3">
              <div>
                <label for="vitima_imagem">Enviar foto</label>
                <input
                  id="vitima_imagem"
                  name="vitima_imagem"
                  type="file"
                  @change="addProfileImage"
                  class="border text-sm"
                  accept="image/*"
                />
                <span
                  v-if="fileExceededMaxSize"
                  class="invalid-feedback text-red-700"
                >
                  O arquivo deve ter no máximo 1MB
                </span>
              </div>
              <div v-if="condolencia.vitima.imagem" class="text-right block">
                <button
                  @click="removeImage"
                  class="text-sm underline text-gray-900"
                >
                  Remover foto
                </button>
              </div>
            </div>
          </div>
        </div>

        <div v-show="!vitima">
          <div class="md:flex mt-3">
            <div class="p-2 w-full md:w-1/3">
              <label for="name">Nome*</label>
              <input
                type="text"
                v-model="condolencia.pessoa.nome"
                id="name"
                name="name"
                :class="{
                  'border-red-700':
                    warning && $v.condolencia.pessoa.nome.$error,
                }"
              />
              <span
                v-if="warning && !$v.condolencia.pessoa.nome.required"
                class="invalid-feedback text-red-700"
              >
                Nome é obrigatório
              </span>
            </div>

            <div class="p-2 w-full md:w-1/3">
              <label for="lastname">Sobrenome*</label>
              <input
                type="text"
                v-model="condolencia.pessoa.sobrenome"
                id="lastname"
                name="lastname"
                :class="{
                  'border-red-700':
                    warning && $v.condolencia.pessoa.sobrenome.$error,
                }"
              />
              <span
                v-if="warning && !$v.condolencia.pessoa.sobrenome.required"
                class="invalid-feedback text-red-700"
              >
                Sobrenome é obrigatório
              </span>
            </div>
            <div class="p-2 w-full md:w-1/3">
              <label for="cpf">CPF*</label>
              <input
                type="text"
                v-model="condolencia.pessoa.cpf"
                id="cpf"
                name="cpf"
                v-mask="'###.###.###-##'"
                :class="{
                  'border-red-700':
                    warning && $v.condolencia.pessoa.cpf.$error,
                }"
              />
              <span
                v-if="warning && !$v.condolencia.pessoa.cpf.required"
                class="invalid-feedback text-red-700"
              >
                CPF é obrigatório
              </span>

              <span
                v-if="warning && !$v.condolencia.pessoa.cpf.valid"
                class="invalid-feedback text-red-700"
              >
                CPF inválido
              </span>
            </div>
          </div>

          <div class="md:flex mt-3">
            <div class="p-2 w-full md:w-1/3">
              <label for="rg">RG</label>
              <input
                type="text"
                v-model="condolencia.pessoa.rg"
                id="rg"
                name="rg"
              />
            </div>

            <div class="p-2 w-full md:w-1/3">
              <label for="email">e-mail*</label>
              <input
                type="text"
                v-model="condolencia.pessoa.email"
                id="email"
                name="email"
                :class="{
                  'border-red-700':
                    warning && $v.condolencia.pessoa.email.$error,
                }"
              />
              <span
                class="text-red-700"
                v-if="warning && !$v.condolencia.pessoa.email.required"
                >E-mail é obrigatório</span
              >
              <span
                class="text-red-700"
                v-if="warning && !$v.condolencia.pessoa.email.email"
                >E-mail inválido</span
              >
            </div>

            <div class="p-2 w-full md:w-1/3 relative">
              <label for="grid-sentimento"> Sentimentos </label>
              <input
                type="text"
                placeholder="ex: Saudades, Inconformismo, Fé, Esperança"
                v-model="condolencia.pessoa.sentimento"
                id="grid-sentimento"
                name="grid-sentimento"
                :class="{
                  'border-red-700':
                    warning && $v.condolencia.pessoa.sentimento.$error,
                }"
              />
              <p class="text-sm text-gray-600 text-right mt-1 absolute right-0 mr-2" v-if="condolencia.pessoa.sentimento">com {{condolencia.pessoa.sentimento}}.</p>
            </div>
          </div>

          <div class="md:flex mt-3">
            <div class="form-group p-2 w-full">
              <label for="texto">Condolência* </label>
              <textarea
                name="texto"
                id="texto"
                cols="10"
                rows="6"
                placeholder=" Escrever minha condolência"
                v-model="condolencia.texto"
                class="border p-2 mt-3 w-full"
                :class="{
                  'border-red-700': warning && $v.condolencia.texto.$error,
                }"
              ></textarea>
            </div>
          </div>
          <div class="flex space-x-3 mt-2 p-2 items-center">
            <input
              type="checkbox"
              class="inline-block cursor-pointer"
              v-model="condolencia.politica_privacidade"
              required
            />
            <p class="text-gray-600 text-sm cursor-default">
              Li e concordo com a <router-link to="/politica-de-privacidade" class="underline" target="_blank">política de privacidade</router-link>.
            </p>
          </div>
        </div>

        <div class="mt-6 p-2" v-if="vitima">
          <input
            type="button"
            value="Avançar"
            class="bg-blue-600 hover:bg-blue-500 text-white font-semibold p-3 w-full cursor-pointer rounded-sm"
            @click="goAhead"
          />
        </div>

        <div class="mt-6 p-2" v-if="!vitima">
          <div>
            <input
              type="submit"
              value="Enviar"
              class="bg-green-600 hover:bg-green-500 text-white font-semibold p-3 w-full cursor-pointer rounded-sm"
            />
          </div>
          <div>
            <input
              type="button"
              value="Voltar"
              class="bg-transparent underline cursor-pointer inline-block text-gray-700 text-sm font-bold mt-4"
              @click="goBack"
            />
          </div>
        </div>
      </form>
    </Jumbotron>
    <loading
      :active.sync="isLoading"
      :can-cancel="false"
      :is-full-page="fullPage">
    </loading>
  </div>
</template>

<script>
// import Button from "@/components/Button.vue";
import axios from "axios"
import { required, email } from "vuelidate/lib/validators"
import Jumbotron from '@/components/Jumbotron'
import { validate } from 'gerador-validador-cpf'

// Import component
import Loading from 'vue-loading-overlay';
// Import stylesheet
import 'vue-loading-overlay/dist/vue-loading.css';


const cpfValidator = value => {
  if (!value || value.length <= 0) {
    return true
  }

  return validate(value)
}

export default {
  name: "condolenceRegister",
  components: {
    Jumbotron,
    Loading
  },
  data() {
    return {
      condolencia: {
        privacidade: 4,
        texto: "",
        politica_privacidade: false,
        vitima: {
          nome: "",
          sobrenome: "",
          cpf: "",
          rg: "",
          endereco_rua: "",
          endereco_cidade: "",
          endereco_estado: "",
          imagem: "",
        },
        pessoa: {
          nome: "",
          sobrenome: "",
          cpf: "",
          rg: "",
          email: "",
          sentimento: "",
        },
      },
      fileExceededMaxSize: false,
      isLoading: false,
      fullPage: true,
      warning: false,
      vitima: true,
    };
  },
  validations: {
    condolencia: {
      privacidade: { required },
      texto: { required },
      politica_privacidade: { required },
      vitima: {
        nome: { required },
        sobrenome: { required },
        cpf: { valid: cpfValidator},
        rg: {},
        endereco_rua: {},
        endereco_cidade: {},
        endereco_estado: {},
        imagem: {},
      },
      pessoa: {
        nome: { required },
        sobrenome: { required },
        cpf: { required, valid: cpfValidator },
        rg: {},
        email: { required, email },
        sentimento: {},
      },
    },
  },
  methods: {
    submitForm() {
      this.warning = true;
      this.$v.$touch();

      if (this.$v.$invalid || this.fileExceededMaxSize) {
        return;
      }

      this.isLoading = true;

      axios
        .post("https://www.opememorial.net/api/Mensagems", this.condolencia)
        .then(() => {
          this.$router.push("/condolencia/sucesso")
        })
        .catch(() => {
          alert('Desculpe, houve algum erro! Não conseguimos prestar sua condolência, tente novamente mais tarde :(')
        })
        .finally(() => {
          this.isLoading = false
        })
    },
    addProfileImage(e) {
      const files = e.target.files || e.dataTransfer.files;
      const file = files[0]

      const regex = /^([a-zA-Z0-9\s_\\.\-:])+(.jpg|.jpeg|.gif|.png)$/;

      if (!file) {
        return
      }

      this.fileExceededMaxSize = file.size > 1000000

      if (this.fileExceededMaxSize) {
        e.target.value = ''
        return
      }

      const isValidImage = regex.test(file.name.toLowerCase())

      if (isValidImage){
        this.createBase64Image(files[0]);
      }
    },
    createBase64Image(fileObject) {
      const reader = new FileReader();
      reader.onload = (e) => {
        this.condolencia.vitima.imagem = e.target.result.split(',')[1];
      };
      reader.readAsDataURL(fileObject);
    },
    removeImage: function() {
      this.condolencia.vitima.imagem = ""
      document.getElementById('vitima_imagem').value = ''
    },
    goAhead() {
      this.$v.$touch();
      if (this.$v.condolencia.vitima.$invalid) {
        this.warning = true;
        return;
      }
      this.warning = false;
      this.vitima = !this.vitima;
    },
    goBack() {
      this.vitima = !this.vitima;
    }
  },
};
</script>

<style lang="scss" scoped>
.form {
  text-align: left;
  @apply mb-4 w-full;
  label {
    @apply block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2;
  }
  input:not([type="checkbox"]):not([type="button"]):not([type="submit"]),
  textarea {
    @apply border appearance-none block w-full py-3 px-4 leading-tight;
    min-height: 45px;
  }
  select {
    @apply block appearance-none w-full py-3 px-4 pr-8 rounded leading-tight;
  }
  hr {
    @apply mb-5;
  }
}
</style>
