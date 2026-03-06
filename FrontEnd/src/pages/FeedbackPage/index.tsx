import { useState } from "react"
import { createFeedback } from "../../services/feedback"
import styles from "./styles.module.css"

export default function FeedbackPage() {

  const [nome, setNome] = useState("")
  const [descricao, setDescricao] = useState("")

  async function handleSubmit() {
    try {
      await createFeedback({
        nome,
        descricao,
      })

      alert("Feedback enviado!")

      setNome("")
      setDescricao("")

    } catch (error) {
      console.error(error)
      alert("Erro ao enviar feedback")
    }
  }

  return (
    <div className={styles.Container}>
      <div className={styles.Card}>
        <h1>Feedback</h1>

        <p>Fale um pouco sobre a sua experiência com a nossa loja</p>

        <input
          className={styles.NomeCompleto}
          placeholder="Nome Completo"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
        />

        <textarea
          className={styles.DescricaoDetalhada}
          placeholder="Descrição Detalhada"
          value={descricao}
          onChange={(e) => setDescricao(e.target.value)}
        />

        <button onClick={handleSubmit}>
          ENVIAR
        </button>

      </div>
    </div>
  )
}