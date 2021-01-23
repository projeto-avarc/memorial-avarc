<template>
  <div class="modal-success" v-show="modal">
    <div class="box">
      <p>Seu depoimento foi registrado e está em processo de aprovação pelos moderadores.</p>
      <p>Em breve você receberá um e-mail com seu QR Code para compartilhar com os amigos!</p>

      <button @click="modal = false" class="mt-5 bg-transparent hover:bg-red-400 text-red-400 font-semibold hover:text-white py-2 px-4 border border-red-500 hover:border-transparent rounded">Fechar</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'qrCode',
  data () {
    return {
      modal: true,
    }
  }
}
</script>

<style lang="scss" scoped>
  .modal-success {
    width: 100vw;
    height: 100vh;
    background-color: rgba(0,0,0,0.8);
    z-index: 10;
    position: fixed;
    top: 0;
    left: 0;

    .box {
      @apply bg-white px-12 py-16 absolute shadow-2xl rounded inline-block text-center;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      width: 100%;
      max-width: 800px;

      @media (max-width: 850px) {
        max-width: 80%;
      }
    }

    p {
      @apply m-2 mx-auto block text-xl;
    }
  }
</style>