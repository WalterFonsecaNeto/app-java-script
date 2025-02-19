import style from "./Topbar.module.css";
import { useNavigate } from "react-router";

export default function TopBar() {

  const navigate = useNavigate();

  return (
    <header className={style.container_topbar}>

      <h1 className={style.logo}>Minha Loja</h1>

      <nav className={style.container_nav}>
        <a href="#" className={style.link}>
          Home
        </a>
        <a href="#" className={style.link}>
          Produtos
        </a>
        <a href="#" className={style.link}>
          Contato
        </a>
      </nav>

      <div className={style.container_botoes}>
        <button onClick={() => navigate("/login")} className={style.botao_login}>Login</button>
        <button onClick={() => navigate("/cadastro")} className={style.botao_cadastro}>Cadastro</button>
      </div>
    </header>
  );
}
