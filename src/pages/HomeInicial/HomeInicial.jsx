import style from "./HomeInicial.module.css";
import TopBar from "../../components/Topbar/Topbar";
function HomeInicial() {
  return (
    <>
      <TopBar />
      <div className={style.container_total_pagina}>
        <h1>Home Inicial</h1>
        <p>
          Usuario não esta logado no sistema
        </p>
      </div>
    </>
  );
}
export default HomeInicial;
