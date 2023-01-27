import {
    Field,
    PrimaryKey,
    TigrisCollection,
    TigrisDataTypes,
  } from "@tigrisdata/core";

  @TigrisCollection("products")
export class Product {
  @PrimaryKey(TigrisDataTypes.INT32, { order: 1, autoGenerate: true })
  id!: number;

  @Field(TigrisDataTypes.STRING)
  color: string;

  @Field(TigrisDataTypes.STRING)
  description: string;

  @Field(TigrisDataTypes.STRING)
  gender: string;

  @Field(TigrisDataTypes.STRING)
  name: string;

  @Field(TigrisDataTypes.STRING)
  reviews: string;

  @Field(TigrisDataTypes.NUMBER)
  startrating: number;

  @Field(TigrisDataTypes.NUMBER)
  price: number;

  @Field(TigrisDataTypes.ARRAY,  { elements: TigrisDataTypes.STRING })
  sizes: Array<string>

  @Field(TigrisDataTypes.STRING)
  img: string;
}