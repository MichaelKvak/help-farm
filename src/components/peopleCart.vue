<template>
  <div class="card">
    <img :src="person.img" alt="Avatar" style="width:300px" />
    <div class="container">
      <h4>
        <b>{{ person.name }}, {{ person.age }} років</b>
      </h4>
      <p>{{ person.text }}</p>
    </div>
  </div>
</template>

<script>
import peopleList from "./peopleList";
export default {
  components: {
    peopleList,
  },
  data() {
    return {
      visible: true,
    };
  },

  props: {
    person: { type: Object, required: true },
    index: Number,
  },
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
.outline {
  border: 3px solid #8049c7;
  padding: 0 10px;
  width: 100px;
  height: 40px;
  display: flex;
  align-items: center;
  text-align: center;
}
</style>
