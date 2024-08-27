import { createStore } from 'vuex'

export default createStore({
  state: {
    user: {
      first_name: "Peter",
      last_name: "Monteiro",
      email: "PeterM@email.com"
    }
  },
  getters: {
  },
  mutations: {
    storeUser(state) {
      console.log("StoreUser", state)
    }
  },
  actions: {
  },
  modules: {
  }
})
