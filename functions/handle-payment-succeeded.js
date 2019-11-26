// Webhook that listens for events sent from Stripe
// Requires configuration in the Stripe Dashboard
// For more information read https://stripe.com/docs/webhooks
require("dotenv").config();

const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

// Create your webhook in the Stripe dashboard at https://dashboard.stripe.com/webhooks
// Use the secret listed in the "Signing secret" section
const endpointSecret = process.env.STRIPE_WEBHOOK_SECRET;

exports.handler = async (event, context) => {
  const sig = event.headers["stripe-signature"];
  let stripeEvent;

  try {
    // Verifies that the event was sent by Stripe and deserializes the event
    stripeEvent = stripe.webhooks.constructEvent(
      event.body,
      sig,
      endpointSecret
    );
  } catch (err) {
    return { statusCode: 400 };
  }

  // Handle the event
  switch (stripeEvent.type) {
    case "payment_intent.succeeded":
      const paymentIntent = stripeEvent.data.object;
      console.log('object', paymentIntent)
      console.log(
        "Payment was successful! Charge information:",
        paymentIntent.charges.data.filter(charge => charge.status === "succeeded")
      );
      break;
    case "charge.dispute.created":
      const charge = stripeEvent.data.object;
      console.log("Someone disputed a payment!");
      break;
    // ... handle other event types
    default:
      // Unexpected event type
      return { statusCode: 400 };
  }

  // Return a 200 response to acknowledge receipt of the event
  return { statusCode: 200 };
};
