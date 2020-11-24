<template>
  <nav>
    <div class="container mx-auto">
      <div class="flex items-center justify-between flex-wrap bg-white py-4">

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
      class="w-full block flex-grow lg:flex lg:items-center lg:w-auto lg:text-right"
      v-show="showNav"
    >
      <div class="text-sm lg:flex-grow bg-gray-100 px-5 pb-4 pt-1 mt-5 lg:bg-transparent lg:p-0 lg:m-0">
        <router-link to="/condolencia/criar">
          <a
            class="block mt-4 lg:inline-block lg:mt-0 text-blue-900 hover:text-blue-600 md:ml-8 font-normal text-base sm:text-lg md:text-md"
          >
            Prestar condolência
          </a>
        </router-link>

        <router-link to="/condolencias">
          <a
            href="#responsive-header"
            class="block mt-4 lg:inline-block lg:mt-0 text-blue-900 hover:text-blue-600 md:ml-8 font-normal text-base sm:text-lg md:text-md"
          >
            Listagem de condolências
          </a>
        </router-link>
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
  background-color: #fff;
}
@media (max-width: 640px) {
  nav {
    box-shadow: 0px 50px 50px 50px #fff;
  }
}
</style>
