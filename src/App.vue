<template>
    <div>

      <img alt="Vue logo" src="./assets/logo.png"> <br>

        <AppAllProducts />
        <button  @click="updateUser()">
          Atualizar Perfil
        </button>
      <HelloWorld msg="Welcome to Your Vue.js App"/>

    </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import AppAllProducts from './components/Products/ProductList.vue';

export default {
  name: 'App',
  components: {
    HelloWorld,
    AppAllProducts,
  },
  data() {
    return {

    }
  },

  methods: {
    updateUser() {
      const newUser = {
      first_name: "Michael",
      last_name: "Johnson",
      email: "MikeJH@email.com"
    }

    console.log("Esse vem da mutation", this.$store.commit("storeUser", newUser))

    }
  },

  created() {
    console.log("Esse vem do store", this.$store) // Store

    // O segundo parâmetro será o dado que  vai ser atualizado.
    // const newUser = {
    //   first_name: "Michael",
    //   last_name: "Johnson",
    //   email: "MikeJH@email.com"
    // }
    // console.log("Esse vem da mutation", this.$store.commit("storeUser", newUser))
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

body{
  background-color: #b9dfce;
}

button {
  margin-top: 50px;
}

img{
  margin-bottom: 40px;
}
</style>
