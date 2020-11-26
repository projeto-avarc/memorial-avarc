<template>
  <div>
    <NavBar class="shadow-sm"></NavBar>
    <div class="container mx-auto max-w-screen-md">
      <div
        v-if="condolence"
        class="box"
      >

        <div class="flex items-center">
          <div
            class="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"
          >
            <img class="profile" src="../assets/images/person-male.png" />
            <!-- <img :src="condolence.honored.picture"/>  -->
          </div>
          <div class="px-2 py-5 text-center">
            <h4 class=" font-semibold text-right">
              {{
                condolence.honored.first_name +
                " " +
                condolence.honored.last_name
              }}
            </h4>
            <p
              class="text-white font-semibold text-right text-sm"
              v-if="condolence.honored.address_city || condolence.honored.address_state"
            >
              {{`
                ${(() => {
                  if (condolence.honored.address_city && condolence.honored.address_state) {
                    return condolence.honored.address_city + "/" + condolence.honored.address_state
                  } else if (condolence.honored.address_city) {
                    return condolence.honored.address_city
                  } else {
                    return condolence.honored.address_state
                  }
                })()}
              `}}
            </p>
          </div>
        </div>

        <div class="bg-blue-800 w-full flex flex-col items-center">
          <div class="py-10 flex flex-col items-center space-y-3">
            <span>{{ condolence.message }}</span>
          </div>
        </div>
        <div class="text-right py-10 ">
          <span
            >Por
            <strong>{{
              condolence.honoring.first_name +
              " " +
              condolence.honoring.last_name
            }}</strong></span
          >
          <span class="text-sm block">com saudade.</span>
        </div>

        <div class="flex justify-center">
          <qrcode-vue :value="value" :size="100" level="H"></qrcode-vue>
        </div>
          <p class="text-center mt-4 text-sm">{{value}}</p>
      </div>
      <div v-else class="box">
        <p class=" text-xl">Condolência não encontrada!</p>
      </div>
      <div class="text-left">
        <router-link
          to="/condolencias"
          class="underline inline-block text-sm font-semibold px-10 mb-10"
          >Voltar</router-link
        >
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import NavBar from "@/components/NavBar.vue"
import QrcodeVue from 'qrcode.vue'

export default {
  name: 'condolencia',
  components: {
    NavBar,
    QrcodeVue,
  },
  data () {
    return {
      condolence: null,
      value: window.location.href,
    }
  },
  mounted () {
    axios
      .get(`http://localhost:1337/condolences/${ this.$route.params.id }`)
      .then(response => (this.condolence = response.data))
  }
}
</script>

<style scoped lang="scss">
.profile {
  max-width: 160px;
}
.box {
  @apply my-12 bg-blue-800 flex flex-col rounded-xl shadow-2xl py-16 px-10 text-lg text-white;
}
</style>