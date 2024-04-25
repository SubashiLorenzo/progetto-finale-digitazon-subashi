import { MongoClient, ServerApiVersion } from "mongodb";
import "dotenv/config";
import express from "express";
const uri =
  "mongodb+srv://lorenzooo:j6YU8IlomgOQRz7h@cluster-test.e8wtox3.mongodb.net/?retryWrites=true&w=majority&appName=Cluster-test";
import cors from "cors";
import bodyParser from "body-parser";

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});
const app = express();
const corsOptions = {
  origin: "http://localhost:3001",
  credentials: true,
};
app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(express.json());
app.use(cors());

await client.connect();

export async function addBurgerToDb(
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
  console.log("sono arrivato");
  let json = {
    Nome: nome,
    Pane: patty,
    Proteina: meat,
    SecondaProteina: secondMeat,
    Verdure: veggies,
    SecondaVerdura: secondVeggie,
    Salse: sauces,
    SecondaSalsa: secondSauce,
    Extra: extra,
    SecondoExtra: secondExtra,
    Mail: email,
  };
  const result = await client
    .db("BurgerDB")
    .collection("CreatedBurgers")
    .insertOne(json);
  console.log(`New burger created: ${JSON.stringify(result)}`);
}

export async function removeBurgerFromDB(email) {
  const result = await client
    .db("BurgerDB")
    .collection("CreatedBurgers")
    .deleteMany({ Mail: email });
  console.log(`New burger deleted from database: ${JSON.stringify(result)}`);
  return JSON.stringify(result);
}

await client.connect();
export async function sendFormToDb(nome, email, input) {
  let json = {
    nome: nome,
    email: email,
    input: input,
  };
  const result = await client

    .db("BurgerDB")
    .collection("FormData")
    .insertOne(json);
  console.log(`New form sent to database! ${JSON.stringify(result)}`);
}

await client.connect();
export async function getBurger(email) {
  //await client.connect();

  const result = await client
    .db("BurgerDB")
    .collection("CreatedBurgers")
    .find({ Mail: email })
    .toArray();
  console.log(`New burger found! ${JSON.stringify(result)}`);

  return result;
}

export async function updateBurgerToDb(
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
  console.log("sono arrivato update");
  let json = {
    Nome: nome,
    Pane: patty,
    Proteina: meat,
    SecondaProteina: secondMeat,
    Verdure: veggies,
    SecondaVerdura: secondVeggie,
    Salse: sauces,
    SecondaSalsa: secondSauce,
    Extra: extra,
    SecondoExtra: secondExtra,
    Mail: email,
  };
  const result = await client
    .db("BurgerDB")
    .collection("CreatedBurgers")
    .replaceOne({ Mail: email }, json);
  console.log(`New burger updated: ${JSON.stringify(result)}`);
}
