<template>
  <!-- ModalContent' é para desktop, para mobile só tirar ele -->
  <div class="bg-30 modal">
    <div class="py-3 sm:max-w-xl sm:mx-auto">
      <div class="bg-blue-800 min-w-1xl flex flex-col rounded-xl shadow-lg">
        <div class="flex items-center p-10">
          <div
            class="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"
          >
            <img src="../assets/images/person-male.png" />
            <!-- <img :src="person.honored.picture"/>  -->
          </div>
          <div class="px-12 py-5 text-center">
            <h4 class="text-white font-semibold text-right">
              {{ person.honored.first_name + " " + person.honored.last_name }}
            </h4>
            <p class="text-white font-semibold text-right">
              {{
                person.honored.address_city + "/" + person.honored.address_state
              }}
            </p>
          </div>
        </div>

        <div class="bg-blue-800 w-full flex flex-col items-center">
          <div class="p-10 flex flex-col items-center py-6 space-y-3">
            <span class="text-lg text-white">{{ person.message }}</span>
          </div>
        </div>
        <div class="text-right p-10">
          <span class="text-lg text-white"
            >Por
            <strong>{{
              person.honoring.first_name + " " + person.honoring.last_name
            }}</strong></span
          >
          <br />
          <span class="text-white">com saudade.</span>
        </div>

        <div class="flex justify-center">
          <qrcode-vue :value="value" :size="size" level="H"></qrcode-vue>
        </div>
        
        <div class="h-20 flex items-center justify-center">
          <a href="#" class="text-white" @click="closeModal(false)">Fechar</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import QrcodeVue from 'qrcode.vue'

export default {
  name: "InformationModal",
  data() {
    return {
      value: 'http://localhost:8080/condolencias/1928374',
      size: 150,
    };
  },
  props: {
    person: Object,
  },
  components: {
    QrcodeVue,
  },
  methods: {
    closeModal(event) {
      this.$emit("clicked", event);
    },
  }
};
</script>

<style scoped lang="scss">
//essa clase é para o modal desktop
.ModalContent {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 600px;
  height: 300px;
  position: absolute;
  left: 50%;
  top: 50%;
  margin-left: -150px;
  margin-top: -150px;
}
.modal {
  position: fixed;
  z-index: 1;
  padding-top: 100px;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgb(0, 0, 0);
  background-color: rgba(0, 0, 0, 0.4);
}
</style>
