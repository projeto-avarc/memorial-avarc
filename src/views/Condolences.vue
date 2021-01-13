<template>
  <div class="container px-2 mb-20">
    <Jumbotron>
      <div class="search-wrapper flex items-baseline">
        <h3 class="text-2xl text-gray-900 font-semibold">Condolências</h3>
        <div class="ml-auto">
          <input class="inline border rounded-sm px-2" type="text" v-model="search" placeholder="Buscar por nome.."/>
          <button class="inline p-3" @click="searchEvent()">
            <img class="w-4" src="../assets/images/icon-search.svg" alt="Ícone de busca">
          </button>
        </div>
      </div>
      <hr />

      <div class="mb-4 mt-5 sm:grid sm:grid-cols-2 lg:grid-cols-3 sm:gap-4">
        <p v-if="condolences.length <= 0" class="text-xl text-gray-900">
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
      <div v-if="condolences.length > 0" class="flex flex-col items-center space-y-3">
        <paginate
          v-model="page"
          :page-count="10"
          :page-range="3"
          :margin-pages="2"
          :click-handler="clickCallback"
          :prev-text="'Voltar'"
          :next-text="'Proxima'"
          :container-class="'pagination'"
          :page-class="'page-item'"
        >
        </paginate>
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
import CardCondolence from "@/components/CardCondolence";
import Jumbotron from "@/components/Jumbotron";

// Import component
import Loading from "vue-loading-overlay";
// Import stylesheet
import "vue-loading-overlay/dist/vue-loading.css";

export default {
  props: {},
  name: "condolences",
  components: {
    CardCondolence,
    Jumbotron,
    Loading,
  },
  data() {
    return {
      condolences: [],
      pessoa: null,
      showModal: false,
      isLoading: false,
      fullPage: true,
      search: '',
      page: 1,
      itemsPage: 6,
    };
  },
  mounted() {
    this.isLoading = true
    this.getCondolencias(1)
  },
  methods: {
    searchEvent() {
      // eslint-disable-next-line
      console.log(this.search)
      
      this.isLoading = true;
      axios
        .get("slfkjkdj")
        .then((response) => {
          this.condolences = response.data;
        })
        .catch(err => {
          this.condolences = []
          new Error(err.message)
        })
        .finally(() => {
          this.isLoading = false
        })
    },

    clickCallback: function(pageNum) {
      this.getCondolencias(pageNum);
    },

    getCondolencias: function(currentPage) {
      this.isLoading = true;
      axios
        .get(`https://www.memorialavarc.com.br/api/Mensagems/status?status=Aprovado&qtd_registros=${this.itemsPage}&pagina=${currentPage}`)
        .then((response) => {
          this.condolences = response.data
        })
        .catch(err => {
          return new Error(err.message)
        })
        .finally(() => {
          this.isLoading = false
        })
    },
  },
};
</script>
