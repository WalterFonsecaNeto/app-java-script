import style from "./Lojas.module.css";
import { useEffect, useState } from "react";

import TopBar from "../../components/Topbar/Topbar";
import LojaApi from "../../services/lojaApi";
import LojaCard from "../../components/lojaCard/LojaCard"; // Importando o novo componente

function Lojas() {
  const [lojas, setLojas] = useState([]);

  async function BuscarLojas() {
    try {
      const usuarioId = localStorage.getItem("usuarioId");
      const response = await LojaApi.listarLojasPorUsuarioIdAsync(
        true,
        usuarioId
      );
      setLojas(response);
    } catch (error) {
      console.error("Erro ao buscar lojas:", error);
    }
  }

  useEffect(() => {
    BuscarLojas();
  }, []);

  function AdicionarLoja() {
    console.log("Abrir modal ou redirecionar para adicionar nova loja");
  }

  return (
    <>
      <TopBar />
      <div className={style.container_total_pagina}>
        <div className={style.container_tiulo_botao_novo}>
          <h1>Lojas</h1>
          <button onClick={AdicionarLoja}>+ Adicionar</button>
        </div>

        <div className={style.lojasContainer}>
          {lojas.map((loja) => (
            <LojaCard key={loja.id} loja={loja} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Lojas;
