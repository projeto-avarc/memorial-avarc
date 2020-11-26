<template>
  <div class="container px-2 mb-20">
    <Jumbotron>
      <h3 class="text-2xl text-gray-900 font-semibold">Condolências</h3>
      <hr />

      <div class="mb-4 mt-5 grid grid-cols-3 gap-4">
        <p
          v-if="!condolences_exist"
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
      condolences_exist: true,
      pessoa: null,
      showModal: false,
    };
  },
  mounted() {
    axios
      .get("http://avarcsp-001-site1.gtempurl.com/api/Mensagems/status?status=Aprovado")
      .then((response) => (this.condolences = response.data));
  },
  methods: {},
};
</script>

<style lang="scss">
</style>