require("dotenv").config()

// stripe testing key
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY)
const statusCode = 200
const headers = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "Content-Type"
}

exports.handler = async (event, context) => {
  if (event.httpMethod !== "POST" || !event.body) {
    return {
      statusCode,
      headers,
      body: JSON.stringify({
        message: "Wrong type of HTTP method"
      })
    }
  }

  console.log("starting to get down")

  //if we have an event body, an email, and a token, let's get started
  if (
    event.body &&
    event.body.stripeEmail &&
    event.body.stripeToken &&
    event.body.stripeAmt
  ) {
    stripe.customers
      .create({
        email: event.body.stripeEmail,
        source: event.body.stripeToken
      })
      .then(customer => {
        console.log("starting the stripe charges")
        stripe.charges.create({
          amount: event.body.stripeAmt,
          description: "Sample Charge",
          currency: "usd",
          customer: 1
        })
      })
      .then(charge => {
        console.log("finished the stripe charges")
        return {
          statusCode,
          body: JSON.stringify({
            message: "This has been completed"
          })
        }
      })
      .catch(err => {
        console.log(err)
      })
  } else {
    console.log(event.body)
    return {
      statusCode: 400,
      body: JSON.stringify({
        message: "We're missing something"
      })
    }
  }
}
