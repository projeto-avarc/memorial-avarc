<template>
  <form
    class="form bg-white p-6 my-10 relative"
    v-on:submit.prevent="submitForm"
  >
    <div
      class="icon bg-blue-600 text-white w-6 h-6 absolute flex items-center justify-center p-5"
      style="left:-40px"
    >
      <i class="far fa-heart fa-fw text-2xl"></i>
    </div>
    <h3 class="text-2xl text-gray-900 font-semibold">Prestar Condolência</h3>
    <p class="text-gray-600">Informações do falecido</p>
    <hr />
    <div class="flex space-x-5 mt-3">
      <div class="form-group p-2 w-1/3">
        <label for="name">Nome*</label>
        <input
          type="text"
          v-model="condolence.name"
          id="name"
          name="name"
          class="form-control  border "
          :class="{ 'border-red-700': submitted && $v.condolence.name.$error }"
        />
        <span
          v-if="submitted && !$v.condolence.name.required"
          class="invalid-feedback text-red-700"
        >
          Nome é obrigatório
        </span>
      </div>

      <div class="form-group p-2 w-1/3">
        <label for="name">Sobrenome*</label>
        <input
          type="text"
          v-model="condolence.lastName"
          id="name"
          name="name"
          class="form-control  border "
          :class="{
            'border-red-700': submitted && $v.condolence.lastName.$error,
          }"
        />
        <span
          v-if="submitted && !$v.condolence.lastName.required"
          class="invalid-feedback text-red-700"
        >
          Sobrenome é obrigatório
        </span>
      </div>
      <div class="form-group p-2 w-1/3">
        <label for="name">CPF ou RG</label>
        <input
          type="text"
          v-model="condolence.cpf"
          id="name"
          name="name"
          class="form-control  border "
          :class="{ 'border-red-700': submitted && $v.condolence.cpf.$error }"
        />
      </div>
    </div>

    <div class="flex space-x-5 mt-3">
      <div class="form-group p-2 w-1/3">
        <label for="name">Endereço</label>
        <input
          type="text"
          v-model="condolence.address_street"
          id="name"
          name="name"
          class="form-control  border "
          :class="{
            'border-red-700': submitted && $v.condolence.address_street.$error,
          }"
        />
      </div>

      <div class="form-group p-2 w-1/3">
        <label for="name">Cidade</label>
        <input
          type="text"
          v-model="condolence.address_city"
          id="name"
          name="name"
          class="form-control  border "
          :class="{
            'border-red-700': submitted && $v.condolence.address_city.$error,
          }"
        />
      </div>

      <div class="form-group p-2 w-1/3">
        <label for="name">Estado</label>
        <input
          type="text"
          v-model="condolence.address_state"
          id="name"
          name="name"
          class="form-control border"
          :class="{
            'border-red-700': submitted && $v.condolence.address_state.$error,
          }"
        />
      </div>
    </div>

    <div class="flex space-x-5 mt-3">
      <div class="form-group p-2 w-1/3">
        <div v-if="!condolence.picture">
          <label for="picture">Enviar foto</label>
          <input
            id="picture"
            type="file"
            @change="onFileChange"
            class="border"
          />
        </div>
        <div v-else>
          <img :src="condolence.picture" class="border" />
          <button @click="removeImage">Remover foto</button>
        </div>
      </div>
    </div>

    <!-- <textarea
      name=""
      id=""
      cols="10"
      rows="3"
      placeholder=""
      class="border p-2 mt-3 w-full"
    ></textarea> -->
    <!-- <div class="flex items-baseline space-x-2 mt-2">
      <input type="checkbox" name="" id="" class="inline-block" />
      <p class="text-gray-600 text-sm">
        Li e concordo com a política de privacidade
      </p>
    </div>-->
    <input
      type="submit"
      value="Enviar"
      class="w-full mt-6 bg-blue-600 hover:bg-blue-500 text-white font-semibold p-3"
    />
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
      condolence: {
        name: "",
        lastname: "",
        cpf: "",
        rg: "",
        address_street: "",
        address_city: "",
        address_state: "",
        feeling: "saudades",
        message: "",
        status: "publica",
        email: "",
        picture: "",
      },
      submitted: false,
    };
  },
  validations: {
    condolence: {
      name: { required },
      lastName: { required },
      cpf: {},
      rg: {},
      address_street: {},
      address_city: {},
      address_state: {},
      feeling: {},
      message: { required, minLength: minLength(150) },
      status: { required },
      email: { required, email },
      picture: {},
    },
  },
  components: {
    // Button,
  },
  methods: {
    submitForm() {
      this.submitted = true;
      this.$v.$touch();
      if (this.$v.$invalid) {
        return;
      }
      axios
        .post("http://localhost:1337/condolencias", this.condolence)
        .then(() => {
          this.$router.push("/condolencia/sucesso");
        });
    },

    onFileChange(e) {
      var files = e.target.files || e.dataTransfer.files;
      if (!files.length) return;
      this.createImage(files[0]);
    },
    createImage(file) {
      var image = new Image();
      var reader = new FileReader();
      var vm = this;

      reader.onload = (e) => {
        vm.condolence.picture = e.target.result;
      };
      reader.readAsDataURL(file);
    },
    removeImage: function(e) {
      this.condolence.picture = "";
    },
  },
};
</script>

<style lang="scss">
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
  input,
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
