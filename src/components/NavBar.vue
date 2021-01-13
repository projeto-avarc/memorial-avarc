<template>
  <nav>
    <div class="container mx-auto">
      <div class="flex items-center justify-between flex-wrap bg-white py-4">
        <router-link to="/">
          <div class="flex items-center flex-shrink-0 text-white mr-6">
            <img
              src="../assets/images/logo_memorial_avarc.png"
              alt="Logo Memorial Avarc"
              style="width: 160px"
            /></div
        ></router-link>
        <div class="block lg:hidden">
          <button
            @click="changeNav"
            class="flex items-center px-3 py-2 border rounded text-blue-900 border-blue-900  hover:border-blue-600"
          >
            <svg
              class="fill-current h-3 w-3"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>
        <div
          class="w-full block flex-grow lg:flex lg:items-center lg:w-auto justify-between"
          v-show="showNav"
        >
          <div
            class="text-sm lg:flex-grow bg-gray-100 px-5 pb-4 pt-1 mt-5 lg:bg-transparent lg:p-0 lg:m-0"
          >

            <router-link to="/condolencias">
              <a
                href="#responsive-header"
                class="link block mt-4 lg:inline-block lg:mt-0 text-blue-900 font-normal text-base sm:text-lg md:text-md"
              >
                Condolências
              </a>
            </router-link>

            <router-link to="/depoimentos">
              <a
                href="#responsive-header"
                class="link block mt-4 lg:inline-block lg:mt-0 text-blue-900 font-normal text-base sm:text-lg md:text-md"
              >
                Depoimentos
              </a>
            </router-link>

            <router-link to="/sobre">
              <a
                href="#responsive-header"
                class="link block mt-4 lg:inline-block lg:mt-0 text-blue-900 font-normal text-base sm:text-lg md:text-md"
              >
                Sobre o memorial
              </a>
            </router-link>
          </div>
          <div class="sharing">
              <ShareNetwork
                network="facebook"
                href="javascript:void(0)"
                :url="value" 
                quote="O Memorial visa criar espaço de luto compartilhado e auxiliar na resiliência transformativa dos indivíduos, famílias e sociedade. Deixe uma mensagem para um amigo ou ente querido, e eternize esse sentimento."
                class="mr-2"
              >
                <img src="../assets/images/icon-facebook.png" alt="Facebook" class="w-10 inline-block">
              </ShareNetwork>
              <ShareNetwork
                network="twitter"
                href="javascript:void(0)"
                :url="value" 
                title="O Memorial visa criar espaço de luto compartilhado e auxiliar na resiliência transformativa dos indivíduos, famílias e sociedade. Deixe uma mensagem para um amigo ou ente querido, e eternize esse sentimento."
                hashtags=""
                class="mr-2"
              >
                <img src="../assets/images/icon-twitter.png" alt="Twitter" class="w-10 inline-block">
              </ShareNetwork>
              <ShareNetwork
                network="linkedin"
                href="javascript:void(0)"
                title="O Memorial visa criar espaço de luto compartilhado e auxiliar na resiliência transformativa dos indivíduos, famílias e sociedade. Deixe uma mensagem para um amigo ou ente querido, e eternize esse sentimento."
                :url="value"
                class="mr-2"
              >
                <img src="../assets/images/icon-linkedin.png" alt="Linkedin" class="w-10 inline-block">
              </ShareNetwork>
              <ShareNetwork
                network="whatsapp"
                href="javascript:void(0)"
                :url="value" 
                title="Memorial às vítimas do Covid-19"
                description="O Memorial visa criar espaço de luto compartilhado e auxiliar na resiliência transformativa dos indivíduos, famílias e sociedade. Deixe uma mensagem para um amigo ou ente querido, e eternize esse sentimento."
                class="mr-2"
              >
                <img src="../assets/images/icon-whatsapp.png" alt="Whatsapp" class="w-10 inline-block">
              </ShareNetwork>
              <ShareNetwork
                network="email"
                href="javascript:void(0)"
                :url="value" 
                title="Memorial às vítimas do Covid-19"
                description="O Memorial visa criar espaço de luto compartilhado e auxiliar na resiliência transformativa dos indivíduos, famílias e sociedade. Deixe uma mensagem para um amigo ou ente querido, e eternize esse sentimento."
              >
                <img src="../assets/images/icon-email.png" alt="Email" class="w-10 inline-block">
              </ShareNetwork>
            </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      showNav: true,
      value: 'www.memorialavarc.com.br',
    };
  },
  methods: {
    changeNav() {
      this.showNav = !this.showNav;
    },
    preventLink(event) {
      event.preventDefault()
    }
  },
  mounted() {
    this.showNav = window.innerWidth < 1024 ? false : true;
    window.onresize = () => {
      this.showNav = window.innerWidth < 1024 ? false : true;
    };
  },
};
</script>

<style scoped lang="scss">
nav {
  box-shadow: 0px 22px 50px 25px #fff;
  background-color: #fff;
}
@media (max-width: 640px) {
  nav {
    box-shadow: 0px 50px 50px 50px #fff;
  }
}
.sharing {
  a {
    transition: all 200ms;
    display: inline-block;
    &:hover {
      transform: scale(1.05);
    }
  }
  @media (max-width: 1023px) {
    margin-top: 10px;
  }
}
a.link {
  color: #08034e;

  @media (min-width: 1024px) {
    display: inline-block;
    position: relative;
    padding: 0 6px 0 2px;
    margin: 0 10px;

    &:hover {
      text-decoration: underline;
    }
  }

  &.slide{
    &:after {
        content: '';
        display: inline-block;
        position: absolute;
        top: 100%;
        left: 0;
        width: 0;
        height: 1.5px;
        background-color: #08034e;
        transition: all .2s;
        opacity: 0;
      }
      &:hover:after {
        width: 100%;
        opacity: .2;
      }
    }
}
</style>
