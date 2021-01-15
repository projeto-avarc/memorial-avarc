<template>
  <div class="container px-2 mb-20">
    <Jumbotron>
      <form class="form" v-on:submit.prevent="submitForm">
        <h3 class="text-2xl text-gray-900 font-semibold">
          Prestar Depoimento
        </h3>
        <p class="text-gray-600">
          Escreva o seu depoimento
        </p>
        <hr />

        <template>
          <div class="md:flex mt-3">
            <div class="p-2 w-full md:w-1/3">
              <label for="name">Nome*</label>
              <input
                type="text"
                v-model="depoimento.nome"
                id="name"
                name="name"
                :class="{
                  'border-red-700': warning && $v.depoimento.nome.$error,
                }"
              />
              <span
                v-if="warning && !$v.depoimento.nome.required"
                class="invalid-feedback text-red-700"
              >
                Nome é obrigatório
              </span>
            </div>

            <div class="p-2 w-full md:w-1/3">
              <label for="lastname">Sobrenome*</label>
              <input
                type="text"
                v-model="depoimento.sobreNome"
                id="lastname"
                name="lastname"
                :class="{
                  'border-red-700': warning && $v.depoimento.sobreNome.$error,
                }"
              />
              <span
                v-if="warning && !$v.depoimento.sobreNome.required"
                class="invalid-feedback text-red-700"
              >
                Sobrenome é obrigatório
              </span>
            </div>
            <div class="p-2 w-full md:w-1/3">
              <label for="cpf">CPF*</label>
              <input
                type="text"
                v-model="depoimento.cpf"
                id="cpf"
                name="cpf"
                v-mask="'###.###.###-##'"
                :class="{
                  'border-red-700': warning && $v.depoimento.cpf.$error,
                }"
              />
              <span
                v-if="warning && !$v.depoimento.cpf.required"
                class="invalid-feedback text-red-700"
              >
                CPF é obrigatório
              </span>

              <span
                v-if="warning && !$v.depoimento.cpf.valid"
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
                v-model="depoimento.rg"
                id="rg"
                name="rg"
              />
            </div>

            <div class="p-2 w-full md:w-1/3">
              <label for="email">e-mail*</label>
              <input
                type="text"
                v-model="depoimento.email"
                id="email"
                name="email"
                :class="{
                  'border-red-700': warning && $v.depoimento.email.$error,
                }"
              />
              <span
                class="text-red-700"
                v-if="warning && !$v.depoimento.email.required"
                >E-mail é obrigatório</span
              >
              <span
                class="text-red-700"
                v-if="warning && !$v.depoimento.email.email"
                >E-mail inválido</span
              >
            </div>
            <div class="p-2 w-full md:w-1/3">
              <label for="profissao">profissão*</label>
              <input
                type="text"
                v-model="depoimento.profissao"
                id="profissao"
                name="profissao"
                :class="{
                  'border-red-700': warning && $v.depoimento.profissao.$error,
                }"
              />
              <span
                class="text-red-700"
                v-if="warning && !$v.depoimento.profissao.required"
                >profissão é obrigatório</span
              >
            </div>
          </div>

          <div class="md:flex mt-3">
            <div class="p-2 w-full md:w-1/3">
              <label for="rua">Logradouro</label>
              <input type="text" v-model="depoimento.rua" id="rua" name="rua" />
            </div>

            <div class="p-2 w-full md:w-1/3">
              <label for="cidade">cidade</label>
              <input
                type="text"
                v-model="depoimento.cidade"
                id="cidade"
                name="cidade"
              />
            </div>

            <div class="p-2 w-full md:w-1/3 relative">
              <label for="grid-estado"> Estado </label>
              <input
                type="text"
                placeholder=""
                v-model="depoimento.estado"
                id="grid-estado"
                name="grid-estado"
              />
            </div>
          </div>

          <div class="md:flex mt-3">
            <div class="p-2 w-full md:w-2/3">
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
              <div v-if="depoimento.fotografia" class="text-right block">
                <button
                  @click="removeImage"
                  class="text-sm underline text-gray-900"
                >
                  Remover foto
                </button>
              </div>
            </div>
            <div class="p-2 w-full md:w-1/3 relative">
              <label for="grid-sentimento"> Sentimentos </label>
              <input
                type="text"
                placeholder="ex: Saudades, Inconformismo, Fé, Esperança"
                v-model="depoimento.sentimento"
                id="grid-sentimento"
                name="grid-sentimento"
              />
              <p
                class="text-sm text-gray-600 text-right mt-1 absolute right-0 mr-2"
                v-if="depoimento.sentimento"
              >
                com {{ depoimento.sentimento }}.
              </p>
            </div>
          </div>

          <div class="md:flex mt-3">
            <div class="form-group p-2 w-full">
              <label for="texto">Depoimento* </label>
              <textarea
                name="texto"
                id="texto"
                cols="10"
                rows="6"
                placeholder=" Escrever minha condolência"
                v-model="depoimento.texto"
                class="border p-2 mt-3 w-full"
                :class="{
                  'border-red-700': warning && $v.depoimento.texto.$error,
                }"
              ></textarea>
            </div>
          </div>

          <div class="flex space-x-3 mt-2 p-2 items-center">
            <input
              type="checkbox"
              class="inline-block cursor-pointer"
              v-model="depoimento.politicaPrivacidade"
              required
            />
            <p class="text-gray-600 text-sm cursor-default">
              Li e concordo com a
              <router-link
                to="/politica-de-privacidade"
                class="underline"
                target="_blank"
                >política de privacidade</router-link
              >.
            </p>
          </div>
        </template>

        <div class="mt-6 p-2">
          <div>
            <input
              type="submit"
              value="Enviar"
              class="bg-green-600 hover:bg-green-500 text-white font-semibold p-3 w-full cursor-pointer rounded-sm"
            />
          </div>
        </div>
      </form>
    </Jumbotron>
    <loading
      :active.sync="isLoading"
      :can-cancel="false"
      :is-full-page="fullPage"
    >
    </loading>
  </div>
