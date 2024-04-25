import React from "react";

function Contact() {
  let nome = "";
  let email = "";
  let input = "";

  const handleNameChange = (event) => {
    nome = event.target.value;
    console.log(event.target.value);
  };

  const handleMailChange = (event) => {
    email = event.target.value;
    console.log(event.target.value);
  };

  const handleInputChange = (event) => {
    input = event.target.value;
    console.log(event.target.value);
  };

  async function saveForm(event) {
    event.preventDefault();

    let res = await fetch("http://localhost:3001/sendform", {
      method: "POST",
      body: JSON.stringify({ nome, email, input }),
      headers: {
        // Accept: "application/json",
        "Content-Type": "application/json",
        //"Access-Control-Allow-Origin": "*"
      },
    });
    let json = await res.json();
    //console.log(json);
    // const json = await res.json()
    alert(JSON.stringify(json));
  }

  return (
    <>
      <header className="header">
        <a className="text" href="http://localhost:3000/home">
          HOME
        </a>

        <img className="logo" src="./logostreet.png" />
        <a className="text" href="http://localhost:3000/search">
          CERCA!
        </a>
      </header>
      <main>
        <p className="main-title-contact">CONTATTACI</p>
        <form id="contact">
          <label for="name">Inserisci il tuo nome</label>
          <input
            autoComplete="on"
            type="text"
            id="name"
            onChange={handleNameChange}
            required
          />
          <br></br>
          <br></br>
          <label for="name">Inserisci la tua mail</label>
          <input
            autoComplete="on"
            type="email"
            id="email"
            onChange={handleMailChange}
            required
          />
          <br></br>
          <br></br>
          <label for="text">Chiedici qualcosa!</label>
          <input
            autoComplete="off"
            type="text"
            id="text"
            onChange={handleInputChange}
            required
          />
          <br></br>
          <button id="contact-btn" onClick={saveForm}>
            INVIA
          </button>
        </form>
        <p id="contact-title">
          Hai domande? Vorresti saperne di più su di noi? Hai avuto qualche
          problema? CONTATTACI compilando il form di seguito, risponderemo nel
          più breve tempo possibile.
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

export default Contact;
