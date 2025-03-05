import style from "./SidbarLoja.module.css";
import { useLocation, useNavigate } from "react-router";
import { AiOutlineHome, AiOutlineDown, AiOutlineUp } from "react-icons/ai";
import { useState } from "react";

function SidbarLoja({ loja }) {
  const navigate = useNavigate();
  const location = useLocation();
  const [caixaOpen, setCaixaOpen] = useState(false);
  const [produtosOpen, setProdutosOpen] = useState(false); 
  const [clientesOpen, setClientesOpen] = useState(false); 

  const isActive = (path) => {
    return location.pathname === path ? style.link_ativo : "";
  };

  function VoltarParaHome() {
    navigate("/home");
  }

  return (
    <header className={style.container_topbar}>
      <button className={style.loja_selecionada}>{loja.nome}</button>

      <nav className={style.container_nav}>
        {/* Caixa Dropdown */}
        <div>
          <button 
            className={style.botao_dropdown} 
            onClick={() => setCaixaOpen(!caixaOpen)}
          >
            Caixa {caixaOpen ? <AiOutlineUp size={14}/> : <AiOutlineDown size={14}/>}
          </button>
          {caixaOpen && (
            <div className={style.dropdown}>
              <a href="/caixa/diario" className={style.dropdown_item}>Caixa Diário</a>
              <a href="/caixa/estorno" className={style.dropdown_item}>Estorno</a>
              <a href="/caixa/baixa" className={style.dropdown_item}>Baixa</a>
            </div>
          )}
        </div>

        {/* Produtos Dropdown */}
        <div>
          <button 
            className={style.botao_dropdown}  
            onClick={() => setProdutosOpen(!produtosOpen)}
          >
            Produtos {produtosOpen ? <AiOutlineUp size={14}/> : <AiOutlineDown size={14}/>}
          </button>
          {produtosOpen && (
            <div className={style.dropdown}>
              <a href="/produtos/vender" className={style.dropdown_item}>Vender Produto</a>
              <a href="/produtos/estoque" className={style.dropdown_item}>Estoque</a>
              <a href="/produtos/relatorio" className={style.dropdown_item}>Relatório</a>
            </div>
          )}
        </div>

        {/* Clientes Dropdown */}
        <div>
          <button 
            className={style.botao_dropdown}  
            onClick={() => setClientesOpen(!clientesOpen)}
          >
            Clientes {clientesOpen ? <AiOutlineUp size={14}/> : <AiOutlineDown size={14}/>}
          </button>
          {clientesOpen && (
            <div className={style.dropdown}>
              <a href="/clientes/cadastro" className={style.dropdown_item}>Cadastro de Cliente</a>
              <a href="/clientes/historico" className={style.dropdown_item}>Histórico de Compras</a>
              <a href="/clientes/promocoes" className={style.dropdown_item}>Promoções</a>
            </div>
          )}
        </div>
      </nav>

      <button onClick={VoltarParaHome} className={style.botao_sair}>
        <AiOutlineHome size={20} /> Home
      </button>
    </header>
  );
}

export default SidbarLoja;
