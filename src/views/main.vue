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
      <div class="res">
        <img
          src="../assets/sad.png"
          width="30px"
          height="30px"
          class="imgSad"
        />
        <span class="textRes">{{ click }}</span>
      </div>
      <div class="ress">
        <img
          src="../assets/happy.png"
          width="30px"
          height="30px"
          class="imgSad"
        />
        <span class="textRes">{{ value }}</span>
      </div>
    </div>
    <button @click="click++">Препарат 1</button>
    <button @click="value++">Препарат 2</button>
  </div>
</template>

<script>
import peopleList from "../components/peopleList";

export default {
  components: { peopleList },
  name: "Main",
  data() {
    return {
      click: "",
      value: "",
    };
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
.res {
  background-color: #ffffff;
  border: none;
  padding: 5px 40px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  border-radius: 100px;
  position: absolute;
  top: 550px;
  right: 250px;
}
.ress {
  background-color: #ffffff;
  border: none;
  padding: 5px 40px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  border-radius: 100px;
  position: absolute;
  top: 550px;
  right: 350px;
}

.imgSad {
  left: 5.26%;
  right: 63.16%;
  top: 12.5%;
  bottom: 12.5%;
  text-align: center;
}
.textRes {
  font-family: Montserrat;
  font-style: normal;
  font-weight: bold;
  font-size: 25px;
  line-height: 44px;
  align-items: right;
  text-align: center;
}
</style>
