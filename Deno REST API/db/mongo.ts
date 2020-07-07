import { MongoClient } from "https://deno.land/x/mongo@v0.8.0/mod.ts";

const client = new MongoClient();

client.connectWithUri(
  "mongodb+srv://ilkinDeno:dummypassword@cluster0.oi653.mongodb.net/deno_rest?retryWrites=true&w=majority"
);

const db = client.database("screens");
console.log("db connected");

export default db;
