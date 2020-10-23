<template>
  <button class="button">{{ value }}</button>
</template>

<script>
export default {
  name: 'Button',
  props: {
    value: String,
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.button {
  display: inline-block;
  border-radius: 4px;
  background-color: #a9a9a9;
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
