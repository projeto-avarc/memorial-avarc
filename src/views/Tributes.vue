<template>
  <div class="container px-2 mb-20">
    <Jumbotron>
      <h3 class="text-2xl text-gray-900 font-semibold">
        Depoimentos
        <span class="text-sm text-gray-800 align-middle">(Área da saúde)</span>
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
      <div class="flex flex-col items-center space-y-3">
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
      page: 1,
    };
  },
  mounted() {
    this.getDepoimentos(6, 1);
  },
  methods: {
    clickCallback: function(pageNum) {
      this.getDepoimentos(6, pageNum);
    },

    getDepoimentos: function(qtd, pagina) {
      this.isLoading = true;
      axios
        .get(
          `https://www.memorialavarc.com.br/api/Depoimentos/status?status=Aprovado&qtd_registros=${qtd}&pagina=${pagina}`
        )
        .then((response) => {
          this.depoimentos = response.data;
          this.isLoading = false;
        });
    },
  },
};
</script>

<style lang="scss"></style>
