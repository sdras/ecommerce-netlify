import { Tigris, TigrisClientConfig } from '@tigrisdata/core';
import data from '../static/storedata.json';
import * as dotenv from "dotenv";

dotenv.config({ path: `.env.${process.env.NODE_ENV}` })

async function main() {
  if (!process.env.TIGRIS_URI) {
    console.log('Cannot find TIGRIS_URI environment variable ');
    process.exit(1);
  }
  // setup client & register schemas
  const tigrisClient = new Tigris();
  await tigrisClient.registerSchemas('models/tigris');

  // load some data in products collection
  const products = tigrisClient.getDatabase("catalog").getCollection("products");
  const inserted = await products.insertOrReplaceMany(data);
  console.log(`Inserted ${inserted.length} documents`);
}

main();