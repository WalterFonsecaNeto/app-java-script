import style from "./Loja.module.css";
import SidbarLoja from "../../components/SidbarLoja/SidbarLoja";
import LojaApi from "../../services/lojaApi";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";

function Loja() {
  const [lojaSelecionada, setLojaSelecionada] = useState({});
  const { lojaId } = useParams();

  //Função para buscar a loja pelo ID
  async function BuscarLoja() {
    try {
      const resposta = await LojaApi.ObterLojaPorId(true, lojaId);
      setLojaSelecionada(resposta);
    } catch (erro) {
      console.error("Erro ao buscar loja:", erro);
    }
  }

  //Chama a função assíncrona ao carregar a página
  useEffect(() => {
    BuscarLoja();
  }, []);

  return <SidbarLoja loja={lojaSelecionada} />;
}

export default Loja;
