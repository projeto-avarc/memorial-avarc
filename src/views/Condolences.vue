<template>
  <div class="container mx-auto relative form bg-white p-6 my-10 relative">

    <div
      class="icon bg-blue-600 text-white w-6 h-6 absolute flex items-center justify-center p-5"
      style="left:-40px"
    >
          <i class="fas fa-list fa-fw text-2xl"></i>
    </div>
    <h3 v-if="condolences_count <= 0" class="text-2xl text-gray-900 font-semibold">
      Listagem das condolências: <strong>Nenhum registro</strong>
    </h3>
    <h3 v-else class="text-2xl text-gray-900 font-semibold">
      <strong>Condolências</strong>
    </h3>
    <hr />

    <div class="flex mb-4 mt-5 flex flex-wrap">

    <div
      v-for="condolence in condolences"
      v-bind:key="condolence.id"
      class="max-w-sm w-full lg:flex items-center mb-4 mr-3"
    >

    <card-condolence :condolencia=condolence></card-condolence>
      <!-- <div class="max-w-sm w-full lg:max-w-full lg:flex border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r">
        <div
          class="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"
          style="background-image: url('../assets/images/person-male.png')"
          title="Woman holding a mug"
        >
          <img src="../assets/images/person-male.png" />
        </div>
        <div
          class="bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 pr-12 flex flex-col justify-between leading-normal"
        >
          <div class="mb-8">
            <div class="text-gray-900 font-bold text-xl mb-2">
              {{
                condolence.honored.first_name +
                " " +
                condolence.honored.last_name
              }}
            </div>
            <p class="text-gray-700 text-base">
              {{
                condolence.honored.address_city +
                "/" +
                condolence.honored.address_state
              }}
            </p>
          </div>

          <div class="mb-2">
            <button @click="openModal(condolence)">Ler depoimento</button>
          </div>
        </div>
      </div> -->
    </div>

    </div>


    <!-- <div v-if="showModal == true">
      <information-modal :person=pessoa></information-modal>
    </div> -->
  </div>
</template>

<script>
// @ is an alias to /src
import axios from "axios";
//import InformationModal from "../components/information-modal.vue";
import CardCondolence from '../components/card-condolence.vue';
//import InformationModal from '../components/information-modal.vue';
// import Button from "@/components/Button.vue";

export default {
  props: {
  },
  name: "condolences",
  components: {
    //InformationModal,
    // Button,
    CardCondolence
  },
    data() {
    return {
      condolences: [
        {
          status_message: "public",
          message:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum rhoncus ligula vel risus aliquam, hendrerit pretium orci malesuada. Fusce molestie consectetur turpis, eget tincidunt odio hendrerit vel. Praesent porta lacus velit. Quisque finibus neque eget mattis lacinia. Donec commodo lobortis urna, id maximus urna blandit vel. Aliquam congue elementum neque, ut aliquet lorem tempor quis. Suspendisse tincidunt consequat leo, vel pharetra erat sodales eget. Etiam nulla nisl, malesuada id mauris gravida, ullamcorper pulvinar enim. Ut condimentum libero et porttitor pharetra. Proin iaculis iaculis augue, sed viverra leo elementum ac. Aliquam ac nisl posuere, ornare ex nec, egestas sapien. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nunc vel malesuada diam.",
          privacy_policy: true,
          honored: {
            first_name: "Jair",
            last_name: "Rodrigues",
            cpf: "999.999.999-99",
            rg: "99.999.999-9",
            address_street: "R. Augusta",
            address_city: "São Paulo",
            address_state: "São Paulo",
            picture: "../assets/images/person-male.png",
            birth_date: "1985-07-02",
          },
          honoring: {
            first_name: "João",
            last_name: "Silva",
            cpf: "999.999.999-99",
            rg: "99.999.999-9",
            email: "teste@teste.com",
            feeling: "sentimento_01",
          },
        },
        {
          status_message: "public",
          message:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum rhoncus ligula vel risus aliquam, hendrerit pretium orci malesuada. Fusce molestie consectetur turpis, eget tincidunt odio hendrerit vel. Praesent porta lacus velit. Quisque finibus neque eget mattis lacinia. Donec commodo lobortis urna, id maximus urna blandit vel. Aliquam congue elementum neque, ut aliquet lorem tempor quis. Suspendisse tincidunt consequat leo, vel pharetra erat sodales eget. Etiam nulla nisl, malesuada id mauris gravida, ullamcorper pulvinar enim. Ut condimentum libero et porttitor pharetra. Proin iaculis iaculis augue, sed viverra leo elementum ac. Aliquam ac nisl posuere, ornare ex nec, egestas sapien. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nunc vel malesuada diam.",
          privacy_policy: true,
          honored: {
            first_name: "Hebe",
            last_name: "Camargo",
            cpf: "999.999.999-99",
            rg: "99.999.999-9",
            address_street: "R. dos bobos",
            address_city: "São Paulo",
            address_state: "São Paulo",
            picture: "../assets/images/person-male.png",
            birth_date: "1950-11-25",
          },
          honoring: {
            first_name: "João",
            last_name: "Silva",
            cpf: "999.999.999-99",
            rg: "99.999.999-9",
            email: "teste@teste.com",
            feeling: "sentimento_01",
          },
        },
        {
          status_message: "public",
          message:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum rhoncus ligula vel risus aliquam, hendrerit pretium orci malesuada. Fusce molestie consectetur turpis, eget tincidunt odio hendrerit vel. Praesent porta lacus velit. Quisque finibus neque eget mattis lacinia. Donec commodo lobortis urna, id maximus urna blandit vel. Aliquam congue elementum neque, ut aliquet lorem tempor quis. Suspendisse tincidunt consequat leo, vel pharetra erat sodales eget. Etiam nulla nisl, malesuada id mauris gravida, ullamcorper pulvinar enim. Ut condimentum libero et porttitor pharetra. Proin iaculis iaculis augue, sed viverra leo elementum ac. Aliquam ac nisl posuere, ornare ex nec, egestas sapien. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nunc vel malesuada diam.",
          privacy_policy: true,
          honored: {
            first_name: "Stan",
            last_name: "Lee",
            cpf: "999.999.999-99",
            rg: "99.999.999-9",
            address_street: "R. dos bobos",
            address_city: "São Paulo",
            address_state: "São Paulo",
            picture: "../assets/images/stan-lee.jpg",
            birth_date: "1945-11-25",
          },
          honoring: {
            first_name: "João",
            last_name: "Silva",
            cpf: "999.999.999-99",
            rg: "99.999.999-9",
            email: "teste@teste.com",
            feeling: "sentimento_01",
          },
        },
      ],

      condolences_count: 1,
      pessoa: null,
      showModal: false
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
  methods: {

  }
};
</script>

<style lang="scss">
.profile-photo {
  border-radius: 0.5rem;
  background-image: url("../assets/images/person-male.png");
}
  .icon::after{
  content: '';
  display: block;
  position: absolute;
  border-top: 23px solid transparent;
  border-bottom: 17px solid transparent;
  border-left: 12px solid #3182ce;
  left: 100%;
  top: 0;
  }
</style>
