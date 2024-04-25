import { MongoClient, ServerApiVersion } from "mongodb";
import "dotenv/config";
const uri = process.env.MONGODB_CONNECTION_STRING;

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

await client.connect();

export async function addBurgerToDb(
  client,
  nome,
  email,
  patty,
  meat,
  sauces,
  veggies,
  extra,
  secondExtra,
  secondSauce,
  secondMeat,
  secondVeggie
) {
  let json = {
    Nome: nome,
    Pane: patty,
    Proteina: meat,
    "Seconda Proteina": secondMeat,
    Verdure: veggies,
    "Seconda verdura": secondVeggie,
    Salse: sauces,
    "Seconda salsa": secondSauce,
    Extra: extra,
    "Secondo extra": secondExtra,
    Mail: email,
  };
  const result = await client
    .db("BurgerDB")
    .collection("CreatedBurgers")
    .insertOne(json);
  console.log(`New burger created: ${result}`);
  await client.close();
}

export async function addBurgerToDb(
  client,
  nome,
  email,
  patty,
  meat,
  sauces,
  veggies,
  extra,
  secondExtra,
  secondSauce,
  secondMeat,
  secondVeggie
) {
  let json = {
    Nome: nome,
    Pane: patty,
    Proteina: meat,
    "Seconda Proteina": secondMeat,
    Verdure: veggies,
    "Seconda verdura": secondVeggie,
    Salse: sauces,
    "Seconda salsa": secondSauce,
    Extra: extra,
    "Secondo extra": secondExtra,
    Mail: email,
  };
  const result = await client
    .db("BurgerDB")
    .collection("CreatedBurgers")
    .insertOne(json);
  console.log(`New burger created: ${JSON.stringifyresult}`);
  await client.close();
}
