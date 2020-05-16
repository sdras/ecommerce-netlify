// An endpoint that calculates the order total and creates a 
// PaymentIntent on Stripe 

require("dotenv").config();
const axios = require("axios");
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY),
  headers = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "Content-Type"
  };

exports.handler = async (event, context) => {
  // CORS
  if (event.httpMethod === "OPTIONS") {
    return {
      statusCode: 200,
      headers
    };
  }

  const data = JSON.parse(event.body);
  console.log(data);

  if (!data.items) {
    console.error("List of items to purchase is missing.");

    return {
      statusCode: 400,
      headers,
      body: JSON.stringify({
        status: "missing information"
      })
    };
  }

  // Stripe payment processing begins here
  try {
    // Always calculate the order amount on your server to prevent customers
    // from manipulating the order amount from the client
    // Here we will use a simple json file to represent inventory
    // but you could replace this with a DB lookup
    const storeDatabase = await axios.get(
      "https://wizardly-sinoussi-7841d1.netlify.com/storedata.json"
    );

    const amount = data.items.reduce((prev, item) => {
      // lookup item information from "database" and calculate total amount
      const itemData = storeDatabase.data.find(
        storeItem => storeItem.id === item.id
      );
      return prev + itemData.price * 100 * item.quantity;
    }, 0);

    // Create a PaymentIntent on Stripe
    // A PaymentIntent represents your customer's intent to pay
    // and needs to be confirmed on the client to finalize the payment
    const paymentIntent = await stripe.paymentIntents.create({
      currency: "usd",
      amount: amount,
      description: "Order from store"
    });

    // Send the client_secret to the client
    // The client secret has a limited set of permissions that
    // let you finalize the payment and update some details from the client
    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({
        clientSecret: paymentIntent.client_secret
      })
    };
  } catch (err) {
    console.log(err);

    return {
      statusCode: 400,
      headers,
      body: JSON.stringify({
        status: err
      })
    };
  }
};
