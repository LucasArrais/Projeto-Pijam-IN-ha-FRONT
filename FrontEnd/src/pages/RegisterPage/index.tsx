import styles from "./styles.module.css"

export default function RegisterPage() {
    return(
        <>  
            <section className={styles.background}>
                <div className={styles.redBox}>
                    <h2>Registre-se</h2>

                    <div className={styles.allInputs}>
                        <input type="text" placeholder="Nome"/>
                        <input type="text" placeholder="Nome de Usuário"/>
                        <input type="email" placeholder="E-mail" />
                        <input type="password" placeholder="Senha"/>
                        <input type="password" placeholder="Confirmar senha"/>
                    </div>

                    <button>REGISTRAR</button>
                </div>
            </section>
        </>
    )
}