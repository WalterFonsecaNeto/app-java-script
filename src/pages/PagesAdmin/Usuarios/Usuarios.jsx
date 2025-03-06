import style from "./Usuarios.module.css";
import { useEffect, useState } from "react";
import TopBar from "../../../components/Topbar/Topbar";
function Usuarios() {
  const [usuarios, setUsuarios] = useState([]);

  function BuscarUsuarios() {}

  function AdicionarUsuario() {}

  useEffect(() => {
    BuscarUsuarios();
  }, []);

  return (
    <>
      <TopBar />
      <div className={style.container_total_pagina}>
        <div className={style.container_tiulo_botao_novo}>
          <h1>Usuarios</h1>

          <button onClick={AdicionarUsuario}>+ Adicionar</button>
        </div>
      </div>
    </>
  );
}

export default Usuarios;
