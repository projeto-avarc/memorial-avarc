<template>
  <div class="jumbotron">
    <div class="icon">
        <i class="far fa-fw text-2xl fa-heart"></i>
    </div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "Jumbotron",
  data() {
    return {
        icons: {
            // heart
        }
    }
  }
};
</script>

<style scoped lang="scss">
// :class="{ 'fa-heart': honored, 'fa-user': !honored }"
.icon {
    @apply bg-blue-600 text-white w-6 h-6 absolute flex items-center justify-center py-5 pl-6 pr-5;
    top: 5px;
    left: -30px;
}
.icon::after {
  content: "";
  display: block;
  position: absolute;
  border-top: 23px solid transparent;
  border-bottom: 17px solid transparent;
  border-left: 12px solid #3182ce;
  left: 100%;
  top: 0;
}
.jumbotron {
  @apply bg-white px-8 py-6 block relative shadow-2xl rounded;
}
</style>
