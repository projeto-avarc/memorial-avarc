<template>
  <div>
    <NavBar class="shadow-sm"></NavBar>
    <div class="container mx-auto max-w-screen-md">
      <div class="box py-8 px-4 sm:py-16 sm:px-10" v-if="depoimento">
        <div
          class="flex items-center max-w-lg m-auto justify-between flex-col sm:flex-row"
        >
          <div
            class="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"
          >
            <span
              v-if="depoimento.fotografia"
              class="rounded-full mx-auto md:mx-0 md:mr-6 picture"
              :style="{
                'background-image': `url(data:image/jpeg;base64,${depoimento.fotografia})`,
              }"
            >
            </span>
            <span v-else class="rounded-full mx-auto md:mx-0 md:mr-6 picture">
            </span>
          </div>
          <div class="px-2 py-5 text-center md:ml-12">
            <h4 class="text-xl font-semibold text-right">
              {{ depoimento.nome + " " + depoimento.sobreNome }}
            </h4>
            <p
              class="text-white font-semibold text-right text-sm"
              v-if="depoimento.cidade || depoimento.estado"
            >
              {{
                `
                ${(() => {
                  if (depoimento.cidade && depoimento.estado) {
                    return depoimento.cidade + "/" + depoimento.estado;
                  } else if (depoimento.cidade) {
                    return depoimento.cidade;
                  } else {
                    return depoimento.estado;
                  }
                })()}
              `
              }}
            </p>
          </div>
        </div>

        <div class="bg-blue-800 w-full flex flex-col items-center">
          <div class="py-10 flex flex-col items-center space-y-3">
            <span>{{ depoimento.texto }}</span>
          </div>
        </div>
        <div class="text-right py-10 ">
          <span
            >Por
            <strong>{{
              depoimento.nome + " " + depoimento.sobreNome
            }}</strong></span
          >
          <span v-if="depoimento.sentimento" class="text-sm block"
            >com {{ depoimento.sentimento }}.</span
          >
        </div>

        <div
          class="flex justify-center items-center md:items-end flex-col sm:flex-row mt-10 mb-4"
        >
          <qrcode-vue
            :value="value"
            :size="100"
            level="H"
            class="sm:mr-6 mb-8 sm:mb-0"
          ></qrcode-vue>
          <div class="md:mb-1">
            <p class="text-sm mb-1">Compartilhar:</p>
            <div>
              <ShareNetwork
                network="facebook"
                :url="value"
                title="Memorial às Vítimas do Covid-19"
                description="O Memorial visa criar espaço de luto compartilhado e auxiliar na resiliência transformativa dos indivíduos, famílias e sociedade. Deixe uma mensagem para um amigo ou ente querido, e eternize esse sentimento."
                quote="O Memorial visa criar espaço de luto compartilhado e auxiliar na resiliência transformativa dos indivíduos, famílias e sociedade. Deixe uma mensagem para um amigo ou ente querido, e eternize esse sentimento."
                hashtags="Memorial,Avarc"
                class="mr-2"
              >
                <img
                  src="../assets/images/icon-facebook.png"
                  alt="Facebook"
                  class="w-12 inline-block"
                />
              </ShareNetwork>
              <ShareNetwork
                network="twitter"
                :url="value"
                title="Memorial às Vítimas do Covid-19"
                hashtags="Memorial,Avarc"
                class="mr-2"
              >
                <img
                  src="../assets/images/icon-twitter.png"
                  alt="Twitter"
                  class="w-12 inline-block"
                />
              </ShareNetwork>
              <ShareNetwork
                network="linkedin"
                title="Memorial às Vítimas do Covid-19"
                :url="value"
                class="mr-2"
              >
                <img
                  src="../assets/images/icon-linkedin.png"
                  alt="Linkedin"
                  class="w-12 inline-block"
                />
              </ShareNetwork>
              <ShareNetwork
                network="whatsapp"
                :url="value"
                title="Memorial às Vítimas do Covid-19"
                description="O Memorial visa criar espaço de luto compartilhado e auxiliar na resiliência transformativa dos indivíduos, famílias e sociedade. Deixe uma mensagem para um amigo ou ente querido, e eternize esse sentimento."
                class="mr-2"
              >
                <img
                  src="../assets/images/icon-whatsapp.png"
                  alt="Whatsapp"
                  class="w-12 inline-block"
                />
              </ShareNetwork>
              <ShareNetwork
                network="email"
                :url="value"
                title="Memorial às Vítimas do Covid-19"
                description="O Memorial visa criar espaço de luto compartilhado e auxiliar na resiliência transformativa dos indivíduos, famílias e sociedade. Deixe uma mensagem para um amigo ou ente querido, e eternize esse sentimento."
              >
                <img
                  src="../assets/images/icon-email.png"
                  alt="Email"
                  class="w-12 inline-block"
                />
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
          to="/depoimentos"
          class="underline inline-block text-sm font-semibold px-10 mb-10"
          >Voltar</router-link
        >
      </div>
    </div>
    <loading
      :active.sync="isLoading"
      :can-cancel="false"
      :is-full-page="fullPage"
    >
    </loading>
  </div>
</template>

<script>
import axios from "axios";
import NavBar from "@/components/NavBar.vue";
import QrcodeVue from "qrcode.vue";
import Loading from "vue-loading-overlay";
import "vue-loading-overlay/dist/vue-loading.css";

export default {
  name: "depoimento",
  components: {
    NavBar,
    QrcodeVue,
    Loading,
  },
  data() {
    return {
      depoimento: null,
      isLoading: true,
      fullPage: true,
      value: window.location.href,
    };
  },
  mounted() {
    axios
      .get(
        `https://www.opememorial.net/api/Depoimentos/id?id=${this.$route.params.id}`
      )
      .then((response) => (this.depoimento = response.data))
      .finally(() => (this.isLoading = false));
  },
};
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
