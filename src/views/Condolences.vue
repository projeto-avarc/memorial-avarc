<template>
  <div class="container mx-auto form bg-white p-6 my-10 relative">
    <div
      class="icon bg-blue-600 text-white w-6 h-6 absolute flex items-center justify-center p-5"
      style="left:-40px"
    >
      <i class="fas fa-list fa-fw text-2xl"></i>
    </div>

    <h3 class="text-2xl text-gray-900 font-semibold">
      Condolências
    </h3>
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
        <card-condolence :condolencia="condolence"></card-condolence>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import CardCondolence from "../components/card-condolence.vue";

export default {
  props: {},
  name: "condolences",
  components: {
    CardCondolence,
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
</style>
