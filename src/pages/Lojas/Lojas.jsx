import style from "./Lojas.module.css";
import { useEffect, useState } from "react";

import TopBar from "../../components/Topbar/Topbar";
import LojaApi from "../../services/lojaApi";
import LojaCard from "../../components/lojaCard/LojaCard"; // Importando o novo componente
import FormularioAdicionarLoja from "../../components/FormularioAdicionarLoja/FormularioAdicionarLoja";

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

  return (
    <>
      <TopBar />
      <div className={style.container_total_pagina}>
        <div className={style.container_tiulo_botao_novo}>
          <h1>Lojas</h1>
          {/* Componente abaixo já é o botão que abre o formulario */}
          <FormularioAdicionarLoja />
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
