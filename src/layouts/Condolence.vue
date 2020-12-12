<template>
  <div>
    <NavBar class="shadow-sm"></NavBar>
    <div class="container mx-auto max-w-screen-md">
      <div
        class="box py-8 px-4 sm:py-16 sm:px-10"
        v-if="condolencia"
      >

        <div class="flex items-center max-w-lg m-auto justify-between flex-col sm:flex-row">
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
          <span v-if="condolencia.pessoa.sentimento" class="text-sm block">com {{condolencia.pessoa.sentimento}}.</span>
        </div>

        <div class="flex justify-center items-center md:items-end flex-col sm:flex-row mt-10 mb-4">
          <qrcode-vue :value="value" :size="100" level="H" class="sm:mr-6 mb-8 sm:mb-0"></qrcode-vue>
          <div class="md:mb-1">
            <p class="text-sm mb-1">Compartilhar:</p>
            <div>
              <ShareNetwork
                network="facebook"
                :url="value" 
                title="Memorial às vítimas do Covid-19"
                description="Uma breve descrição aqui!"
                quote="Uma breve descrição aqui!"
                hashtags="Memorial,Avarc"
                class="mr-2"
              >
                <img src="../assets/images/icon-facebook.png" alt="Facebook" class="w-12 inline-block">
              </ShareNetwork>
              <ShareNetwork
                network="twitter"
                :url="value" 
                title="Memorial às vítimas do Covid-19"
                hashtags="Memorial,Avarc"
                class="mr-2"
              >
                <img src="../assets/images/icon-twitter.png" alt="Twitter" class="w-12 inline-block">
              </ShareNetwork>
              <ShareNetwork
                network="linkedin"
                title="Memorial às vítimas do Covid-19"
                :url="value"
                class="mr-2"
              >
                <img src="../assets/images/icon-linkedin.png" alt="Linkedin" class="w-12 inline-block">
              </ShareNetwork>
              <ShareNetwork
                network="whatsapp"
                :url="value" 
                title="Memorial às vítimas do Covid-19"
                description="Uma breve descrição aqui!"
                class="mr-2"
              >
                <img src="../assets/images/icon-whatsapp.png" alt="Whatsapp" class="w-12 inline-block">
              </ShareNetwork>
              <ShareNetwork
                network="email"
                :url="value" 
                title="Memorial às vítimas do Covid-19"
                description="Uma breve descrição aqui!"
              >
                <img src="../assets/images/icon-email.png" alt="Email" class="w-12 inline-block">
              </ShareNetwork>
            </div>
          </div>
        </div>
      </div>
      <div v-else class="box py-8 px-4 sm:py-16 sm:px-10">
        <p class="text-center text-xl">Condolência não encontrada!</p>
      </div>
      <div class="text-left">
        <router-link
          to="/condolencias"
          class="underline inline-block text-sm font-semibold px-10 mb-10"
          >Voltar</router-link
        >
      </div>
    </div>
    <loading 
      :active.sync="isLoading" 
      :can-cancel="false" 
      :is-full-page="fullPage">
    </loading>
  </div>
</template>

<script>
import axios from 'axios'
import NavBar from "@/components/NavBar.vue"
import QrcodeVue from 'qrcode.vue'
import Loading from 'vue-loading-overlay'
import 'vue-loading-overlay/dist/vue-loading.css'

export default {
  name: 'condolencia',
  components: {
    NavBar,
    QrcodeVue,
    Loading
  },
  data () {
    return {
      condolencia: null,
      isLoading: true,
      fullPage: true,
      value: window.location.href,
    }
  },
  mounted () {
    axios
      .get(`https://www.opememorial.net/api/Mensagems/id?id=${ this.$route.params.id }`)
      .then(response => (this.condolencia = response.data))
      .finally(() => this.isLoading = false)
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
  @apply my-12 bg-blue-800 flex flex-col rounded-xl shadow-2xl text-lg text-white;
}
</style>