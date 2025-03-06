import style from "./Produtos.module.css";
import { useEffect, useState } from "react";
import TopBar from "../../../components/Topbar/Topbar";
function Produtos() {
  const [produtos, setProdutos] = useState([]);

  function BuscarProdutos() {}

  function AdicionarProduto() {}

  useEffect(() => {
    BuscarProdutos();
  }, []);

  return (
    <>
      <TopBar />
      <div className={style.container_total_pagina}>
        <div className={style.container_tiulo_botao_novo}>
          <h1>Produtos</h1>

          <button onClick={AdicionarProduto}>+ Adicionar</button>
        </div>
      </div>
    </>
  );
}

export default Produtos;
