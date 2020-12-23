<template>
  <button class="button">{{ value }}</button>
</template>

<script>
export default {
  name: "Button",
  props: {
    value: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.button {
  display: inline-block;
  border-radius: 4px;
  padding: 8px 15px;
  text-decoration: none;
  font-weight: 600;
  transition: all 250ms;
  letter-spacing: 0.4px;

  &:hover {
    box-shadow: 2px 2px 10px 0 rgba(0, 0, 0, 0.25);
    transform: translateY(-1px);
  }
}
</style>
