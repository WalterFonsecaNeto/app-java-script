import style from "./Login.module.css";
import { useNavigate } from "react-router";
import { useState } from "react";
import UsuarioApi from "../../services/usuarioApi";

function Login() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const navigate = useNavigate();

  async function fazerLogin(event) {
    event.preventDefault();

    try {
      const response = await UsuarioApi.logarUsuarioAsync(email, senha);
      console.log(response.usuarioId);
      
      localStorage.setItem("usuarioId", response.usuarioId);
      localStorage.setItem("tipoUsuarioId", 3);
      
      window.location.href = "/home";
    } catch (error) {
      console.error(error);
    }
    setEmail("");
    setSenha("");
  }

  return (
    <div className={style.container_total}>
      <div className={style.container_titulo_form}>

        <div className={style.container_titulo}>
          <h2>Login</h2>
        </div>

        <div className={style.container_botoes}>
          <button className={style.botao_login}>Login</button>
          <button
            onClick={() => navigate("../cadastro")}
            className={style.botao_cadastro}
          >
            Cadastro
          </button>
        </div>

        <form className={style.container_form} onSubmit={fazerLogin}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Senha"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            required
          />

          <a className={style.link_esqueci_senha} href="">Esqueci minha senha</a>
          <button className={style.botao_entrar} type="submit">Entrar</button>
        </form>

      </div>
    </div>
  );
}

export default Login;
