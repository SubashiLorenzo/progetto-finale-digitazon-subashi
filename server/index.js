import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import {
  addBurgerToDb,
  getBurgersByEmail,
  getBurgerById,
  updateBurgerToDb,
  removeBurgerFromDB,
  sendFormToDb,
} from "./mongodb-connection.js";

const port = 3001;
const app = report || express();

const corsOptions = {
  origin: "http://localhost:3000",
  credentials: true,
};

app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(express.json());

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

  await addBurgerToDb(
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
  await sendFormToDb(nome, email, input);

  res.status(201).json({ "Form inviato con successo": email });
});

app.get("/getBurgersByEmail/:email", async (req, res) => {
  console.log("sono stato chiamato get burgers");
  let result = await getBurgersByEmail(req.params.email);
  console.log("getburger: " + JSON.stringify(result));
  res.send(result);
});

app.get("/getBurgerById/:id", async (req, res) => {
  let result = await getBurgerById(req.params.id);
  res.send(result);
});

app.put("/updateburger/:id", async (req, res) => {
  console.log("sono stato chiamato 3");
  await updateBurgerToDb(req.params.id, req.body);
  res.status(201).json({ msg: "Panino aggiornato con successo" });
});

app.delete("/deleteburger/:id", async (req, res) => {
  console.log("sono stato chiamato delete");
  await removeBurgerFromDB(req.params.id);
  res.status(201).json({ "Form inviato con successo": req.params.id });
});

app.listen(port, () => console.log("App is running on port", port));
