<template>
  <body>
    <div class="container">
      <div class="ellipse">
        <h2 class="txt">Добро пожаловать в игру</h2>
        <h1 class="text">
          Помоги <br />
          Фармацевту
        </h1>

        <router-link class="button" to="/main">
          <span class="btnText">Начать</span>
        </router-link>
      </div>
    </div>
  </body>
</template>

<script>
export default {
  name: "home",
};
</script>
<style scoped>
.ellipse {
  background: linear-gradient(63.53deg, #2d8550 16.62%, #5e6ec2 83.38%);
  border-radius: 50%;
  position: absolute;
  width: 860px;
  height: 860px;
  left: 110px;
  top: -30px;
  display: flex;
  align-items: center;
  flex-direction: column;
  color: #ffffff;
}
.text {
  font-size: 60px;
  line-height: 66px;
  letter-spacing: 0.02em;

  color: #ffffff;
  text-align: left;
}
.button {
  background-color: #ffffff;
  border: none;
  color: #8e9ad5;
  padding: 5px 75px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  margin: 4px 2px;
  cursor: pointer;
  border-radius: 100px;
}

.button:hover {
  background-color: #f3f3f3;
}
.btnText {
  font-family: Montserrat;
  font-style: normal;
  font-weight: bold;
  font-size: 36px;
  line-height: 44px;
  display: flex;
  align-items: center;
  text-align: center;
}
.txt {
  font-family: Avenir Next Cyr;
  font-size: 35px;
  line-height: 41px;
  display: flex;
  align-items: center;
  letter-spacing: 0.02em;
  color: #ffffff;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  padding-top: 200px;
}
/* @media only screen and (min-device-width: 768px) and (max-device-width: 1024px); */
</style>
