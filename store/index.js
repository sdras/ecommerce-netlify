export const state = () => ({
  cartUIStatus = 'idle'
})

// export const getters = {
//   getterValue: state => {
//     return state.value
//   }
// }

export const mutations = {
  updateCartUI: (state, payload) => {
    state.cartUIStatus = payload
  }
}

export const actions = {
  async postStripeFunction({ commit }) {
    try {
      commit('updateCartUI', payload)
    }
    catch (err) {
      console.log(err)
    }
    
  }
}