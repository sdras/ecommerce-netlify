import { Handler } from "@netlify/functions";
import { Tigris } from "@tigrisdata/core";
import { Product } from "~/models/tigris/catalog/products";

const tigris = new Tigris({serverUrl: process.env.TIGRIS_URI, clientId: process.env.TIGRIS_CLIENT_ID, clientSecret: process.env.TIGRIS_CLIENT_SECRET});

const handler: Handler = async(event, context) => {
    const searchReq = JSON.parse(event.body);

    if (!searchReq.q) {
        console.log("search keyword is missing");
        return {
            statusCode: 400,
            body: JSON.stringify({
                status: "search keyword is missing"
            })
        }
    }

    try {
        const products = tigris.getDatabase("catalog").getCollection<Product>("products");

        const searchResult = await products.search(searchReq);

        const productHits = new Array();
        for (const hit of searchResult.hits) {
            productHits.push(hit.document);
        }
        return {
            statusCode: 200,
            body: JSON.stringify(productHits)
        }
    } catch (err) {
        console.log(err)
        return {
            statusCode: 500,
            body: JSON.stringify({
                status: err
            })
        }
    }
};

export { handler };