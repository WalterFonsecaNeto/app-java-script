import styles from "./LojaCard.module.css";

function LojaCard({ loja }) {

  function EscolherLoja() {
    localStorage.setItem("lojaId", loja.id);
    window.dispatchEvent(new Event("storage")); // Dispara evento para atualizar TopBar
  }
  
  return (
    <button className={styles.botao_card} onClick={EscolherLoja}>
      <h2>{loja.nome}</h2>
      <p><strong>Endereço:</strong> {loja.endereco}, {loja.numero}</p>
      <p><strong>CNPJ:</strong> {loja.cnpj}</p>
      <p><strong>Email:</strong> {loja.email}</p>
      <p><strong>Telefone:</strong> {loja.telefone}</p>
    </button>
  );
}

export default LojaCard;
