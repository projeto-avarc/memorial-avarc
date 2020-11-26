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
              <label for="name">Nome*</label>
              <input
                type="text"
                v-model="condolencia.vitima.nome"
                id="name"
                name="name"
                :class="{
                  'border-red-700':
                    submitted && $v.condolencia.vitima.nome.$error,
                }"
              />
              <span
                v-if="submitted && !$v.condolencia.vitima.nome.required"
                class="invalid-feedback text-red-700"
              >
                Nome é obrigatório
              </span>
            </div>

            <div class="p-2 w-full md:w-1/3">
              <label for="lastname">Sobrenome*</label>
              <input
                type="text"
                v-model="condolencia.vitima.sobrenome"
                id="lastname"
                name="lastname"
                :class="{
                  'border-red-700':
                    submitted && $v.condolencia.vitima.sobrenome.$error,
                }"
              />
              <span
                v-if="submitted && !$v.condolencia.vitima.sobrenome.required"
                class="invalid-feedback text-red-700"
              >
                Sobrenome é obrigatório
              </span>
            </div>
            <div class="p-2 w-full md:w-1/3">
              <label for="cpf">CPF</label>
              <input
                type="text"
                v-model="condolencia.vitima.cpf"
                id="cpf"
                name="cpf"
                v-mask="'###.###.###.##'"
              />
            </div>
          </div>

          <div class="md:flex mt-3">
            <div class="p-2 w-full md:w-1/3">
              <label for="cpf">RG</label>
              <input
                type="text"
                v-model="condolencia.vitima.cpf"
                id="cpf"
                name="cpf"
                v-mask="'###.###.###.##'"
              />
            </div>

            <div class="p-2 w-full md:w-1/3">
              <label for="adressstreet">Endereço</label>
              <input
                type="text"
                v-model="condolencia.vitima.endereco_rua"
                id="adressstreet"
                name="adressstreet"
                :class="{
                  'border-red-700':
                    submitted && $v.condolencia.vitima.endereco_rua.$error,
                }"
              />
            </div>

            <div class="p-2 w-full md:w-1/3">
              <label for="adresscity">Cidade</label>
              <input
                type="text"
                v-model="condolencia.vitima.endereco_cidade"
                id="adresscity"
                name="adresscity"
                :class="{
                  'border-red-700':
                    submitted && $v.condolencia.vitima.endereco_cidade.$error,
                }"
              />
            </div>
          </div>

          <div class="md:flex mt-3">
            <div class="p-2 w-full md:w-1/3">
              <label for="adressstate">Estado</label>
              <input
                type="text"
                v-model="condolencia.vitima.endereco_estado"
                id="adressstate"
                name="adressstate"
                :class="{
                  'border-red-700':
                    submitted && $v.condolencia.vitima.endereco_estado.$error,
                }"
              />
            </div>

            <div class="form-group p-2 w-full md:w-2/3">
              <div>
                <label for="imagem">Enviar foto</label>
                <input
                  id="imagem"
                  type="file"
                  @change="addProfileImage"
                  class="border text-sm"
                  accept="image/*"
                />
              </div>
              <div v-if="condolencia.vitima.imagem" class="text-right block">
                <button @click="removeImage" class="text-sm underline text-gray-900">Remover foto</button>
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
                    submitted && $v.condolencia.pessoa.nome.$error,
                }"
              />
              <span
                v-if="submitted && !$v.condolencia.pessoa.nome.required"
                class="invalid-feedback text-red-700"
              >
                Nome é obrigatório
              </span>
            </div>

            <div class="p-2 w-full md:w-1/3">
              <label for="name">Sobrenome*</label>
              <input
                type="text"
                v-model="condolencia.pessoa.sobrenome"
                id="name"
                name="name"
                :class="{
                  'border-red-700':
                    submitted && $v.condolencia.pessoa.sobrenome.$error,
                }"
              />
              <span
                v-if="submitted && !$v.condolencia.pessoa.sobrenome.required"
                class="invalid-feedback text-red-700"
              >
                Sobrenome é obrigatório
              </span>
            </div>
            <div class="p-2 w-full md:w-1/3">
              <label for="name">RG ou CPF </label>
              <input
                type="text"
                v-model="condolencia.pessoa.cpf"
                id="name"
                name="name"
                v-mask="'###.###.###.##'"
              />
            </div>
          </div>

          <div class="md:flex mt-3">
            <div class="p-2 w-full md:w-1/3">
              <label for="name">e-mail*</label>
              <input
                type="text"
                v-model="condolencia.pessoa.email"
                id="name"
                name="name"
                :class="{
                  'border-red-700':
                    submitted && $v.condolencia.pessoa.email.$error,
                }"
              />
              <span
                class="text-red-700"
                v-if="submitted && !$v.condolencia.pessoa.email.required"
                >E-mail é obrigatório</span
              >
              <span
                class="text-red-700"
                v-if="submitted && !$v.condolencia.pessoa.email.email"
                >E-mail inválido</span
              >
            </div>

            <div class="p-2 w-full md:w-1/3">
              <label for="grid-sentimento"> Sentimentos </label>
              <div class="relative border">
                <select
                  v-model="condolencia.pessoa.sentimento"
                  id="grid-sentimento"
                >
                  <option value="nao_informar" selected>
                    Não quero informar
                  </option>
                  <option value="saudades" selected>Saudades</option>
                  <option value="inconformismo">Inconformismo</option>
                  <option value="fe">Fé</option>
                  <option value="esperanca">Esperança</option>
                </select>
                <div
                  class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700"
                >
                  <svg
                    class="fill-current h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path
                      d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
                    />
                  </svg>
                </div>
              </div>
            </div>

            <div class="p-2 w-full md:w-1/3">
              <label for="name">A minha mensagem é </label>
              <div
                class="relative border"
                :class="{
                  'border-red-700': submitted && $v.condolencia.status.$error,
                }"
              >
                <select v-model="condolencia.status" id="grid-status">
                  <option value="public">Pública</option>
                  <option value="partially_public">
                    Parcialmente pública - Será relevado o seu conteúdo e
                    autoria daqui dez anos
                  </option>
                  <option value="only_message">
                    Sigilosa - Somente a condolência será colocado na cápsula do
                    tempo sem identificação de sua autoria
                  </option>
                  <option value="private">Sigilosa</option>
                </select>
                <div
                  class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700"
                >
                  <svg
                    class="fill-current h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path
                      d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          <div class="md:flex mt-3">
            <div class="form-group p-2 w-full">
              <label for="name">Condolência* </label>
              <textarea
                name="texto"
                id="texto"
                cols="10"
                rows="3"
                placeholder=" Escrever minha condolência"
                v-model="condolencia.texto"
                class="border p-2 mt-3 w-full"
                :class="{
                  'border-red-700': submitted && $v.condolencia.texto.$error,
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
            <p class="text-gray-600 text-sm">
              Li e concordo com a política de privacidade.
            </p>
          </div>
        </div>

        <div class="mt-6 p-2" v-if="vitima">
          <input
            type="button"
            value="Avançar"
            class="bg-blue-600 hover:bg-blue-500 text-white font-semibold p-3 w-full cursor-pointer"
            @click="changeForm"
          />
        </div>

        <div class="mt-6 p-2" v-if="!vitima">
          <div>
            <input
              type="submit"
              value="Enviar"
              class="bg-green-600 hover:bg-green-500 text-white font-semibold p-3 w-full cursor-pointer"
            />
          </div>
          <div>
            <input
              type="button"
              value="Voltar"
              class="bg-transparent underline cursor-pointer inline-block text-gray-700 text-sm font-bold mt-6"
              @click="changeForm"
            />
          </div>
        </div>
      </form>
    </Jumbotron>
  </div>
