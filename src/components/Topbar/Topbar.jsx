import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router";
import { FiLogOut } from "react-icons/fi"; // Ícone de logout
import style from "./Topbar.module.css";

export default function TopBar() {
  const navigate = useNavigate();
  const location = useLocation(); // Pega a URL atual
  const [usuarioLogado, setUsuarioLogado] = useState(false);

  useEffect(() => {
    // Verifica se o ID do usuário está salvo no localStorage
    const usuarioId = localStorage.getItem("usuarioId");
    setUsuarioLogado(!!usuarioId); 
  }, []);

  // Função para realizar o logout
  function SairDoSistema() {
    localStorage.removeItem("usuarioId");
    setUsuarioLogado(false); // Atualiza o estado de usuario logado para false
    navigate("/"); 
  }

  // Função para verificar se o item é o da URL ativa
  const isActive = (path) => {
    return location.pathname === path ? style.link_ativo : "";
  };

  return (
    <header className={style.container_topbar}>
      <h1 className={style.logo}>Minha Loja</h1>

      {/* Exibe o menu apenas se o usuário estiver logado */}
      {usuarioLogado && (
        <nav className={style.container_nav}>
          
          <a href="/home" className={`${style.link} ${isActive("/home")}`}>
            Home
          </a>
          <a href="/produtos" className={`${style.link} ${isActive("/produtos")}`}>
            Produtos
          </a>
        </nav>
      )}

      <div className={style.container_botoes}>

        {/* Exibe os botões de login/cadastro apenas se o usuário NÃO estiver logado */}
        {!usuarioLogado && (
          <>
            <button
              onClick={() => navigate("/login")}
              className={style.botao_login}
            >
              Login
            </button>
            <button
              onClick={() => navigate("/cadastro")}
              className={style.botao_cadastro}
            >
              Cadastro
            </button>
          </>
        )}

        {/* Exibe o botão de sair apenas se o usuário estiver logado */}
        {usuarioLogado && (
          <button onClick={SairDoSistema} className={style.botao_sair}>
            <FiLogOut size={20} /> Sair
          </button>
        )}

      </div>
    </header>
  );
}
