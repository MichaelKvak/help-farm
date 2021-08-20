<template>
  <div class="carusel">
    <carusel-item
      v-for="item in carusel_data"
      :key="item.id"
      :item_data="item"
    />
  </div>
</template>

<script>
import caruselItem from "./caruselItem.vue";
export default {
  name: "carusel",
  components: {
    caruselItem,
  },
  props: {
    carusel_data: {
      type: Array,
      default: () => [],
    },
  },
};
</script>

<style lang="scss" scoped></style>