</template>

<script>
// import Button from "@/components/Button.vue";
import axios from "axios"
import { required, email, /*minLength*/ } from "vuelidate/lib/validators"
import Jumbotron from '@/components/Jumbotron'

export default {
  name: "condolenceRegister",
  components: {
    Jumbotron,
  },
  data() {
    return {
      condolencia: {
        status: "public",
        texto: "",
        politica_privacidade: true,
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
      submitted: false,
      vitima: true,
    };
  },
  validations: {
    condolencia: {
      status: { required },
      texto: { required },
      politica_privacidade: { required },
      vitima: {
        nome: { required },
        sobrenome: { required },
        cpf: {},
        rg: {},
        endereco_rua: {},
        endereco_cidade: {},
        endereco_estado: {},
        imagem: {},
      },
      pessoa: {
        nome: { required },
        sobrenome: { required },
        cpf: {},
        rg: {},
        email: { required, email },
        sentimento: {},
      },
    },
  },
  methods: {
    submitForm() {
      this.submitted = true;
      this.$v.$touch();
      if (this.$v.$invalid) {
        return;
      }
      // axios
      //   .post("http://localhost:1337/condolences", this.condolencia)
      //   .then(() => {
      //     this.$router.push("/condolencia/sucesso");
      //   });
      console.log(this.condolencia)
    },
    addProfileImage(e) {
      const files = e.target.files || e.dataTransfer.files;
      const regex = /^([a-zA-Z0-9\s_\\.\-:])+(.jpg|.jpeg|.gif|.png)$/;
      if (!files.length) return;
      else if (regex.test(files[0].name.toLowerCase())) {
        this.createBase64Image(files[0]);
      } else {

      }
    },
    createBase64Image(fileObject) {
      const reader = new FileReader();
      reader.onload = (e) => {
        this.condolencia.vitima.imagem = e.target.result;
      };
      reader.readAsDataURL(fileObject);
    },
    removeImage: function() {
      this.condolencia.vitima.imagem = ""
    },
    changeForm() {
      this.submitForm();
      this.vitima = !this.vitima;
    },
    // passForm() {
    //   // eslint-disable-next-line
    //   console.log(this.$v)

    //   // this.$v.$touch();
    //   // if (this.$v.$invalid) {
    //   //   this.submitted = true;
    //   //   return;
    //   // }
    //   // // eslint-disable-next-line
    //   // console.log('pode ir')
    // }
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
  input:not([type='checkbox']):not([type='button']):not([type='submit']),
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