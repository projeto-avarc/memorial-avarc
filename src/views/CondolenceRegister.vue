<template>
  <form
    class="form bg-white p-6 my-10 relative"
    v-on:submit.prevent="submitForm"
  >
    <div
      class="icon bg-blue-600 text-white w-6 h-6 absolute flex items-center justify-center p-5"
      style="left:-40px"
    >
      <i
        class="far fa-fw text-2xl"
        :class="{ 'fa-heart': honored, 'fa-user': !honored }"
      ></i>
    </div>
    <h3 class="text-2xl text-gray-900 font-semibold">Prestar Condolência</h3>
    <p class="text-gray-600">
      Informações do {{ honored ? "falecido" : "homenageante" }}
    </p>
    <hr />

    <div v-show="honored">
      <div class="md:flex md:space-x-5 mt-3">
        <div class="p-2 w-full  md:w-1/3">
          <label for="name">Nome*</label>
          <input
            type="text"
            v-model="condolance.honored.first_name"
            id="name"
            name="name"
            class="form-control  border "
            :class="{
              'border-red-700':
                submitted && $v.condolance.honored.first_name.$error,
            }"
          />
          <span
            v-if="submitted && !$v.condolance.honored.first_name.required"
            class="invalid-feedback text-red-700"
          >
            Nome é obrigatório
          </span>
        </div>

        <div class="p-2 w-full  md:w-1/3">
          <label for="lastname">Sobrenome*</label>
          <input
            type="text"
            v-model="condolance.honored.last_name"
            id="lastname"
            name="lastname"
            class="form-control border"
            :class="{
              'border-red-700':
                submitted && $v.condolance.honored.last_name.$error,
            }"
          />
          <span
            v-if="submitted && !$v.condolance.honored.last_name.required"
            class="invalid-feedback text-red-700"
          >
            Sobrenome é obrigatório
          </span>
        </div>
        <div class="p-2 w-full  md:w-1/3">
          <label for="cpf"> RG ou CPF</label>
          <input
            type="text"
            v-model="condolance.honored.cpf"
            id="cpf"
            name="cpf"
            class="form-control  border "
            :class="{
              'border-red-700': submitted && $v.condolance.honored.cpf.$error,
            }"
            v-mask="'###.###.###.##'"
          />
        </div>
      </div>

      <div class="md:flex md:space-x-5 mt-3">
        <div class="p-2 w-full  md:w-1/3">
          <label for="adressstreet">Endereço</label>
          <input
            type="text"
            v-model="condolance.honored.address_street"
            id="adressstreet"
            name="adressstreet"
            class="form-control  border "
            :class="{
              'border-red-700':
                submitted && $v.condolance.honored.address_street.$error,
            }"
          />
        </div>

        <div class="p-2 w-full  md:w-1/3">
          <label for="adresscity">Cidade</label>
          <input
            type="text"
            v-model="condolance.honored.address_city"
            id="adresscity"
            name="adresscity"
            class="form-control border"
            :class="{
              'border-red-700':
                submitted && $v.condolance.honored.address_city.$error,
            }"
          />
        </div>

        <div class="p-2 w-full  md:w-1/3">
          <label for="adressstate">Estado</label>
          <input
            type="text"
            v-model="condolance.honored.address_state"
            id="adressstate"
            name="adressstate"
            class="form-control border"
            :class="{
              'border-red-700':
                submitted && $v.condolance.honored.address_state.$error,
            }"
          />
        </div>
      </div>

      <div class="flex space-x-5 mt-3">
        <div class="form-group p-2 w-full">
          <div v-if="!condolance.honored.picture">
            <label for="picture">Enviar foto</label>
            <input
              id="picture"
              type="file"
              @change="onFileChange"
              class="border text-sm"
            />
          </div>
          <div v-else>
            <img :src="condolance.honored.picture" class="border" />
            <button @click="removeImage">Remover foto</button>
          </div>
        </div>
      </div>
    </div>

    <div v-show="!honored">
      <div class="md:flex md:space-x-5 mt-3">
        <div class="p-2 w-full  md:w-1/3">
          <label for="name">Nome*</label>
          <input
            type="text"
            v-model="condolance.honoring.first_name"
            id="name"
            name="name"
            class="form-control  border "
            :class="{
              'border-red-700':
                submitted && $v.condolance.honoring.first_name.$error,
            }"
          />
          <span
            v-if="submitted && !$v.condolance.honoring.first_name.required"
            class="invalid-feedback text-red-700"
          >
            Nome é obrigatório
          </span>
        </div>

        <div class="p-2 w-full  md:w-1/3">
          <label for="name">Sobrenome*</label>
          <input
            type="text"
            v-model="condolance.honoring.last_name"
            id="name"
            name="name"
            class="form-control border"
            :class="{
              'border-red-700':
                submitted && $v.condolance.honoring.last_name.$error,
            }"
          />
          <span
            v-if="submitted && !$v.condolance.honoring.last_name.required"
            class="invalid-feedback text-red-700"
          >
            Sobrenome é obrigatório
          </span>
        </div>
        <div class="p-2 w-full md:w-1/3">
          <label for="name">RG ou CPF </label>
          <input
            type="text"
            v-model="condolance.honoring.cpf"
            id="name"
            name="name"
            class="form-control  border "
            v-mask="'###.###.###.##'"
            :class="{
              'border-red-700': submitted && $v.condolance.honoring.cpf.$error,
            }"
          />
          <span
            v-if="submitted && !$v.condolance.honoring.first_name.required"
            class="invalid-feedback text-red-700"
          >
            Documento é obrigatório
          </span>
        </div>
      </div>

      <div class="md:flex md:space-x-5 mt-3">
        <div class="p-2 w-full  md:w-1/3">
          <label for="name">e-mail*</label>
          <input
            type="text"
            v-model="condolance.honoring.email"
            id="name"
            name="name"
            class="form-control  border "
            :class="{
              'border-red-700':
                submitted && $v.condolance.honoring.email.$error,
            }"
          />
          <span
            class="text-red-700"
            v-if="submitted && !$v.condolance.honoring.email.required"
            >E-mail é obrigatório</span
          >
          <span
            class="text-red-700"
            v-if="submitted && !$v.condolance.honoring.email.email"
            >E-mail inválido</span
          >
        </div>

        <div class="p-2 w-full  md:w-1/3">
          <label for="grid-feeling">
            Sentimentos
          </label>
          <div class="relative form-control border">
            <select v-model="condolance.honoring.feeling" id="grid-feeling">
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

        <div class="p-2 w-full  md:w-1/3">
          <label for="name">A minha mensagem é </label>
          <div
            class="relative form-control border"
            :class="{
              'border-red-700':
                submitted && $v.condolance.status_message.$error,
            }"
          >
            <select v-model="condolance.status_message" id="grid-status">
              <option value="public">Pública</option>
              <option value="parcialmente_publica"
                >Parcialmente pública - Será relevado o seu conteúdo e autoria
                daqui dez anos</option
              >
              <option value="apenas_mensagem"
                >Sigilosa - Somente a condolência será colocado na cápsula do
                tempo sem identificação de sua autoria</option
              >
              <option value="sigilosa">Sigilosa</option>
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

      <div class="flex space-x-5 mt-3">
        <div class="form-group p-2 w-full">
          <label for="name">Condolência </label>
          <textarea
            name="message"
            id="message"
            cols="10"
            rows="3"
            placeholder=" Escrever minha condolência"
            v-model="condolance.message"
            class="border p-2 mt-3 w-full"
          ></textarea>
        </div>
      </div>
      <div class="flex items-baseline space-x-5 mt-2">
        <input
          type="checkbox"
          name=""
          id=""
          class="inline-block"
          v-model="condolance.privacy_policy"
        />
        <p class="text-gray-600 text-sm">
          Li e concordo com a política de privacidade.
        </p>
      </div>
    </div>

    <div class="flex space-x-5 mt-3">
      <input
        v-if="!honored"
        type="button"
        value="Voltar"
        class="w-1/3 mt-6 bg-white text-blue-600 font-semibold p-3 text-left"
        @click="changeForm"
      />
      <input
        v-if="honored"
        type="button"
        value="Avançar"
        class="w-full mt-6 bg-blue-600 hover:bg-blue-500 text-white font-semibold p-3"
        @click="changeForm"
      />

      <input
        v-if="!honored"
        type="submit"
        value="Enviar"
        class="w-2/3 mt-6 bg-blue-600 hover:bg-blue-500 text-white font-semibold p-3"
      />
    </div>
  </form>
