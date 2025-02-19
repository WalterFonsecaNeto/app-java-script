import styles from "./Topbar.module.css";

export default function TopBar() {
  return (
    <header className={styles.topbar}>
      {/* Logo */}
      <h1 className={styles.logo}>Minha Loja</h1>

      {/* Navegação */}
      <nav className={styles.container_nav}>
        <a href="#" className={styles.link}>
          Home
        </a>
        <a href="#" className={styles.link}>
          Produtos
        </a>
        <a href="#" className={styles.link}>
          Contato
        </a>
      </nav>

      {/* Botões de Login e Cadastro */}
      <div className={styles.container_botoes}>
        <button className={styles.botao_login}>Login</button>
        <button className={styles.botao_cadastro}>Cadastro</button>
      </div>
    </header>
  );
}
