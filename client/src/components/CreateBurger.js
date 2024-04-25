import React from "react";

function CreateBurger() {
  let patty = "";
  let veggies = "";
  let meat = "";
  let sauces = "";
  let extra = "";
  let secondExtra = "";
  let secondVeggie = "";
  let secondSauce = "";
  let secondMeat = "";
  let email = "";
  let nome = "";

  const handlePattyChange = (event) => {
    patty = event.target.value;
    console.log(event.target.value);
  };
  const handleVeggiesChange = (event) => {
    veggies = event.target.value;
    console.log(event.target.value);
  };
  const handleMeatChange = (event) => {
    meat = event.target.value;
    console.log(event.target.value);
  };
  const handleSaucesChange = (event) => {
    sauces = event.target.value;
    console.log(event.target.value);
  };
  const handleExtraChange = (event) => {
    extra = event.target.value;
  };
  const handleSecondExtraChange = (event) => {
    secondExtra = event.target.value;
  };

  const handleSecondVeggieChange = (event) => {
    secondVeggie = event.target.value;
  };

  const handleSecondSauceChange = (event) => {
    secondSauce = event.target.value;
  };

  const handleSecondMeatChange = (event) => {
    secondMeat = event.target.value;
  };

  const handleNameChange = (event) => {
    nome = event.target.value;
  };

  const handleMailChange = (event) => {
    email = event.target.value;
  };

  async function saveBurger(event) {
    event.preventDefault();

    let res = await fetch("http://localhost:3001/newburger", {
      method: "POST",
      body: JSON.stringify({
        patty: patty,
        meat: meat,
        veggies: veggies,
        sauces,
        extra,
        secondExtra,
        secondMeat,
        secondSauce,
        secondVeggie,
        email,
        nome,
      }),
      headers: {
        // Accept: "application/json",
        "Content-Type": "application/json",
        //"Access-Control-Allow-Origin": "*"
      },
    });
    let json = await res.json();
    //console.log(json);
    // const json = await res.json()
    alert("PANINO CREATO NEL DATABASE");
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
        <form id="create-container" label="create-container">
          <p className="main-title-contact">CREA IL TUO STREETBURGER</p>
          <label>SCEGLI IL PANE</label>
          <select onChange={handlePattyChange}>
            <option value={"--"}>--</option>
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
            <option value={"--"}>--</option>
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
            <option value={"--"}>--</option>
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
            <option value={"--"}>--</option>
            <option value={"INSALATA"}>INSALATA</option>
            <option value={"POMODORO"}>POMODORO</option>
            <option value={"PEPERONI"}>PEPERONI</option>
            <option value={"VERZA"}>VERZA</option>
            <option value={"MELANZANE GRIGLIATE"}>MELANZANE GRIGLIATE</option>
            <option value={"ZUCCHINE GRIGLIATE"}>ZUCCHINE GRIGLIATE</option>
          </select>
          <br></br>
          <select onChange={handleSecondVeggieChange}>
            <option value={"--"}>--</option>
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
            <option value={"--"}>--</option>
            <option value={"MAIONESE"}>MAIONESE</option>
            <option value={"KETCHUP"}>KETCHUP</option>
            <option value={"SALSA BBQ"}>SALSA BBQ</option>
            <option value={"SALSA CHEDDAR"}>SALSA CHEDDAR</option>
            <option value={"SENAPE"}>SENAPE</option>
            <option value={"SALSA STREETBURGERS"}>SALSA STREETBURGERS</option>
          </select>
          <br></br>
          <select onChange={handleSecondSauceChange}>
            <option value={"--"}>--</option>
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
            <option value={"--"}>--</option>
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
            <option value={"--"}>--</option>
            <option value={"CIPOLLA CARAMELLATA"}>CIPOLLA CARAMELLATA</option>
            <option value={"BACON"}>BACON</option>
            <option value={"ONION RING"}>ONION RING</option>
            <option value={"CREMA DI PATATE"}>CREMA DI PATATE</option>
            <option value={"CHEDDAR"}>CHEDDAR</option>
            <option value={"MOZZARELLA"}>MOZZARELLA</option>
            <option value={"BURRATA"}>BURRATA</option>
          </select>
          <br></br>
          <label>COME LO CHIAMI?</label>
          <input
            className="create-container"
            type="text"
            placeholder="DAI UN NOME AL TUO STREETBURGER"
            onChange={handleNameChange}
          ></input>
          <br></br>
          <label>ASSOCIA UNA MAIL AL TUO STREETBURGER</label>
          <input
            id="email-input"
            className="create-container"
            type="email"
            placeholder="ASSOCIA UNA MAIL AL TUO BURGER"
            onChange={handleMailChange}
            required
          ></input>
          <br></br>
          <br></br>
          <br></br>
          <button className="btn" onClick={saveBurger}>
            CREA IL TUO STREETBURGER!
          </button>
          <br></br>
        </form>
        <br></br>
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

export default CreateBurger;
