import { MongoClient, ServerApiVersion, ObjectId } from "mongodb";
import "dotenv/config";

const uri = process.env.MONGODB_CONNECTION_STRING;

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

try {
  await client.connect();
  console.log("Database connesso con successo");
} catch (error) {
  console.error("Connessione al DB non riuscita:", error.message);
}

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
  secondVeggie,
) {
  console.log("sono arrivato addBurger");
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

export async function getBurgersByEmail(email) {
  return await client
    .db("BurgerDB")
    .collection("CreatedBurgers")
    .find({ Mail: email })
    .toArray();
}

export async function getBurgerById(id) {
  return await client
    .db("BurgerDB")
    .collection("CreatedBurgers")
    .findOne({ _id: new ObjectId(id) });
}

export async function updateBurgerToDb(id, burgerData) {
  console.log("sono arrivato update");
  let json = {
    Nome: burgerData.name || burgerData.Nome,
    Pane: burgerData.patty || burgerData.Pane,
    Proteina: burgerData.meat || burgerData.Proteina,
    SecondaProteina:
      burgerData.secondProtein ||
      burgerData.secondMeat ||
      burgerData.SecondaProteina,
    Verdure: burgerData.veggie || burgerData.Verdure,
    SecondaVerdura: burgerData.secondVeggie || burgerData.SecondaVerdura,
    Salse: burgerData.sauce || burgerData.Salse,
    SecondaSalsa: burgerData.secondSauce || burgerData.SecondaSalsa,
    Extra: burgerData.extra || burgerData.Extra,
    SecondoExtra: burgerData.secondExtra || burgerData.SecondoExtra,
    Mail: burgerData.email || burgerData.Mail,
  };
  return await client
    .db("BurgerDB")
    .collection("CreatedBurgers")
    .replaceOne({ _id: new ObjectId(id) }, json);
}

export async function removeBurgerFromDB(id) {
  return await client
    .db("BurgerDB")
    .collection("CreatedBurgers")
    .deleteOne({ _id: new ObjectId(id) });
}

export async function sendFormToDb(nome, email, input) {
  let json = { nome: nome, email: email, input: input };
  const result = await client
    .db("BurgerDB")
    .collection("FormData")
    .insertOne(json);
  console.log(`New form sent to database! ${JSON.stringify(result)}`);
}
