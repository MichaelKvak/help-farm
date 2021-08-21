<template>
  <div>
    <peopleCart
      v-for="(person, i) in peopleList"
      :key="person.id"
      :person="person"
      :index="i + 1"
    />
  </div>
</template>

<script>
import peopleCart from "./peopleCart.vue";

export default {
  components: { peopleCart },
  data() {
    return {
      peopleList: [
        {
          id: 1,
          img:
            "https://bloximages.chicago2.vip.townnews.com/pantagraph.com/content/tncms/assets/v3/editorial/1/e6/1e6e0e9b-cfad-5973-b50a-060d24f6efed/5a9d334f01298.image.jpg",
          name: "Тамара Григоріївна",
          age: 75,
          text:
            "Дитя, дай бабусі ліки від тиску за цим рецептом, але не дорогих, тих, що дешевші!",
          tablet: [],
        },
        {
          id: 2,
          img:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQboMjEtoL0mvs6nVRhNZ6YgZ4EJ2lYDUoXEJWmA3dXX3QevxixJiEyrWyMGhKEpW00lE&usqp=CAU",
          name: "Марія Петрівна",
          age: 55,
          text:
            "Лікар призначив препарат від артеріальної гіпертензії, а бренд дорого коштує. Тому мені потрібен аналог з хорошою ефективністю та приємною ціною.",
          tablet: [],
        },
        {
          id: 3,
          img:
            "https://media.istockphoto.com/photos/portrait-of-a-beautiful-young-woman-picture-id909699192?k=6&m=909699192&s=612x612&w=0&h=hjsXFVj7cTFLfyU-OSCrFkDOhL_1-Hq3j18f9tM_tvY=",
          name: "Марія",
          age: 19,
          text:
            " Бабуся приймає брендовий препарат від болю в суглобах, він допомагає, але занадто дорогий. У Вас є якісний аналог з нижчою ціною? Якщо ні — давайте бренд.",
          tablet: [],
        },
      ],
    };
  },
};
</script>

<style scoped></style>
