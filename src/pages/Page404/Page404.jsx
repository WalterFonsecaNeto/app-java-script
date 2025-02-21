import React from "react";
import { useNavigate } from "react-router-dom";
import style from "./Page404.module.css"; // Vamos estilizar a página

const Page404 = () => {
  const navigate = useNavigate();

  const voltarHome = () => {
    navigate("/"); // Volta para a página inicial
  };

  return (
    <div className={style.page404}>
      <div className={style.container_total}>
        <h1 className={style.titulo}>404</h1>
        <p className={style.mensagem}>Ops! A página que você procura não existe.</p>
        <button onClick={voltarHome} className={style.botao_voltar}>Voltar para a Home</button>
      </div>
    </div>
  );
};

export default Page404;
