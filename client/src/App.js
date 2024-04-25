import Home from "./components/Home";
import Contact from "./components/Contact";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Ordini from "./components/SearchBurgers";
import ChiSiamo from "./components/ChiSiamo";
import CreateBurger from "./components/CreateBurger";
import EditBurger from "./components/EditBurger";
import BurgerNotFound from "./components/BurgerNotFound";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<ChiSiamo />} />
          <Route path="/search" element={<Ordini />} />
          <Route path="/create" element={<CreateBurger />} />
          <Route path="/editburger/:email" element={<EditBurger />} />
          <Route path="/burgernotfound" element={<BurgerNotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
