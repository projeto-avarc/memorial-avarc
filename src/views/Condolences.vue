<template>
  <div class="container px-2 mb-20">
    <Jumbotron>
      <div class="search-wrapper flex items-baseline">
        <h3 class="text-2xl text-gray-900 font-semibold">Condolências</h3>
        <div class="ml-auto">
          <input class="inline border rounded-sm px-2" type="text" v-model="search" placeholder="Buscar por nome.."/>
          <button class="inline p-3">
            <img class="w-4" src="../assets/images/icon-search.svg" alt="Ícone de busca">
          </button>
        </div>
      </div>
      <hr />

      <div class="mb-4 mt-5 sm:grid sm:grid-cols-2 lg:grid-cols-3 sm:gap-4">
        <p
          v-if="condolences.length <= 0"
          class="text-xl text-gray-900"
        >
          Nenhum registro encontrado
        </p>
        <div
          v-else
          v-for="condolence in condolences"
          v-bind:key="condolence.id"
        >
          <CardCondolence :condolencia="condolence"></CardCondolence>
        </div>
      </div>
    </Jumbotron>
    <loading
      :active.sync="isLoading"
      :can-cancel="false"
      :is-full-page="fullPage">
    </loading>
  </div>
</template>

<script>
import axios from "axios"
import CardCondolence from "@/components/CardCondolence"
import Jumbotron from '@/components/Jumbotron'

// Import component
import Loading from 'vue-loading-overlay';
// Import stylesheet
import 'vue-loading-overlay/dist/vue-loading.css';

export default {
  props: {},
  name: "condolences",
  components: {
    CardCondolence,
    Jumbotron,
    Loading
  },
  data() {
    return {
      condolences: [],
      pessoa: null,
      showModal: false,
      isLoading: false,
      fullPage: true,
    };
  },
  mounted() {
    this.isLoading = true;
    axios
      .get("https://www.opememorial.net/api/Mensagems/status?status=Aprovado")
      .then((response) => {
        this.condolences = response.data;
        this.isLoading = false;
      });
  },
  methods: {},
};
</script>

<style lang="scss">
</style>
