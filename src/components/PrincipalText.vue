<template>
  <div class="title mr-4 ml-4 md:mr-1 md:ml-1">
    <p
      class="text-base md:text-2xl lg:text-4xl xl:text-5xl sm:text-center lg:text-left text-blue-900"
    >
      Memorial às vítimas
    </p>
    <p
      class="text-base font-bold md:text-2xl lg:text-4xl xl:text-5xl sm:text-center lg:text-left text-blue-900"
    >
      do Covid-19
    </p>
    <p class="text-base md:text-lg sm:text-justify lg:text-left text-blue-900">
      Deixe uma mensagem para <br />
      um amigo ou ente querido, <br />
      e eternize esse sentimento.
    </p>
    <router-link to="/condolencia/criar">
      <Button
        value="Prestar condolência"
        class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full mt-4"
      ></Button>
    </router-link>
  </div>
</template>

<script>
import Button from "@/components/Button.vue";

export default {
  components: {
    Button,
  },
};
</script>
