import style from "./Home.module.css";
import TopBar from "../../components/Topbar/Topbar";

function Home() {
  return (
    <>
      <TopBar />
      <div className={style.container_total_pagina}>
        <h1>Home</h1>

        <p>Usuario esta logado no sistema</p>
      </div>
    </>
  );
}
export default Home;
