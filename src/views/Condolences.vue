<template>
  <div>
    <h1 v-if="condolences_count <= 0">
      Listagem das condolências: <strong>Nenhum registro</strong>
    </h1>
    <h1 v-else>
      Listagem das condolências: <strong>{{ condolences_count }}</strong>
    </h1>
    <div class="text-text">
      <router-link
        to="/"
        class="mt-4 ml-4 underline inline-block text-xs font-semibold"
        >Voltar Home</router-link
      >
    </div>

    <div
      v-for="condolence in condolences"
      v-bind:key="condolence.id"
      class="mt-4 px-4 py-4 text-left border-solid border border-gray-300 rounded-lg"
    >
      <div>
        <p class="inline" v-if="condolence.name">
          <strong>Nome:</strong> {{ condolence.name }}
        </p>
        <p class="inline" v-if="condolence.lastname">
          {{ condolence.lastname }}
        </p>
      </div>
      <p><strong>CPF:</strong> {{ condolence.cpf }}</p>
      <router-link
        :to="`/condolencia/${condolence.id}`"
        class="mt-2 inline-block text-sm"
      >
        <Button value="Ler" class="primary-color"></Button>
      </router-link>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import axios from "axios";
import Button from "@/components/Button.vue";

export default {
  name: "condolences",
  components: {
    Button,
  },
  data() {
    return {
      condolences: [],
      condolences_count: 0,
    };
  },
  mounted() {
    axios
      .get("http://localhost:1337/condolencias")
      .then((response) => (this.condolences = response.data));

    axios
      .get("http://localhost:1337/condolencias/count")
      .then((response) => (this.condolences_count = response.data));
  },
};
</script>
