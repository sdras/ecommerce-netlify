require("dotenv").config()

// stripe testing key
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY)
const headers = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "Content-Type"
}

exports.handler = async (event, context) => {
  if (!event.body || event.httpMethod !== "POST") {
    return {
      statusCode: 400,
      headers,
      body: JSON.stringify({
        status: "invalid-method"
      })
    }
  }

  const data = JSON.parse(event.body)

  if (!data.token || !data.amount || !data.idempotency_key) {
    console.error("Required information is missing.")

    return {
      statusCode: 400,
      headers,
      body: JSON.stringify({
        status: "missing-information"
      })
    }
  }

  /* Do stripe payment processing */
  let charge
  try {
    charge = await stripe.charges.create(
      {
        currency: "usd",
        amount: data.stripeAmt,
        description: "Sample Charge",
        customer: 1
      },
      {
        idempotency_key: data.idempotency_key
      }
    )
  } catch (err) {
    console.log(err)
  }
  const status =
    !charge || charge.status !== "succeeded" ? "failed" : charge.status
  return {
    statusCode: 200,
    headers,
    body: JSON.stringify({
      status: status
    })
  }
}
