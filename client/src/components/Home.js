import React from "react";
function Home() {
  return (
    <>
      <header className="header">
        <a className="text" href="http://localhost:3000/contact">
          CONTATTI
        </a>
        <img className="logo" alt="logo" src="./logostreet.png" />
        <a className="text" href="http://localhost:3000/search">
          CERCA!
        </a>
      </header>
      <main>
        <p className="main-title">STREETBURGERS</p>
        <div id="img-container">
          <img className="burger" alt="Burger" src="./burger.png" />
          <img className="burger" alt="GreenBurger" src="./greenburger.png" />
          <img className="burger" alt="RedBurger" src="./redburger.png" />
          <img
            className="burger"
            src="./chickenburger.png"
            alt="ChickenBurger"
          />
        </div>
        <p className="description">
          All'interno di questa pagina potrete dare spazio alla creatività,
          dando vita a dei fantastici HAMBURGER, e quello che ci sarà dentro
          sarete VOI a deciderlo. premendo il tasto qui sotto sarà possibile
          aggiungere, rimuovere, o modificare ingredienti da poter inserire
          all'interno del vostro nuovo STREETBURGER.
        </p>
        <hr></hr>
        <br></br>
        <br></br>

        <a className="btn" href="http://localhost:3000/create">
          CREA IL TUO STREETBURGER
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

export default Home;
