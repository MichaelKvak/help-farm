<template>
  <div>
    <div>
      <peopleList />
    </div>
    <div class="sidebar">
      <router-link to="/"
        ><img
          src="../assets/home2.png"
          width="50px"
          height="50px"
          class="imghome"
      /></router-link>
      <a @click="reloadPage">
        <img src="../assets/refresh.png" width="50" height="50" class="ref" />
      </a>
    </div>
  </div>
</template>

<script>
import peopleList from "../components/peopleList";

export default {
  components: { peopleList },
  name: "Main",
  data() {
    return {};
  },

  methods: {
    reloadPage() {
      window.location.reload();
    },
  },
};
</script>
<style scoped>
.sidebar {
  position: absolute;
  width: 470px;
  height: 1024px;
  left: 0px;
  top: 0px;
  background: linear-gradient(63.53deg, #2d8550 16.62%, #5e6ec2 83.38%);
  opacity: 0.7;
}
.ref {
  position: absolute;
  left: 158px;
  top: 85px;
  cursor: pointer;
}
.imghome {
  position: absolute;
  left: 65px;
  top: 85px;
}
</style>
