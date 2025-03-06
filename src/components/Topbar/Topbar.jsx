import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router";
import { FiLogOut } from "react-icons/fi"; // Ícone de logout
import style from "./Topbar.module.css";
import LojaApi from "../../services/lojaApi";

export default function TopBar() {
  const navigate = useNavigate();
  const location = useLocation(); // Pega a URL atual
  const [usuarioLogado, setUsuarioLogado] = useState(false);
  const [lojaSelecionada, setLojaSelecionada] = useState(false);
  const [loja, setLoja] = useState({});
  const [tipoUsuario, setTipoUsuario] = useState(null); // Para armazenar o TipoUsuarioId

  useEffect(() => {
    function VerificarUsuarioId() {
      const usuarioId = localStorage.getItem("usuarioId");
      setUsuarioLogado(!!usuarioId);

      if (usuarioId) {
        // Verificar o tipo de usuário, por exemplo, administrador ou outro tipo
        const tipoUsuarioId = localStorage.getItem("tipoUsuarioId");
        setTipoUsuario(tipoUsuarioId);
      }
    }
    VerificarUsuarioId();

    function VerificarLojaId() {
      const lojaId = localStorage.getItem("lojaId");
      setLojaSelecionada(!!lojaId);

      if (lojaId) {
        BuscarLoja(lojaId);
      }
    }
    VerificarLojaId();

    // Verifica mudanças no localStorage a cada vez que ele muda
    window.addEventListener("storage", VerificarLojaId);
    return () => {
      window.removeEventListener("storage", VerificarLojaId);
    };
  }, []);

  //Função para buscar a loja pelo ID
  async function BuscarLoja() {
    const lojaId = localStorage.getItem("lojaId");
    try {
      const resposta = await LojaApi.ObterLojaPorId(true, lojaId);
      setLoja(resposta);
    } catch (erro) {
      console.error("Erro ao buscar loja:", erro);
    }
  }

  function IrParaAreaDaLojaSelecionada() {
    navigate(`/loja/${loja.id}`);
  }

  // Função para realizar o logout
  function SairDoSistema() {
    localStorage.clear();
    navigate("/");
  }

  // Função para verificar se o item é o da URL ativa
  const isActive = (path) => {
    return location.pathname === path ? style.link_ativo : "";
  };

  return (
    <header className={style.container_topbar}>
      <h1 className={style.logo}>GestorShop</h1>

      {/* Exibe o menu apenas se o usuário estiver logado */}
      {usuarioLogado && (
        <nav className={style.container_nav}>
          {/* Exibe o link de "Home" sempre */}
          <a href="/home" className={`${style.link} ${isActive("/home")}`}>
            Home
          </a>

          {/* Exibe o link "Usuarios" apenas se o tipo de usuário for ADMIN (TipoUsuarioId 1) */}
          {tipoUsuario === "1" && (
            <a
              href="/usuarios"
              className={`${style.link} ${isActive("/usuarios")}`}
            >
              Usuarios
            </a>
          )}

          {/* Exibe o link "Produtos" para ADMIN (TipoUsuarioId 1) e Gerente (TipoUsuarioId 3) */}
          {["1", "3"].includes(tipoUsuario) && (
            <a
              href="/produtos"
              className={`${style.link} ${isActive("/produtos")}`}
            >
              Produtos
            </a>
          )}
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

        {/* Exibe o botão de sair apenas se o usuário estiver logado e a loja apenas se ela tiver sido selecionada */}
        {usuarioLogado && (
          <>
            {lojaSelecionada && (
              <button
                onClick={IrParaAreaDaLojaSelecionada}
                className={style.loja_selecionada}
              >
                {loja.nome}
              </button>
            )}
            <button onClick={SairDoSistema} className={style.botao_sair}>
              <FiLogOut size={20} /> Sair
            </button>
          </>
        )}
      </div>
    </header>
  );
}
