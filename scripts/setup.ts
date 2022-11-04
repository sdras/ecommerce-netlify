import * as dotenv from "dotenv";
dotenv.config({ path: `.env.${process.env.NODE_ENV}` })

import { Tigris } from '@tigrisdata/core';
import data from '../static/storedata.json';

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

main()
  .then(async () => {
    console.log("Setup complete ...");
  })
  .catch(async (e) => {
    console.error(e);
    process.exit(1);
  });