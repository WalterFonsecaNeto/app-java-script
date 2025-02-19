import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/Home/Home";
import Cadastro from "../pages/Cadastro/Cadastro";

function Rotas() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/cadastro" element={<Cadastro />} />
      </Routes>
    </Router>
  );
}

export default Rotas;
