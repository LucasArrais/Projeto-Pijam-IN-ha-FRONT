import styles from './styles.module.css'

export default function Header() {
  return (
    <header className={styles.container}>

      <a href="#" className={styles.logo}>
        <img src="/imagens_header/logo.png" alt="Página inicial" />
      </a>
    </header>
  )
}