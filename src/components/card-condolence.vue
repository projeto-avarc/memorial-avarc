<template>
  <div>

      <div class="max-w-sm w-full -mx-2 lg:max-w-full lg:flex border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r">
        <div
          class="sm:w-auto bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"
          style="background-image: url('../assets/images/person-male.png')"
          title="Woman holding a mug"
        >
          <img src="../assets/images/person-male.png" />
        </div>
        <div
          class="bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 pr-12 flex flex-col justify-between leading-normal"
        >
          <div class="mb-8">
            <div class="sm:text-center text-gray-900 font-bold text-xl mb-2">
              {{
                condolencia.honored.first_name +
                " " +
                condolencia.honored.last_name
              }}
            </div>
            <p class="sm:text-center text-gray-700 text-base">
              {{
                condolencia.honored.address_city +
                "/" +
                condolencia.honored.address_state
              }}
            </p>
          </div>

          <div class="mb-2 sm:text-center">
            <button @click="openModal(condolencia)">Ler depoimento</button>
          </div>
        </div>
      </div>

    <div v-if="showModal == true">
      <information-modal :person=pessoa></information-modal>
    </div>

  </div>
</template>

<script>
import InformationModal from '../components/information-modal.vue';

export default {
  name: "card-condolence",
  props: {
    condolencia: Object,
  },
  components: {
    InformationModal
  },
  methods: {
      openModal(value) {
      this.showModal = true;
      console.log(value); // someValue
      this.$emit('input', value);
      this.pessoa = value;
    },
  },
  data(){
    return {
      showModal: false
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
