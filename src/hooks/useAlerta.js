import { useState } from "react";

export const useAlerta = () => {
  const [mensagemAlerta, setMensagemAlerta] = useState("");
  const [tipoAlerta, setTipoAlerta] = useState("");
  const [mostrarAlerta, setMostrarAlerta] = useState(false);

  // Função para exibir o alerta
  const exibirAlerta = (mensagem, tipo = "info", tempo = 1000) => {
    setMensagemAlerta(mensagem);
    setTipoAlerta(tipo);
    setMostrarAlerta(true);

    // Esconde o alerta após 2 segundos
    setTimeout(() => {
      setMostrarAlerta(false);
    }, tempo);
  };

  return {
    mensagemAlerta,
    tipoAlerta,
    mostrarAlerta,
    exibirAlerta,
  };
};
 