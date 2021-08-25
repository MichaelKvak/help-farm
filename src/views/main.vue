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
      <div class="resss">
        <img
          src="../assets/heart.png"
          width="30px"
          height="30px"
          class="imgSad"
        />
        <span class="textRes">{{ count }}</span>
      </div>
    </div>
    <div class="btns">
      <button @click="click++" class="btn1">
        Препарат 1
      </button>
      <button @click="value++" class="btn2">
        Препарат 2
      </button>
      <button @click="count++" class="btn3">Препарат 3</button>
    </div>
  </div>
</template>

<script>
import PeopleList from "../components/peopleList.vue";

export default {
  components: { PeopleList },
  name: "Main",
  data() {
    return {
      click: "",
      value: "",
      count: "",
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
  right: 155px;
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
  right: 300px;
}
.resss {
  background-color: #ffffff;
  border: none;
  padding: 5px 40px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  border-radius: 100px;
  position: absolute;
  top: 640px;
  right: 220px;
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
.btn2 {
  background: linear-gradient(266.19deg, #169ae4 0%, #0cc4fa 100%);
  border-radius: 100px;
  margin: 30px;
}
.btn1 {
  background: linear-gradient(266.19deg, #8049c7 0%, #ca57fd 100%);
  border-radius: 100px;
  margin: 30px;
}
.btn3 {
  background: linear-gradient(
    90deg,
    #ffd748 0.02%,
    rgba(195, 199, 11, 0.96) 99.97%,
    #cac6ab 99.98%,
    #d3e9e1 99.99%
  );
  border-radius: 100px;
  margin: 30px;
}
.btns {
  display: flex;
  justify-content: center;
  margin-left: 350px;
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
