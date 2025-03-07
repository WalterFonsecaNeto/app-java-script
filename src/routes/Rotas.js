import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import ProtectedRoute from "./ProtectedRoute";

import Page404 from "../pages/Page404/Page404";
import Lojas from "../pages/Lojas/Lojas";
import Cadastro from "../pages/Cadastro/Cadastro";
import Login from "../pages/Login/Login";
import HomeInicial from "../pages/HomeInicial/HomeInicial";

import Loja from "../pages/Loja/Loja";

import Produtos from "../pages/PagesAdmin/Produtos/Produtos";
import Usuarios from "../pages/PagesAdmin/Usuarios/Usuarios";

function Rotas() {
  return (
    <Router>
      <Routes>
        {/* Página 404 para qualquer URL desconhecida */}
        <Route path="*" element={<Page404 />} />

        {/* HomeInicial, Login e Cadastro são públicas, mas se o usuário estiver logado, será redirecionado para /home */}
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
          path="/lojas"
          element={<ProtectedRoute element={<Lojas />} isPublic={false} />}
        />
        
        {/* Produtos: Apenas Administrador (1) e Gerente (3) podem acessar */}
        <Route
          exact
          path="/produtos"
          element={<ProtectedRoute element={<Produtos />} isPublic={false} isPermited={[1, 3]} />}
        />
        {/* Usuarios: Apenas Administrador (1) pode acessar */}
        <Route
          exact
          path="/usuarios"
          element={<ProtectedRoute element={<Usuarios />} isPublic={false} isPermited={[1]} />}
        />
        
        {/* Loja: Administrador (1), Caixa (2) e Gerente (3) podem acessar entao não precisa colocar nada */}
        <Route
          exact
          path="/loja/:lojaId"
          element={<ProtectedRoute element={<Loja />} isPublic={false}/>}
        />
      </Routes>
    </Router>
  );
}

export default Rotas;
