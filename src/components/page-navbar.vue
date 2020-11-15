<template>
  <header class="menu">
    <div class="logo container">
      <img
        src="../assets/images/logo_memorial_avarc.svg"
        alt="Logo Memorial Avarc"
      />
      <div class="links">
        <span>Visualizar Condolências</span>
        <span>Fale Conosco</span>
        <router-link to="/condolencia/criar">Publicar Condolência</router-link>
      </div>

      <!-- <router-link to="/condolencia/criar">
        <Button
          value="Quero escrever :)"
          class="bg-primary text-light"
        ></Button>
      </router-link> -->
    </div>
  </header>
</template>

<script>
export default {};
</script>

<style scoped lang="scss">
.menu {
  padding-top: 1rem;
  background-color: #f1f1f1;
  width: 100%;
  box-shadow: 0px 22px 50px 25px #f1f1f1;
  .logo {
    display: flex;
    align-items: center;
    > img {
      max-width: 160px;
    }
    .links > span {
      color: #08083a;
      margin: 0 1.5rem;
      cursor: pointer;
    }
  }
}
</style>
