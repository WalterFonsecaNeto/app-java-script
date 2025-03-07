import React, { useState } from "react";
import ModalGlobal from "../ModalGlobal/ModalGlobal"; // Supondo que você já tenha o ModalGlobal

const FormularioAdicionarLoja = () => {

  const [loja, setLoja] = useState({
    nome: "",
    cep: "",
    logradouro: "",
    numero: "",
    bairro: "",
    cidade: "",
    uf: "",
    cnpj: "",
    telefone: "",
    email: "",
  });

  const [aberto, setAberto] = useState(false);

  const [botaoSair, setBotaoSair] = useState(true);
  const [botaoSalvar, setBotaoSalvar] = useState(false);

  async function AdicionarLoja() {}


  function PegarValor(event) {
    const { name, value } = event.target;
    setLoja((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  }

  return (
    <div>
      <button onClick={() => setAberto(true)}>+ Adicionar</button>

      <ModalGlobal
        aberto={aberto}
        setAberto={setAberto}
        titulo="Adicionar Loja"
      >
        <form onSubmit={AdicionarLoja}>
          <div>
            <label htmlFor="nome">Nome:</label>
            <input
              type="text"
              id="nome"
              name="nome"
              value={loja.nome}
              onChange={PegarValor}
              required
            />
          </div>
          <div>
            <label htmlFor="cep">CEP:</label>
            <input
              type="text"
              id="cep"
              name="cep"
              value={loja.cep}
              onChange={PegarValor}
              required
            />
          </div>
          <button type="submit">Salvar</button>
        </form>
      </ModalGlobal>
    </div>
  );
};

export default FormularioAdicionarLoja;
