import style from "./Login.module.css";
import { useNavigate } from "react-router";
import { useState } from "react";

import UsuarioApi from "../../services/usuarioApi";

import { useAlerta } from "../../hooks/useAlerta";
import Alerta from "../../components/Alerta/Alerta";

function Login() {
  const { exibirAlerta, mensagemAlerta, tipoAlerta, mostrarAlerta } =
    useAlerta();

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const navigate = useNavigate();

  async function fazerLogin(event) {
    event.preventDefault();

    try {
      const response = await UsuarioApi.logarUsuarioAsync(email, senha);

      localStorage.setItem("usuarioId", response.usuarioId);
      localStorage.setItem("tipoUsuarioId", response.tipoUsuarioId);
      console.log(response);

      // Aqui, você pode mostrar o alerta de sucesso
      exibirAlerta(response.mensagem, "success", 2000);

      setTimeout(() => {
        window.location.href = "/home";
      }, 2000);

    } catch (error) {
      // Aqui, você pode mostrar o alerta de erro
      exibirAlerta(error?.response?.data?.erro, "danger", 5000);
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

          <a className={style.link_esqueci_senha} href="">
            Esqueci minha senha
          </a>
          <button className={style.botao_entrar} type="submit">
            Entrar
          </button>
        </form>

      </div>

       {/* Exibindo o componente de Alerta */}
       <Alerta
        tipo={tipoAlerta}
        mensagem={mensagemAlerta}
        visivel={mostrarAlerta}
        aoFechar={() => exibirAlerta("", "")} // Fecha o alerta e limpa ele
      />

    </div>
  );
}

export default Login;
