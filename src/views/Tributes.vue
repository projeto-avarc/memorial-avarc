<template>
  <div class="container px-2 mb-20">
    <Jumbotron>
      <div class="search-wrapper flex items-baseline">
        <h3 class="text-2xl text-gray-900 font-semibold">
          Depoimentos <span class="text-sm text-gray-800 align-middle">(Área da saúde)</span>
        </h3>
        <div class="ml-auto">
          <input class="inline border rounded-sm px-2" type="text" v-model="search" placeholder="Buscar por nome.."/>
          <button class="inline p-3" @click="searchEvent()">
            <img class="w-4" src="../assets/images/icon-search.svg" alt="Ícone de busca">
          </button>
        </div>
      </div>
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
      search: ''
    };
  },
  mounted() {
    this.isLoading = true;
    axios
      .get("https://www.opememorial.net/api/Depoimentos/status?status=Aprovado")
      .then((response) => {
        this.depoimentos = response.data;
      })
      .catch(err => {
        return new Error(err.message)
      })
      .finally(() => {
        this.isLoading = false
      })
  },
  methods: {
    searchEvent() {
      // eslint-disable-next-line
      console.log(this.search)
      
      this.isLoading = true;
      axios
        .get("slfkjkdj")
        .then((response) => {
          this.depoimentos = response.data;
        })
        .catch(err => {
          this.depoimentos = []
          new Error(err.message)
        })
        .finally(() => {
          this.isLoading = false
        })
    }
  },
};
</script>

<style lang="scss"></style>
