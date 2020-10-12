<template>
  <div class="">
    <h1>Página da condolência id: {{ id }}</h1>
    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt tempora ullam recusandae animi molestiae vel hic, quibusdam obcaecati atque laboriosam rerum? Asperiores sed quos temporibus consequuntur. Quaerat perspiciatis doloremque quas!</p>
    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt tempora ullam recusandae animi molestiae vel hic, quibusdam obcaecati atque laboriosam rerum? Asperiores sed quos temporibus consequuntur. Quaerat perspiciatis doloremque quas!</p>
    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt tempora ullam recusandae animi molestiae vel hic, quibusdam obcaecati atque laboriosam rerum? Asperiores sed quos temporibus consequuntur. Quaerat perspiciatis doloremque quas!</p>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'condolencia',
  data() {
    return {
      id: this.$route.params.id
    }
  }
}
</script>
