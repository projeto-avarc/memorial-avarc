<template>
  <div class="lg:container lg:mx-auto">
    <div class="form">
      <h1>teste</h1>
    </div>
  </div>
</template>

<script>
//import Button from "@/components/Button.vue";
import axios from "axios";

export default {
  name: "CondolenceRegister",
  data() {
    return {
      condolence: {
        name: "",
        lastname: "",
        cpf: "",
        rg: "",
        breed: "branca",
        address_street: "",
        address_city: "",
        address_state: "",
        feeling: "saudades",
        message: "",
        status: "publica",
        email: "",
      },
    };
  },
  components: {
    //Button,
  },
  methods: {
    submitForm() {
      axios
        .post("http://localhost:1337/condolencias", this.condolence)
        .then(() => {
          this.$router.push("/condolencia/sucesso");
        });
    },
  },
};
</script>

<style lang="scss">
.form {
  background-color: theme("colors.body.light");
  width: 100%;
}
</style>
