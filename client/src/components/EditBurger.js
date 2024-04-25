import { React, useEffect, useState } from "react";
import { useLocation } from "react-router";
import { Link, useParams } from "react-router-dom";

export function EditBurger() {
  let [patty, setPatty] = useState("");
  let [meat, setMeat] = useState("");
  let [secondProtein, setSecondProtein] = useState("");
  let [veggie, setVeggie] = useState("");
  let [secondVeggie, setSecondVeggie] = useState("");
  let [extra, setExtra] = useState("");
  let [secondExtra, setSecondExtra] = useState("");
  let [name, setName] = useState("");
  let [sauce, setSauce] = useState("");
  let [secondSauce, setSecondSauce] = useState("");

  let { email } = useParams();

  const handlePattyChange = (event) => {
    patty = event.target.value;
    console.log(event.target.value);
  };
  const handleVeggiesChange = (event) => {
    veggie = event.target.value;
    console.log(event.target.value);
  };
  const handleMeatChange = (event) => {
    meat = event.target.value;
    console.log(event.target.value);
  };
  const handleSaucesChange = (event) => {
    sauce = event.target.value;
    console.log(event.target.value);
  };
  const handleExtraChange = (event) => {
    extra = event.target.value;
    console.log(event.target.value);
  };
  const handleSecondExtraChange = (event) => {
    secondExtra = event.target.value;
    console.log(event.target.value);
  };

  const handleSecondVeggieChange = (event) => {
    secondVeggie = event.target.value;
    console.log(event.target.value);
  };

  const handleSecondSauceChange = (event) => {
    secondSauce = event.target.value;
    console.log(event.target.value);
  };

  const handleSecondMeatChange = (event) => {
    secondProtein = event.target.value;
    console.log(event.target.value);
  };

  const handleNameChange = (event) => {
    name = event.target.value;
    console.log(event.target.value);
  };

  const handleMailChange = (event) => {
    email = event.target.value;
    console.log(event.target.value);
  };

  console.log("email arrivata: " + email);
  useEffect(() => {
    async function findBurger(event) {
      console.log("preso valore");
      //event.preventDefault();
      let res = await fetch("http://localhost:3001/getBurgersByEmail/" + email);
      let panini = await res.json();
      console.log("semo passati:" + JSON.stringify(panini));
      console.log(panini);
      console.log(JSON.stringify(panini));

      if (panini[0] !== "" || panini[0] !== null || panini[0] !== undefined) {
        setMeat(panini[0].Proteina);
        setPatty(panini[0].Pane);
        setSecondProtein(panini[0].SecondaProteina);
        setVeggie(panini[0].Verdure);
        setSecondVeggie(panini[0].SecondaVerdura);
        setExtra(panini[0].Extra);
        setSecondExtra(panini[0].SecondoExtra);
        setName(panini[0].Nome);
        setSauce(panini[0].Salse);
        setSecondSauce(panini[0].SecondaSalsa);
        console.log(name);
      }
    }
    findBurger();
  }, []);

  async function updateBurger(event) {
    const r = {
      method: "PUT",
      headers: {
        // Accept: "application/json",
        "Content-Type": "application/json",
        //"Access-Control-Allow-Origin": "*"
      },
      body: JSON.stringify({
        patty,
        meat,
        veggie,
        sauce,
        extra,
        secondExtra,
        secondProtein,
        secondSauce,
        secondVeggie,
        email,
        name,
      }),
    };
    let res = await fetch("http://localhost:3001/updateburger/" + email, r);
    alert("PANINO AGGIORNATO");
  }

  async function deleteBurger(event) {
    /*     console.log(meat); */

    let res = await fetch("http://localhost:3001/deleteburger/" + email, {
      method: "DELETE",
    });
    //let json = await res.json();

    // alert(json);
  }

  return (
    <>
      <header className="header">
        <a className="text" href="http://localhost:3000/home">
          HOME
        </a>
        <img className="logo" alt="logo" src="./logostreet.png" />
        <a className="text" href="http://localhost:3000/search">
          CERCA!
        </a>
      </header>
      <main id="body">
        <p className="main-title-contact">VISUALIZZA IL TUO STREETBURGER</p>
        <form id="display-burger">
          <label>SCEGLI IL PANE</label>
          <select onChange={handlePattyChange}>
            <option value={patty}>{patty}</option>
            <option value={"PANINO CLASSICO STREETBURGERS"}>
              PANINO CLASSICO STREETBURGERS
            </option>
            <option value={"PANINO VERDE ALL'AVOCADO"}>
              PANINO VERDE ALL'AVOCADO
            </option>
            <option value={"PANINO ROSSO ALLA RAPA"}>
              PANINO ROSSO ALLA RAPA
            </option>
            <option value={"PANINO ALLA FARINA DI CECI(VEGAN/VEGETARIAN)"}>
              PANINO ALLA FARINA DI CECI(VEGAN/VEGETARIAN)
            </option>
            <option value={"NESSUN PANINO(AL PIATTO)"}>
              NESSUN PANINO(AL PIATTO)
            </option>
          </select>
          <br></br>
          <label>SCEGLI LA PROTEINA</label>
          <select onChange={handleMeatChange}>
            <option value={meat}>{meat}</option>
            <option value={"HAMBURGER DI MANZO"}>HAMBURGER DI MANZO</option>
            <option value={"COTOLETTA DI POLLO"}>COTOLETTA DI POLLO</option>
            <option value={"HAMBURGER VEGETALE"}>HAMBURGER VEGETALE</option>
            <option value={"HAMBURGER VEGANO"}>HAMBURGER VEGANO</option>
            <option value={"HAMBURGER DI SALSICCIA"}>
              HAMBURGER DI SALSICCIA
            </option>
          </select>
          <br></br>
          <select onChange={handleSecondMeatChange}>
            <option value={meat}>{meat}</option>
            <option value={"HAMBURGER DI MANZO"}>HAMBURGER DI MANZO</option>
            <option value={"COTOLETTA DI POLLO"}>COTOLETTA DI POLLO</option>
            <option value={"HAMBURGER VEGETALE"}>HAMBURGER VEGETALE</option>
            <option value={"HAMBURGER VEGANO"}>HAMBURGER VEGANO</option>
            <option value={"HAMBURGER DI SALSICCIA"}>
              HAMBURGER DI SALSICCIA
            </option>
          </select>
          <br></br>
          <label>SCEGLI LE VERDURE</label>
          <select onChange={handleVeggiesChange}>
            <option value={veggie}>{veggie}</option>
            <option value={"INSALATA"}>INSALATA</option>
            <option value={"POMODORO"}>POMODORO</option>
            <option value={"PEPERONI"}>PEPERONI</option>
            <option value={"VERZA"}>VERZA</option>
            <option value={"MELANZANE GRIGLIATE"}>MELANZANE GRIGLIATE</option>
            <option value={"ZUCCHINE GRIGLIATE"}>ZUCCHINE GRIGLIATE</option>
          </select>
          <br></br>
          <select onChange={handleSecondVeggieChange}>
            <option value={secondVeggie}>{secondVeggie}</option>
            <option value={"INSALATA"}>INSALATA</option>
            <option value={"POMODORO"}>POMODORO</option>
            <option value={"PEPERONI"}>PEPERONI</option>
            <option value={"VERZA"}>VERZA</option>
            <option value={"MELANZANE GRIGLIATE"}>MELANZANE GRIGLIATE</option>
            <option value={"ZUCCHINE GRIGLIATE"}>ZUCCHINE GRIGLIATE</option>
          </select>
          <br></br>
          <label>SCEGLI LE SALSE</label>
          <select onChange={handleSaucesChange}>
            <option value={sauce}>{sauce}</option>
            <option value={"MAIONESE"}>MAIONESE</option>
            <option value={"KETCHUP"}>KETCHUP</option>
            <option value={"SALSA BBQ"}>SALSA BBQ</option>
            <option value={"SALSA CHEDDAR"}>SALSA CHEDDAR</option>
            <option value={"SENAPE"}>SENAPE</option>
            <option value={"SALSA STREETBURGERS"}>SALSA STREETBURGERS</option>
          </select>
          <br></br>
          <select onChange={handleSecondSauceChange}>
            <option value={secondSauce}>{secondSauce}</option>
            <option value={"MAIONESE"}>MAIONESE</option>
            <option value={"KETCHUP"}>KETCHUP</option>
            <option value={"SALSA BBQ"}>SALSA BBQ</option>
            <option value={"SALSA CHEDDAR"}>SALSA CHEDDAR</option>
            <option value={"SENAPE"}>SENAPE</option>
            <option value={"SALSA STREETBURGERS"}>SALSA STREETBURGERS</option>
          </select>
          <br></br>
          <label>EXTRA</label>
          <select onChange={handleExtraChange}>
            <option value={extra}>{extra}</option>
            <option value={"CIPOLLA CARAMELLATA"}>CIPOLLA CARAMELLATA</option>
            <option value={"BACON"}>BACON</option>
            <option value={"ONION RING"}>ONION RING</option>
            <option value={"CREMA DI PATATE"}>CREMA DI PATATE</option>
            <option value={"CHEDDAR"}>CHEDDAR</option>
            <option value={"MOZZARELLA"}>MOZZARELLA</option>
            <option value={"BURRATA"}>BURRATA</option>
          </select>
          <br></br>
          <select onChange={handleSecondExtraChange}>
            <option value={secondExtra}>{secondExtra}</option>
            <option value={"CIPOLLA CARAMELLATA"}>CIPOLLA CARAMELLATA</option>
            <option value={"BACON"}>BACON</option>
            <option value={"ONION RING"}>ONION RING</option>
            <option value={"CREMA DI PATATE"}>CREMA DI PATATE</option>
            <option value={"CHEDDAR"}>CHEDDAR</option>
            <option value={"MOZZARELLA"}>MOZZARELLA</option>
            <option value={"BURRATA"}>BURRATA</option>
          </select>
          <br></br>
          <div className="editordelete">
            {" "}
            <Link to={"/home"} onClick={updateBurger} className="btn-save">
              MODIFICA BURGER
            </Link>
            <hr />
            <hr />
            <Link to={"/home"} onClick={deleteBurger} className="btn-delete">
              ELIMINA BURGER
            </Link>
          </div>
        </form>
      </main>
      <footer>
        <ul className="footer">
          <li>
            <a className="footer-text" href="http://localhost:3000/about">
              CHI SIAMO
            </a>
          </li>
          <li>DIGITAZON FINAL PROJECT</li>
          <li>PRIVACY POLICY</li>
          <a className="footer-text" href="http://localhost:3000/contact">
            CONTATTACI
          </a>
        </ul>
      </footer>
    </>
  );
}

export default EditBurger;
