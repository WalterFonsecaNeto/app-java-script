import style from "./Cadastro.module.css";
import { useNavigate } from "react-router";
import { useState } from "react";
import UsuarioApi from "../../services/usuarioApi";

function Cadastro() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const navigate = useNavigate();

  async function cadastrarUsuario(event) {
    event.preventDefault();

    try {
      const response = await UsuarioApi.cadastrarUsuarioAsync(
        nome,
        email,
        senha
      );

      // localStorage.setItem("token", response.token);

      window.location.href = "/login";
    } catch (error) {
      console.error(error);
    }
    setNome("");
    setEmail("");
    setSenha("");
  }

  return (
    <div className={style.container_total}>
      <div className={style.container_titulo_form}>
        <div className={style.container_titulo}>
          <h2>Cadastre-se</h2>
        </div>

        <div className={style.container_botoes}>
          <button
            onClick={() => navigate("../login")}
            className={style.botao_login}
          >
            Login
          </button>
          <button className={style.botao_cadastro}>Cadastro</button>
        </div>

        <form className={style.container_form} onSubmit={cadastrarUsuario}>
          <input
            type="text"
            placeholder="Nome"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            required
          />
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

          <a className={style.link_esqueci_senha} href="">
            Esqueci minha senha
          </a>
          <button className={style.botao_cadastrar} type="submit">
            Cadastrar
          </button>
        </form>
      </div>
    </div>
  );
}

export default Cadastro;
