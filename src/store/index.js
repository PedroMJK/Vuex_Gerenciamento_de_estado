// O state é o local centralizado onde os dados reativos da aplicação são armazenados e compartilhados entre componentes.
// Uma mutation serve para modificar o estado (state) de forma síncrona dentro da store.
// Uma action serve para lidar com operações assíncronas e para comitar mutations que alteram o estado.
// Os getters servem para computar e retornar valores derivados do estado de forma reativa e reutilizável.
// Os modules servem para organizar o estado e a lógica em módulos independentes, facilitando a escalabilidade da store em aplicações grandes.

import { createStore } from 'vuex'

export default createStore({
  state: {
    user: {
      first_name: "Peter",
      last_name: "Monteiro",
      email: "PeterM@email.com"
    },

    // Simulando produtos para um e-commerce
    availableProducts: [
      {
        id: 1,
        name: 'Smartphone',
        price: 1400
      },
      {
        id: 2,
        name: 'Smart TV',
        price: 1800
      },
      {
        id: 3,
        name: 'VideoGame',
        price: 2100
      },
    ],
    shoppingCart: []
  },
  getters: {
  },
  mutations: {
    storeUser(state, data) {
      state.user = data
    },

    addToCart(state, data) {
      state.shoppingCart.push(data)
      console.log(`Produto adicionado ao carrinho: ${data.name}, Price: ${data.price}`);
    },

    removeFromCart(state, id) {
      const idx = state.shoppingCart.findIndex((item) => item.id === id)
      if (idx !== -1) {
        const removedProduct = state.shoppingCart[idx];
        state.shoppingCart.splice(idx, 1);
        console.log(`Produto removido do carrinho: ${removedProduct.name}`);
      }
    }
  },
  actions: {
  },
  modules: {
  }
})
