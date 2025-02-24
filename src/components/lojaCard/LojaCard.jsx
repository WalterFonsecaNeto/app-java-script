import styles from "./LojaCard.module.css";

function LojaCard({ loja }) {
  return (
    <div className={styles.card}>
      <h2>{loja.nome}</h2>
      <p><strong>Endereço:</strong> {loja.endereco}, {loja.numero}</p>
      <p><strong>CNPJ:</strong> {loja.cnpj}</p>
      <p><strong>Contato:</strong> {loja.email} | {loja.telefone}</p>
    </div>
  );
}

export default LojaCard;
