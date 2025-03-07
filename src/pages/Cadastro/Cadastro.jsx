import style from "./Cadastro.module.css";
import { useNavigate } from "react-router";
import { useState } from "react";

import UsuarioApi from "../../services/usuarioApi";

import { useAlerta } from "../../hooks/useAlerta"; 
import Alerta from "../../components/Alerta/Alerta"; 

function Cadastro() {

  const { exibirAlerta, mensagemAlerta, tipoAlerta, mostrarAlerta } = useAlerta(); 

  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const navigate = useNavigate();

  async function cadastrarUsuario(event) {
    event.preventDefault();

    try {
      await UsuarioApi.cadastrarUsuarioAsync(nome, email, senha);

      // Aqui, você pode mostrar o alerta de sucesso
      exibirAlerta("Cadastro realizado com sucesso!", "success", 2000);
      
      setTimeout(() => {
        window.location.href = "/login";
      }, 2000);
    } catch (error) {
      // Aqui, você pode mostrar o alerta de erro
      exibirAlerta(error.response.data.erro, "danger", 5000);
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

export default Cadastro;
