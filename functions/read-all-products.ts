import { Handler } from "@netlify/functions";
import { Tigris } from "@tigrisdata/core";
import { Product } from "~/models/tigris/catalog/products";

const tigrisClient = new Tigris();

const handler: Handler = async (event, context) => {
    const collection = tigrisClient.getDatabase("catalog").getCollection<Product>("products");

    try {
        const productCursor = collection.findMany();
        const products = await productCursor.toArray();
        return {
            statusCode: 200,
            body: JSON.stringify(products)
        };
    } catch (err) {
        console.log(err);
        return {
            statusCode: 500,
            body: JSON.stringify({
                status: err
            })
        }
    }
};

export {handler};