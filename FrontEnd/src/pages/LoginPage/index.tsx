import { Link } from "react-router-dom"
import styles from "./styles.module.css"

export default function LoginPage() {
    return (
        <div className={styles.Container}>
            <div className={styles.LoginCard}>
                <h1>Login</h1>

                <p>Faça login para ter acesso ao <br/> pijama dos seus sonhos!</p>

                <textarea className={styles.UsuarioEmail} placeholder="Usuário ou E-mail" />
                <textarea className={styles.Senha} placeholder="Senha" />


            <button className={styles.BotaoEntrar}>ENTRAR</button>
            <Link className={styles.BotaoCadastro} to="./cadastro">CADASTRE-SE</Link>
            </div>
        </div>
    )
}