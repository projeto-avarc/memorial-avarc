<template>
  <div>
    <NavBar class="shadow-sm"></NavBar>
    <div class="container mx-auto max-w-screen-md mb-16">
      
      <h1>Memorial Avarc</h1>
      <p>O Memorial às vítimas do COVID-19 visa criar espaço de luto compartilhado e auxiliar na resiliência transformativa dos indivíduos, famílias e sociedade. A vitimização histórica, coletiva e cultural causada pelo novo coronavírus pressupõe o reconhecimento, união, preservação da memória individual e coletiva e, sobretudo o registro do legado daqueles que se foram para as gerações futuras. A preservação da memória será feita de forma colaborativa por aqueles que querem homenagear seus entes queridos e pelos idealizadores do projeto tendo por eixos o memorial físico e o virtual realizados. O projeto prevê ainda o reconhecimento do dia nacional das vítimas do COVID-19 e a urgência do implemento de estratégias de desvitimização por meio do Projeto n. 3890/2020.</p>

      <h2>O Monumento Memorial</h2>
      <p>O Monumento Memorial, localizado no Parque do Carmo, Zona Leste de São Paulo, convida para um momento de reflexão e meditação em espaço físico, com a criação de um espaço de convívio compartilhado do luto e de esperança, pertencente às presentes e futuras gerações. O Memorial permite a manutenção da qualidade de vida, pois o contato com a natureza interfere diretamente na saúde das pessoas. O ipê branco foi o símbolo eleito para representar esse momento ímpar vivenciado pela humanidade, dado seu caráter resiliente, contemplativo e medicinal.</p>

      <h2>Cápsula do tempo</h2>
      <p>A Cápsula do tempo simboliza a necessidade de conexão do ser humano com o seu passado, em um ciclo constante de aprendizado e evolução. Através do site do memorial, pessoas de todo o mundo poderão deixar mensagens de condolência e contar suas experiências no enfrentamento ao Coronavírus. Essas mensagens serão codificadas e transformadas em cápsulas que serão depositadas na base do monumento, contando a história daqueles que se foram e mensagens de condolências daqueles que perderam um ente querido. As cápsulas serão lacradas na base do monumento memorial pelo período de 100 anos, para que se tenha uma memória fidedigna da pandemia para as futuras gerações.</p>

      <p>O Memoria Avarc foi idealizado pela promotora Celeste Leite dos Santos e pela oficial de Cartório de Registro Civil de Pessoas Naturais de Americana Fátima Ranaldo. A concepção arquitetônica e de Pedro Caribe com o apoio de Vera Simoes. Os professores Fabio Furia e Victor Sirafusa orientaram os alunos da faculdade impacta no desenvolvimento do projeto. O auxílio humanitário do projeto conta com a participação do projeto avarc e o projeto Higia mente saudável. Seus integrantes estão disponíveis no site <a href="www.avarc.com.br">www.avarc.com.br</a>. O memorial conta com o apoio da Prefeitura da Cidade de São Paulo, a Secretaria Municipal do Verde e Meio Ambiente e o Ministério Público do Estado de São Paulo.</p>

    </div>
  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue"

export default {
  name: 'privacyPolicy',
  components: {
    NavBar,
  }
}
</script>

<style scoped lang="scss">
h1 {
  text-align: center;
  margin-bottom: 25px;
  margin-top: 40px;
  font-size: 22px;
  font-weight: bold;

  @media (max-width: 600px) {
    font-size: 16px;
  }
}
h2 {
  margin: 35px 0 20px 0;
  font-size: 18px;
  font-weight: bold;

  @media (max-width: 600px) {
    font-size: 16px;
  }
}
h3 {
  margin: 35px 0 20px 0;
  font-size: 20px;
  font-weight: bold;

  @media (max-width: 600px) {
    font-size: 16px;
  }
}
p {
  margin-bottom: 15px;
  font-size: 15px;

  @media (max-width: 600px) {
    font-size: 14px;
  }
}
a {
  text-decoration: underline;
}
</style>