</template>

<script>
// import Button from "@/components/Button.vue";
import axios from "axios";
import { required, email, minLength } from "vuelidate/lib/validators";

export default {
  name: "condolenceRegister",
  data() {
    return {
      condolance: {
        status_message: "public",
        message: "",
        privacy_policy: true,
        honored: {
          first_name: "",
          last_name: "",
          cpf: "",
          rg: "",
          address_street: "",
          address_city: "",
          address_state: "",
          picture: "",
        },
        honoring: {
          first_name: "",
          last_name: "",
          cpf: "",
          rg: "",
          email: "",
          feeling: "",
        },
      },
      submitted: false,
      honored: true,
    };
  },
  validations: {
    condolance: {
      status_message: { required },
      message: { required, minLength: minLength(150) },
      privacy_policy: { required },
      honored: {
        first_name: { required },
        last_name: { required },
        cpf: {},
        rg: {},
        address_street: {},
        address_city: {},
        address_state: {},
        picture: {},
      },
      honoring: {
        first_name: { required },
        last_name: { required },
        cpf: { required },
        rg: {},
        email: { required, email },
        feeling: {},
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
      axios
        .post("http://localhost:1337/condolencias", this.condolance)
        .then(() => {
          this.$router.push("/condolencia/sucesso");
        });
    },

    onFileChange(e) {
      const files = e.target.files || e.dataTransfer.files;
      if (!files.length) return;
      this.createImage(files[0]);
    },
    createImage(file) {
      const image = new Image();
      const reader = new FileReader();
      const vm = this;

      reader.onload = (e) => {
        vm.condolance.honored.picture = e.target.result;
      };
      reader.readAsDataURL(file);
    },
    removeImage: function() {
      this.condolance.honored.picture = "";
    },
    changeForm() {
      this.submitForm();
      this.honored = !this.honored;
    },
  },
};
</script>

<style lang="scss" scoped>
.icon::after {
  content: "";
  display: block;
  position: absolute;
  border-top: 23px solid transparent;
  border-bottom: 17px solid transparent;
  border-left: 12px solid #3182ce;
  left: 100%;
  top: 0;
}

.form {
  text-align: left;

  @apply mb-10 w-full;
  label {
    @apply block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2;
  }
  input[type="text"],
  input[type="file"],
  textarea {
    @apply appearance-none block w-full py-3 px-4 leading-tight;
    &:focus {
      @apply outline-none;
    }
  }
  select {
    @apply block appearance-none w-full py-3 px-4 pr-8 rounded leading-tight;
    &:focus {
      @apply outline-none;
    }
  }
  hr {
    @apply mb-5;
  }
}
</style>
