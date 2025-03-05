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
  useEffect(() => {
    // Verifica se o ID do usuário está salvo no localStorage
    const usuarioId = localStorage.getItem("usuarioId");
    setUsuarioLogado(!!usuarioId); // Atualiza o estado de usuario logado conforme o ID encontrado no localStorage

    const verificarLojaId = () => {
      const lojaId = localStorage.getItem("lojaId");
      setLojaSelecionada(!!lojaId);

      if (lojaId) {
        BuscarLoja(lojaId);
      }
    };
    verificarLojaId();

    // Verifica mudanças no localStorage a cada vez que ele muda
    window.addEventListener("storage", verificarLojaId);

    return () => {
      window.removeEventListener("storage", verificarLojaId);
    };
  }, []);

  async function BuscarLoja() {
    const lojaId = localStorage.getItem("lojaId");
    try {
      const resposta = await LojaApi.ObterLojaPorId(true, lojaId);
      console.log(resposta);
      setLoja(resposta);
    } catch (erro) {
      console.error("Erro ao buscar loja:", erro);
    }
  }

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
          <a
            href="/produtos"
            className={`${style.link} ${isActive("/produtos")}`}
          >
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
          <div className={style.container_loja_selecionada_sair}>
            <p className={style.loja_selecionada}>{loja.nome}</p>
            <button onClick={SairDoSistema} className={style.botao_sair}>
              <FiLogOut size={20} /> Sair
            </button>
          </div>
        )}
      </div>
    </header>
  );
}
