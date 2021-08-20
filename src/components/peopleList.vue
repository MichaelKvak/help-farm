<template>
  <div>
    <carusel :carusel_data="people" />
    <people-cart
      v-for="(person, i) in people"
      :key="person.id"
      :person="person"
      :index="i + 1"
    ></people-cart>
  </div>
</template>

<script>
import peopleCart from "./peopleCart.vue";
import carusel from "./carusel.vue";
components: {
  peopleCart;
}
export default {
  components: { peopleCart, carusel },
  data() {
    return {
      people: [
        {
          id: 1,
          img:
            "https://bloximages.chicago2.vip.townnews.com/pantagraph.com/content/tncms/assets/v3/editorial/1/e6/1e6e0e9b-cfad-5973-b50a-060d24f6efed/5a9d334f01298.image.jpg",
          name: "Тамара Григоріївна",
          age: 75,
          text:
            "Дитя, дай бабусі ліки від тиску за цим рецептом, але не дорогих, тих, що дешевші!",
        },
        {
          id: 2,
          img:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQboMjEtoL0mvs6nVRhNZ6YgZ4EJ2lYDUoXEJWmA3dXX3QevxixJiEyrWyMGhKEpW00lE&usqp=CAU",
          name: "Марія Петрівна",
          age: 55,
          text:
            "Лікар призначив препарат від артеріальної гіпертензії, а бренд дорого коштує. Тому мені потрібен аналог з хорошою ефективністю та приємною ціною.",
        },
      ],
    };
  },
};
</script>

<style scoped></style>
