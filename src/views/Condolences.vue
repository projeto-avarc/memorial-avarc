<template>
  <div class="container px-2 mb-20">
    <Jumbotron>
      <h3 class="text-2xl text-gray-900 font-semibold">Condolências</h3>
      <hr />

      <div class="mb-4 mt-5 flex flex-wrap justify-center">
        <h3
          v-if="condolences_count <= 0"
          class="text-2xl text-gray-900 font-semibold"
        >
          Listagem das condolências: <strong>Nenhum registro</strong>
        </h3>
        <div
          v-else
          v-for="condolence in condolences"
          v-bind:key="condolence.id"
          class="max-w-sm w-full lg:flex items-center mb-4 mr-3"
        >
          <CardCondolence :condolencia="condolence"></CardCondolence>
        </div>
      </div>
    </Jumbotron>
  </div>
</template>

<script>
import axios from "axios"
import CardCondolence from "@/components/CardCondolence"
import Jumbotron from '@/components/Jumbotron'

export default {
  props: {},
  name: "condolences",
  components: {
    CardCondolence,
    Jumbotron,
  },
  data() {
    return {
      condolences: [],
      condolences_count: 1,
      pessoa: null,
      showModal: false,
    };
  },
  mounted() {
    axios
      .get("http://localhost:1337/condolences")
      .then((response) => (this.condolences = response.data));
    axios
      .get("http://localhost:1337/condolences/count")
      .then((response) => (this.condolences_count = response.data));
  },
  methods: {},
};
</script>

<style lang="scss">
</style>