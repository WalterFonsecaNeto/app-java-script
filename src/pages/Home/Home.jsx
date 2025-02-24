import style from "./Home.module.css";
import { useEffect, useState } from "react";
import { FaPlus } from "react-icons/fa"; // Ícone de adicionar
import TopBar from "../../components/Topbar/Topbar";
import LojaApi from "../../services/lojaApi";
import LojaCard from "../../components/lojaCard/LojaCard"; // Importando o novo componente

function Home() {
  const [lojas, setLojas] = useState([]);

  async function BuscarLojas() {
    try {
      const usuarioId = localStorage.getItem("usuarioId");
      const response = await LojaApi.listarLojasPorUsuarioIdAsync(true, usuarioId);
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
        <h1>Home</h1>
        <p>Usuário está logado no sistema</p>

        {lojas.length === 0 ? (
          <div className={style.container_centralizado}>
            <button className={style.botaoAdicionar} onClick={AdicionarLoja}>
              <FaPlus className={style.icone} /> Adicionar Loja
            </button>
          </div>
        ) : (
          <div className={style.lojasContainer}>
            {lojas.map((loja) => (
              <LojaCard key={loja.id} loja={loja} />
            ))}
          </div>
        )}
      </div>
    </>
  );
}

export default Home;
