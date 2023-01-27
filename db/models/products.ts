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

  @Field()
  color: string;

  @Field()
  description: string;

  @Field()
  gender: string;

  @Field()
  name: string;

  @Field()
  reviews: string;

  @Field()
  startrating: number;

  @Field()
  price: number;

  @Field(TigrisDataTypes.ARRAY,  { elements: TigrisDataTypes.STRING })
  sizes: Array<string>

  @Field()
  img: string;
}