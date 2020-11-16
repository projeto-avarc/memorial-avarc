<template>
  <nav class="flex items-center justify-between flex-wrap bg-white p-4">
    <router-link to="/">
      <div class="flex items-center flex-shrink-0 text-white mr-6">
        <img
          src="../assets/images/logo_memorial_avarc.svg"
          alt="Logo Memorial Avarc"
          style="width: 160px;"
        /></div
    ></router-link>
    <div class="block lg:hidden">
      <button
        @click="changeNav"
        class="flex items-center px-3 py-2 border rounded text-blue-900 border-blue-900 hover:text-blue-600 hover:border-blue-600"
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
      class="w-full block flex-grow lg:flex lg:items-center lg:w-auto"
      v-show="showNav"
    >
      <div class="text-sm lg:flex-grow">
        <router-link to="/condolencia/criar">
          <a
            class="block mt-4 lg:inline-block lg:mt-0 text-blue-900 hover:text-blue-600 mr-4 font-bold text-base sm:text-lg md:text-md"
          >
            Publicar Condolência
          </a>
        </router-link>

        <router-link to="/condolencias">
          <a
            href="#responsive-header"
            class="block mt-4 lg:inline-block lg:mt-0 text-blue-900 hover:text-blue-600 mr-4 font-bold text-base sm:text-lg md:text-md"
          >
            Listagem de Condolências
          </a>
        </router-link>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      showNav: true,
    };
  },
  methods: {
    changeNav() {
      this.showNav = !this.showNav;
    },
  },
};
</script>

<style scoped lang="scss">
nav {
  box-shadow: 0px 22px 50px 25px #fff;
}
@media (max-width: 640px) {
  nav {
    box-shadow: 0px 50px 50px 50px #fff;
  }
}
</style>
