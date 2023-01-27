import { Handler } from "@netlify/functions";
import tigrisDB from "~/lib/tigris";
import { Product } from "~/db/models/products";

const handler: Handler = async (event, context) => {
    const productCollection = tigrisDB.getCollection<Product>(Product);

    try {
        const productCursor = productCollection.findMany();
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