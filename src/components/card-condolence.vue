<template>
  <div>
    <InformationModal
      v-if="showModal === true"
      :person="pessoa"
      @clicked="onClickChild"
    >
    </InformationModal>

    <div class="flex justify-center bg-white rounded-lg p-6 border">
      <img
        class="h-16 w-16 md:h-24 md:w-24 rounded-full mx-auto md:mx-0 md:mr-6"
        src="../assets/images/person-male.png"
      />

      <div class="text-center md:text-left">
        <h2 class="text-lg font-bold">
          {{
            condolencia.honored.first_name + " " + condolencia.honored.last_name
          }}
        </h2>

        <div class="text-blue-500">
          {{
            condolencia.honored.address_city +
              "/" +
              condolencia.honored.address_state
          }}
        </div>

        <!-- <div class="text-gray-600">erinlindford@example.com</div> -->

        <div
          class="text-blue-500 text-right text-sm mt-2"
          @click="openModal(condolencia)"
        >
          ler depoimento
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import InformationModal from "./information-modal";

export default {
  name: "card-condolence",
  props: {
    condolencia: Object,
  },
  components: {
    InformationModal,
  },
  data() {
    return {
      showModal: false,
    };
  },
  methods: {
    openModal(value) {
      this.showModal = !this.showModal;
      this.$emit("input", value);
      this.pessoa = value;
    },

    onClickChild(value) {
      this.showModal = value;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
