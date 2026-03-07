import { Link } from "react-router-dom"
import styles from "./styles.module.css"

export default function LoginPage() {
    return (
        <div className={styles.background}>
            
            <div className={styles.LoginCard}>
                <h2>Login</h2>

                <p>Faça login para ter acesso ao <br/> pijama dos seus <span className={styles.sonhosStyle}>sonhos!</span></p>

                <div className={styles.inputEspan}>
                    <input className={styles.UsuarioEmail} placeholder="Usuário ou E-mail" />
                </div>
                
                <div className={styles.inputEspan}>
                    <input className={styles.Senha} placeholder="Senha" />
                </div>
                


            <button className={styles.BotaoEntrar}>ENTRAR</button>
            <Link className={styles.BotaoCadastro} to="cadastro">CADASTRE-SE</Link>
            </div>
            
        </div>
    )
}