</template>

<script>
// import Button from "@/components/Button.vue";
import axios from "axios";
import { required, email } from "vuelidate/lib/validators";
import Jumbotron from "@/components/Jumbotron";
import { validate } from "gerador-validador-cpf";

// Import component
import Loading from "vue-loading-overlay";
// Import stylesheet
import "vue-loading-overlay/dist/vue-loading.css";

const cpfValidator = (value) => {
  if (!value || value.length <= 0) {
    return true;
  }

  return validate(value);
};

export default {
  name: "condolenceRegister",
  components: {
    Jumbotron,
    Loading,
  },
  data() {
    return {
      depoimento: {
        nome: "",
        sobreNome: "",
        cpf: "",
        rg: "",
        rua: "",
        cidade: "",
        estado: "",
        profissao: "",
        email: "",
        sentimento: "",
        privacidade: "4",
        politicaPrivacidade: false,
        fotografia: "",
        texto: "",
        nomeCompleto: "",
      },
      fileExceededMaxSize: false,
      isLoading: false,
      fullPage: true,
      warning: false,
      vitima: true,
    };
  },
  validations: {
    depoimento: {
      privacidade: { required },
      texto: { required },
      politicaPrivacidade: { required },
      nome: { required },
      sobreNome: { required },
      cpf: { required, valid: cpfValidator },
      rg: {},
      rua: {},
      cidade: {},
      estado: {},
      profissao: { required },
      email: { required, email },
      sentimento: {},
      fotografia: {},
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
        .post("http://celestesantos-001-site2.etempurl.com/api/Depoimentos", this.depoimento)
        .then(() => {
          this.$router.push("/condolencia/sucesso");
        })
        .catch(() => {
          alert('Desculpe, houve algum erro! Não conseguimos prestar seu depoimento, tente novamente mais tarde :(')
        })
        .finally(() => {
          this.isLoading = false
        })
    },
    addProfileImage(e) {
      const files = e.target.files || e.dataTransfer.files;
      const file = files[0];

      const regex = /^([a-zA-Z0-9\s_\\.\-:])+(.jpg|.jpeg|.gif|.png)$/;

      if (!file) {
        return;
      }

      this.fileExceededMaxSize = file.size > 1000000;

      if (this.fileExceededMaxSize) {
        e.target.value = "";
        return;
      }

      const isValidImage = regex.test(file.name.toLowerCase());

      if (isValidImage) {
        this.createBase64Image(files[0]);
      }
    },
    createBase64Image(fileObject) {
      const reader = new FileReader();
      reader.onload = (e) => {
        this.depoimento.fotografia = e.target.result.split(",")[1];
      };
      reader.readAsDataURL(fileObject);
    },
    removeImage: function() {
      this.depoimento.fotografia = "";
      document.getElementById("vitima_imagem").value = "";
    },
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
