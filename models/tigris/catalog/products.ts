import { TigrisCollectionType, TigrisSchema, TigrisDataTypes } from "@tigrisdata/core/dist/types";

 export interface Product extends TigrisCollectionType {
    id: string;
    color: string;
    description: string;
    gender?: string;
    name: string;
    review: string;
    starrating: number;
    price: number;
    sizes: string[];
    img: string;
 };

 export const ProductSchema: TigrisSchema<Product> = {
    id: {
        type: TigrisDataTypes.STRING,
        primary_key: {
            order:1
        }
    },
    color: {
        type: TigrisDataTypes.STRING
    },
    description: {
        type: TigrisDataTypes.STRING
    },
    gender: {
        type: TigrisDataTypes.STRING
    },
    name: {
        type: TigrisDataTypes.STRING
    },
    review: {
        type: TigrisDataTypes.STRING
    },
    starrating: {
        type: TigrisDataTypes.NUMBER
    },
    price: {
        type: TigrisDataTypes.NUMBER
    },
    sizes: {
        type: TigrisDataTypes.ARRAY,
        items: {
            type: TigrisDataTypes.STRING
        }
    },
    img: {
        type: TigrisDataTypes.STRING
    }
 }