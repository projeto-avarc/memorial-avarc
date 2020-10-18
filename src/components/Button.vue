<template>
  <router-link :to="to" class="button">{{ value }}</router-link>
</template>

<script>
export default {
  name: 'Button',
  props: {
    value: String,
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
  background-color: #777777;
  padding: 8px 25px;
  text-decoration: none;
  color: #fff;
  font-weight: 600;
  transition: all 250ms;
  letter-spacing: 0.4px;

  &:hover {
    background-color: #6b6b6b;
    box-shadow: 2px 2px 10px 0 rgba(0,0,0,0.25);
    transform: translateY(-1px);
  }

  // buttons variations
  &.primary-color {
    background-color: #b91e25;

    &:hover {
      background-color: #c72025;
    }
  }
}
</style>
