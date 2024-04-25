import React from "react";

function RemoveBurger() {
  return (
    <>
      <header className="header">
        <a className="text" href="http://localhost:3000/home">
          HOME
        </a>
        <img className="logo" src="./logostreet.png" alt="logo" />
        <a className="text" href="http://localhost:3000/search">
          CERCA!
        </a>
      </header>
      <main>
        <h1 className="main-title">CI DISPIACE, BURGER NON TROVATO</h1>
        <h1 className="about">
          Sembra che non troviamo l hamburger che hai richiesto. Torna alla
          home!
        </h1>
        <a href={"http://localhost:3000/home"} className="btn">
          TORNA ALLA HOME
        </a>
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

export default RemoveBurger;
