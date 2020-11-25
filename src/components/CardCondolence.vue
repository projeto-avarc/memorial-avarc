<template>
  <div>
    <div class="flex justify-center bg-white rounded-lg p-6 border">
      <img class="h-16 w-16 md:h-24 md:w-24 rounded-full mx-auto md:mx-0 md:mr-6" 
        src="../assets/images/person-male.png"
      />

      <div class="text-center md:text-left">
        <h2 class="text-lg font-bold">{{ condolencia.honored.first_name + " " + condolencia.honored.last_name }}</h2>
        <div class="text-blue-500">
          {{
            condolencia.honored.address_city +
              "/" +
              condolencia.honored.address_state
          }}
        </div>

        <router-link class="text-blue-500 text-right text-sm mt-2 cursor-pointer mt-2 block underline" :to="`/condolencias/${condolencia.id}`">
          Ler condolência
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CardCondolence",
  props: {
    condolencia: Object,
  },
  data() {
    return {};
  },
};
</script>

<style scoped lang="scss"></style>
