import React, { useEffect, useState } from "react"; // Nota: rimosso l'import errato di { React }
import { Link, useParams } from "react-router-dom";

export function EditBurger() {
  let { id } = useParams(); 
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


  const handlePattyChange = (event) => setPatty(event.target.value);
  const handleVeggiesChange = (event) => setVeggie(event.target.value);
  const handleMeatChange = (event) => setMeat(event.target.value);
  const handleSaucesChange = (event) => setSauce(event.target.value);
  const handleExtraChange = (event) => setExtra(event.target.value);
  const handleSecondExtraChange = (event) => setSecondExtra(event.target.value);
  const handleSecondVeggieChange = (event) =>
    setSecondVeggie(event.target.value);
  const handleSecondSauceChange = (event) => setSecondSauce(event.target.value);
  const handleSecondMeatChange = (event) =>
    setSecondProtein(event.target.value);
  const handleNameChange = (event) => setName(event.target.value);

  console.log("email arrivata: " + email);

  useEffect(() => {
    async function findBurger() {
      console.log("Cerco panino per email: " + email);
      let res = await fetch("http://localhost:3001/getBurgersByEmail/" + email);
      let panini = await res.json();

      if (panini && panini[0]) {
        setMeat(panini[0].Proteina || "");
        setPatty(panini[0].Pane || "");
        setSecondProtein(panini[0].SecondaProteina || "");
        setVeggie(panini[0].Verdure || "");
        setSecondVeggie(panini[0].SecondaVerdura || "");
        setExtra(panini[0].Extra || "");
        setSecondExtra(panini[0].SecondoExtra || "");
        setName(panini[0].Nome || "");
        setSauce(panini[0].Salse || "");
        setSecondSauce(panini[0].SecondaSalsa || "");
      }
    }
    findBurger();
  }, [email]); // Aggiunta la dipendenza corretta per l'useEffect

  async function updateBurger() {
    const r = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
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
    await fetch("http://localhost:3001/updateburger/" + email, r);
    alert("PANINO AGGIORNATO");
  }

  async function deleteBurger() {
    await fetch("http://localhost:3001/deleteburger/" + email, {
      method: "DELETE",
    });
    alert("PANINO CANCELLATO CORRETTAMENTE");
  }

  return (
    <>
      <header className="header">
        <a className="text" href="http://localhost:3000/home">
          HOME
        </a>
        <img className="logo" alt="logo" src="../logostreet.png" />
        <a className="text" href="http://localhost:3000/search">
          CERCA!
        </a>
      </header>
      <main id="body">
        <p className="main-title-contact">VISUALIZZA IL TUO STREETBURGER</p>
        <form id="display-burger" onSubmit={(e) => e.preventDefault()}>
          <div className="burger-owner-name">
            <strong>Cliente:</strong> {name}
          </div>

          <label>SCEGLI IL PANE</label>
          <select value={patty} onChange={handlePattyChange}>
            <option value="">-- Seleziona Pane --</option>
            <option value="PANINO CLASSICO STREETBURGERS">
              PANINO CLASSICO STREETBURGERS
            </option>
            <option value="PANINO VERDE ALL'AVOCADO">
              PANINO VERDE ALL'AVOCADO
            </option>
            <option value="PANINO ROSSO ALLA RAPA">
              PANINO ROSSO ALLA RAPA
            </option>
            <option value="PANINO ALLA FARINA DI CECI(VEGAN/VEGETARIAN)">
              PANINO ALLA FARINA DI CECI(VEGAN/VEGETARIAN)
            </option>
            <option value="NESSUN PANINO(AL PIATTO)">
              NESSUN PANINO(AL PIATTO)
            </option>
          </select>
          <br />

          <label>SCEGLI LA PROTEINA</label>
          <select value={meat} onChange={handleMeatChange}>
            <option value="">-- Seleziona Proteina --</option>
            <option value="HAMBURGER DI MANZO">HAMBURGER DI MANZO</option>
            <option value="COTOLETTA DI POLLO">COTOLETTA DI POLLO</option>
            <option value="HAMBURGER VEGETALE">HAMBURGER VEGETALE</option>
            <option value="HAMBURGER VEGANO">HAMBURGER VEGANO</option>
            <option value="HAMBURGER DI SALSICCIA">
              HAMBURGER DI SALSICCIA
            </option>
          </select>
          <br />
          <select value={secondProtein} onChange={handleSecondMeatChange}>
            <option value="">-- Seconda Proteina (Opzionale) --</option>
            <option value="HAMBURGER DI MANZO">HAMBURGER DI MANZO</option>
            <option value="COTOLETTA DI POLLO">COTOLETTA DI POLLO</option>
            <option value="HAMBURGER VEGETALE">HAMBURGER VEGETALE</option>
            <option value="HAMBURGER VEGANO">HAMBURGER VEGANO</option>
            <option value="HAMBURGER DI SALSICCIA">
              HAMBURGER DI SALSICCIA
            </option>
          </select>
          <br />

          <label>SCEGLI LE VERDURE</label>
          <select value={veggie} onChange={handleVeggiesChange}>
            <option value="">-- Seleziona Verdura --</option>
            <option value="INSALATA">INSALATA</option>
            <option value="POMODORO">POMODORO</option>
            <option value="PEPERONI">PEPERONI</option>
            <option value="VERZA">VERZA</option>
            <option value="MELANZANE GRIGLIATE">MELANZANE GRIGLIATE</option>
            <option value="ZUCCHINE GRIGLIATE">ZUCCHINE GRIGLIATE</option>
          </select>
          <br />
          <select value={secondVeggie} onChange={handleSecondVeggieChange}>
            <option value="">-- Seconda Verdura (Opzionale) --</option>
            <option value="INSALATA">INSALATA</option>
            <option value="POMODORO">POMODORO</option>
            <option value="PEPERONI">PEPERONI</option>
            <option value="VERZA">VERZA</option>
            <option value="MELANZANE GRIGLIATE">MELANZANE GRIGLIATE</option>
            <option value="ZUCCHINE GRIGLIATE">ZUCCHINE GRIGLIATE</option>
          </select>
          <br />

          <label>SCEGLI LE SALSE</label>
          <select value={sauce} onChange={handleSaucesChange}>
            <option value="">-- Seleziona Salsa --</option>
            <option value="MAIONESE">MAIONESE</option>
            <option value="KETCHUP">KETCHUP</option>
            <option value="SALSA BBQ">SALSA BBQ</option>
            <option value="SALSA CHEDDAR">SALSA CHEDDAR</option>
            <option value="SENAPE">SENAPE</option>
            <option value="SALSA STREETBURGERS">SALSA STREETBURGERS</option>
          </select>
          <br />
          <select value={secondSauce} onChange={handleSecondSauceChange}>
            <option value="">-- Seconda Salsa (Opzionale) --</option>
            <option value="MAIONESE">MAIONESE</option>
            <option value="KETCHUP">KETCHUP</option>
            <option value="SALSA BBQ">SALSA BBQ</option>
            <option value="SALSA CHEDDAR">SALSA CHEDDAR</option>
            <option value="SENAPE">SENAPE</option>
            <option value="SALSA STREETBURGERS">SALSA STREETBURGERS</option>
          </select>
          <br />

          <label>EXTRA</label>
          <select value={extra} onChange={handleExtraChange}>
            <option value="">-- Seleziona Extra --</option>
            <option value="CIPOLLA CARAMELLATA">CIPOLLA CARAMELLATA</option>
            <option value="BACON">BACON</option>
            <option value="ONION RING">ONION RING</option>
            <option value="CREMA DI PATATE">CREMA DI PATATE</option>
            <option value="CHEDDAR">CHEDDAR</option>
            <option value="MOZZARELLA">MOZZARELLA</option>
            <option value="BURRATA">BURRATA</option>
          </select>
          <br />
          <select value={secondExtra} onChange={handleSecondExtraChange}>
            <option value="">-- Secondo Extra (Opzionale) --</option>
            <option value="CIPOLLA CARAMELLATA">CIPOLLA CARAMELLATA</option>
            <option value="BACON">BACON</option>
            <option value="ONION RING">ONION RING</option>
            <option value="CREMA DI PATATE">CREMA DI PATATE</option>
            <option value="CHEDDAR">CHEDDAR</option>
            <option value="MOZZARELLA">MOZZARELLA</option>
            <option value="BURRATA">BURRATA</option>
          </select>
          <br />

          <div className="editordelete">
            <Link to="/home" onClick={updateBurger} className="btn-save">
              MODIFICA BURGER
            </Link>
            <hr />
            <Link to="/home" onClick={deleteBurger} className="btn-delete">
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
          <li>
            <a className="footer-text" href="http://localhost:3000/contact">
              CONTATTACI
            </a>
          </li>
        </ul>
      </footer>
    </>
  );
}

export default EditBurger;
