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

  if (!data.stripeToken || !data.stripeAmt || !data.stripeIdempotency) {
    console.error("Required information is missing.")

    return {
      statusCode: 400,
      headers,
      body: JSON.stringify({
        status: "missing-information"
      })
    }
  }

  // stripe payment processing begins here
  let charge

  try {
    charge = await stripe.charges.create(
      {
        currency: "usd",
        amount: data.stripeAmt,
        receipt_email: data.stripeEmail,
        description: "Sample Charge"
      },
      {
        idempotency_key: data.stripeIdempotency
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
      status
    })
  }
}
