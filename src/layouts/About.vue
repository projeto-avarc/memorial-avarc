<template>
  <div>
    <NavBar class="shadow-sm"></NavBar>

    <div>
      <h1>O <strong>Memorial Avarc</strong></h1>
      <div class="box-video">
        <div class="container">
          <iframe src="https://www.youtube.com/embed/Hk1jyoSUSO0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
      </div>
    
    </div>

    <div class="flex">
      <div class="wrapper container mx-auto mb-16">

        <h2>Memorial Avarc</h2>
        <p>O Memorial às Vítimas do Covid-19 visa criar espaço de luto compartilhado e auxiliar na resiliência transformativa dos indivíduos, famílias e sociedade. A vitimização histórica, coletiva e cultural causada pelo novo coronavírus pressupõe o reconhecimento, união, preservação da memória individual e coletiva e, sobretudo o registro do legado daqueles que se foram para as gerações futuras. A preservação da memória será feita de forma colaborativa por aqueles que querem homenagear seus entes queridos e pelos idealizadores do projeto tendo por eixos o memorial físico e o virtual realizados. O projeto prevê ainda o reconhecimento do dia nacional das vítimas do COVID-19 e a urgência do implemento de estratégias de desvitimização por meio do Projeto n. 3890/2020. </p>

        <h2>O Monumento Memorial</h2>
        <p>O Monumento Memorial, localizado no Parque do Carmo, Zona Leste de São Paulo, convida para um momento de reflexão e meditação em espaço físico, com a criação de um espaço de convívio compartilhado do luto e de esperança, pertencente às presentes e futuras gerações. O Memorial permite a manutenção da qualidade de vida, pois o contato com a natureza interfere diretamente na saúde das pessoas. O ipê branco foi o símbolo eleito para representar esse momento ímpar vivenciado pela humanidade, dado seu caráter resiliente, contemplativo e medicinal.</p>

        <h2>Cápsula do tempo</h2>
        <p>A Cápsula do tempo simboliza a necessidade de conexão do ser humano com o seu passado, em um ciclo constante de aprendizado e evolução. Através do site do memorial, pessoas de todo o mundo poderão deixar mensagens de condolência e contar suas experiências no enfrentamento ao Coronavírus. Essas mensagens serão codificadas e transformadas em cápsulas que serão depositadas na base do monumento, contando a história daqueles que se foram e mensagens de condolências daqueles que perderam um ente querido. As cápsulas serão lacradas na base do monumento memorial pelo período de 100 anos, para que se tenha uma memória fidedigna da pandemia para as futuras gerações.</p>

        <h2>Idealização</h2>
        <p>O Memorial Avarc foi idealizado pela promotora Celeste Leite dos Santos e pela oficial de Cartório de Registro Civil de Pessoas Naturais de Americana Fátima Ranaldo. A concepção arquitetônica é de Pedro Caribe com o apoio da Galeira VerArte.</p>
        <p>A ideia de criação deste sítio foi acolhida pela Profa. Ana Cristina dos Santos, Diretora da Faculdade Impacta (<a href="https://www.impacta.edu.br" class="underline" target="_blank">www.impacta.edu.br</a>), que foi desenvolvido pelos alunos André dos Santos Sena, André Ferraz Nóbrega, Bárbara de Paula Arão, Leandro Aparecido da Silva Reimberg, Maria Isabel Batista Oliveira e Victor Nascimento Nunes da Silva, sob a orientação dos Profs. Fabio Furia Silva e Victor Williams Stafusa da Silva.</p>
        <p>O auxílio humanitário do projeto conta com a participação do Projeto Avarc e o Projeto Hígia Mente Saudável. Conheça mais no site <a href="http://avarc.com.br/" class="underline" target="_blank">www.avarc.com.br</a>.</p>

        <h2>Apoio</h2>
        <p>O memorial conta com o apoio da Prefeitura da Cidade de São Paulo, a Secretaria Municipal do Verde e Meio Ambiente e o Ministério Público do Estado de São Paulo.</p>

        <h2>Passo a Passo</h2>
        <div class="mb-6">
          <iframe src="https://www.youtube.com/embed/9lnGMH60gek" class="mx-auto" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>

        <p style="margin-bottom:0;">Fale conosco</p>
        <a href="mailto:contato@memorialavarc.com.br" class="no-underline hover:underline text-lg">contato@memorialavarc.com.br</a>

        <p class="mt-6">Equipe Memorial Avarc</p>

      </div>
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
.box-video {
  background: url('../assets/images/sobre-memorial.png') no-repeat center;
  height: 470px;
  max-width: 1140px;
  background-size: cover;
  margin: 0 auto 0 auto;
  margin-bottom: 30px;

  &,
  .container {
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }

  @media (max-width: 768px) {
    .container {
      justify-content: center;
    }
  }

  @media (max-width: 580px) {
    height: 300px;
  }
}
iframe {
  width: 560px;
  height: 315px;
  @media (max-width: 580px) {
    width: 350px;
    height: 196px;
  }
  @media (max-width: 390px) {
    width: 100%;
    height: 180px;
  }
}
h1 {
  text-align: center;
  margin-bottom: 25px;
  margin-top: 40px;
  font-size: 36px;

  @media (max-width: 600px) {
    font-size: 26px;
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
  font-size: 16px;

  @media (max-width: 600px) {
    font-size: 15px;
  }
}
.wrapper {
  max-width: 1140px;
}
</style>
