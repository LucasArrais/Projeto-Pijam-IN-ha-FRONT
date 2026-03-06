import styles from "./styles.module.css"

export default function FeedbackPage() {
    return (

        <div className={styles.Container}>
            <div className={styles.FeedbackCard}>
                <h1>Feedback</h1>

                <p>Fale um pouco sobre a sua <br/> experiência com a nossa loja!</p>

                <textarea className={styles.NomeCompleto} placeholder="Nome Completo"     readOnly/>
                <textarea className={styles.DescricaoDetalhada} placeholder="Descrição detalhada"     readOnly/>

                <button>ENVIAR</button>
            </div>
        </div>
    )
}