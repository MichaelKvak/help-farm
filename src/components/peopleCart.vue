<template>
  <div class="card">
    <img :src="person.img" alt="Avatar" style="width:300px" />
    <div class="container">
      <h4>
        <b>{{ person.name }}, {{ person.age }} років</b>
      </h4>
      <p>{{ person.text }}</p>
    </div>
    <button @click="changeTablet">Препарат 1</button>
    <button @click="changeTablet">Препарат 2</button>
    <button @click="changeTablet">Препарат 3</button>
  </div>
</template>

<script>
import peopleList from "./peopleList";
export default {
  data() {
    return {
      tablet: { name: "aspirine" },
    };
  },
  components: {
    peopleList,
  },
  props: {
    person: { type: Object, required: true },
    index: Number,
  },
  methods: {
    changeTablet() {
      this.person.tablet = "aspirine";
    },
  },
  // methods: {
  //   addNewTablet() {
  //     this.person.push(this.tablet);
  //   },
  // },
};
</script>

<style scoped>
.card {
  width: 350px;
  height: 420px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  position: relative;
  left: 47.92%;
  right: 14.58%;
  top: 12.7%;
  bottom: 29.69%;
  margin: 10px;
  padding: 10px;
  border-radius: 40px;
}

.card:hover {
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
}

.container {
  padding: 2px 16px;
}
.item {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  margin: 10px;
  background-color: red;
  color: white;
  position: absolute;
}

.item-enter-active,
.item-leave-active {
  transition: opacity 0.4s;
}

.item-enter,
.item-leave-to {
  opacity: 0;
}
</style>
