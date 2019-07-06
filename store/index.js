import axios from "axios"
import uuidv1 from "uuid/v1"
import data from "~/static/storedata.json"

export const state = () => ({
  cartUIStatus: "idle",
  totalAmt: 50,
  cartCount: 0,
  storedata: data
})

export const getters = {
  featuredProducts: state => {
    return state.storedata.slice(0, 3)
  },
  women: state => {
    return state.storedata.filter(el => el.gender === "female")
  }
}

export const mutations = {
  updateCartUI: (state, payload) => {
    state.cartUIStatus = payload
  },
  clearCartCount: state => {
    ;(state.cartCount = 0), (state.totalAmt = 0), (state.cartUIStatus = "idle")
  }
}

export const actions = {
  async postStripeFunction({ state, commit }, payload) {
    commit("updateCartUI", "loading")

    try {
      await axios
        .post(
          "https://ecommerce-netlify.netlify.com/.netlify/functions/index",
          {
            stripeEmail: payload.stripeEmail,
            stripeAmt: state.totalAmt,
            stripeToken: "tok_visa", //testing token, later we would use payload.data.token
            stripeIdempotency: uuidv1() //we use this library to create a unique id
          },
          {
            headers: {
              "Content-Type": "application/json"
            }
          }
        )
        .then(res => {
          if (res.status === 200) {
            commit("updateCartUI", "success")
            commit("clearCartCount")
          } else {
            commit("updateCartUI", "failure")
          }

          console.log(JSON.stringify(res, null, 2))
        })
    } catch (err) {
      console.log(err)
      commit("updateCartUI", "failure")
    }
  }
}
