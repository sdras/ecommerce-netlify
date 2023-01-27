// An endpoint that calculates the order total and creates a
// PaymentIntent on Stripe

import tigrisDB from "~/lib/tigris";
import { Product } from "../db/models/products";

require("dotenv").config();
const axios = require("axios");
const stripeCreatePayment = require("stripe")(process.env.STRIPE_SECRET_KEY),
  headers = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "Content-Type",
  };

exports.handler = async (event, context) => {
  // CORS
  if (event.httpMethod === "OPTIONS") {
    return {
      statusCode: 200,
      headers,
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
        status: "missing information",
      }),
    };
  }

  const productCollection = tigrisDB.getCollection<Product>(Product);

  // Stripe payment processing begins here
  try {
    // Always calculate the order amount on your server to prevent customers
    // from manipulating the order amount from the client
    // Here we will use a simple json file to represent inventory
    // but you could replace this with a DB lookup
    let amount = 0;
    for (let item of data.items) {
      const product = await productCollection.findOne({
        filter: { id: item.id },
      });

      if (product == undefined) {
        continue;
      }

      amount = amount + product.price * item.quantity;
    }

    console.log("amount charging ", amount);

    // Create a PaymentIntent on Stripe
    // A PaymentIntent represents your customer's intent to pay
    // and needs to be confirmed on the client to finalize the payment
    const paymentIntent = await stripeCreatePayment.paymentIntents.create({
      currency: "usd",
      amount: amount,
      description: "Order from store",
    });

    // Send the client_secret to the client
    // The client secret has a limited set of permissions that
    // let you finalize the payment and update some details from the client
    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({
        clientSecret: paymentIntent.client_secret,
      }),
    };
  } catch (err) {
    console.log(err);

    return {
      statusCode: 400,
      headers,
      body: JSON.stringify({
        status: err,
      }),
    };
  }
};
