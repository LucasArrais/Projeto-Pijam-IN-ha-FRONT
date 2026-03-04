import styles from './styles.module.css'

export default function Header() {
  return (
    <header className={styles.container}>

      <a href="#" className={styles.logo}>
        <img src="/imagens_header/logo.png" alt="Página inicial" />
      </a>

      <div className={styles.catalogo}>
        <a href="#">PIJAMAS</a>
        <a href="#">FEMININO</a>
        <a href="#">MASCULINO</a>
        <a href="#">INFANTIL</a>
      </div>
    </header>
  )
}