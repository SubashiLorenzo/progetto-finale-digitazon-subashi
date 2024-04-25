import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import {
  addBurgerToDb,
  getBurger,
  updateBurgerToDb,
  removeBurgerFromDB,
  sendFormToDb,
} from "./mongodb-connection.js";
import { config } from "dotenv";

const port = 3001;
const app = express();
app.use(bodyParser.json());
const corsOptions = {
  origin: "http://localhost:3000",
  credentials: true,
};

//app.use(express.json())
app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.post("/newburger", async (req, res) => {
  console.log("sono stato chiamato 2");

  let patty = req.body.patty;
  let meat = req.body.meat;
  let veggies = req.body.veggies;
  let sauces = req.body.sauces;
  let extra = req.body.extra;
  let secondExtra = req.body.secondExtra;
  let secondMeat = req.body.secondMeat;
  let secondVeggie = req.body.secondVeggie;
  let secondSauce = req.body.secondSauce;
  let email = req.body.email;
  let nome = req.body.nome;

  addBurgerToDb(
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
  );

  res.status(201).json({
    msg: "A new hamburger has been created!",
    patty,
    meat,
    secondMeat,
    veggies,
    sauces,
    extra,
    secondSauce,
    secondVeggie,
    secondExtra,
    email,
    nome,
  });
});

app.post("/sendform", async (req, res) => {
  console.log("sono stato chiamato form");

  let nome = req.body.nome;
  let email = req.body.email;
  let input = req.body.input;

  console.log(req.body.input);
  console.log(req.body.name);
  console.log(req.body.email);
  console.log(req.body);
  sendFormToDb(nome, email, input);

  res.status(201).json({ "Form inviato con successo": email });
});

app.get("/getBurgersByEmail/:email", async (req, res) => {
  console.log("sono stato chiamato get burgers");
  let mail = req.params.email;
  let result;
  result = await getBurger(req.params.email).then(function (result) {
    console.log("getburger: " + JSON.stringify(result));
    res.send(result);
  });
});

app.delete("/deleteburger/:email", async (req, res) => {
  console.log("sono stato chiamato delete");

  let email = req.params.email;

  console.log(email);
  removeBurgerFromDB(email);

  res.status(201).json({ "Form inviato con successo": email });
});

app.put("/updateburger/:email", async (req, res) => {
  console.log("sono stato chiamato 3");

  let patty = req.body.patty;
  let meat = req.body.meat;
  let veggie = req.body.veggie;
  let sauce = req.body.sauce;
  let extra = req.body.extra;
  let secondExtra = req.body.secondExtra;
  let secondMeat = req.body.secondProtein;
  let secondVeggie = req.body.secondVeggie;
  let secondSauce = req.body.secondSauce;
  let email = req.body.email;
  let name = req.body.name;

  updateBurgerToDb(
    name,
    email,
    patty,
    meat,
    sauce,
    veggie,
    extra,
    secondExtra,
    secondSauce,
    secondMeat,
    secondVeggie
  );

  res.status(201).json({
    msg: "A new hamburger has been created!",
    patty,
    meat,
    secondMeat,
    veggie,
    sauce,
    extra,
    secondSauce,
    secondVeggie,
    secondExtra,
    email,
    name,
  });
});

app.listen(port, () => console.log("App is running on port", port));
