<template>
  <div>
    <peopleCart
      v-for="(person, i) in get_peopleList"
      :key="person.id"
      :person="person"
      :index="i + 1"
    />
  </div>
</template>

<script>
import peopleCart from "./peopleCart.vue";
import { mapGetters } from "vuex";

export default {
  components: { peopleCart },
  computed: mapGetters(["get_peopleList"]),
};
</script>

<style scoped>
.Val {
  position: absolute;
  left: 65px;
  top: 255px;
}
</style>
