<template>
  <div>
    <NavBar class="shadow-sm"></NavBar>
    <div class="container mx-auto max-w-screen-md">
        <!-- v-if="condolencia" -->
      <div
        class="box"
      >

        <div class="flex items-center">
          <div
            class="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"
          >
            <span 
              v-if="condolencia.vitima.imagem"
              class="rounded-full mx-auto md:mx-0 md:mr-6 picture"
              :style="{'background-image': `url(data:image/jpeg;base64,${condolencia.vitima.imagem})`}">
            </span>
            <span 
              v-else
              class="rounded-full mx-auto md:mx-0 md:mr-6 picture">
            </span>
          </div>
          <div class="px-2 py-5 text-center md:ml-12">
            <h4 class="text-xl font-semibold text-right">
              {{
                condolencia.vitima.nome +
                " " +
                condolencia.vitima.sobrenome
              }}
            </h4>
            <p
              class="text-white font-semibold text-right text-sm"
              v-if="condolencia.vitima.endereco_cidade || condolencia.vitima.endereco_estado"
            >
              {{`
                ${(() => {
                  if (condolencia.vitima.endereco_cidade && condolencia.vitima.endereco_estado) {
                    return condolencia.vitima.endereco_cidade + "/" + condolencia.vitima.endereco_estado
                  } else if (condolencia.vitima.endereco_cidade) {
                    return condolencia.vitima.endereco_cidade
                  } else {
                    return condolencia.vitima.endereco_estado
                  }
                })()}
              `}}
            </p>
          </div>
        </div>

        <div class="bg-blue-800 w-full flex flex-col items-center">
          <div class="py-10 flex flex-col items-center space-y-3">
            <span>{{ condolencia.texto }}</span>
          </div>
        </div>
        <div class="text-right py-10 ">
          <span
            >Por
            <strong>{{
              condolencia.pessoa.nome +
              " " +
              condolencia.pessoa.sobrenome
            }}</strong></span
          >
          <span class="text-sm block">com saudade.</span>
        </div>

        <div class="flex justify-center">
          <qrcode-vue :value="value" :size="100" level="H"></qrcode-vue>
        </div>
          <p class="text-center mt-4 text-sm">{{value}}</p>
      </div>
      <!-- <div v-else class="box">
        <p class=" text-xl">Condolência não encontrada!</p>
      </div> -->
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
      condolencia: null,
      value: window.location.href,
    }
  },
  mounted () {
    axios
      .get(`https://www.opememorial.net/api/Mensagems/id?id=${ this.$route.params.id }`)
      .then(response => (this.condolencia = response.data))
  }
}
</script>

<style scoped lang="scss">
.picture {
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  background-image: url(../assets/images/person-male.png);
  display: inline-block;
  width: 150px;
  height: 150px;
}
.box {
  @apply my-12 bg-blue-800 flex flex-col rounded-xl shadow-2xl py-16 px-10 text-lg text-white;
}
</style>