<template>
  <div class="container px-2 mb-20">
    <Jumbotron>
      <h3 class="text-2xl text-gray-900 font-semibold">
        Depoimentos
      </h3>
      <hr />

      <div class="mb-4 mt-5 sm:grid sm:grid-cols-2 lg:grid-cols-3 sm:gap-4">
        <p v-if="depoimentos.length <= 0" class="text-xl text-gray-900">
          Nenhum registro encontrado
        </p>
        <div
          v-else
          v-for="depoimento in depoimentos"
          v-bind:key="depoimento.id"
        >
          <CardTribute :depoimento="depoimento"></CardTribute>
        </div>
      </div>
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
import axios from "axios";
import CardTribute from "@/components/CardTribute";
import Jumbotron from "@/components/Jumbotron";

// Import component
import Loading from "vue-loading-overlay";
// Import stylesheet
import "vue-loading-overlay/dist/vue-loading.css";

export default {
  props: {},
  name: "depoimentos",
  components: {
    CardTribute,
    Jumbotron,
    Loading,
  },
  data() {
    return {
      depoimentos: [],
      pessoa: null,
      showModal: false,
      isLoading: false,
      fullPage: true,
    };
  },
  mounted() {
    this.isLoading = true;
    axios
      .get("https://www.opememorial.net/api/Depoimentos/status?status=Aprovado")
      .then((response) => {
        this.depoimentos = response.data;
        this.isLoading = false;
      });
  },
  methods: {},
};
</script>

<style lang="scss"></style>
