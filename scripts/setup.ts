import { Tigris, TigrisClientConfig } from '@tigrisdata/core';
import { loadTigrisManifest } from './manifest-loader';
import data from '../static/storedata.json';
import * as dotenv from "dotenv";

async function main() {
  dotenv.config({ path: `.env.${process.env.NODE_ENV}` })

  const tigrisFileManifest = loadTigrisManifest();

  if (!process.env.TIGRIS_URI) {
    console.log('TIGRIS_URI is missing in environment');
    process.exit(1);
  }
  console.log(`Connecting to Tigris at ${process.env.TIGRIS_URI}`);

    // setup client
  const tigrisClient = new Tigris({serverUrl: process.env.TIGRIS_URI});
  console.log(`Using Tigris at ${process.env.TIGRIS_URI}`);

  for (const dbManifest of tigrisFileManifest) {
    // create DB
    const tigrisDb = await tigrisClient.createDatabaseIfNotExists(dbManifest.dbName);
    console.log(`Created database: ${dbManifest.dbName}`);

    for (const coll of dbManifest.collections) {
      // Create a collection
      const collection = await tigrisDb.createOrUpdateCollection(coll.collectionName, coll.schema);
      console.log(
        `Created collection: ${collection.collectionName} from schema: ${coll.schemaName} in db: ${dbManifest.dbName}`
      );

      // load some data
      const inserted = await collection.insertOrReplaceMany(data);
      console.log(`Inserted ${inserted.length} documents`);
    }
  }
}

main();