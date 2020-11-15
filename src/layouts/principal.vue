<template>
  <div class="main">
    <Navbar></Navbar>
    <div class="title">
      <!-- <p class="font-medium text-lg">
        Deixe sua homenagem para um amigo ou ente querido
      </p> -->
      <!-- <router-link to="/condolencia/criar">
        <Button
          value="Quero escrever :)"
          class="bg-primary text-light"
        ></Button>
      </router-link> -->
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import Navbar from "@/components/page-navbar.vue";
//import Button from "@/components/Button.vue";

export default {
  components: {
    Navbar,
    //Button,
  },
};
</script>

<style lang="scss">
.main {
  background-image: url("../assets/images/foto_fundo.jpg");
  width: 100%;
  height: 100vh;
  background-size: cover;
  background-repeat: no-repeat;
  background-position-x: center;
}
</style>
