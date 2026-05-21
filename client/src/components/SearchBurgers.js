import { useState } from "react";
import React from "react";
import { Link } from "react-router-dom";

export default function Ordini() {
  let [email, setEmail] = useState("");
  let [burgers, setBurgers] = useState([]);

  const handleMailChange = (event) => {
    setEmail(event.target.value);
    console.log(event.target.value);
  };

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!email) return;

    const res = await fetch("http://localhost:3001/getBurgersByEmail/" + email);
    const data = await res.json();
    setBurgers(data);
    console.log(data);
  };

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
        <form
          id="create-container-3"
          label="create-container"
          onSubmit={handleSearch}
        >
          <br></br>
          <br></br>
          <label>
            INSERISCI L'EMAIL DELLA PERSONA DI CUI VUOI VISUALIZZARE GLI
            HAMBURGER
          </label>
          <input
            className="create-container"
            type="email"
            placeholder="INSERISCI EMAIL"
            value={email}
            onChange={handleMailChange}
            required
          ></input>
          <br></br>
          <button
            type="submit"
            className="btn"
            
          >
            CERCA STREETBURGER!
          </button>
          <br></br>
        </form>
        <br></br>

        <div
        id='box-modifica'
        >
          {burgers.length > 0 &&
            burgers.map((burger, index) => (
              <div id="single-box"
                key={burger._id}
                
              >
                <h3>
                  Panino #{index + 1}: {burger.Nome || "Senza Nome"}
                </h3>
                <p>
                  <strong>Pane:</strong> {burger.Pane}
                </p>
                <p>
                  <strong>Proteina:</strong> {burger.Proteina}
                </p>
                <Link
                  to={`/editburger/${burger._id}`}
                  className="small-btn"
                  
                >
                  Modifica questo panino
                </Link>
              </div>
            ))}
        </div>
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
