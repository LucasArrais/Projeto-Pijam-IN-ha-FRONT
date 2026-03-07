import { Link } from "react-router-dom"
import styles from "./styles.module.css"

export default function LoginPage() {
    return (
        <div className={styles.background}>
            
            <div className={styles.LoginCard}>
                <div className={styles.tituloEmerchan}>
                    <h2>Login</h2>

                    <p>Faça login para ter acesso ao <br/> pijama dos seus <span className={styles.sonhosStyle}>sonhos!</span></p>
                </div>
                

                <div className={styles.inputEspan}>
                    <input className={styles.input} placeholder="Usuário ou E-mail" />
                </div>
                
                <div className={styles.input}>
                    <input className={styles.Senha} placeholder="Senha" />
                </div>
                <a href="" className={styles.forgotPassword}>Esqueci minha senha</a>
            
            <div className={styles.buttonEbar}>
                <button className={styles.BotaoEntrar}>ENTRAR</button>
                <div className={styles.whiteBar}></div>
            </div>
            

            <Link className={styles.BotaoCadastro} to="/cadastro">CADASTRE-SE</Link>
            </div>
            
        </div>
    )
}