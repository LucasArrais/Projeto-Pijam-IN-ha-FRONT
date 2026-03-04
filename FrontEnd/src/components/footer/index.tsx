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

      <div className={styles.mapa}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1043.751543438504!2d-43.13374041397859!3d-22.90662412023382!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x99817e444e692b%3A0xfd5e35fb577af2f5!2sUFF%20-%20Instituto%20de%20Computa%C3%A7%C3%A3o!5e0!3m2!1spt-BR!2sbr!4v1769529664154!5m2!1spt-BR!2sbr"
          width="300"
          height="200"
          loading="lazy"
          title="Mapa"
        ></iframe>
      </div>

      <img   src="/imagens_footer/logo.png"   alt="Logo IN"   className={styles.footerLogo} />
    </footer>
  )
}