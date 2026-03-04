import styles from './styles.module.css'

export default function Footer() {
  return (
    <footer className={styles.container}>

      <div className={styles.textos_e_icons}>

        <div className={styles.endereco}>
          <h1>Endereço</h1>
          <p>
            Av. Milton Tavares de Souza,<br />
            s/n - Sala 115 B - Boa Viagem,<br />
            Niterói - RJ<br />
            CEP: 24210-315
          </p>

          <h1>Fale conosco</h1>
          <p>contato@injunior.com.br</p>
        </div>

        <div className={styles.icons}>
          <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
            <img src="/imagens_footer/instagram.png" alt="Instagram" />
          </a>

          <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
            <img src="/imagens_footer/facebook.png" alt="Facebook" />
          </a>

          <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">
            <img src="/imagens_footer/linkedin.png" alt="LinkedIn" />
          </a>
        </div>

      </div>

    </footer>
  )
}