import { Link } from 'react-router-dom'
import styles from './styles.module.css'

export default function Header() {
  return (
    <header className={styles.container}>

      <Link to="./" className={styles.logo}>
        <img src="/imagens_header/logo.png" alt="Página inicial" />
      </Link>

      <div className={styles.catalogo}>
        <Link to="./pijamas">PIJAMAS</Link>
        <Link to="./pijamas?gender=FEMININO">FEMININO</Link>
        <Link to="./pijamas?gender=MASCULINO">MASCULINO</Link>
        <Link to="./pijamas?type=INFANTIL">INFANTIL</Link>
      </div>

      <div className={styles.icons}>
        <Link to="./favoritos">
          <img src="/imagens_header/favoritos.png" alt="Favoritos" />
        </Link>

        <Link to="./carrinho">
          <img src="/imagens_header/carrinho.png" alt="Carrinho" />
        </Link>

        <Link to="./login">
          <img src="/imagens_header/login.png" alt="Login" />
        </Link>
      </div>

    </header>
  )
}