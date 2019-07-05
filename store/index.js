import axios from "axios"
import uuidv1 from "uuid/v1"

export const state = () => ({
  cartUIStatus: "idle",
  totalAmt: 50,
  cartCount: 0
})

// export const getters = {
//   getterValue: state => {
//     return state.value
//   }
// }

export const mutations = {
  updateCartUI: (state, payload) => {
    state.cartUIStatus = payload
  },
  clearCartCount: state => {
    ;(state.cartCount = 0), (state.totalAmt = 0), (cartUIStatus = "idle")
  }
}

export const actions = {
  async postStripeFunction({ state, commit }, payload) {
    console.log(payload)

    try {
      axios
        .post(
          "https://ecommerce-netlify.netlify.com/.netlify/functions/index",
          {
            stripeEmail: payload.stripeEmail,
            stripeToken: "tok_visa", //testing token, later we would use payload.data.token
            stripeAmt: state.stripeAmt,
            stripeIdempotency: uuidv1()
          },
          {
            headers: {
              "Content-Type": "application/json"
            }
          }
        )
        .then(response => {
          commit("updateCartUI", "success")
          commit("clearCartCount")
          console.log(JSON.stringify(response, null, 2))
        })
    } catch (err) {
      console.log(err)
      commit("updateCartUI", "failure")
    }
  }
}
