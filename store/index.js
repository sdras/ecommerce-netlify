import axios from "axios"
import uuidv1 from "uuid/v1"
import data from "~/static/storedata.json"

export const state = () => ({
  cartUIStatus: "idle",
  storedata: data,
  cart: []
})

export const getters = {
  featuredProducts: state => {
    return state.storedata.slice(0, 3)
  },
  women: state => {
    return state.storedata.filter(el => el.gender === "Female")
  },
  men: state => {
    return state.storedata.filter(el => el.gender === "Male")
  },
  cartCount: state => {
    if (!state.cart.length) return 0
    return state.cart.reduce((ac, next) => ac + next.quantity, 0)
  },
  cartTotal: state => {
    if (!state.cart.length) return 0
    return state.cart.reduce((ac, next) => ac + next.quantity * next.price, 0)
  }
}

export const mutations = {
  updateCartUI: (state, payload) => {
    state.cartUIStatus = payload
  },
  clearCart: state => {
    //this should just clear the cart
    ;(state.cart = []), (state.cartUIStatus = "idle")
  },
  addToCart: (state, payload) => {
    // this should check first if the item exists and add to the item if so
    state.cart.push(payload)
  }
}

export const actions = {
  async postStripeFunction({ getters, commit }, payload) {
    commit("updateCartUI", "loading")

    try {
      await axios
        .post(
          "https://ecommerce-netlify.netlify.com/.netlify/functions/index",
          {
            stripeEmail: payload.stripeEmail,
            stripeAmt: Math.floor(getters.cartTotal * 100), //it expects the price in cents, as an integer
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
            commit("clearCart")
          } else {
            commit("updateCartUI", "failure")
            // allow them to try again
            setTimeout(() => {
              commit("updateCartUI", "idle")
            }, 2000)
          }

          console.log(JSON.stringify(res, null, 2))
        })
    } catch (err) {
      console.log(err)
      commit("updateCartUI", "failure")
    }
  }
}
