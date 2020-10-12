<template>
  <router-link :to="to" class="button">{{ msg }}</router-link>
</template>

<script>
export default {
  name: 'Button',
  props: {
    msg: String,
    to: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.button {
  display: inline-block;
  margin: 0 auto;
  border-radius: 4px;
  background-color: #c72025;
  padding: 8px 25px;
  text-decoration: none;
  color: #fff;
  font-weight: 500;
  transition: all 250ms;

  &:hover {
    background-color: #b91e25;
    box-shadow: 5px 5px 10px 0px rgba(0,0,0,0.4);
    transform: translateY(-1px);
  }
}
</style>
