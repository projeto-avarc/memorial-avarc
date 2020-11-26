<template>
  <div class="flex justify-center md:block">
    <div class="title my-10 md:mt-16 inline-block bg-white p-8 md:p-0 md:pl-2 block relative shadow-2xl rounded md:bg-transparent md:shadow-none">
      <p
        class="text-2xl lg:text-4xl xl:text-5xl text-blue-900 text-left"
      >
        Memorial às vítimas
      </p>
      <p
        class="leading-7 font-bold text-2xl lg:text-4xl xl:text-5xl text-left text-blue-900"
      >
        do Covid-19
      </p>
      <p class="font-semibold text-base md:text-xl text-left text-blue-900 md:font-normal md:mt-10 mt-4">
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

<style scoped lang="scss">
</style>