import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import ProtectedRoute from "./ProtectedRoute"; 

import Page404 from "../pages/Page404/Page404"; 
import Home from "../pages/Home/Home";
import Cadastro from "../pages/Cadastro/Cadastro";
import Login from "../pages/Login/Login";
import HomeInicial from "../pages/HomeInicial/HomeInicial";
import Produtos from "../pages/Produtos/Produtos";
import Loja from "../pages/Loja/Loja";



function Rotas() {
  return (
    <Router>
      <Routes>
        {/* Página 404 para qualquer URL desconhecida */}
        <Route path="*" element={<Page404 />} />

        {/* HomeInicial, Login e Cadastro são pública, mas se o usuário estiver logado, será redirecionado para /home */}
        <Route
          exact
          path="/"
          element={<ProtectedRoute element={<HomeInicial />} isPublic={true} />}
        />
        <Route
          exact
          path="/login"
          element={<ProtectedRoute element={<Login />} isPublic={true} />}
        />
        <Route
          exact
          path="/cadastro"
          element={<ProtectedRoute element={<Cadastro />} isPublic={true} />}
        />
        {/* A Home é protegida, apenas usuários logados podem acessar */}
        <Route
          exact
          path="/home"
          element={<ProtectedRoute element={<Home />} isPublic={false} />}
        />
        <Route
          exact
          path="/produtos"
          element={<ProtectedRoute element={<Produtos />} isPublic={false} />}
        />
        <Route
          exact
          path="/loja/:lojaId"
          element={<ProtectedRoute element={<Loja />} isPublic={false} />}
        />

      </Routes>
    </Router>
  );
}

export default Rotas;
