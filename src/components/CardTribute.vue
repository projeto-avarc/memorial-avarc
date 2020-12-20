<template>
  <div>
    <div
      class="flex flex-col md:flex-row justify-between bg-white rounded-lg p-5 md:py-5 md:px-10 border mb-3 md:mb-0 card"
    >
      <div class="imagespace">
        <span
          v-if="depoimento"
          class="h-16 w-16 md:h-22 md:w-22 rounded-full mx-auto md:mx-0  picture"
          :style="{
            'background-image': `url(data:image/jpeg;base64,${depoimento.fotografia})`,
          }"
        >
        </span>
        <span
          v-else
          class="h-16 w-16 md:h-22 md:w-22 rounded-full mx-auto md:mx-0  picture"
        ></span>
      </div>

      <div class="text-center md:text-right" v-if="depoimento">
        <h2 class="text-lg font-bold mt-1">
          {{ depoimento.nome + " " + depoimento.sobreNome }}
        </h2>
        <p
          class="text-center md:text-right text-sm"
          v-if="depoimento.cidade || depoimento.estado"
        >
          {{
            `
            ${(() => {
              if (depoimento.cidade && depoimento.estado) {
                return depoimento.cidade + "/" + depoimento.estado;
              } else if (depoimento.cidade) {
                return depoimento.estado;
              } else {
                return depoimento.estado;
              }
            })()}
          `
          }}
        </p>

        <router-link
          class="text-blue-500 text-center md:text-right text-sm mt-2 cursor-pointer mt-2 block underline"
          :to="`/depoimento/${depoimento.id}`"
        >
          Ler depoimento
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CardTribute",
  props: {
    depoimento: Object,
  },
  data() {
    return {};
  },
};
</script>

<style scoped lang="scss">
.picture {
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  background-image: url(../assets/images/person-male.png);
}
.imagespace {
  min-width: 60px;
  margin-right: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
}
h2 {
  line-height: 18px;
}
.card {
  min-height: 120px;
}
</style>
