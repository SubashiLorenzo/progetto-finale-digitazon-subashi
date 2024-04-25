import React from "react";

function ChiSiamo() {
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
        <p className="main-title-contact">CHI SIAMO</p>
        <p className="about">
          Benvenuti da StreetBurgers, la tua destinazione online per hamburger
          deliziosi e genuini! StreetBurgers nasce dall’amore per il cibo di
          strada e dalla passione per la qualità degli ingredienti. Ci
          impegniamo a offrire ai nostri clienti un’esperienza culinaria
          straordinaria, che unisce sapori audaci e freschi in ogni morso. I
          nostri hamburger sono realizzati con carne di alta qualità,
          proveniente da fonti affidabili e sostenibili, e sono completati da
          una vasta selezione di condimenti freschi e salse artigianali. Presso
          StreetBurgers, crediamo nell’autenticità e nell’innovazione. Oltre ai
          classici hamburger, offriamo creazioni uniche e innovative che
          soddisfano ogni palato. Dalle opzioni vegetariane e vegane alle
          combinazioni gourmet, c’è qualcosa per tutti i gusti. La nostra
          missione è rendere il cibo di strada gourmet accessibile a tutti,
          garantendo allo stesso tempo standard elevati di qualità e servizio.
          Siamo fieri di servire la nostra comunità e di essere parte della
          vostra esperienza gastronomica. Unisciti a noi in questo viaggio
          culinario e scopri il gusto autentico di StreetBurgers. Buon appetito!
        </p>
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

export default ChiSiamo;
