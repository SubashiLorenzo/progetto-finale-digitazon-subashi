import { useEffect, useState } from "react";
import React from "react";
import { Link } from "react-router-dom";
import EditBurger from "./EditBurger";

export default function Ordini() {
  let [email, setEmail] = useState("");

  const handleMailChange = (event) => {
    email = event.target.value;
    setEmail(email);
    console.log(email);
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
        <form id="create-container-3" label="create-container">
          <br></br>
          <br></br>
          <label>
            INSERISCI L'EMAIL DELLA PERSONA DI CUI VUOI VISUALIZZARE GLI
            HAMBURGER
          </label>
          <input
            className="create-container"
            type="mail"
            placeholder="INSERISCI EMAIL"
            onChange={handleMailChange}
            required
          ></input>
          <br></br>
          <Link key={email} to={`/editburger/${email}`}>
            CERCA STREETBURGER!
          </Link>
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
